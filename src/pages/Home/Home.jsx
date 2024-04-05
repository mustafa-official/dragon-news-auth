import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const allNews = useLoaderData();

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="border  h-max col-span-1">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          {
            allNews.map(news=><NewsCard key={news['_id']} news={news}></NewsCard>)
          }
        </div>
        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
