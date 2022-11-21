import React from "react";
import Card from "../cards/Card";
import Image1 from "../images/a.jpg";
function Home() {
  const data = [{ imagepath: Image1, pageName: "Home Page" }];

  const dataList = data.map((d) => (
    <Card
      img={d.imagepath}
      title={d.pageName}
      description="Browse SimplyHired for jobs, view local and national salary information, 
      discover companies, and learn about the job market in a specific city."
    />
  ));
  return <div> {dataList} </div>;
}

export default Home;
