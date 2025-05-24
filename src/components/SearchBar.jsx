import { useState } from "react";
import SortingOption from "./SortingOption";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortingOption, setSortingOption] = useState("Best Match");

  function handleSortClick(e) {
    setSortingOption(e.target.innerHTML);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(
      `Searching Yelp with ${searchTerm}, ${location}, ${sortingOption}`
    );
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <SortingOption
            title="Best Match"
            selectedOption={sortingOption}
            selectSortingOption={handleSortClick}
          />
          <SortingOption
            title="Highest Rated"
            selectedOption={sortingOption}
            selectSortingOption={handleSortClick}
          />
          <SortingOption
            title="Most Reviewed"
            selectedOption={sortingOption}
            selectSortingOption={handleSortClick}
          />
        </div>
        <div className="row justify-content-center">
          <div className="col-6 underline"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Business"
              className="form-control"
            />
          </div>
          <div className="col-4">
            <input
              type="search"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Where?"
              className="form-control"
            />
          </div>
        </div>
        <div className="row justify-content-center my-4">
          <div className="col">
            <button type="submit" class="btn btn-primary">
              Let's Go
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
