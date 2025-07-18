import { RouterProvider } from "react-router-dom";
import { router } from "./routing/router";
import React from "react";
import NavBar from "../src/components/common/Navbar";
import Footer from "../src/components/common/Footer";

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
