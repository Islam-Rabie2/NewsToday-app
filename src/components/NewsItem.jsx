import img from "../imgs/news-img.jpg";
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block mx-2 my-2 px-2 py-2"
      style={{ maxWidth: "275px", height: "auto" }}
    >
      <img
        src={src ? src : img}
        style={{ height: "200px", width: "100%" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title fs-6">{title.slice(0, 50)}</h5>
        <p className="card-text fs-8">
          {description
            ? description.slice(0, 90)
            : "Recent global news highlights include geopolitical tensions, climate change concerns."}
        </p>
        <a href={url} className="btn btn-info">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
