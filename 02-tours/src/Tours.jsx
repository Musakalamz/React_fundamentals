import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  return (
    <section>
      <div className="title">
        <h3>Our Tours</h3>
        <div className="title-underline"></div>
        <div className="tours">
          {tours.map((tour) => {
            // console.log(tour);
            return <Tour key={tour.id} removeTour={removeTour} {...tour} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Tours;
