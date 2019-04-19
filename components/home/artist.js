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

  componentDidMount() {
    axios
      .get("/api/profiles/artistProfiles/5/0")
      .then(profiles => this.setState({ profiles: profiles.data }));
  }
  clickArtist = slug => {
    Router.push("/profile/" + slug);
  };
  render() {
    const { profiles } = this.state;
    return (
      <React.Fragment>
        <div className="center">
          <div style={{ background: "#ECECEC", padding: "20px" }}>
            <h2 className="h1Heading">Artists on our platform</h2>
            <Row
              // gutter={16}
              align="middle"
              type="flex"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              {profiles.map(profile => (
                <h2 key={profile._id}>
                  <Col
                    // xs={24}
                    // sm={24}
                    // md={8}
                    // lg={6}
                    // xl={4}
                    span={8}
                    style={{ padding: "10px" }}
                  >
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
            <Link href="/Artists_in_Mumbai">
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
