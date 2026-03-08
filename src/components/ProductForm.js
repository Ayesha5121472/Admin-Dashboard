import { useState, useEffect } from "react";

const ProductForm = ({ onSave, editingProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
      setImage(editingProduct.image || "");
    }
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return alert("Please fill all fields");

    onSave({ ...editingProduct, name, price, image });
    setName("");
    setPrice("");
    setImage("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3 row g-2">
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="col-md-3">
        <input
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="col-md-3">
        <input type="file" className="form-control" onChange={handleImageChange} />
      </div>
      <div className="col-md-2 d-flex align-items-center">
        <button className="btn btn-primary w-100">
          {editingProduct ? "Update" : "Add"}
        </button>
      </div>
      {image && (
        <div className="col-12 mt-2">
          <img src={image} alt="preview" className="img-thumbnail" style={{ maxWidth: 150 }} />
        </div>
      )}
    </form>
  );
};

export default ProductForm;