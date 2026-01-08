import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import SlideProductLoading from "../components/slideProduct/SlideProductLoading";
import Product from "../components/slideProduct/Product";

export default function PageResults() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = new URLSearchParams(useLocation().search).get("query");

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await res.json();
        setResult(data.products || []);
      } catch (error) {
        console.error("Search Error", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) fetchResult();
  }, [query]);

  return (
    <PageTransition key={query}>
      {loading ? (
        <SlideProductLoading key={query} />
      ) : result.length > 0 ? (
        <div className="pt-40 pb-10 category-products  ">
          <div className="container">
            <div className="top-slide  capitalize relative mb-5 border-b border-border pt-4 pe-5 pb-5">
              <h2 className="text-main! text-3xl mb-2.5">
                Results For {query}
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Cumque, fuga!
              </p>
            </div>
            <div className="slide-products flex  items-center flex-wrap gap-5 justify-between ">
              {result?.map((product, i) => (
                <Product item={product} key={i} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="container flex items-center justify-center h-screen">
          <p>No Results found</p>
        </div>
      )}
    </PageTransition>
  );
}
