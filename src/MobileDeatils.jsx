import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./styles.css";
import data from "./Data";
import "./styles.css";
import { ShopContext } from "./Context/UseContext";

// const nevigate=useNavigate();

const MobileDetails = (props) => {
  // console.log(props);
  const { id } = useParams();
  const [modal, setmodal] = useState(false);
  const { addToCart } = useContext(ShopContext);
  const Mymodel = () => {
    return (
      <>
        <div className="model-wrapper" onClick={() => setmodal(false)}>
          <div className="model-container">
            <h2>{data[id].name}</h2>

            <img src={data[id].imgsrc} />
            <h6 align="center">${data[id].price}</h6>

            <h6 align="center">Added to Cart✅</h6>
            <div className="btn-model-box">
              <Link to="/">
                <button className="btn-box" onClick={() => setmodal(false)}>
                  Continue
                </button>
              </Link>
              <Link to="/cart">
                <button className="btn-box" onClick={() => setmodal(false)}>
                  Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="m-cnt">
        <div className="mobile-detail-container">
          <div className="detail-img">
            <img src={data[id].imgsrc} />
          </div>
          <div className="mobile-discription">
            <h1>{data[id].name}</h1>
            <h5>Description</h5>
            <h6>{data[id].description}</h6>
            <Link to="/">
              <button className="btn"> Back to Store</button>
            </Link>
            <button
              onClick={() => {
                setmodal(true);
                // props.setinp([...props.inp, id]);
                if (props.inp.indexOf(id) == -1) {
                  props.setinp([...props.inp, id]);
                }
                addToCart(id);
              }}
              className="btn btn2">
              Add Cart
            </button>
            {modal && <Mymodel />}
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileDetails;
