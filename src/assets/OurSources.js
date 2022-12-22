// stylesheet
import "./OurSources.css";

// Hooks
import { useEffect, useState } from "react";

// axios for fetching api
import axios from "axios";

const OurSources = () => {
    const [news, setNews] = useState([]);
    const [visible, setVisible] = useState(9);
    const baseURL =
      "https://newsapi.org/v2/top-headlines?country=ng&apiKey=7ab29adedaf94930ad04712c77f95055";
    useEffect(() => {
      axios.get(baseURL).then((response) => {
        console.log(response.data.articles);
        setNews(response.data.articles);
      });
    }, []);
  
    // Load more news cards
    const loadMore = () => {
      setVisible((prevValue) => prevValue + 3);
    };
  return (
    <div className="our_sources">
      <div className="our_sources_header">
        <h1>Nigeria Top Headlines</h1>
      </div>
      <div className="source_cat">
        {news.splice(0, visible).map((newsItem) => (
          <div className="cat_card">
            <img src={newsItem.urlToImage ? newsItem.urlToImage : "https://via.placeholder.com/300?text=Default+Image%20C/O%20https://placeholder.com/"} alt="news_image" />
            <div className="card_info_source">
              <div className="author_source">
                <p>{newsItem.author}</p>
              </div>
              <div className="time_source">
                <p>{newsItem.publishedAt}</p>
              </div>
            </div>
            <div className="card_text_source">
              <a href={newsItem.url} target="_blank" rel="noreferrer"><p>{newsItem.title}</p></a>
            </div>
          </div>
        ))}
      </div>
      <div className="load_more_source" onClick={loadMore}>
        <h4>More Top Nigeria Headlines <span>+</span></h4>
      </div>
    </div>
  );
};

export default OurSources;
