import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
          const password = e.target.password.value;

          //user login from fb
          loginUser(email, password)
          .then(result => {
            // console.log(result)

            //update last login time
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = {email, lastSignInTime}

            fetch(`http://localhost:5000/users`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data => {
                // console.log('sign in info updated in db', data)
            })

          })
          .catch(error => {
            console.log(error)
          })
  
    }
    return (
        <div className="hero bg-base-200 mt-10">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 w-2/3 mx-auto">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              
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
                <button className="btn  bg-[#392929] text-white">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;