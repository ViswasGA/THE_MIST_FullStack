import { useRef } from "react";
import "../../assets/Css/Login.css";
import event from "../../assets/images/r.jpg";
import { Link } from "react-router-dom";
import { Button } from "react-scroll";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    if (email.includes("admin")) {
      navigate("/sidebar");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="image" style={{ backgroundImage: `url(${event})` }}>
      <center>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="form-input"
                ref={emailRef}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                ref={emailRef}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="form-input"
                ref={passwordRef}
                required
              />
            </div>
            <button type="submit" className="form-button">
              <Link to="/home" className="reg">
                login
              </Link>
            </button>
            <p>Don't have an Account?</p>
            <Link to="/register">Sign up</Link>
          </form>
        </div>
      </center>
    </div>
  );
}

export default LoginForm;
