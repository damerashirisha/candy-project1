
import { useState, useEffect } from "react";
import Nav from "./Nav";
import { Categories, CategoryByName } from "../Common/API";
import { Button, Card } from "antd";

function List() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // Load categories
  useEffect(() => {
    async function loadCategories() {
      const res = await Categories("products", "categories");
      setCategories(res);
    }
    loadCategories();
  }, []);

  // Load products of selected category
  const getProductsByCategory = async (category) => {
    const res = await CategoryByName("products", category);
    setProducts(res);
  };

  return (
    <div className="Scrren">
      <Nav />

      <div className="Categories">
        <h2>categories</h2>
        <p>Browse Product By categorie</p>

        <div className="categories-data">

          {/* CATEGORY BUTTONS */}
          {categories.map((item) => (
            <Button
              key={item.slug}
              onClick={() => getProductsByCategory(item.slug)}
            >
              {item.name}
            </Button>
          ))}

          {/* PRODUCT CARDS */}
          {products.map((item) => (
            <div className="Card-image" style={{ display: "flex" }} key={item.id}>
              <Card hoverable>
                <img src={item.images[0]} height="400px" alt={item.title} />
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.brand}</p>
                  <p>{item.rating}</p>
                </div>
                <div>
                  <p>{item.price}</p>
                </div>

                <div className="discountprice">-10%</div>
              </Card>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default List;

