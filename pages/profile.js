import React, { Component } from "react";
import { Layout, Menu, Icon, Row, Col, Carousel } from "antd";
import "../styles.less";
import Router from "next/router";
import axios from "axios";
import { withRouter } from "next/router";
import ImageGallery from "react-image-gallery";

import WrappedLoginForm from "../components/contactForm";

const { Header, Content, Footer, Sider } = Layout;

class Profile extends Component {
  state = {
    currentProfile: []
  };
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }
  next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
  }
  componentDidMount() {
    axios
      .get("/api/profiles/currentProfile/" + this.props.router.query.profileId)
      .then(profile => this.setState({ currentProfile: profile.data }));
  }

  render() {
    const images = [
      {
        original: "http://lorempixel.com/1000/600/nature/1/",
        thumbnail: "http://lorempixel.com/250/150/nature/1/"
      },
      {
        original: "http://lorempixel.com/1000/600/nature/2/",
        thumbnail: "http://lorempixel.com/250/150/nature/2/"
      },
      {
        original: "http://lorempixel.com/1000/600/nature/3/",
        thumbnail: "http://lorempixel.com/250/150/nature/3/"
      }
    ];
    const { currentProfile } = this.state;

    return (
      <React.Fragment>
        <div>
          <div className="hero-image">
            <Row type="flex" style={{ alignItems: "center", height: "400px" }}>
              <Col xs={24}>
                <div className="hero-text">
                  <img src="../static/logo.png" height="150px" />
                  <h1>Hire the best EVENT EXPERTS</h1>

                  <h2>
                    <Icon type="phone" />
                    <a href="tel:07904204718">+91-7904204718</a>
                  </h2>
                </div>
              </Col>
            </Row>
            <style jsx>{`
              body,
              html {
                height: 100%;
              }

              /* The hero image */
              .hero-image {
                /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
                background-image: linear-gradient(
                    rgba(0, 0, 0, 0.4),
                    rgba(0, 0, 0, 0.4)
                  ),
                  url("../static/banner3.jpg");

                /* Set a specific height */
                height: 400px;
                align: center;

                /* Position and center the image to scale nicely on all screens */
                background-position: top;
                background-repeat: no-repeat;
                background-size: cover;
                position: relative;
              }
              @media only screen and (max-width: 600px) {
                .hero-image {
                  height: 400px;
                }
              }

              /* Place text in the middle of the image */
              .hero-text {
                text-align: center;
                position: relative;
                // left: 50%;
                // transform: translate(-50%, -50%);
                color: white;
              }
              h1,
              h2,
              a {
                color: white;
              }

              .inputForm {
                text-align: center;
              }
            `}</style>
          </div>
        </div>

        <h1 style={{ textAlign: "center" }}>
          <br />

          <u>{currentProfile.companyName}</u>
        </h1>
        <h4 style={{ textAlign: "center" }}>
          <br />

          {currentProfile.description}
        </h4>
        <div>
          {typeof window !== "undefined" ? (
            <Row type="flex" align="middle">
              <Col xs={{ span: 21, offset: 1 }} md={{ span: 14, offset: 1 }}>
                <br />
                <h1 style={{ textAlign: "center" }}>Image Gallery</h1>
                <ImageGallery
                  items={images}
                  thumbnailPosition="bottom"
                  autoPlay={true}
                />
              </Col>
              <Col
                xs={{ span: 24 }}
                md={{ span: 8 }}
                style={{ textAlign: "center" }}
              >
                <WrappedLoginForm color="black" profile={currentProfile} />
              </Col>
            </Row>
          ) : null}
        </div>
        <div>
          <Row type="flex" align="middle">
            <Col xs={{ span: 21, offset: 1 }} md={{ span: 14, offset: 1 }}>
              <br />
              <h1 style={{ textAlign: "center" }}>Video Gallery</h1>
              <Row type="flex" align="middle" style={{ textAlign: "center" }}>
                <Col
                  xs={{ span: 2, offset: 0 }}
                  md={{ span: 2, offset: 0 }}
                  style={{ color: "#ba0f58", fontSize: "50px" }}
                >
                  <Icon
                    type="left-circle"
                    theme="filled"
                    onClick={this.previous}
                  />
                </Col>
                <Col xs={{ span: 20, offset: 0 }} md={{ span: 20, offset: 0 }}>
                  <Carousel ref={node => (this.carousel = node)}>
                    <div>
                      <iframe
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/BxePMaHH878"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div>
                      <h3>2</h3>
                    </div>
                    <div>
                      <h3>3</h3>
                    </div>
                    <div>
                      <h3>4</h3>
                    </div>
                  </Carousel>
                </Col>
                <Col
                  xs={{ span: 2, offset: 0 }}
                  md={{ span: 2, offset: 0 }}
                  style={{ color: "#ba0f58", fontSize: "50px" }}
                >
                  <Icon
                    type="right-circle"
                    theme="filled"
                    onClick={this.next}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              xs={{ span: 24 }}
              md={{ span: 8 }}
              style={{ textAlign: "center" }}
            >
              There are no ratings for this vendor yet
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Profile);
