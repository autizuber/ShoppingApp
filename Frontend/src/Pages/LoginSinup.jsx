import React, { useState } from "react";

const LoginSinup = () => {
  const Url = "http://localhost:4000";
  const [state, setState] = useState("Sign Up");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Login = async () => {
    console.log("Login Function", formData);
    let responseData;
    await fetch(`${Url}/login`, {
      method: "POST",
      headers: {
        Action: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  const SignUp = async () => {
    console.log("Signup Function", formData);
    let responseData;
    await fetch(`${Url}/signup`, {
      method: "POST",
      headers: {
        Action: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.message);
    }
  };

  const ContinueClick = (e) => {
    e.preventDefault();
    state === "Login" ? Login() : SignUp();
  };

  return (
    <div className="bg-gradient-to-b from-[#fde7e7] to-[#fffafa] w-full lg:h-[90vh] h-[65vh] flex justify-center items-center">
      <div className="w-96 md:w-[40vw] shadow-lg text-black rounded-md overflow-hidden">
        <form className="card-body bg-white">
          <h1 className="py-2 font-semibold text-2xl capitalize">{state}</h1>
          {state === "Sign Up" ? (
            <div className="form-control pt-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input ring-1 ring-zinc-400 bg-white"
                required
                value={formData.name}
                onChange={handelChange}
              />
            </div>
          ) : (
            <></>
          )}
          <div className="form-control pt-3">
            <input
              type="email"
              name="email"
              placeholder="Email Adders"
              className="input ring-1 ring-zinc-400 bg-white"
              required
              value={formData.email}
              onChange={handelChange}
            />
          </div>
          <div className="form-control pt-3">
            <input
              type="password"
              placeholder="password"
              className="input ring-1 ring-zinc-400 bg-white"
              required
              name="password"
              value={formData.password}
              onChange={handelChange}
            />
          </div>
          <div className="form-control mt-6">
            <button
              className="btn btn-error text-white"
              onClick={ContinueClick}
            >
              Continue
            </button>
          </div>
          {state === "Sign Up" ? (
            <p className="text-sm font-semibold py-3">
              Already have an account?
              <span
                className="text-[#f78686] ml-2 cursor-pointer"
                onClick={() => setState("Login")}
              >
                Login
              </span>
            </p>
          ) : (
            <p className="text-sm font-semibold py-3">
              Creat an account?
              <span
                className="text-[#f78686] ml-2 cursor-pointer"
                onClick={() => setState("Sign Up")}
              >
                Click hear
              </span>
            </p>
          )}

          <div className="flex gap-2 items-center justify-center">
            <input
              type="checkbox"
              required
              className="checkbox checkbox-xs ring-1 ring-zinc-700 md:mt-0 -mt-2"
            />
            <p className="text-[12px] font-semibold">
              By continuing, i agary to terms of user & privacy policy
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSinup;
