import { Link } from "react-router-dom";
function Nav(){
    return (
        <>
        <div className="Nav">
            <div className="Logo">
                <h2>Product Explorer</h2>
                <p>Discover amazing products</p>

            </div>
            <div className="list-item">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Categories">Categories</Link>
                    </li>
                </ul>

            </div>

        </div>
        </>
    )
}
export default Nav;