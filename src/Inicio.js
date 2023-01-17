import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./assets/css/inicio.css";
import "./assets/css/producto.css";
import "./assets/css/styles.css";
import sylvania from "./assets/images/publicidad/Sylvania.png";
import ledvance from "./assets/images/publicidad/ledvance.png";
import nexxt from "./assets/images/publicidad/nexxt.png";
import Slider from "react-slick";
import Product from "./component/Product/Product"
import ProductWidget from "./component/ProductWidget/ProductWidget";
import axios from "axios";
import {useEffect, useState} from "react";



const Inicio = () => {
  const [products, setProducts] = useState([]);
  const [productsWidgetLamps, setProductsWidgetLamps] = useState([]);
  const [productsWidgetRouters, setProductsWidgetRouters] = useState([]);
  const [productsWidgetReflectors, setProductsWidgetReflectors] = useState([]);





  useEffect(async () => {
    await axios.get("https://d4mhnw3cc9.execute-api.us-east-1.amazonaws.com/products")
    .then((response) => {
      setProducts(response.data);
    })

    await axios.get("https://d4mhnw3cc9.execute-api.us-east-1.amazonaws.com/widgets/lamps")
    .then((response) => {
      setProductsWidgetLamps(response.data);
    })

    await axios.get("https://d4mhnw3cc9.execute-api.us-east-1.amazonaws.com/widgets/routers")
    .then((response) => {
        setProductsWidgetRouters(response.data);
    })

    await axios.get("https://d4mhnw3cc9.execute-api.us-east-1.amazonaws.com/widgets/reflectors")
    .then((response) => {
        setProductsWidgetReflectors(response.data);
    })

  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className="section">
        <div className="container">
          <div className="row shop-group">
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src={sylvania} alt=""/>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src={ledvance} alt=""/>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src={nexxt} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="title">Nuevos Productos</h3>
                <div className="section-nav">
                  <ul className="section-tab-nav tab-nav">
                    <li className="active">
                      <a data-toggle="tab" href="/#tab1">
                        Focos Led
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="/#tab1">
                        Lámparas
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="/#tab1">
                        Reflectores
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="/#tab1">
                        Enrutadores
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="products-tabs">
                  <div id="tab1" className="tab-pane active">
                    <Slider {...settings} />
                    <div className="products-slick" data-nav="#slick-nav-1">
                      {products?.map((product) => (
                          <Product name={product.name} price={product.price} discPrice={product.discprice}
                                   category={product.category} src={product.url} numStars={product.stars} hasDiscount={product.hasdisc}/>

                      ))}
                    </div>
                    <div id="slick-nav-1" className="products-slick-nav"/>
                  </div>
                  <Slider/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="hot-deal" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hot-deal">
                <ul className="hot-deal-countdown">
                  <li>
                    <div>
                      <h3>02</h3>
                      <span>Días</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>10</h3>
                      <span>Horas</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>34</h3>
                      <span>Minutos</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>59</h3>
                      <span>Segundos</span>
                    </div>
                  </li>
                </ul>
                <h2 className="text-uppercase">ofertas de la semana</h2>
                <p>Nueva Colección Hasta 50% DE DESCUENTO</p>
                <a className="primary-btn cta-btn" href="/#">
                  ¡Compra ya!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-6">
              <div className="section-title">
                <h4 className="title bottom-title">Enrutadores</h4>
                <div className="section-nav">
                  <div id="slick-nav-3" className="products-slick-nav"/>
                </div>
              </div>
              <div className="products-widget-slick" data-nav="#slick-nav-3">
                <div>
                  {productsWidgetRouters?.map((product) => (
                        <ProductWidget name={product.name} price={product.price} discPrice={product.discprice}
                                       category={product.brand} src={product.url}/>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xs-6">
              <div className="section-title">
                <h4 className="title bottom-title">Reflectores</h4>
                <div className="section-nav">
                  <div id="slick-nav-4" className="products-slick-nav"/>
                </div>
              </div>

              <div className="products-widget-slick" data-nav="#slick-nav-4">
                {productsWidgetReflectors?.map((product) => (
                    <ProductWidget name={product.name} price={product.price} discPrice={product.discprice}
                                   category={product.brand} src={product.url}/>
                ))}

              </div>
            </div>

            {/* <div className="clearfix visible-sm visible-xs"></div> */}

            <div className="col-md-4 col-xs-6">
              <div className="section-title">
                <h4 className="title bottom-title">Lámparas</h4>
                <div className="section-nav">
                  <div id="slick-nav-5" className="products-slick-nav"></div>
                </div>
              </div>

              <div className="products-widget-slick" data-nav="#slick-nav-5">
                {productsWidgetLamps?.map((product) => (
                    <ProductWidget name={product.name} price={product.price} discPrice={product.discprice}
                                   category={product.brand} src={product.url}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Inicio;
