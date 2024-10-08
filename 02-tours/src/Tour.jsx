import { useState } from "react";

function Tour({ id, image, info, name, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={img} alt={name} className="img" />
      <span className="tour-price"> ${price} </span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {/* {info} */}
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          Not Interested{" "}
        </button>
      </div>
    </article>
  );
}

export default Tour;
