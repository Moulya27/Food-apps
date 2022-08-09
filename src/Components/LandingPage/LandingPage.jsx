import React, { useState, useEffect } from "react";
import LoadingSpinner from "../LoaderSpinner";
import "./LandingPage.css";
import Animation from "./Animation";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import { cities } from "../../data";
import { useNavigate, Link } from "react-router-dom";

let id;
function Card(props) {
  return (
    <>
      <div className="car">
        <div>
          <img
            style={{ width: props.widthy, height: props.heighty }}
            src={props.imgsrc}
            alt=""
          />
        </div>
        <div>
          <h3>{props.texty}</h3>
        </div>
        <div>
          <p>{props.para}</p>
        </div>
      </div>
    </>
  );
}

export function LandingPage() {
  const [isLoading, setisLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [res, setRes] = useState([]);

  let navigate = useNavigate();

  function check() {
    alert("Welcome to restaurant page");
    navigate("/restaurants");
  }

  useEffect(() => {
    if (!query) return;

    let temp = document.querySelector(".trip1");
    if (temp) temp.style.display = "none";
    id = setTimeout(() => {
      let temp = [];
      let c = 0;
      for (let i = 0; i < cities.length; i++) {
        if (c === 5) break;
        if (cities[i].toLowerCase().includes(query.toLowerCase())) {
          temp.push(cities[i]);
          c++;
        }
      }
      setRes(temp);
    }, 300);
    return () => clearTimeout(id);
  }, [query]);

  let text = [
    "Game night?",
    "Cooking Gone Wrong?",
    "Late night at office?",
    "Movie marathon?",
    "Unexpected guests?",
    "Hungry?",
  ];
  const [change, setChange] = useState(text[0]);
  useEffect(() => {
    help();
  }, [change]);
  function help() {
    var i = 0;
    setInterval(() => {
      if (i === 6) {
        i = 0;
      }
      if (i < 6) {
        setChange(text[i]);
        i++;
      }
    }, 2000);
  }

  return (
    <>
      <div
        className="split"
        onClick={() => {
          document.querySelector(".suggestion").style.display = "none";
        }}
      >
        <div className="left">
          <div className="check0">
            <div>
              <img
                src="https://d1ye2ocuext585.cloudfront.net/images/s/Swiggy_Logo_9.png"
                alt="Swiggy logo"
              />
            </div>
          </div>
          <Animation />
          <div className="trip" id="appending">
            <div className="check">
              <input
                className="chinu"
                id="inputt"
                type="text"
                placeholder="Enter your delivery location"
                autoFocus={true}
                spellCheck={false}
                onChange={(e) => setQuery(e.target.value)}
                value={isLoading ? "Fetching your current location..." : query}
              />

              <button onClick={check} id="changing" value="toogle_food">
                {isLoading ? <LoadingSpinner /> : "Find Food"}
              </button>
            </div>
          </div>
          <div className="trip1" style={{ display: query ? "" : "none" }}>
            Please add your delivery location
          </div>
          <article
            className="suggestion"
            style={{
              display: query ? "" : "none",
            }}
          >
            {res.map((i, index) => (
              <div
                key={index}
                style={{
                  borderBottom:
                    index === res.length - 1
                      ? "0px"
                      : "1px solid rgb(229, 229, 229)",
                }}
                className="show"
              >
                <p
                  className="city-name show city"
                  onClick={() => {
                    setQuery(i);
                  }}
                >
                  <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;{" "}
                  {i}
                </p>
              </div>
            ))}
          </article>
          <div style={{ marginBottom: "10px", marginTop: "10px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "600", color: "grey" }}>
              POPULAR CITIES IN INDIA
            </h3>
            <div style={{ paddingRight: "15px" }} className="popular alterflex">
              <Link to="/restaurants">
                {" "}
                <div style={{ color: "grey" }}>Ahmedabad</div>
              </Link>
              <div style={{ color: "lightgray" }}>Bangalore</div>
              <div style={{ color: "grey" }}>Chennai</div>
              <div style={{ color: "lightgray" }}>Delhi</div>
              <div style={{ color: "grey" }}>Gurgaon</div>
              <div style={{ color: "lightgray" }}>Hyderabad</div>
              <div style={{ color: "grey" }}>Kolkata</div>
              <div style={{ color: "lightgray" }}>Mumbai</div>
              <div style={{ color: "grey" }}>Pune &nbsp;&</div>
              <div style={{ color: "lightgray" }}>more.</div>
            </div>
          </div>
        </div>

        <div className="right">
          <img
            style={{
              width: "755px",
              height: "100%",
              objectFit: "cover",
              objectPosition: "-3px -27px",
              marginLeft: "150px",
            }}
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch2-new_xexpaz"
            alt=""
          />
        </div>
      </div>
      <div className="two">
        <Card
          imgsrc="https://web.archive.org/web/20210903175337im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
          widthy="105px"
          heighty="199px"
          texty="No Minimum Order"
          para="Order in for yourself or for the group, with no restrictions on order value"
        />
        <Card
          imgsrc="https://web.archive.org/web/20210903175338im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
          widthy="112px"
          heighty="206px"
          texty="Live Order Tracking"
          para="Know where your order is at all times, from the restaurant to your doorstep"
        />
        <Card
          imgsrc="https://web.archive.org/web/20210903175339im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
          widthy="124px"
          heighty="188px"
          texty="Lightning-Fast Delivery"
          para="Experience Swiggy's superfast delivery for food delivered fresh & on time
          "
        />
      </div>
      <div className="three">
        <div className="do">
          <h1>
            Restaurants in
            <br /> your pocket
          </h1>
          <p>
            Order from your favorite restaurants & track on the go, with the
            all-new Swiggy app.
          </p>
          <div className="do1">
            <a href="https://play.google.com/store/apps/details?id=in.swiggy.android">
              <img
                style={{ height: "54px" }}
                src="https://web.archive.org/web/20210903175340im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
                alt=""
              />
            </a>
            <a href="https://itunes.apple.com/in/app/swiggy-food-order-delivery/id989540920">
              <img
                style={{ height: "54px" }}
                src="https://web.archive.org/web/20210903175341im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="do2">
          <div>
            <img
              className="set"
              src="https://web.archive.org/web/20210903175342im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"
              alt=""
            />
          </div>
          <div>
            <img
              className="set1"
              src="https://web.archive.org/web/20210903175343im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
      <footer>
        <img
          className="footer_logo"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
          alt=""
          width="200px"
          height="60px"
        />
        <p style={{ color: "white", fontSize: "21px" }}>&copy; 2022 Foods</p>
        <div
          style={{
            width: "200px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="icons"
        >
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
            alt=""
            width="24"
            height="24"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
            alt=""
            width="24"
            height="24"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
            alt=""
            width="24"
            height="24"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
            alt=""
            width="24"
            height="24"
          />
        </div>
      </footer>
    </>
  );
}
