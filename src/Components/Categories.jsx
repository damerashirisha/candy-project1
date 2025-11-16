import { useState, useEffect } from "react";
import Nav from "./Nav";
import { Categories, CategoryByName } from "../Common/API";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";

function List() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    async function getCategories() {
        let res = await Categories("products", "categories");
        setCategories(res)
    }
    useEffect(() => {
        getCategories();
    }, []);
    const getproductByCategories = async (category) => {
        const res = await CategoryByName("products", category);
        setProducts(res)

    }
    return (
        <>
            <div className="Scrren">
                <Nav />
                <div className="Categories">
                    <h2>categories</h2>
                    <p>Browse Product By categorie</p>
                    <div className="categories-data">
                        {
                            categories?.map((item) => (
                                <Button onClick={() => getproductByCategories(item.slug)}>{item.name}</Button>
                            ))
                        }

                        {products?.map((item) => (
                            <div className="Card-image" style={{display: "flex"}} key={item.id}>
                                <Card hoverable>
                                    <img src={item.images[0]} height="400px" />
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
        </>
    )
}
export default List;