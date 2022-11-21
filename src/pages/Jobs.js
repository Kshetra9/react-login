import React from "react";
import Card from "../cards/Card";
import Image1 from "../images/c.jpg";

function Jobs() {
  return (
    <Card
      img={Image1}
      title="Jobs Page"
      description="See how your salary compares to others with the same job title in your area. 
      Not only can you compare your salary, but you can also see what skills you are missing to earn more money."
    />
  );
}

export default Jobs;
