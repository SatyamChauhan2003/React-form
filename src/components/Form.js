import React from "react";
import "./Form.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Form = () => {
  return (
    <>
      <div className="main">
        <img src="logo512.png" alt="React logo" width="120px" />
        <p className="text-center">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit, sed do eiusmod
        </p>
        <div className="container mb-5">
          <div className="row mt-5 ">
            <div className="col-6" style={{ borderBottom: "4px solid brown" }}>
              <h6 style={{ marginLeft: "30%" }}>Login</h6>
            </div>

            <div className="col-6">
              <h6 style={{ marginLeft: "30%" }}>Signup</h6>
            </div>
          </div>

          <input
            type="email"
            name="email"
            className="mt-5"
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            className="mt-3"
            placeholder="Password"
          />
          <input type="button" name="btn" value="LOGIN" className="mt-4" />

          <h6>Forgot Password?</h6>
          <p className="text-center mt-4">or login with</p>

          <div className="text-center">
            <GoogleIcon
              color="primary"
              style={{
                marginRight: "10%",
                border: "1px solid gray",
                borderRadius: "50%",
              }}
            />
            <FacebookIcon
              color="primary"
              style={{
                marginRight: "10%",
                border: "1px solid gray",
                borderRadius: "50%",
              }}
            />
            <TwitterIcon
              color="primary"
              style={{ border: "1px solid gray", borderRadius: "50%" }}
            />
          </div>
          <p className="mt-4 text-center">
            Don't have an account?
            <span className="text-danger">Create new now!</span>
          </p>
          <p className="mt-4 text-center">
            By signing up, you are agree with our
            <span
              className="text-danger"
              style={{ borderBottom: "1px solid brown" }}
            >
              Terms & Conditions
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Form;
