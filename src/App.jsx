import { useState } from "react";
import "./App.css";
import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";

function App() {
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

  return (
    <>
      <SearchBar />
      <BusinessList businessList={businessList} />
    </>
  );
}

export default App;
