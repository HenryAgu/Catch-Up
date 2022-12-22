// stylesheet
import "./Home.css";

// React Helmet
import { Helmet } from "react-helmet";

// Components
import Hero from "../assets/Hero";
import NewsMenu from "../components/NewsMenu";


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
        <NewsMenu/>
      </div>
    </>
  );
};

export default Home;
