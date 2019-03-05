import React, { Component } from "react";
import { Layout, Carousel } from "antd";

class Testimonials extends Component {
  render() {
    return (
      <Layout style={{ textAlign: "center", paddingTop: "15px" }}>
        <h2>Testimonials</h2>
        <Carousel autoplay effect="fade" style={{ textAlign: "center"}}>
          <div>
            <p>
              Hired a Birthday Planner using CelebratON for my kid's birthday.
              Surprise elements like Flash Mob and Speed Painting were totally
              unknown to my family members. It was a great experience.
              <img
                src="https://res.cloudinary.com/celebraton/image/upload/v1516271771/santhosh_copy_qcmwys.jpg"
                height="50px"
                className="circle"
              />
              -Santhosh Kumar, Chennai
            </p>
          </div>
          <div>
            <p>
              Wanted to surprise my girlfriend on her birthday and hired someone
              from CelebratON. With romantic table decoration and a beach side
              dinner, the day is still cherished.
              <img
                src="https://res.cloudinary.com/celebraton/image/upload/v1516271953/ragav_small_lwhvmk.jpg"
                height="50px"
                className="circle"
              />
              -Ragavendhar, Chennai
            </p>
          </div>
          <div>
            <p>
              Was looking for a Decorator for my sister's marriage and came
              across CelebratON. The decoration was grand at a fair price. I got
              4 different quotes and chose the best one of those.
              <img
                src="https://res.cloudinary.com/celebraton/image/upload/v1516272505/Dhanya_small_qcl184.jpg"
                height="50px"
                className="circle"
              />
              -Dhanya Krishnan, Bangalore
            </p>
          </div>
        </Carousel>
        <style jsx>{`
          .circle {
            border-radius: 50%;

            margin-left: auto;
            margin-right: auto;
            display: block;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Testimonials;
