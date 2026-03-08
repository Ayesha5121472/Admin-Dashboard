import { useEffect, useState } from "react";
import { getProducts } from "../utils/localStorageHelper";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <div className="container-fluid">
      <h2 className="mb-4">All Products</h2>

      <div className="row g-3">

        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map((p) => (
            <div key={p.id} className="col-12 col-md-6 col-lg-3">

              <div className="product-card">

                {p.image && (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="img-fluid"
                  />
                )}

                <h5>{p.name}</h5>

                <p>Category: {p.category}</p>

                <p>Price: ${p.price}</p>

              </div>

            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default AllProducts;