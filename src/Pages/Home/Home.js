import React from "react";
import Banner from "../../Components/home/Banner/Banner";
import BusinessSummary from "../../Components/home/BusinessSummary/BusinessSummary";
import OurServices from "../../Components/home/OurServices/OurServices";
import Tools from "../../Components/home/Tools/Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurServices></OurServices>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
    </div>
  );
};

export default Home;
