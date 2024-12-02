import "../App.css";
import GoodsCard from "./GoodsCard";

import Apple from "../assets/apple-pink-lady.png";
import Pear from "../assets/fresh-tasty-pear-isolated-png.png";
import Grape from "../assets/whitegrapes_912x.webp";

const static_cards = [
  {
    image: Apple,
    label: "Apple",
    price: "15",
  },
  {
    image: Pear,
    label: "Pear",
    price: "20",
  },
  {
    image: Grape,
    label: "Grape",
    price: "25",
  },
  {
    image: Apple,
    label: "Peach",
    price: "18",
  },
  {
    image: Pear,
    label: "Banana",
    price: "47",
  },
  {
    image: Grape,
    label: "Watermelon",
    price: "20",
  },
  {
    image: Pear,
    label: "Banana",
    price: "47",
  },
  {
    image: Grape,
    label: "Watermelon",
    price: "20",
  },
];

function App() {
  return (
    <div className="App">
      <div className="cards-row">
        {static_cards.map((card) => {
          return (
            <GoodsCard
              key={card.label}
              name={card.label}
              price={card.price}
              image={card.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
