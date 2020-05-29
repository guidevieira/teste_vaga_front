
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, CardBody } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import axios from 'axios';

class Profile extends React.Component {
  state = {
    company: [],
    posts: []
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    const route_params = window.location.pathname.split('/')
    const data = {
      "id": route_params[2]
    }
    axios.post(`http://mecontrataai-com.umbler.net/api/getCompany`, data)
    .then(res => {
      this.setState({
        company: res.data['results']
      })
      console.log(res.data['results'])
    })

    axios.post(`http://mecontrataai-com.umbler.net/api/getPostsParam`, data)
    .then(res => {
      this.setState({
        posts: res.data['results']
      })
      console.log(res.data)
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
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={'http://lorempixel.com/800/800/'}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Contato
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center align-items-center" >
                        <div>
                          <span className="btn-inner--icon" onClick={() => window.history.back()}>
                            <i className="fa fa-arrow-left" />
                          </span>
                        </div>
                        <div>
                          <span className="heading">{this.state.posts.length}</span>
                          <span className="description">posts</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      {this.state.company['name']}
                    </h3>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      {this.state.company['catchPhrase']}
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          Posts
                        </p>
                      </Col>
                    </Row>
                  </div>
                  <Col lg="12">
                  <Row className="row-grid">
                  {this.state.posts.map((promoter, i) => (
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0 mb-5">
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                            Usuario: {promoter['username']}
                          </h6>
                          <h6 className="text-primary text-uppercase">
                            {promoter['title']}
                          </h6>
                          <p className="description mt-3">
                           {promoter['body']}
                          </p>
                          <Button
                            className="mt-4"
                            href={'/post/'+ promoter['id']}
                          >
                            Veja Mais
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
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

export default Profile;
