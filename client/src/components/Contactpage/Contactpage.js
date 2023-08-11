import React from "react";
import "../../pages/style.css";
import { Container } from "react-bootstrap";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
        For any inquiries, collaborations, or to learn more about our organization, please feel free to reach out to us. <br /> We value your input, ideas, and support in our mission to make a positive difference in the world. <br /> You can contact us via phone, email, or visit our website for more information. <br /> Our dedicated team is ready to assist you and provide any necessary assistance. <br /> We look forward to hearing from you and working together towards a brighter future.
        </p>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://www.instagram.com/ama_ji_/");
          }}
        >
          Say Hello
        </button>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Designed & Built by <span>AMA JI</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;
