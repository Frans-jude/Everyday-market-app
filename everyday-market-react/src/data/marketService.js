import beveragesImg from "../assets/beverages.png";
import condimentsImg from "../assets/condiments.png";
import confectionsImg from "../assets/confections.png";
import dairyImg from "../assets/dairy.png";
import grainsImg from "../assets/grains.png";

export function marketServiceWithALotCategories() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Beverages",
          price: "$10",
          image: beveragesImg,
          description: "Fresh drinks and everyday beverages.",
        },
        {
          name: "Condiments",
          price: "$5",
          image: condimentsImg,
          description: "Spices, sauces, and seasonings to enhance every meal.",
        },
        {
          name: "Confections",
          price: "$15",
          image: confectionsImg,
          description: "Sweet treats and snacks for the family.",
        },
        {
          name: "Dairy Products",
          price: "$10",
          image: dairyImg,
          description: "Milk, cheese, and fresh dairy essentials.",
        },
        {
          name: "Grains/Cereals",
          price: "$5",
          image: grainsImg,
          description: "Healthy grains and cereals for daily meals.",
        },
      ]);
    }, 2000);
  });
}