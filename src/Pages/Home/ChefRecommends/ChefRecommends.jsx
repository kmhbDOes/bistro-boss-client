import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const ChefRecommends = () => {
  return (
    <section>
      <SectionTitle
        heading="Chef Recommends"
        subHeading="Should Try"
      ></SectionTitle>

      {/* Cards */}
      <div className="card w-96 bg-base-100 shadow-xl rounded-lg">
        <img src={slide3} className="" alt="food" />

        <div className="card-body text-center">
          <h2 className=" text-center">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              View Full Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
