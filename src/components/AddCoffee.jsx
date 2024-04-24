import React from "react";

const AddCoffee = () => {

  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const CategoryDetails = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {name, quantity, supplier, taste, category, CategoryDetails, photo};
    console.log(newCoffee);

    //===== send data to server====
    fetch('http://localhost:5000/coffee',{
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            alert("User added successfully");
        }
    })
  };



  return (
    <div className="p-20 m-10 bg-[#d820e20a]">
      <h2 className="text-3xl font-extrabold mx-auto text-center my-2 text-green-900">
        ADD A COFFEE
      </h2>
      <form onSubmit={handleAddCoffee}>
        <div className=" rounded-xl mb-8">
          <div className="md:flex md:justify-evenly">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                name="name"
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
                className="input input-bordered input-primary w-full "
              />
            </label>
          </div>
        </div>
        <div className="mx-auto text-center">
          <input type="submit" value="Add Coffee" className="btn btn-wide " />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;

// https://i.ibb.co/C8T7BV1/6.png