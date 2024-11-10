import React from "react";
import "../style/about.css";
import img1 from "../image/download (1).jpeg";
import Image from "next/image";
import espresso from "../image/photo-1509042239860-f550ce710b93.jpeg";
import americano from "../image/OIP.jpeg";
import mocha from "../image/mocha.jpeg";

function About() {
  return (
    <section className="section-container">
    <div>
        <div className="container">
            <h1 className="section-heading">
                What kind of Coffee we serve for you
            </h1>
            <p className="section-subheading">
                Who are in extremely love with eco friendly system.
            </p>
        </div>
    </div>
    <div className="grid-container">
        <div className="coffee-card">
            <Image
                src={img1}
                alt="Cappuccino"
                width={300}
                height={300}
                className="coffee-image"
            />
            <h5 className="coffee-name">Cappuccino</h5>
        </div>

        <div className="coffee-card">
            <Image
                src={espresso}
                alt="Espresso"
                width={300}
                height={300}
                className="coffee-image"
            />
            <h5 className="coffee-name">Espresso</h5>
        </div>

        <div className="coffee-card">
            <Image
                src={espresso}
                alt="Americano"
                width={300}
                height={300}
                className="coffee-image"
            />
            <h5 className="coffee-name">Americano</h5>
        </div>

        <div className="coffee-card">
            <Image
                src={espresso}
                alt="Irish Coffee"
                width={300}
                height={300}
                className="coffee-image"
            />
            <h5 className="coffee-name">Irish Coffee</h5>
        </div>

        <div className="coffee-card">
            <Image
                src={americano}
                alt="Latte"
                width={300}
                height={300}
                className="coffee-image"
            />
            <h5 className="coffee-name">Latte</h5>
        </div>

        <div className="coffee-card">
            <Image
                src={mocha}
                alt="Mocha"
                width={300}
                height={300}
                className="coffee-image"
            />
            <h5 className="coffee-name">Mocha</h5>
        </div>
    </div>
</section>

  );
}
export default About;
