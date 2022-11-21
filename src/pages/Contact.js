import React from "react";
import Card from "../cards/Card";
import Image1 from "../images/d.jpg";

function Contact() {
  return (
    <Card
      img={Image1}
      title="Contact Page"
      description="You'll receive push notifications when your resume is viewed, 
      or when new jobs appear in your most recent search. Making it easy for you to jump right back into your job search."
    />
  );
}

export default Contact;
