import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/sections/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import { Toaster } from "@/components/ui/toaster"


const App = () => {
  return (
    <Box minH={"100vh"}>
      <Navbar/>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
    </Box>
  );
};

export default App;
