import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const {
    _id,
    name,
    quantity,
    supplier,
    taste,
    category,
    CategoryDetails,
    photo,
  } = coffee;

  const handleUpdatedCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const CategoryDetails = form.details.value;
    const photo = form.photo.value;
    const updateCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      CategoryDetails,
      photo,
    };
    console.log(updateCoffee);

    //===== send data to server====
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          alert("Coffee updated successfully");
        }
      });
  };

  return (
    <div>
      <div className="p-20 m-10 bg-[#d820e20a]">
        <h2 className="text-3xl font-extrabold mx-auto text-center my-2 text-green-900">
          UPDATE COFFEE {name}
        </h2>
        <form onSubmit={handleUpdatedCoffee}>
          <div className=" rounded-xl mb-8">
            <div className="md:flex md:justify-evenly">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Coffee Name "
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Available Qty</span>
                </div>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Available Qty "
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </label>
            </div>
          </div>
          {/* second row */}
          <div className=" rounded-xl mb-8">
            <div className="md:flex md:justify-evenly">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Supplier</span>
                </div>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Supplier Name "
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Taste</span>
                </div>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Coffee taste "
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </label>
            </div>
          </div>
          {/* 3rd row */}
          <div className=" rounded-xl mb-8">
            <div className="md:flex md:justify-evenly">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Category</span>
                </div>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Category Name "
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Category Details</span>
                </div>
                <input
                  type="text"
                  name="details"
                  defaultValue={CategoryDetails}
                  placeholder="Category Details"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </label>
            </div>
          </div>
          {/* last row  */}
          <div className=" rounded-xl mb-8">
            <div className="md:flex md:justify-evenly">
              <label className="form-control w-2/3">
                <div className="label">
                  <span className="label-text">Photo URL</span>
                </div>
                <input
                  type="text"
                  name="photo"
                  placeholder="PHOTO URL"
                  category={photo}
                  defaultValue={photo}
                  className="input input-bordered input-primary w-full "
                />
              </label>
            </div>
          </div>
          <div className="mx-auto text-center">
            <input type="submit" value="Update Coffee" className="btn btn-wide " />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
