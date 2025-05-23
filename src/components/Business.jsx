const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

export default function Business() {
  return (
    <div className="card" style={{ width: "400px" }}>
      <img
        src={business.imageSrc}
        className="card-img-top"
        alt="..."
        style={{ height: "400px" }}
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
  );
}
