import React from "react";
import styled from "styled-components";

const Home = () => (
  <Container className="container-fluid">
    <div className="container">
      <h1>
        Page Heading
        <small>Secondary Text</small>
      </h1>

      <div className="row">
        <div className="col-md-8">
          <img className="img-fluid" src="http://placehold.it/750x500" alt="" />
        </div>

        <div className="col-md-4">
          <h3 className="my-3">Project Description</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
            euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem,
            adipiscing in adipiscing et, interdum nec metus. Mauris ultricies,
            justo eu convallis placerat, felis enim.
          </p>
          <h3 className="my-3">Project Details</h3>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Dolor Sit Amet</li>
            <li>Consectetur</li>
            <li>Adipiscing Elit</li>
          </ul>
        </div>
      </div>

      <h3 className="my-4">Related Projects</h3>

      <div className="row">
        <div className="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img
              className="img-fluid"
              src="http://placehold.it/500x300"
              alt=""
            />
          </a>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img
              className="img-fluid"
              src="http://placehold.it/500x300"
              alt=""
            />
          </a>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img
              className="img-fluid"
              src="http://placehold.it/500x300"
              alt=""
            />
          </a>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img
              className="img-fluid"
              src="http://placehold.it/500x300"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>

    <div>
      <h2 className="text-center">Lorem ipsum</h2>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4 text-center">One of three columns</div>
        <div className="col-12 col-lg-4 text-center">One of three columns</div>
        <div className="col-12 col-lg-4 text-center">One of three columns</div>
      </div>
    </div>

    <section className="Container" aria-label="Current promos">
      <div className="row HomePage__main--marginTopHelper">
        <div className="col-md-3 col-sm-6">
          <img className=" " src="http://placehold.it/500x300" alt="" />
          <h3 className="HomePage__promoLink--title">Ribs &amp; Wings</h3>
          <p className="HomePage__promoLink--text">
            Our pit-smoked ribs and wings come in 8 delicious sauces, find your
            favorite today! Order now or use our app.
          </p>
          <a
            className="HomePage__promoLink--link"
            href="https://orders.dickeys.com/quote/location"
          >
            Order Now
          </a>
        </div>

        <div className="col-md-3 col-sm-6">
          <img className=" " src="http://placehold.it/500x300" alt="" />
          <h3 className="HomePage__promoLink--title">We Cater</h3>
          <p className="HomePage__promoLink--text">
            Order below or on our app • Call 866-Barbecue to speak to a catering
            expert
          </p>
          <a
            className="HomePage__promoLink--link"
            href="http://orders.dickeys.com"
          >
            Order Now
          </a>
        </div>

        <div className=" col-md-3 col-sm-6">
          <img className=" " src="http://placehold.it/500x300" alt="" />
          <h3 className="HomePage__promoLink--title">Dickey's Delivers</h3>
          <p className="HomePage__promoLink--text">
            We bring the 'cue to you! Order now or use our app.
          </p>

          <a
            className="HomePage__promoLink--link"
            href="https://orders.dickeys.com/quote/location"
          >
            Order Now
          </a>
        </div>

        <div className="col-md-3 col-sm-6">
          <img className=" " src="http://placehold.it/500x300" alt="" />
          <h3 className="HomePage__promoLink--title">Deal of the Day</h3>
          <p className="HomePage__promoLink--text">
            Stop in today for the in-store Deal of the Day–Jalapeño Cheddar
            Kielbasa and Pulled Pork 2 Meat Plate, with choice of two sides and
            a Big Yellow Cup
          </p>
          <a
            className="HomePage__promoLink--link"
            href="https://www.dickeys.com/location/search-by-state"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>

    <Heading className="text-center">
      Hi there
      <em>
        tesing nesting component<span>jfhhsjdgvjhds</span>
      </em>
    </Heading>
  </Container>
);

const Container = styled.div`
  ${"" /* width: 960px;
  height: 100vh;
  margin: 2rem auto;
  padding: 2rem; */}
  width: 960px;
  background: #f2f2f2;
  .row {
    > div {
      padding: 1rem;
      img {
        height: auto;
        max-width: 100%;
        width: 100%;
      }
    }
  }
`;

const Heading = styled.h1`
  color: #518544;
  padding: 3rem;
  background: white;
  em {
    color: #4a83dc;
    text-decoration: line-through;
    display: block;
    span {
      color: #9b0439;
      margin-left: 1rem;
      display: inline-block;
    }
  }
`;

export default Home;
