import Business from "./Business";

const businessList = [
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  },
];

export default function BusinessList() {
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
