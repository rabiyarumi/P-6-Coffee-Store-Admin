import { useState } from "react";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {

  const [allCoffee, setAllCoffee] = useState(coffee)
  console.log(allCoffee)

  const { _id, name, quantity, supplier, taste, category, details, photo } =
    allCoffee;

  const handleDelete = (_id) => {
    console.log(_id);

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
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              //update the UI too
              // const deletedCoffee =  allCoffee.find((coffee) => coffee._id === _id);
              // setAllCoffee(coffee - deletedCoffee);
            }

          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body flex-row">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{taste}</p>
            <p>{details}</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="btn btn-sm btn-outline">see</p>
            <p className="btn btn-sm btn-outline">edt</p>
            <p
              onClick={() => handleDelete(_id)}
              className="btn btn-sm btn-error"
            >
              dlt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
