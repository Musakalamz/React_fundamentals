function BtnContainer({ jobs, currentItem, setCurrentItem }) {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            onClick={() => setCurrentItem(index)}
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
            key={item.id}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}

export default BtnContainer;
