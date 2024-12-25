import { create } from "zustand";

const useProductStore = create((set) => {
  return {
    products: [],
    setProducts: (products) => {
      set({ products });
    },
    createProduct: async (newProduct) => {
      if (!newProduct.name || !newProduct.image || !newProduct.price) {
        return { success: false, message: "All the fields are required!" };
      }
      const res = await fetch("/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();
      set((state) => {
        return { products: [...state.products, data] };
      });
      return { success: true, message: "Product created successfully!" };
    },

    fetchProducts: async () => {
      const res = await fetch("/products");
      const data = await res.json();
      console.log("hello", data.data);
      set({ products: data.data });
    },

    deleteProduct: async (pid) => {
      const res = await fetch(`/products/${pid}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!data.success) return { success: false, message: data.message };
      //updates the ui immediately
      set((state) => ({
        products: state.products.filter((product) => product._id !== pid),
      }));
      return { success: true, message: data.message };
    },

    updatedProduct: async (pid, updateProduct) => {
      const res = await fetch(`/products/${pid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      });
      const data = await res.json();
      if (!data.success) return { success: false, message: data.message };
      set((state) => {
        return {
          products: state.products.map((product) =>
            product._id === pid ? data.data : product
          ),
        };
      });
      return { success: true, message: "Product Updated Successfully!" };
    },
  };
});

export default useProductStore;
