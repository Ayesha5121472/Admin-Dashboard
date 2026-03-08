import React, { useState } from "react";

const EditProductForm = ({ product, onUpdate, onCancel }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...product,
      name,
      price,
      category,
    };

    onUpdate(updatedProduct);
  };

  return (
    <div className="edit-form">
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Update</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProductForm;