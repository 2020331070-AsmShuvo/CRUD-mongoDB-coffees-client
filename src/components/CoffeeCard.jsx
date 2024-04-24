import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
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
  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = coffees.filter((cof) => cof._id != _id);
              setCoffees(remaining);

            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card bg-[#0c2d2e62] m-16 p-8 card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" className="w-36 ml-8 rounded-2xl " />
        </figure>
        <div className="space-y-4 py-8 px-10 flex justify-between items-center w-1/2 mx-auto">
          <div>
            <h2 className="card-title">Name : {name}</h2>
            <p>Qty : {quantity}</p>
            <p>Supplier : {supplier}</p>
            <p>Taste : {taste}</p>
          </div>
          <div className="flex justify-start">
            <div className="join join-vertical">
              <button className="btn text-white btn-primary join-item">
                View
              </button>
              <Link to={`/updateCoffee/${_id}`}>
                <button className="btn text-white btn-success join-item">
                  Edit
                </button>
              </Link>
              <button
                className="btn text-white btn-error join-item"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
