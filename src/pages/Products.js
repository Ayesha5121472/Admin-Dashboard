import { useState, useEffect } from "react";
import { getProducts, saveProducts } from "../utils/localStorageHelper";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  // Add / Update Product
  const handleSave = (e) => {
    e.preventDefault();

    if (!name || !price || !category) {
      alert("Please fill all required fields");
      return;
    }

    const product = {
      id: editingProduct ? editingProduct.id : Date.now(),
      name,
      price,
      category,
      image,
    };

    let updatedProducts;

    if (editingProduct) {
      updatedProducts = products.map((p) =>
        p.id === product.id ? product : p
      );
      setEditingProduct(null);
    } else {
      updatedProducts = [...products, product];
    }

    setProducts(updatedProducts);
    saveProducts(updatedProducts);

    setName("");
    setPrice("");
    setCategory("");
    setImage("");
  };

  // Delete Product
  const handleDelete = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    saveProducts(updatedProducts);
  };

  // Edit Product
  const handleEdit = (p) => {
    setEditingProduct(p);
    setName(p.name);
    setPrice(p.price);
    setCategory(p.category);
    setImage(p.image);
  };

  // Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  // Category Filter
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (categoryFilter === "All" || p.category === categoryFilter)
  );

  return (
    <div className="container-fluid">

      <h2 className="mb-4">Products</h2>

      {/* Search + Filter */}

      <div className="d-flex mb-3 gap-2">

        <input
          type="text"
          className="form-control"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="form-select"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          {categories.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>

      </div>

      {/* Products Table */}

      <div className="table-responsive mb-4">

        <table className="table table-bordered">

          <thead className="table-light">

            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price ($)</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {filteredProducts.length === 0 ? (

              <tr>
                <td colSpan="6" className="text-center">
                  No products found
                </td>
              </tr>

            ) : (

              filteredProducts.map((p, index) => (

                <tr key={p.id}>

                  <td>{index + 1}</td>

                  <td>
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.name}
                        style={{
                          height: "50px",
                          width: "50px",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </td>

                  <td>{p.name}</td>

                  <td>{p.category}</td>

                  <td>{p.price}</td>

                  <td>

                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(p)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(p.id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

      {/* Add / Edit Product Form */}

      <form className="card p-3 shadow-sm" onSubmit={handleSave}>

        <h5 className="mb-3">
          {editingProduct ? "Edit Product" : "Add Product"}
        </h5>

        <div className="mb-2">

          <label className="form-label">Product Name</label>

          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

        </div>

        <div className="mb-2">

          <label className="form-label">Price ($)</label>

          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

        </div>

        <div className="mb-2">

          <label className="form-label">Category</label>

          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >

            <option value="">Select Category</option>
            <option value="Furniture">Furniture</option>
            <option value="Books">Books</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Other">Other</option>

          </select>

        </div>

        <div className="mb-3">

          <label className="form-label">Image (optional)</label>

          <input
            type="file"
            className="form-control"
            onChange={handleImageChange}
          />

          {image && (
            <img
              src={image}
              alt="preview"
              style={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
                marginTop: "10px",
              }}
            />
          )}

        </div>

        {/* Black Button */}

        <button
          type="submit"
          className="btn w-100"
          style={{
            backgroundColor: "#2c2c2c",
            color: "white",
            border: "none",
          }}
        >
          {editingProduct ? "Update Product" : "Add Product"}
        </button>

      </form>

    </div>
  );
};

export default Products;