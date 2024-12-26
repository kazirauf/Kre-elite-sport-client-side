/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../Redux/Features/Auth/authAPI";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { selectCurrentUser, setUser } from "../Redux/Features/Auth/authSlice";
import "./sign.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const userInfo = { email, password };
      const res = await login(userInfo).unwrap();

      console.log(res);

      dispatch(setUser({ user: res?.data, token: res?.token }));

      toast.success("Logged in successfully");

      navigate("/");
    } catch (err: any) {
      if (err.data.success === false) {
        toast.error(err.data.message);
      }
    }
  };

  if (user) {
    return <Navigate to={"/"} />;
  }

  // Handlers to set demo credentials
  const setDemoUser = () => {
    setEmail("jack@gmail.com");
    setPassword("123");
  };

  const setDemoAdmin = () => {
    setEmail("kllu@mallu.com");
    setPassword("123");
  };

  return (
    <div className="container">
      <div className="flex justify-center">
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={handleSubmit} action="#" className="sign-in-form">
              <p>
                Demo Admin & User Credential
                <span className="text-blue-500 font-bold text-lg ml-2">
                  Click Now
                </span>
              </p>
              <div className="flex gap-5 mb-10">
                <button
                  type="button"
                  onClick={setDemoUser}
                  className="py-2 px-5 shadow-lg rounded bg-blue-400 hover:bg-blue-600 text-white"
                >
                  <h1 className="text-xl font-bold mb-3">User</h1>
                  <div className="text-start">
                    <p className="text-base">Email: jack@gmail.com</p>
                    <p className="text-base">Pass: 123</p>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={setDemoAdmin}
                  className="py-2 px-5 shadow-lg rounded bg-blue-400 hover:bg-blue-600 text-white"
                >
                  <h1 className="text-xl font-bold mb-3">Admin</h1>
                  <div className="text-start">
                    <p className="text-base">Email: kllu@mallu.com</p>
                    <p className="text-base">Pass: 123</p>
                  </div>
                </button>
              </div>

              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your email address"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Your password"
                />
              </div>
              <button
                disabled={isLoading}
                type="submit"
                className="mt-5 px-20 py-2 tracking-wider bg-black text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-black font-bold transition-colors duration-300 transform"
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Already have an account? Sign in to log into your account and join
              us!
            </p>
            <Link
              to={"/registration"}
              className="btn transparent"
              id="sign-up-btn"
            >
              sign up
            </Link>
          </div>
          <img
            src="https://raw.githubusercontent.com/sefyudem/Sliding-Sign-In-Sign-Up-Form/955c6482aeeb2f0e77c1f3c66354da3bc4d7a72d/img/log.svg"
            className="image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
