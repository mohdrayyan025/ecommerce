import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:mohdrayyan8010@gmail.com">
        <Button>mohdrayyan8010@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;