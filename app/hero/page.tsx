import React from "react";
import Image from "next/image";
import background from "../image/header-bg.jpg.webp";
import "../style/hero.css";
const Hero = ()=>{
    return(
        <main className="main-container">
        <div className="relative-container">
            <div className="background-image">
                <Image
                    src={background}
                    alt="background-image"
                    className="background-image"
                    width={500}
                    height={500}
                />
            </div>
            <section>
                {/* <h1 className="section-heading">You Can Feel the Energy</h1>
                <br />
                <h1 className="section-title">
                    Start Your Day with
                    <br />
                    a black Coffee
                </h1> */}
                <h1 className="section-heading">You Can feel the Energy</h1>
                <h2 className="section-title">Start Your Day With </h2>
                <p className="section-title">a Black Coffee</p>
                <button className="buy-button">
                    <a href="#">Buy Now</a>
                </button>
            </section>
        </div>
    </main>
    
    )
}

export default Hero
