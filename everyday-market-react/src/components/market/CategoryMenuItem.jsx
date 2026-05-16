function CategoryMenuItem({ category, selectedCategory, onSelectCategory }) {
  const isSelected = category.name === selectedCategory?.name;

  return (
    <button
      className={isSelected ? "product-card selected" : "product-card"}
      onClick={() => onSelectCategory(category)}
    >
      <img src={category.image} alt={category.name} />
      <h3>{category.name}</h3>
      <p>{category.price}</p>
    </button>
  );
}

export default CategoryMenuItem;