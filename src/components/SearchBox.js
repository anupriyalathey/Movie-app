const SearchBox = (props) => {
  return (
    <div className="search-box">
      <input
        className="form-control"
        value={props.value}
        onChange={(e) => props.setSearchValue(e.target.value)}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};

export default SearchBox;
