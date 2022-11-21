import React from "react";
import Card from "../cards/Card";
import Image1 from "../images/b.jpg";

function About() {
  return (
    <Card
      img={Image1}
      title="About Page"
      description="Easily apply to multiple jobs with one click! 
      Quick Apply shows you recommended jobs based off your most recent search and allows you to apply to 25+ jobs in a matter of seconds!"
    />
  );
}

export default About;
