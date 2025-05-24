import Business from "./Business";

export default function BusinessList({businessList}) {
  return (
    <div className="container">
      <div className="row gy-5">
        {businessList.map((business) => {
          return <Business business={business} />;
        })}
      </div>
    </div>
  );
}
