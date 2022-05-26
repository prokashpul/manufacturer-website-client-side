import React from "react";
import Banner from "../../Components/home/Banner/Banner";
import BusinessSummary from "../../Components/home/BusinessSummary/BusinessSummary";
import ClientReview from "../../Components/home/ClientReview/ClientReview";
import OurServices from "../../Components/home/OurServices/OurServices";
import Subscribe from "../../Components/home/subscribe/Subscribe";
import Tools from "../../Components/home/Tools/Tools";
import Title from "../../Utilities/PathTitle/PathTitle";

const Home = () => {
  Title("Pro Electric Tools Manufacturer");
  return (
    <div>
      <Banner></Banner>
      <OurServices></OurServices>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <ClientReview></ClientReview>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
