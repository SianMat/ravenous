export default function Business({ business }) {
  return (
    <div className="col">
      <div className="card" style={{ width: "350px" }}>
        <img
          src={business.imageSrc}
          className="card-img-top"
          alt="..."
          style={{ height: "350px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{business.name}</h5>
          <div className="row align-items-start">
            <div className="col">
              <p className="card-text mb-0">{business.address}</p>
              <p className="card-text mb-0">{business.city}</p>
              <p className="card-text">
                {business.state} {business.zipCode}
              </p>
            </div>
            <div className="col text-end">
              <p className="mb-0 text-uppercase fw-bold text-orange">
                {business.category}
              </p>
              <p className="card-text mb-0 fw-bold text-orange">
                {business.rating} stars
              </p>
              <p className="card-text">{business.reviewCount} reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
