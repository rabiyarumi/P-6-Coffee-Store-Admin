import Swal from 'sweetalert2'


const AddCoffee = () => {

  const handleAddCoffee = e => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {name, quantity, supplier, taste, category, details, photo}

    //send data to server
    fetch("http://localhost:5000/coffee", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Coffee Added Successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })

  }


  return (
    <div className="my-10 w-3/4 mx-auto bg-[#F4F3F0] p-10">
      <h2 className="text-5xl italic text-center">Add New Coffee</h2>
      <p className="text-center  mx-auto my-7">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleAddCoffee}>
        {/* 1st row */}
        <div className="md:flex justify-between gap-8 lg:gap-12">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text ">Name</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="input input-bordered input-sm w-full border-none"
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text ">Quantity</span>
            </div>
            <input
              type="text"
              name="quantity"
              placeholder="Enter coffee chef"
              className="input input-bordered input-sm w-full  border-none"
            />
          </label>
        </div>
         {/* 2nd row */}
        <div className="md:flex justify-between gap-8 lg:gap-12">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text ">Supplier</span>
            </div>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="input input-bordered input-sm w-full  border-none"
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text ">Taste</span>
            </div>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee Taste"
              className="input input-bordered input-sm w-full  border-none"
            />
          </label>
        </div>
         {/* 3rd row */}
        <div className="md:flex justify-between gap-8 lg:gap-12">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text ">Category</span>
            </div>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee Category"
              className="input input-bordered input-sm w-full  border-none"
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text ">Details</span>
            </div>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee Details"
              className="input input-bordered input-sm w-full border-none"
            />
          </label>
        </div>
         {/* 4th row */}
        <div className=" ">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text ">Photo</span>
            </div>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered input-sm w-full max-w-full border-none"
            />
          </label>
          
        </div>
      <input type="submit" value="Add Coffee" className="btn btn-block btn-sm mt-6 bg-[#D2B48C] border-t-[#331A15]"/>
      </form>
      {/* Button */}
    </div>
  );
};

export default AddCoffee;
