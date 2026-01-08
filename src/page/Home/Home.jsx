import { useEffect, useState } from "react";
import Heroslider from "../../components/Heroslider";
import SlideProduct from "../../components/slideProduct/SlideProduct";
import "./Home.css";
import SlideProductLoading from "../../components/slideProduct/SlideProductLoading";
import PageTransition from "../../components/PageTransition";

export default function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  const categories = [
    "smartphones",
    "mobile-accessories",
    "laptops",
    "mens-watches",
    "smartphones",
    "sports-accessories",
    "sunglasses",
  ];

  // get products from api
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await res.json();
            return { [category]: data.products };
          })
        );
        const productData = Object.assign({}, ...result);
        setProducts(productData);
      } catch (error) {
        console.log("Error of Fetch", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <PageTransition>
      <div>
        <Heroslider />
        {loading
          ? categories.map((category, i) => <SlideProductLoading key={i} />)
          : categories.map((category, i) => (
              <SlideProduct
                key={i}
                data={products[category]}
                title={category.replace("-", " ")}
              />
            ))}
      </div>
    </PageTransition>
  );
}
