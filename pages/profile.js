import React, { Component } from "react";
import { Layout, Menu, Icon, Row, Col, Carousel } from "antd";
import "../styles.less";
import Router from "next/router";
import axios from "axios";

import Head from "../components/home/head";
import { withRouter } from "next/router";
import ImageGallery from "react-image-gallery";

import WrappedLoginForm from "../components/contactForm";

const { Header, Content, Footer, Sider } = Layout;

class Profile extends Component {
  state = {
    defaultImage: [
      {
        original:
          "http://marketing4startups.co.uk/ImageEvents/wp-content/uploads/2016/02/event-management-placeholder.jpg",
        thumbnail:
          "http://marketing4startups.co.uk/ImageEvents/wp-content/uploads/2016/02/event-management-placeholder.jpg"
      }
    ],
    defaultVideo: ["MEf2-GJmIdY"],
    currentProfile: {
      videos: [],
      images: [],
      videoEmbedUrl: []
    }
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
      .then(profile => {
        this.setState({
          currentProfile: profile.data
        });
        profile.data.videos.length == 0 || profile.data.videos === undefined
          ? null
          : this.setState({ defaultVideo: profile.data.videoEmbedUrl });
        profile.data.images.length == 0 || profile.data.images === undefined
          ? null
          : this.setState({ defaultImage: profile.data.images });
      });
  }

  render() {
    const { currentProfile } = this.state;

    return (
      <React.Fragment>
        <Head title={`CelebratON | ${currentProfile.companyName} - Preferred Partner`} description={`${currentProfile.companyName} is one of the best vendors on CelebratON | Hire or Book the best Wedding Planners, Surprise Planners and Birthday Planners in a few clicks on CelebratON`} />

        <div>
          <div className="hero-image">
            <Row type="flex" style={{ alignItems: "center", height: "200px" }}>
              <Col xs={24}>
                <div className="hero-text">
                  <img src="../static/logo.png" height="100px" />
                  <h2>Hire the best EVENT EXPERTS</h2>

                  <h3>
                    <Icon type="phone" />
                    <a href="tel:07904204718">+91-7904204718</a>
                  </h3>
                </div>
              </Col>
            </Row>
            <style jsx>{`
              body,
              html {
                height: 100%;
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
              h2,h3,
              a {
                color: white;
              }

              .inputForm {
                text-align: center;
              }
            `}</style>
          </div>
        </div>
        <Row type="flex" align="middle">
          <Col xs={{ span: 21, offset: 1 }} md={{ span: 14, offset: 1 }}>
            <h1 style={{ textAlign: "center" }}>
              <br />

              <u>{currentProfile.companyName}</u>
            </h1>
            <h4 style={{ textAlign: "center" }}>
              <br />

              {currentProfile.description}
            </h4>
            {currentProfile.experience ? (
              <h4 style={{ textAlign: "center" }}>
                <b>Experience: </b>
                {currentProfile.experience}
              </h4>
            ) : null}
            {currentProfile.eventsCovered ? (
              <h4 style={{ textAlign: "center" }}>
                <b>Events Covered: </b>
                {currentProfile.eventsCovered}
              </h4>
            ) : null}
            {currentProfile.artistGenre ? (
              <h4 style={{ textAlign: "center" }}>
                <b>Genre: </b>
                {currentProfile.artistGenre}
              </h4>
            ) : null}
            {currentProfile.languagesKnown ? (
              <h4 style={{ textAlign: "center" }}>
                <b>Languages Known: </b>
                {currentProfile.languagesKnown}
              </h4>
            ) : null}
            {currentProfile.openToTravel ? (
              <h4 style={{ textAlign: "center" }}>
                <b>Open to Travel: </b>
                {currentProfile.openToTravel}
              </h4>
            ) : null}
            {currentProfile.troupeSizeP ? (
              <h4 style={{ textAlign: "center" }}>
                <b>Performing Troupe Size: </b>
                {currentProfile.troupeSizeP}
              </h4>
            ) : null}
            {currentProfile.troupeSizeNP ? (
              <h4 style={{ textAlign: "center" }}>
                <b>Non performing Troupe Size: </b>
                {currentProfile.troupeSizeNP}
              </h4>
            ) : null}
            {currentProfile.performanceDuration ? (
              <h4 style={{ textAlign: "center" }}>
                <b>Performance Duration: </b>
                {currentProfile.performanceDuration}
              </h4>
            ) : null}
            {currentProfile.eventPreference ? (
              <h4 style={{ textAlign: "center" }}>
                <b>Event Preference: </b>
                {currentProfile.eventPreference}
              </h4>
            ) : null}
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 8 }}
            style={{ textAlign: "center" }}
          >
            <WrappedLoginForm color="black" profile={currentProfile} />
          </Col>
        </Row>

        <div>
          {typeof window !== "undefined" ? (
            <Row type="flex" align="middle">
              <Col xs={{ span: 21, offset: 1 }} md={{ span: 21, offset: 1 }}>
                <br />
                <h1 style={{ textAlign: "center" }}>Image Gallery</h1>

                <ImageGallery
                  items={
                    this.state.currentProfile.images.length == 0 ||
                    this.state.currentProfile.images === undefined
                      ? this.state.defaultImage
                      : this.state.currentProfile.images
                  }
                  thumbnailPosition="bottom"
                  autoPlay={false}
                  originalClass="imgHeight"
                />
                <style jsx>{`
                  .imgHeight {
                    height: 50px;
                  }
                `}</style>
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
                    {this.state.currentProfile.videoEmbedUrl.length == 0 ||
                    this.state.currentProfile.videoEmbedUrl === undefined ? (
                      <iframe
                        width="100%"
                        height="500"
                        src={`https://www.youtube.com/embed/${
                          this.state.defaultVideo[0]
                        }`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      this.state.currentProfile.videoEmbedUrl.map(
                        videoEmbedUrl => (
                          <div key={videoEmbedUrl}>
                            <iframe
                              width="100%"
                              height="500"
                              src={`https://www.youtube.com/embed/${videoEmbedUrl}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        )
                      )
                    )}
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
                <Col
                  xs={{ span: 22, offset: 2 }}
                  md={{ span: 22, offset: 2 }}
                  style={{ textAlign: "left" }}
                >
                  {currentProfile.paymentTerms ? (
                    <h4>
                      <b>Payment Terms: </b>
                      {currentProfile.paymentTerms}
                    </h4>
                  ) : null}
                  {currentProfile.cancellationPolicy ? (
                    <h4>
                      <b>Cancellation Policy: </b>
                      {currentProfile.cancellationPolicy}
                    </h4>
                  ) : null}
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
