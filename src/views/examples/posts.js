
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, CardBody } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import axios from 'axios';

class Posts extends React.Component {
  state = {
    post: []
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    const route_params = window.location.pathname.split('/')
    const data = {
      "id": route_params[2]
    }
    axios.post(`http://mecontrataai-com.umbler.net/api/getPost`, data)
    .then(res => {
      this.setState({
        post: res.data['results']
      })
      console.log(res.data['results'])
    })
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            
            <Container>
              <Card className="card-profile shadow mt--300">
                <Container style={{ height: '25px', width: '100%'}}>
                <span className="btn-inner--icon" onClick={() => window.history.back()}>
                    <i className="fa fa-arrow-left" />
                  </span>
                </Container>
                <div className="px-4">
                  <div className="text-center mt-5">
                    <h3>
                      {this.state.post['title']}
                    </h3>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      {this.state.post['body']}
                    </div>
                  </div>
                  <Col lg="12">
                  <Row className="row-grid">
                  </Row>
                </Col>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Posts;
