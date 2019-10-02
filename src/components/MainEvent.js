import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../image/1.jpg";
import img2 from "../image/2.jpg";


export default function MainEvent() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}