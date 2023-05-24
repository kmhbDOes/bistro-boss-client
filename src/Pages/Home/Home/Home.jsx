import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CellPhone from "../CellPhone";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import CoverHome from "../CoverHome/CoverHome";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <CoverHome></CoverHome>
      <PopularMenu></PopularMenu>
      <CellPhone></CellPhone>
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
