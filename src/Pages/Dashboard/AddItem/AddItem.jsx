import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import React from "react";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
      });
  };
  console.log(errors);
  console.log(img_hosting_token);

  return (
    <div className="w-full px-10">
      <SectionTitle
        subHeading="What's New"
        heading="Add and item"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Recipe Name</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 80 })}
            className="input input-bordered w-full "
          />
        </div>

        {/* Select Menu */}
        <div className="flex my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">
                Category <span className="text-red-600">*</span>
              </span>
            </label>
            <select
              defaultValue={"Pick One"}
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick one</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Dessert</option>
              <option>Drinks</option>
            </select>
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text-alt">Recipe Details</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
            {...register("recipe", { required: true })}
          ></textarea>
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Item Thumbnail</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <input className="btn btn-sm my-4" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
