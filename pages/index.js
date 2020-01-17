// v1
// function Home() {
//   return <div>Hello world!</div>;
// }

// export default Home;

// v2
import React from "react";
import styled from "styled-components";
//import GlobalStyle from "../globalStyle";

const Home = () => (
  <Container className="container-fluid">
    <Heading className="text-center">
      hi there<em>tesing nesting component<span>jfhhsjdgvjhds</span></em>
    </Heading>
    <div>
      <h1 className="text-center">Lorem ipsum</h1>
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
          <img
            className=" "
            src="https://s3.amazonaws.com/orders-assets/public/images/thumbnail-1575490769877.jpg"
            alt=""
          />
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
          <img
            className=" "
            src="https://s3.amazonaws.com/orders-assets/public/images/thumbnail-1574693619516.jpg"
            alt=""
          />
          <h3 className="HomePage__promoLink--title">We Cater</h3>
          <p className="HomePage__promoLink--text">
            Order below or on our app • Call 866-Barbecue to speak to a catering
            expert
          </p>
          <a className="HomePage__promoLink--link" href="http://orders.dickeys.com">
            Order Now
          </a>
        </div>

        <div className=" col-md-3 col-sm-6">
          <img
            className=" "
            src="https://s3.amazonaws.com/orders-assets/public/images/thumbnail-1575490677895.jpg"
            alt=""
          />
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
          <img
            className=" "
            src="https://s3.amazonaws.com/orders-assets/public/images/thumbnail-1577721935758.jpg"
            alt=""
          />
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
        height: /*400px*/auto;
        max-width: 100%;
        width: 100%;
      }
    }
  }
`;

const Heading = styled.h1`
  color: green;
  padding: 3rem;
  background: white;
  em {
    color: blue;
    text-decoration: line-through;
    display: block;
    span{
        color:violet;
    }
  }
`;

export default Home;
