import PropTypes from "prop-types";
const SingleNewsDetails = ({ filteredNews }) => {
  const { image_url, title, details } = filteredNews;
  return (
    <div>
      <div className=" p-4 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-800"
            >
              News
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2 mb-8">
            <img
              src={image_url}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
          </div>
          <div className="space-y-6">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-rose-600">
                {title}
              </h3>
            </a>
            <p className="leading-normal dark:text-gray-600">{details}</p>
            <button className="btn btn-secondary">
              All News in this category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsDetails;
SingleNewsDetails.propTypes = {
  filteredNews: PropTypes.object,
};
