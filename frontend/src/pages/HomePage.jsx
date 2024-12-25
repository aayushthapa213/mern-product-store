import ProductCard from "../components/sections/ProductCard.jsx";
import useProductStore from "../store/product.js";
import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("home", products);
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          className="mb-4"
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          <span className="text-4xl text-blue-600">Current Products 🚀</span>
        </Text>

        <SimpleGrid
          columns={[2, null, 3]} gap="40px"
          spacing={10}
          w={"full"}
        >
          {products.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </SimpleGrid>

        {products.lentth===0 && (
          <Text
          fontSize="xl"
          textAlign={"center"}
          fontWeight="bold"
          color="gray.500"
        >
          No products found 🥲
          <Link to={"/create"}>
            <Text
              as="span"
              color="blue.500"
              _hover={{ textDecoration: "underline" }}
            >
              Create a new product
            </Text>
          </Link>
        </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
