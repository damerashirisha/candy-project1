
import { useEffect, useState } from "react";
import { getProducts, SearchProduct } from "../Common/API";
import { Button, Card, Input } from "antd";
import { Link } from "react-router-dom";

const { Search } = Input;

function Products() {
    const [products, setProducts] = useState([]);

    const GetProducts = async () => {
        const res = await getProducts("products");
        setProducts(res);
    };

    useEffect(() => {
        GetProducts();
    }, []);

    const onSearch = async (value) => {
        if (!value) {
            GetProducts();
            return;
        }

        const result = await SearchProduct("products", value);
        setProducts(result);
    };

    return (
        <div className="Products">
            {/* Search Section */}
            <div className="Search">
                <h1>All Products</h1>
                <p>Browse our complete collection of products</p>

                <Search
                    placeholder="Search Product..."
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </div>

            {/* Product Cards */}
            <div className="images">
                {products.map((item) => (
                    <div className="Card-image" key={item.id}>
                        <Card hoverable>
                            <img src={item.images[0]} height="400px" />

                            <div>
                                <h5>{item.title}</h5>
                                <p>{item.brand}</p>
                                <p>Rate: {item.rating}</p>
                            </div>

                            <div>
                                <p>₹{item.price}</p>
                            </div>

                            <div className="discountprice">-10%</div>

                            <Link to={`/product/${item.id}`}>
                                <Button type="primary">View Item</Button>
                            </Link>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;

