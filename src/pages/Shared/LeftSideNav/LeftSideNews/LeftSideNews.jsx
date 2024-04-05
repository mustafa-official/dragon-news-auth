import moment from "moment";
import PropTypes from "prop-types";
const LeftSideNews = ({ news }) => {
  const { image_url, title, author } = news;

  const dateString = author["published_date"];
  //   console.log(dateString);
  return (
    <div>
      <img className="mt-3" src={image_url} alt="" />
      <h2 className="my-4">{title}</h2>
      <p>{moment(dateString).format("MMMM DD, YYYY")}</p>
    </div>
  );
};

export default LeftSideNews;
LeftSideNews.propTypes = {
  news: PropTypes.object,
};
