import useProductStore from "@/store/product";
import {
  Box,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toaster } from "@/components/ui/toaster";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { deleteProduct, updatedProduct } = useProductStore();
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
        duration: 3000,
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
        duration: 3000,
      });
    }
  };

  const [updateProduct, setUpdateProduct] = useState(product);
  const handleUpdateProduct = async (pid, updateProduct) => {
    const {success, message} = await updatedProduct(pid, updateProduct);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
        duration: 3000,
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
        duration: 3000,
      });
    }
    handleClose();
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
      <Image src={product.image} alt={product.name} h={48} w="full" />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight="bold" fontSize="xl" className="text-gray-200" mb={4}>
          ${product.price}
        </Text>
        <HStack spacing={2}>
          <FaEdit
            className="cursor-pointer"
            colorScheme="blue"
            onClick={handleShow}
          />
          <MdDelete
            className="cursor-pointer"
            colorScheme="red"
            onClick={() => handleDeleteProduct(product._id)}
          />
        </HStack>
      </Box>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={updateProduct.name}
              onChange={(e) =>
                setUpdateProduct({ ...updateProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={updateProduct.price}
              onChange={(e) =>
                setUpdateProduct({ ...updateProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image"
              name="image"
              value={updateProduct.image}
              onChange={(e) =>
                setUpdateProduct({ ...updateProduct, image: e.target.value })
              }
            />
          </VStack>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleUpdateProduct(product._id, updateProduct);
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </Box>
  );
};

export default ProductCard;
