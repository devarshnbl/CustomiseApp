import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Page } from "@shopify/polaris";
import PocketCustomizer from "../../components/customizer/PocketCustomizer";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query; // Extract product ID from query params
  const [product, setProduct] = useState(null); // State to store product data

  useEffect(() => {
    if (id) {
      fetchProduct(id); // Fetch product data if ID is available
    }
  }, [id]);

  const fetchProduct = async (productId) => {
    try {
      const response = await fetch(`/api/products/${productId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProduct(data); // Set product data
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  return (
    <Page>
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <PocketCustomizer product={product} />
        </div>
      ) : (
        <p>Loading...</p> // Show a loading message if product data isn't ready
      )}
    </Page>
  );
}
