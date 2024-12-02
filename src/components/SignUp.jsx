import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = (e) => {
      e.preventDefault()
      const name = e.target.name.value;
      const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
        .then(result => {
          // console.log("user created to fb",result.user)
          const createdAt = result?.user?.metadata?.creationTime;
          const newUser = {name, email, createdAt};
            //save new user to the database
            fetch('https://coffee-store-server-chi-lime.vercel.app/users', {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
              // console.log("user created to db",data)
              if(data.insertedId){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "You have Signed Up Successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            })
        })
        .catch(error => {
            console.log("signUp error", error)
        })

        
    }


    return (
        <div className="hero bg-base-200 mt-10">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6 w-2/3 mx-auto">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-[#392929] text-white">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;