import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SlideProduct from "../../components/slideProduct/SlideProduct";
import ProductDetailsLoading from "./ProductDetailsLoading";
import SlideProductLoading from "../../components/slideProduct/SlideProductLoading";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import PageTransition from "../../components/PageTransition";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [relatedproducts, setRelatedProducts] = useState([]);
  const [loadingRelatedproduct, setLoadingRelatedproduct] = useState(true);

  const { id } = useParams();

  // Get Product Details
  useEffect(() => {
    // fetch product details by id
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // Get product Gategory
  useEffect(() => {
    if (!product) return;

    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => setRelatedProducts(data.products))
      .catch((err) => console.error("Error fetching related products:", err))
      .finally(() => setLoadingRelatedproduct(false));
  }, [product?.category]);

  return (
    <PageTransition key = {id} >
      <>
        {loading ? (
          <ProductDetailsLoading />
        ) : !product ? (
          <p>Product not found.</p>
        ) : (
          <div className="product-details py-40 px-0">
            {/* Product Details  */}
            <div className="container grid grid-cols-1  md:grid-cols-2 gap-10 items-center">
              {/* images slider */}
              <ProductImages product={product} />

              {/* product info */}
              <ProductInfo product={product} />
            </div>
          </div>
        )}

        {/* // Related Products Section */}
        {loadingRelatedproduct ? (
          <SlideProductLoading />
        ) : (
          <SlideProduct
            key={product.category}
            title={product.category.replace("-", " ")}
            data={relatedproducts}
          />
        )}
      </>
    </PageTransition>
  );
}
