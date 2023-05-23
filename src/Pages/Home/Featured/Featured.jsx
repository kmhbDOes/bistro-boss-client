import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check It Out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>August 20, 2029</p>
          <p className="uppercase">Where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            quasi commodi quis optio distinctio recusandae illum suscipit
            impedit nemo quia dolores sapiente unde esse exercitationem cum sed
            quod repellat mollitia error, dolore, voluptatem repudiandae
            tenetur. Placeat et doloremque velit deserunt eius, vero debitis
            soluta aliquam est autem! Doloremque, commodi repudiandae?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
