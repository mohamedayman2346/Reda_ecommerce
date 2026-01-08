import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/slideProduct/Product";
import PageTransition from "../../components/PageTransition";
import SlideProductLoading from "../../components/slideProduct/SlideProductLoading";
import "../../components/slideProduct/slideProduct.css";

export default function CategoryPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <PageTransition key = {category}>
      {loading ? (
        <SlideProductLoading />
      ) : (
        <div className="pt-40 pb-10 category-products  ">
          <div className="container">
            <div className="top-slide  capitalize relative mb-5 border-b border-border pt-4 pe-5 pb-5">
              <h2 className="text-main! text-3xl mb-2.5">
                {category.replace("-", " ")} ({products.limit})
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Cumque, fuga!
              </p>
            </div>
            <div className="slide-products flex  items-center flex-wrap gap-5 justify-between ">
              {products.products?.map((product, i) => (
                <Product item={product} key={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </PageTransition>
  );
}
