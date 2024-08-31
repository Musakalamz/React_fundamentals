function Categories({ category, filterItem }) {
  return (
    <div className="btn-container">
      {category.map((cat) => {
        return (
          <button
            className="btn"
            type="button"
            key={cat}
            onClick={() => filterItem(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
