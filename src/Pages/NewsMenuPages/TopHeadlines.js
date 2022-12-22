// stylesheet
import "./TopHeadlines.css";

// Hooks
import { useEffect, useState } from "react";

// axios for fetching api
import axios from "axios";

const TopHeadlines = () => {
  const [news, setNews] = useState([]);
  const [visible, setVisible] = useState(9);
  const baseURL =
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7ab29adedaf94930ad04712c77f95055";
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
    <>
      <div className="all_cat">
        {news.splice(0, visible).map((newsItem) => (
          <div className="cat_card">
            <img
              src={
                newsItem.urlToImage
                  ? newsItem.urlToImage
                  : "https://via.placeholder.com/300?text=Default+Image%20C/O%20https://placeholder.com/"
              }
              alt="news_image"
            />
            <div className="card_info">
              <div className="author">
                <p>{newsItem.author}</p>
              </div>
              <div className="time">
                <p>{newsItem.publishedAt}</p>
              </div>
            </div>
            <div className="card_text">
              <a href={newsItem.url} target="_blank" rel="noreferrer">
                <p>{newsItem.title}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="load_more" onClick={loadMore}>
        <h4>
          Load more <span>+</span>
        </h4>
      </div>
    </>
  );
};

export default TopHeadlines;
