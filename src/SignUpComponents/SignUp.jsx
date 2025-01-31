import { CContainer } from "@coreui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/Logonetflix.png'

export const SignUp = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  //click show password
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.email && input.password) {
      alert("Account created successfully!");
      navigate("/sign-in");
    } else {
      alert("Please fill out all fields.");
    }
    setInput("")
  };

  return (
    <section className="mt-8">
     <CContainer>
          <img src={logo} alt="" className="w-[180px] shadow-2xl"/>
     <form
        onSubmit={handleSubmit}
        className="w-[450px] flex flex-col justify-center mx-auto align-middle bg-[rgba(0,0,0,0.7)] py-6 px-5 mt-10 shadow-2xl"
        style={{ borderRadius: "5px" }}
      >
        <h2 className="text-white mb-3">Sign Up</h2>
        <div>
          <input
            type="email"
            name="email"
            value={input.email}
            placeholder="Enter Your Email"
            onChange={handleChange}
            className="w-full text-[#fff] mb-3"
          />
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={input.password}
            placeholder="Enter Your Password"
            onChange={handleChange}
            className="w-full text-[#fff] mb-3"
          />
          <button type="button" onClick={()=> setShowPassword(!showPassword)} className="absolute top-1/2 right-2 transform -translate-1/2 text-white">{showPassword ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}</button>
        </div>
        <button
          type="submit"
          style={{ fontSize: "20px", borderRadius: "5px" }}
          className="bg-red-700 mt-2 capitalize text-white py-[10px] px-[130px] block w-full rounded-[8px]"
        >
          Sign Up
        </button>
        <p className="text-[20px] text-white text-center mt-2">
          Already have an account?
          <Link to="/sign-in" className="text-white" style={{ textDecoration: "none" }}>
            Sign In
          </Link>
        </p>
      </form>
     </CContainer>
    </section>
  );
};