import { Link } from "react-router-dom";
import authenticatoionIMG from "../../assets/others/authentication2.png";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

import { useContext } from "react";
import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setdisable] = useState(true);

  const { logIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    logIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleCaptchaValided = () => {
    const user_captcha_valided = captchaRef.current.value;
    if (validateCaptcha(user_captcha_valided)) {
      setdisable(false);
    } else {
      setdisable(true);
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-signUp-BG">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={authenticatoionIMG} alt="" />
          </div>

          <div className="card  w-10/12 max-w-sm ">
            <h3 className="text-4xl font-bold text-center uppercase">Login</h3>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label ">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Type here..."
                  name="email"
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
                  placeholder="Type here..."
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  ref={captchaRef}
                  className="input input-bordered"
                  name="captcha"
                  type="text"
                  placeholder="Type the Captcha above"
                />
                <br />
                <button
                  onClick={handleCaptchaValided}
                  className="btn  btn-neutral btn-xs"
                >
                  Valided
                </button>
              </div>

              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary text-white bg-[#D1A054]"
                  type="submit"
                  value="Login"
                />

                <p className="text-center mt-2 text-[#D1A054]">
                  New here?{" "}
                  <Link className="font-bold" to={"/signup"}>
                    Create a New Account
                  </Link>
                </p>
              </div>
            </form>

            <div className="text-center">
              <p className="text-xl mb-3">Or login with</p>
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

export default Login;
