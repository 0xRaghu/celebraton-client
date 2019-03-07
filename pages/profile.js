import React, { Component } from "react";
import { Layout, Menu, Icon, Row, Col, Carousel,Card,Divider } from "antd";
import "../styles.less";
import Router from "next/router";
import axios from "axios";

import Head from "../components/home/head";
import Hero from "../components/home/hero"
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

        <Hero />
        <div  style={{background:"#ECECEC"}}>
        <Row type="flex" align="middle">
          <Col xs={{ span: 22, offset: 1 }} md={{ span: 20, offset: 2 }}  style={{background:"white"}}>
          <div style={{textAlign:"center"}}>
            <div style={{margin:"-50px 0px 2px 0px",boxShadow:"2px 2px 5px grey",width:"90%",display:"inline-block"}}>
            <Card><h2 style={{ textAlign: "center",margin:"0px" }}>
              

              {currentProfile.companyName}
            </h2></Card></div></div>
            
            <h4 style={{ textAlign: "center" }}>
            

              {currentProfile.description}
            </h4>
            <Row type="flex" align="middle">
              <Col span={8}>
            
              
              <h4 style={{ textAlign: "center",color:"grey"}} className="profileIconFoot">
              <span className="profileIconHead">Experience</span><br />
                <Icon type="schedule" theme="twoTone" twoToneColor="orange" className="profileIcon"/><br />
                {currentProfile.experience}
              </h4>
            
            
            </Col>
            
            <Col span={8}>
            
              <h4 style={{ textAlign: "center" ,color:"grey"}} className="profileIconFoot">
                <span  className="profileIconHead">Events Covered</span><br />
                <Icon type="dashboard" theme="twoTone" twoToneColor="#10c6e4"  className="profileIcon"/><br />
                {currentProfile.eventsCovered}
              </h4>
            
            
            </Col>
            
            <Col span={8}>
            <h4 style={{ textAlign: "center" ,color:"grey"}} className="profileIconFoot">
                <span  className="profileIconHead">CelebratON</span><br />
                <Icon type="safety-certificate" theme="twoTone" twoToneColor="#44c106"  className="profileIcon" /><br />
                Verified
              </h4>
              </Col>
              </Row>
              <Row ><Col sm={{span:10,offset:2}} xs={{span:22,offset:1}}>
            {currentProfile.artistGenre ? (
              <React.Fragment>
                <Icon type="star" theme="twoTone" twoToneColor="#ba0f58"  />
                <b> Genre: </b>
                <span>{currentProfile.artistGenre}</span>
                </React.Fragment>
              
            ) : null}
           
            </Col><Col sm={{span:10,offset:2}} xs={{span:22,offset:1}}>
            {currentProfile.openToTravel ? (
              <React.Fragment>
                <Icon type="car" theme="twoTone" twoToneColor="#ba0f58"  />
              <b> Open to Travel: </b>
              <span>Yes</span>
              </React.Fragment>
                
                
              
            ) : 
            null
            
            
          }
          </Col><Col sm={{span:10,offset:2}} xs={{span:22,offset:1}}>
            {currentProfile.troupeSizeP && currentProfile.troupeSizeNP ? (
              <React.Fragment>
                <Icon type="eye" theme="twoTone" twoToneColor="#ba0f58"  />
              <b> Troupe Size (P/NP): </b>
              <span>{currentProfile.troupeSizeP} / {currentProfile.troupeSizeNP}</span>
              </React.Fragment>
                
                
              
            ) : null}
            </Col>
            {/* <Col sm={{span:10,offset:2}} xs={{span:22,offset:1}}>
            {currentProfile.troupeSizeNP ? (
             <React.Fragment>
               <Icon type="eye-invisible" theme="twoTone" twoToneColor="#ba0f58"  />
             <b>Non performing Troupe Size: </b>
             <span>{currentProfile.troupeSizeNP}</span>
             </React.Fragment>
                
                
              
            ) : null}
            </Col> */}
            <Col sm={{span:10,offset:2}} xs={{span:22,offset:1}}>
            {currentProfile.performanceDuration ? (
              <React.Fragment>
                <Icon type="fire" theme="twoTone" twoToneColor="#ba0f58"  />
              <b> Performance Duration: </b>
              <span>{currentProfile.performanceDuration}</span>
              </React.Fragment>
                
                
              
            ) : null}
            </Col><Col sm={{span:10,offset:2}} xs={{span:22,offset:1}}>
            {currentProfile.languagesKnown ? (
              <React.Fragment>
                <Icon type="sound" theme="twoTone" twoToneColor="#ba0f58"  />
              <b> Languages Known: </b>
              <span>{currentProfile.languagesKnown}</span>
              </React.Fragment>
                
                
              
            ) : null}
            </Col><Col sm={{span:10,offset:2}} xs={{span:22,offset:1}}>
            
            {currentProfile.eventPreference ? (
              <React.Fragment>
                <Icon type="skin" theme="twoTone" twoToneColor="#ba0f58"  />
              <b> Event Preference: </b>
              <span>{currentProfile.eventPreference}</span>
              </React.Fragment>
                
                
              
            ) : null}
            </Col></Row>
          </Col>
          
        </Row>

        <div>
          {typeof window !== "undefined" ? (
            <Row type="flex" align="middle">
              <Col xs={{ span: 22, offset: 1 }} md={{ span: 16, offset: 4 }}>
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
            <Col xs={{ span: 24, offset: 0 }} md={{ span: 14, offset: 1 }}>
              <br />
              <h1 style={{ textAlign: "center" }}>Video Gallery</h1>
              <Row type="flex" align="middle" style={{ textAlign: "center" }}>
                <Col
                  xs={{ span: 2, offset: 0 }}
                  md={{ span: 2, offset: 0 }}
                  style={{ color: "#ba0f58", fontSize: "30px" }}
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
                              className="profileVideo"
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
                  style={{ color: "#ba0f58", fontSize: "30px" }}
                >
                  <Icon
                    type="right-circle"
                    theme="filled"
                    onClick={this.next}
                  />
                </Col>
                <Col
                  xs={{ span: 20, offset: 2 }}
                  md={{ span: 20, offset: 2 }}
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
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Profile);
