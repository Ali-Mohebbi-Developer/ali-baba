"use client";
import React from "react";
import DomesticFlight from "./DomesticFlight/page";
import InternationalFlight from "./InternationalFlight/page";
import Bus from "./Bus/page";
import Hotel from "./Hotel/page";
import Tour from "./Tour/page";
import Train from "./Train/page";
import Villa from "./Villa/page";

const HomePage = ({ contentType }) => {
  const renderContent = () => {
    switch (contentType) {
      case "پرواز داخلی":
        return <DomesticFlight />;
      case "پرواز خارجی":
        return <InternationalFlight />;
      case "قطار":
        return <Train />;
      case "اتوبوس":
        return <Bus />;
      case "تور":
        return <Tour />;
      case "هتل":
        return <Hotel />;
      case "ویلا و اقامتگاه":
        return <Villa />;
    }
  };
  return <div>{renderContent()}</div>;
};

export default HomePage;
