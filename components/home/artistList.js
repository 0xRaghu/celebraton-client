import React, { Component } from "react";
import axios from "axios";
import "../../styles.less";
import fetch from "isomorphic-unfetch";
import { Card, Row, Col, Button } from "antd";
const { Meta } = Card;
import Router from "next/router";

export default class ArtistList extends Component {
  state = { profiles: [], count: 0, artists: [] };

  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        artists: res,
        count: this.state.count + 10
      });
    });
  }

  getData = callback => {
    axios
      .get(`/api/profiles/artistProfiles/10/${this.state.count}`)
      .then(res => callback(res.data));
  };
  clickArtist = slug => {
    Router.push("/profile/" + slug);
  };
  onLoadMore = () => {
    this.setState({
      loading: true,
      count: this.state.count + 10
    });
    this.getData(res => {
      const artists = this.state.artists.concat(res);
      this.setState(
        {
          artists,
          loading: false
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event("resize"));
        }
      );
    });
  };

  componentWillMount() {}
  render() {
    const { artists } = this.state;
    return (
      <React.Fragment>
        <div className="center">
          <div style={{ background: "#ECECEC", padding: "30px" }}>
            <Row gutter={16}>
              <h2 className="h1Heading">Artists on our platform</h2>
              {artists.map(profile => (
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
            <Button onClick={() => this.onLoadMore()}>View More</Button>
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
