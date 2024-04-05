import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LeftSideNews from "./LeftSideNews/LeftSideNews";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [allNews, setNews] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));

    //another data loading
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);


  return (
    <div className="p-3">
      <h2 className="text-xl font-bold">All Category</h2>
      <div className="flex justify-center items-center flex-col gap-6 mt-8">
        {categories.map((category) => (
          <NavLink to={`/category/${category.id}`} key={category.id}>
            {category.name}
          </NavLink>
        ))}
      </div>
      <div>
        {
            allNews.slice(0, 10).map(news=><LeftSideNews news={news} key={news["_id"]}></LeftSideNews>)
        }
      </div>
    </div>
  );
};

export default LeftSideNav;
