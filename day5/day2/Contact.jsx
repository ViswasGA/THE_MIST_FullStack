import React from "react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import gh from "../assets/images/r.jpg";
export default function Contact() {
  return (
    <center>
      <div
        style={{
          backgroundColor: "grey",
          maxWidth: "500px",
          overflow: "hidden",
          backgroundImage: `url(${gh})`,
        }}
      >
        <div>
          <div
            style={{
              backgroundColor: "InfoText",
              color: "white",
              borderRadius: "lg",
              margin: "16px",
              padding: "16px",
            }}
          >
            <div>
              <h2>Contact</h2>
              <p>Fill up the form below to contact</p>
              <div style={{ paddingTop: "20px" }}>
                <button
                  style={{
                    height: "38px",
                    width: "200px",
                    border: "none",
                    backgroundColor: "transparent",
                    color: "#DCE2FF",
                    cursor: "pointer",
                  }}
                >
                  <MdPhone color="#1970F1" size="20px" />
                  <span style={{ marginLeft: "10px" }}>+91-988888888</span>
                </button>
              </div>
              <div style={{ paddingTop: "20px" }}>
                <button
                  style={{
                    height: "48px",
                    width: "200px",
                    border: "none",
                    backgroundColor: "transparent",
                    color: "#DCE2FF",
                    cursor: "pointer",
                  }}
                >
                  <MdEmail color="#1970F1" size="20px" />
                  <span style={{ marginLeft: "10px" }}>hello@abc.com</span>
                </button>
              </div>
              <div style={{ paddingTop: "20px" }}>
                <button
                  style={{
                    height: "48px",
                    width: "200px",
                    border: "none",
                    backgroundColor: "transparent",
                    color: "#DCE2FF",
                    cursor: "pointer",
                  }}
                >
                  <MdLocationOn color="#1970F1" size="20px" />
                  <span style={{ marginLeft: "10px" }}>Karnavati, India</span>
                </button>
              </div>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <MdFacebook size="28px" />
              </button>
              <button
                style={{
                  backgroundColor: "violet",
                  border: "none",
                  //   cursor: "pointer",
                }}
              >
                <BsGithub size="28px" />
              </button>
              <button
                style={{
                  backgroundColor: "violet",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <BsDiscord size="28px" />
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "grey",
            borderRadius: "lg",
            margin: "16px",
            padding: "16px",
            color: "#0B0E3F",
          }}
        >
          <div>
            <div>
              <label htmlFor="name">Your Name</label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <BsPerson color="gray.800" size="20px" />
                <input
                  type="text"
                  id="name"
                  style={{ marginLeft: "40px", width: "300px" }}
                />
              </div>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <label htmlFor="email">Mail</label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <MdOutlineEmail color="gray.800" size="20px" />
                <input
                  type="text"
                  id="email"
                  style={{ marginLeft: "40px", width: "300px" }}
                />
              </div>
            </div>
            <div style={{ paddingTop: "40px" }}>
              <label htmlFor="message">Message</label>
              <div>
                <textarea
                  id="message"
                  style={{ borderColor: "gray.300", width: "350px" }}
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div style={{ float: "right", paddingTop: "20px" }}>
              <button
                style={{
                  backgroundColor: "#0D74FF",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  padding: "10px 20px",
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}
