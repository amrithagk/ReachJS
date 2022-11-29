import React from "react";
// import from css
import "../css/about.css";


export default function About() {
    return (
        <>
            <div className="about">
                <center><h1 className="title">About Us</h1></center>
                <p>
                    
                    ReachJS is an Indian online platform mainly for small but scalable businesses.
                    Founded in November 2022, ReachJS is based in Bangalore and hopes to operate in at least 20 Indian cities 
                    as of January 2023.
                </p>
                <br/>
                <br/>
                <h2 className="title">Who We Are</h2>
                <p className="content">
                    ReachJS is guided by four principles: customer obsession rather than competitor focus,
                    passion for invention, commitment to operational excellence, and long-term thinking.
                    Our main aim is to improve accessibilty 
                    and even the selling game. We want to make sure that everyone has a fair chance and equal means.
                </p>
            </div>
        </>
    )
} 