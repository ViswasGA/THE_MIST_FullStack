import { useState } from "react";
import "../../assets/Css/Registration.css";
import { Link } from "react-router-dom";
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div id="login_container">
      <div className="signup-form">
        <h2>Have an account?</h2>
        {/* <button onClick={() => console.log("Navigate to login")}>Log in</button> */}
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">
              <Link to="/" className="nav">
                Sign up
              </Link>
            </button>
          </div>
          <div className="login">
            <p>Already a User? </p>
            <Link to="/">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
