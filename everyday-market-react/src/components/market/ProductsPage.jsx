import { useEffect, useState } from "react";
import CategoryMenu from "./CategoryMenu";
import { marketServiceWithALotCategories } from "../../data/marketService";

function ProductsPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    marketServiceWithALotCategories().then((data) => {
      setCategories(data);
      setSelectedCategory(data[0]);
    });
  }, []);

  function handleSelectCategory(category) {
    setSelectedCategory(category);
    console.log("Selected category:", category.name);
  }

  return (
    <main className="products-page">
      <h2>Product Page</h2>

      {categories.length === 0 ? (
        <p className="loading">Loading products...</p>
      ) : (
        <>
          <CategoryMenu
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />

          <section className="description-box">
            <div className="description-icon">🛒</div>
            <div>
              <h2>{selectedCategory.name}</h2>
              <p>{selectedCategory.description}</p>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default ProductsPage;