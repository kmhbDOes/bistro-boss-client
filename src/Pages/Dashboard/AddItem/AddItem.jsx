import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import React from "react";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <div className="w-full px-10">
      <SectionTitle
        subHeading="What's New"
        heading="Add and item"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Recipe Name</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 80 })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        {/* Select Menu */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Category*</span>
          </label>
          <select
            {...register("category", { required: true })}
            className="select select-bordered"
          >
            <option disabled selected>
              Pick one
            </option>
            <option>Pizza</option>
            <option>Soup</option>
            <option>Salad</option>
            <option>Dessert</option>
            <option>Drinks</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            {...register("price", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your bio</span>
            <span className="label-text-alt">Alt label</span>
          </label>
          <label className="label">
            <span className="label-text-alt">Recipe Details</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
            {...register("details", { required: true })}
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Item Thumbnail</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <input className="btn btn-sm my-4" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
