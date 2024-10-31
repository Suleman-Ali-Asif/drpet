import React, { useEffect, useState } from "react";
import { Breadcrumb, ProductCard, Filters } from "../components";
import { API_BASE_URL } from "../config";

const Products = () => {
  const [productData, setProductData] = useState([]);

  const breadcrumbItems = [
    { name: "Home", link: "/" },
    { name: "Products", active: true },
  ];

  const pageNumber = 1;
  const pageSize = 10;

  async function getProducts() {
    try {
      const getAllCategories = await fetch(
        `${API_BASE_URL}/Category/All?pageNumber=${pageNumber}&pageSize=${pageSize}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const categories = await getAllCategories.json();
      const categoryNames = ["Cat", "Dog", "Horse", "Accessories"];

      const products = [];
      for (const name of categoryNames) {
        const category = categories.data.find((cat) => cat.name === name);

        if (category) {
          const productsResponse = await fetch(
            `${API_BASE_URL}/Product/All?categoryId=${category.id}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const productsData = await productsResponse.json();

          if (productsData.data && productsData.data.length > 0) {
            productsData.data.forEach((product) => {
              products.push({
                id: product.id,
                imagePath: product.imagePath || "default-image.jpg",
                name: product.name,
                price: product.price,
                discountPercentage: product.discountPercentage || 0,
                currencySymbol: product.currencySymbol,
              });
            });
          }
        }
      }
      setProductData(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="main-wrapper mt-16 md:mt-20">
      <section className="bg-gray-200 px-4 py-12 md:px-24 text-center top-banner-inner-pages h-32 md:h-68">
        <h3 className="font-medium text-blue pb-4">Products</h3>
        <Breadcrumb items={breadcrumbItems} align="center" />
      </section>
      <section className="px-4 py-4 md:px-20">
        <div className="md:flex">
          <div className="w-full md:w-1/4 p-4">
            <Filters
              categories={["Electronics", "Books", "Clothing"]}
              breeds={["Adult Dog", "Adult Cat", "Dog"]}
              brands={["Acana", "All for Paws", "Beezteez"]}
              onFilterChange={(filter, value) =>
                console.log(`Selected ${value} for ${filter}`)
              }
            />
          </div>
          <div className="w-full md:w-3/4 p-4">
            <ProductCard content={productData} cardsPerRow={4} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
