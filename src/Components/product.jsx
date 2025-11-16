import { Card } from "antd";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductByid } from "../Common/API";
import { Descriptions } from 'antd';

function Product() {
    const [product, setProduct] = useState({})
    const [image, setImage] = useState(0)
    const { id } = useParams()
    async function getProduct() {
        debugger
        const res = await getProductByid("products", id)
        setProduct(res)
    }
    useEffect(() => {
        getProduct()
    }, [])
    const onclickChangeimage = (index) => {
        setImage(index)
    }
    return (
        <>
            <div className="Scrren">
                <Nav />
                <div className="Product-display">
                    {
                        product ?
                            <>
                                <div className="product-style">
                                    <div className="image-card">
                                        <Card>
                                            <img src={product?.images?.[image]} height="400px" width="300px" />
                                        </Card>
                                    </div>
                                    <div className="description">
                                        <h3>{product?.title}</h3>
                                        <h2>{product?.category}</h2>
                                        <div style={{ display: "flex" }}>
                                            <h2>{product?.rating}</h2>
                                            <h2>{product?.stock}</h2>
                                        </div>
                                        <div>
                                            <Card title="Discription">
                                                {product?.description}

                                            </Card>
                                        </div>
                                        <div style={{marginTop:"10px"}}>
                                            <Card title="Product Details">
                                                <Descriptions>
                                                    <Descriptions.Item label="Brand">{product?.brand}</Descriptions.Item>
                                                    <Descriptions.Item label="category">{product?.category}</Descriptions.Item>
                                                    <Descriptions.Item label="Stock">{product?.stock}</Descriptions.Item>
                                                    <Descriptions.Item label="Rating">{product?.rating}</Descriptions.Item>
    
                                                </Descriptions>
                                            </Card>
                                        </div>


                                    </div>


                                </div>
                                <div className="images-array">
                                    {
                                        product?.images?.map((item, index) => (
                                            <>
                                                <img src={item} alt="" width="100px" height="100px" onClick={() => onclickChangeimage(index)} />
                                            </>
                                        ))
                                    }

                                </div>
                            </> :
                            <></>
                    }

                </div>

            </div>
        </>
    )
}
export default Product;