
import { Card, Descriptions } from "antd";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductByid } from "../Common/API";

function Product() {
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState(0);
  const { id } = useParams();

  // Fetch product details
  useEffect(() => {
    async function loadProduct() {
      const res = await getProductByid("products", id);
      setProduct(res);
    }
    loadProduct();
  }, [id]);

  // Change image on click
  const handleImageChange = (index) => {
    setImage(index);
  };

  if (!product) return null;

  return (
    <div className="Scrren">
      <Nav />

      <div className="Product-display">
        <div className="product-style">

          {/* Main Image */}
          <div className="image-card">
            <Card>
              <img
                src={product.images?.[image]}
                height="400px"
                width="300px"
                alt="product"
              />
            </Card>
          </div>

          {/* Right Side Description */}
          <div className="description">
            <h3>{product.title}</h3>
            <h2>{product.category}</h2>

            <div style={{ display: "flex", gap: "20px" }}>
              <h2>{product.rating}</h2>
              <h2>{product.stock}</h2>
            </div>

            {/* Description Card */}
            <Card title="Description">
              {product.description}
            </Card>

            {/* Product Details */}
            <div style={{ marginTop: "10px" }}>
              <Card title="Product Details">
                <Descriptions>
                  <Descriptions.Item label="Brand">{product.brand}</Descriptions.Item>
                  <Descriptions.Item label="Category">{product.category}</Descriptions.Item>
                  <Descriptions.Item label="Stock">{product.stock}</Descriptions.Item>
                  <Descriptions.Item label="Rating">{product.rating}</Descriptions.Item>
                </Descriptions>
              </Card>
            </div>
          </div>
        </div>

        {/* Thumbnail Images */}
        <div className="images-array">
          {product.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              width="100px"
              height="100px"
              alt="thumbnail"
              onClick={() => handleImageChange(index)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Product;
