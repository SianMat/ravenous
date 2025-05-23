export default function SearchBar() {
  function handleSubmit() {}

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-2">
            <p className="px-3 mb-0 btn">Best Match</p>
          </div>
          <div className="col-2">
            <p className="px-3 mb-0 btn">Highest Rated</p>
          </div>
          <div className="col-2">
            <p className="px-3 mb-0 btn">Most Reviewed</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 underline"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            <input
              type="search"
              placeholder="Search Business"
              className="form-control"
            />
          </div>
          <div className="col-4">
            <input
              type="search"
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
