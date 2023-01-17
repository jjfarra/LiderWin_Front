import ledsmart from "../../assets/images/products/ledvance_smart.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faExchangeAlt,
    faShoppingCart as fasFaShoppingCart,
    faStar as FullStar,
} from "@fortawesome/free-solid-svg-icons";
import {faEye as farFaEye, faHeart as farFaHeart , faStar as EmptyStar} from "@fortawesome/free-regular-svg-icons";




const Product =  ({name,src,hasDiscount,category,price,discPrice,numStars}) => {
    const emptyStars = Array.from({length: 5-numStars}, (_, index) => {
        return <FontAwesomeIcon key={index}  icon={EmptyStar}/>;
    });

    const fullStars = Array.from({length: numStars}, (_, index) => {
        return <FontAwesomeIcon key={index}  icon={FullStar}/>;
    });



    return (
        <div className="product">
            <div className="product-img">
                <img src={src} alt=""/>
                {hasDiscount && (
                    <div className="product-label">
                        <span className="sale">-30%</span>
                        <span className="new">NUEVO</span>
                    </div>
                )}
            </div>
            <div className="product-body">
                <p className="product-category">{category}</p>
                <h3 className="product-name">
                    <a href="/#">{name}</a>
                </h3>
                <h4 className="product-price">
                    ${discPrice}{" "}
                    <del className="product-old-price">${price}</del>
                </h4>
                <div className="product-rating">

                    {fullStars}
                    {emptyStars}
                </div>
                <div className="product-btns">
                    <button className="add-to-wishlist">
                        <FontAwesomeIcon icon={farFaHeart}/>
                        <span className="tooltipp">
                                agregar a favoritos
                              </span>
                    </button>
                    <button className="add-to-compare">
                        <FontAwesomeIcon icon={faExchangeAlt}/>
                        <span className="tooltipp">comparar</span>
                    </button>
                    <button className="quick-view">
                        <FontAwesomeIcon icon={farFaEye}/>
                        <span className="tooltipp">vista rápida</span>
                    </button>
                </div>
            </div>
            <div className="add-to-cart">
                <button className="add-to-cart-btn">
                    <FontAwesomeIcon icon={fasFaShoppingCart}/> agregar
                    al carrito
                </button>
            </div>
        </div>
    )
}

export default Product;