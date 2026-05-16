import CategoryMenuItem from "./CategoryMenuItem";

function CategoryMenu({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="product-grid">
      {categories.map((category) => (
        <CategoryMenuItem
          key={category.name}
          category={category}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
      ))}
    </div>
  );
}

export default CategoryMenu;