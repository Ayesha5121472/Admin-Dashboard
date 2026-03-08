const ProductTable = ({ products, onEdit, onDelete }) => {
  if (!products.length) return <p>No products found.</p>;

  return (
    <div className="table-responsive">
      <table className="table table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td>{p.image && <img src={p.image} alt="product" style={{ width: 50 }} />}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(p)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => onDelete(p.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;