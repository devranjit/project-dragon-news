
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {
  const {createNewUser, user, setUser} =useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    createNewUser(email,password)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      console.log(errorCode, errorMessage);
    });

   
  };
    return (
        <div className="min-h-screen flex justify-center items-center">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <h1 className="text-center font-bold text-lg"> Register your account </h1>

        <div className="form-control">

          <label className='label'>Your Name</label>
          <input name='name' type="text" className='input input-bordered ' placeholder='Your name' />

          <label htmlFor="" className='label'>Photo URl</label>
          <input name='photo' type="text" placeholder='Enter your photo url' className='input input-bordered' />

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>

        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <span className="text-center  font-semibold  py-2 text-gray-600 "> Already have an account? <Link to="/auth/login" className="text-red-500 font-bold">Login Now</Link> </span>
    </div>
    </div>
    );
};

export default Register;