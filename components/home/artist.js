import React, { Component } from "react";
import axios from "axios";
import "../../styles.less";
import fetch from "isomorphic-unfetch";
import { Card, Row, Col, Button } from "antd";
const { Meta } = Card;
import Link from "next/link";
import Router from "next/router";

export default class Artist extends Component {
  state = { profiles: [] };

  componentWillMount() {
    axios
      .get("/api/profiles/artistProfiles/5/0")
      .then(profiles => this.setState({ profiles: profiles.data }));
  }
  clickArtist = slug => {
    Router.push("/profile?profileId=" + slug);
  };
  render() {
    const { profiles } = this.state;
    return (
      <React.Fragment>
        <div className="center">
          <div style={{ background: "#ECECEC", padding: "30px" }}>
            <Row gutter={16}>
              <h1 className="h1Heading">Artists on our platform</h1>
              {profiles.map(profile => (
                <h2 key={profile._id}>
                  <Col span={8}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      bordered={false}
                      onClick={() => this.clickArtist(profile.slug)}
                      cover={<img src={profile.images[0].original} />}
                    >
                      <Meta
                        title={
                          <div>
                            {/* <i className="large material-icons">
                              {profile.icon}
                            </i>
                            <br /> */}
                            {profile.companyName}
                          </div>
                        }
                        description={profile.artistSubCategory}
                      />
                    </Card>
                  </Col>
                </h2>
              ))}
            </Row>
            <Link href="/category?enquiry=Artists-Mumbai">
              <a>
                <Button>View More</Button>
              </a>
            </Link>
          </div>
          <style jsx>{`
            .h1Heading {
              text-align: center;
              color: #595959;
            }
            h2 {
              display: inline-block;
            }
            .center {
              text-align: center;
            }
            i {
              font-size: 50px;
            }
          `}</style>
        </div>
      </React.Fragment>
    );
  }
}
