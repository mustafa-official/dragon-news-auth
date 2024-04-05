import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import SingleNewsDetails from "./SingleNewsDetails";

const NewsDetails = () => {
  const { id } = useParams();
  const news = useLoaderData();
  const filteredNews = news.find((aNews) => aNews["_id"] == id);

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <SingleNewsDetails filteredNews={filteredNews}></SingleNewsDetails>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
