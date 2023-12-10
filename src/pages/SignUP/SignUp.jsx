import { Link } from "react-router-dom";
import authenticatoionIMG from "../../assets/others/authentication2.png";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

const SignUp = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-signUp-BG">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={authenticatoionIMG} alt="" />
          </div>

          <div className="card  w-10/12 max-w-sm ">
            <h3 className="text-4xl font-bold text-center uppercase">
              Sign Up
            </h3>
            <form className="card-body">
              <div className="form-control">
                <label className="label ">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="email"
                  placeholder="Type Here"
                  className="input input-bordered"
                  required
                />
                <label className="label ">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white bg-[#D1A054]">
                  Sign Up
                </button>

                <p className="text-center mt-2 text-[#D1A054]">
                  Already registered?{" "}
                  <Link className="font-bold" to={"/login"}>
                    Go to log in
                  </Link>
                </p>
              </div>
            </form>

            <div className="text-center">
              <p className="text-xl mb-3">Or sign up with</p>
              <div className="flex justify-center space-x-5">
                <span className="  border-black border-2 p-2 rounded-full">
                  <FaFacebookF></FaFacebookF>
                </span>
                <span className="  border-black border-2 p-2 rounded-full">
                  <FaGoogle></FaGoogle>
                </span>
                <span className="  border-black border-2 p-2 rounded-full">
                  <FaGithub></FaGithub>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
