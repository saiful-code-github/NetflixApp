import { CContainer } from "@coreui/react";
import { useState } from "react";
 import { Link, useNavigate} from "react-router-dom";
 import logo from '../assets/Logonetflix.png'

export const SingIn = () =>{
    const [input, setInput] = useState({
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
    const handleChange = (e) => {
        const {value, name} = e.target;
      setInput((prevData)=>({
        ...prevData,
        [name] : value
      }))
    };
    //hanlde submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const savedUser = JSON.parse(localStorage.getItem("user"));//get localstrog
        localStorage.setItem("user", JSON.stringify({ email: "example@gmail.com", password: "mypassword" }));
        if(savedUser.email === input.email && savedUser.password === input.password) {
            alert("Login successful!");
            navigate('/home')
        }else {
            alert("Invaild password");
        }
           // Clear both input fields
        setInput({
            email: "",
            password: ""
        });
    }
    return (
         <section className="mt-8">
              <CContainer>
                <img src={logo} alt="" className="w-[180px] shadow-2xl"/>
                    <form onSubmit={handleSubmit} className="w-[450px] flex flex-col justify-center mx-auto align-middle bg-[rgba(0,0,0,0.7)] py-6 px-5 mt-10 shadow-2xl" style={{borderRadius: "5px"}}>
                        <h2 className="text-white mb-3">Sign In</h2>
                        <div>
                            <label></label>
                            <input type="email" name="email" value={input.input} placeholder="Enter Your Email" onChange={handleChange} className="w-full text-[#fff] mb-3"/>
                        </div>
                        <div className="relative">
                            <label></label>
                            <input type={showPassword ? "text" : "password"} name="password" value={input.password} placeholder="Enter Your Password" onChange={handleChange} className="w-full text-white mb-3"/>
                            <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute outline-0 top-1/2 right-2 transform -translate-y-1/2 text-white"
                            >
                            {showPassword ? <i className="bi bi-eye"> </i> : <i className="bi bi-eye-slash"></i> }
                            </button>
                        </div>
                         <button type="submit" style={{fontSize: "20px",borderRadius: '5px'}} className="bg-red-700 mt-2 capitalize text-white py-[10px] px-[145px] block w-full rounded-[8px]">Sing In</button>
                            <p className=" text-[20px] text-white text-center mt-2">Don't have an account? <Link to="/sign-up" className=" text-white" style={{textDecoration: "none"}}>Sign Up</Link></p>
                    </form>
              </CContainer>
         </section>
    )
}