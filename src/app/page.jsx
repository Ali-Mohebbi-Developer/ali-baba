import React from "react";
import Header from "./components/Header";
import SelectOption from "./components/SelectOption/page";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <div className="px-32">
        <SelectOption />
      </div>
      <Footer />
    </div>
  );
};

export default page;
