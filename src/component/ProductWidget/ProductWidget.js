const ProductWidget = ({src,category,name,discPrice,price}) => {

    return (
        <div className="product-widget">
            <div className="product-img">
                <img src={src} alt=""/>
            </div>
            <div className="product-body">
                <p className="product-category">{category}</p>
                <h3 className="product-name">
                    <a href="/#">{name}</a>
                </h3>
                <h4 className="product-price">
                    ${discPrice} <del className="product-old-price">${price}</del>
                </h4>
            </div>
        </div>
    )
}

export default ProductWidget;