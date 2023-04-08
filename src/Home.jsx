import React from "react";
import Card from "./Card";
import data from "./Data";
import Slider from "./Slider";
const Home = () => {
  return (
    <>
      {data.map((val, ind) => {
        return (
          <>
            <Card
              id={ind}
              imgsrc={val.imgsrc}
              name={val.name}
              price={val.price}
              discription={val.description}
            />
          </>
        );
      })}
    </>
  );
};

export default Home;
