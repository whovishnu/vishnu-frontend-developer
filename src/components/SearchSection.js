const SearchSection = ({ setStatus, setType, handleSearch, noResult }) => {
  return (
    <div className="search">
      <div className="content">
        <h1
          style={{
            fontSize: 40
          }}
        >
          Search
        </h1>
        <select
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        >
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="retired">Retired</option>
        </select>
        <select
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="">Select Type</option>
          <option value="Dragon%201.0">Dragon 1.0</option>
          <option value="Dragon%201.1">Dragon 1.1</option>
          <option value="Dragon%202.0">Dragon 2.0</option>
        </select>
        <div onClick={() => handleSearch()} className="btn">
          Search
        </div>
        <div>{noResult ? "Sorry, No Result Found" : ""}</div>
      </div>
    </div>
  );
};

export default SearchSection;
