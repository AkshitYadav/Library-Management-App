import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Homepage } from "./layouts/HomePage/HomePage";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";

export const App =() => {
  return (
    <>
      <Navbar />
      {/* <Homepage /> */}
      <SearchBooksPage />
      <Footer />
    </>
  );
}
