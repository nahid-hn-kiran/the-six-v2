import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Home/Sidebar/Sidebar";
import NewsCard from "../../components/cards/NewsCard";
import Loading from "../../components/Loading/Loading";

const Tennis = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const getArticles = async () => {
      try {
        const { data } = await axios.get(
          "https://the-six-server-alpha.vercel.app/api/v1/articles/tennis"
        );
        setArticles(data);
        setLoading(false);
      } catch (error) {
        setError(`Couldn't load article!`);
        setLoading(false);
      }
    };
    getArticles();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 container my-5 gap-5">
      <div className="lg:col-span-2">
        <div className="border-t-8 border-indigo-700">
          <h2 className="text-2xl my-3 ml-2">Tennis News</h2>
          <p className="text-red-600 m-auto">{error ? error : ""}</p>
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles?.data?.map((article) => (
                <NewsCard key={article._id} article={article} />
              ))}
            </div>
          </>
        </div>
      </div>
      <div>
        <Sidebar />
      </div>
    </section>
  );
};

export default Tennis;
