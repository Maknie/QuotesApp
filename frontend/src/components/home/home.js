import React, { useEffect, useState } from "react";
import QuoteCard from "../quoteCard/quoteCard";
import styles from "./home.module.css";
import stylesNav from "../../components/navBar/navBar.module.css";
import AddForm from "../form/addForm";

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`http://localhost:3012/quotes`);
      const data = await response.json();
      setQuotes(data);
    };
    getRecipes();
  }, [display]);

  return (
    <div id={styles.homePage}>
      <div
        id={styles.blackBg}
        style={{
          display: display,
        }}
      >
        <button
          id={styles.closeBtn}
          onClick={()=>{
            setDisplay("none")
          }}
          style={{
            display: display,
          }}
        >
          <img src="https://www.flaticon.com/svg/static/icons/svg/1828/1828665.svg" alt=""/>
        </button>
        <AddForm id={styles.addForm} />
      </div>
      <div className={stylesNav.navDiv}>
        <div className={stylesNav.logo}>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3444/3444837.svg"
            alt=""
          />
          <h2>Web Quotes App</h2>
        </div>
      </div>
      <div id={styles.quotes}>
        {quotes.map((quote) => (
          <QuoteCard
            key={quote.quote}
            author={quote.author}
            genres={quote.genres}
            quote={quote.quote}
          />
        ))}
      </div>
      <button
        id={styles.addQuote}
        onClick={() => {
          setDisplay("block");
        }}
      >
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/1828/1828817.svg"
          alt=""
        />
      </button>
    </div>
  );
};

export default Home;
