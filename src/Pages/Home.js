// stylesheet
import "./Home.css";

// React Helmet
import { Helmet } from "react-helmet";

// Components
import Hero from "../assets/Hero";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Catch Up | Welcome To Catch Up</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="home">
        <Hero />
      </div>
    </>
  );
};

export default Home;
