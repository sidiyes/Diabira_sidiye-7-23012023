import React from "react";
import "./Home.css";

import apartments from "../../api/data.json";
import Banner from "../../components/Banner/Banner";
import BannerImg from "../../images/Home_banner.png";
import Thumb from "../../components/Thumb/Thumb";

const Home = () => {
  return (
    <main>
      <Banner
        img={BannerImg}
        alt="paysage"
        title="Chez vous, partout et ailleurs"
      />
      <section className="galery">
        {apartments.map((apartment) => {
          return (
            <Thumb
              key={apartment.id}
              image={apartment.cover}
              title={apartment.title}
              id={apartment.id}
            />
          );
        })}
      </section>
    </main>
  );
};
export default Home;
