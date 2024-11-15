import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
const {userLogin, setUser} =useContext(AuthContext);
const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email, password)
  userLogin(email, password)
  .then(result => {
    const user = result.user;
    setUser(user);
  })
  .catch((error) => {
    alert(error.code);
    // ..
  });


}
    return (
        <div className="min-h-screen flex justify-center items-center">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <h1 className="text-center font-bold text-lg">Login your account </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <span className="text-center  font-semibold  py-2 text-gray-600 ">Dont have An Account? <Link to="/auth/register" className="text-red-500 font-bold">Register Now</Link> </span>
    </div>
    </div>
    );
};

export default Login;