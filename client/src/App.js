import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import NavComp from "./components/navcomp/navcomp";
import NewsContent from "./components/newscontent/newscontent";
import Footer from "./components/footer/footer";
function App() {
  const [category, setCategory] = useState("general");
  const [newsArr, setNewsarr] = useState([]);
  const [newsResult, setNewsresult] = useState();
  const newsApi = async () => {
    try {
      const key = "f0e005d11bb14900bea17b8c4faa709a";
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}&category=${category}`
      );
      console.log(news.data);
      console.log(news.data.articles);
      setNewsarr(news.data.articles);
      setNewsresult(news.data.totalResults);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    newsApi();
  }, [newsResult, category]);

  return (
    <div className="App">
      <NavComp setCategory={setCategory} />
      <NewsContent newsArr={newsArr} newsResult={newsResult} />
      <Footer />
    </div>
  );
}

export default App;
