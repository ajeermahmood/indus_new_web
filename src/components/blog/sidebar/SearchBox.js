const SearchBox = ({ filterFunctions }) => {
  return (
    <div className="sidebar-widget mb30">
      <div className="search_area">
        <input
          type="text"
          className="form-control"
          placeholder="What are you looking for?"
          onChange={(e) => filterFunctions.setSearchQuery(e.target.value)}
        />
        <label>
          <span className="flaticon-search" />
        </label>
      </div>
    </div>
  );
};

export default SearchBox;
