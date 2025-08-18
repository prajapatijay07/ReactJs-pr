// ShopBanner.jsx
import React from "react";

// Local assets
import Jamun from "../../assets/black-jamun.png";
import Tomato from "../../assets/tamato.png";
import Onion from "../../assets/onion.png";
import BannerLeaf from "../../assets/banner-leaf.png";

// Banner dimensions (to keep consistent width/height)
const BANNER_WIDTH = 1905;
const BANNER_HEIGHT = 466;

const ShopBanner = () => {
  // --- Styles ---
  const wrapperStyle = {
    width: `${BANNER_WIDTH}px`,
    height: `${BANNER_HEIGHT}px`,
    margin: "0 auto",
    position: "relative",
    backgroundColor: "#fff8ec",
    padding: "40px 60px",
    boxSizing: "border-box",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const titleStyle = {
    fontSize: 64,
    color: "#111111",
    margin: "0 0 15px 0",
    fontWeight: 700,
    lineHeight: 1.05,
    textAlign: "center",
  };

  const paragraphStyle = {
    fontSize: 24,
    color: "#777777",
    margin: 0,
    maxWidth: 600,
    lineHeight: 1.5,
    textAlign: "center",
    marginInline: "auto",
  };

  const breadcrumbStyle = {
    position: "absolute",
    right: 80,
    bottom: 40,
    fontSize: 18,
    color: "#777777",
  };

  const decorativeImg = (props) => ({
    position: "absolute",
    filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.08))",
    ...props,
  });

  return (
    <section style={{ marginTop: 100, background: "#fff8ec" }}>
      <div style={wrapperStyle}>
        {/* --- Decorative Floating Images --- */}
        <img
          src={Jamun}
          alt="Black Jamun"
          style={decorativeImg({ left: 20, top: 160, width: 100 })}
        />
        <img
          src={Onion}
          alt="Onion"
          style={decorativeImg({
            left: BANNER_WIDTH * 0.62,
            top: 180,
            width: 100,
          })}
        />
        <img
          src={BannerLeaf}
          alt="Leaf"
          style={decorativeImg({ right: 20, top: 36, width: 120 })}
        />
        <img
          src={Tomato}
          alt="Tomato"
          style={decorativeImg({ right: 60, bottom: 24, width: 90 })}
        />

        {/* --- Centered Text Content --- */}
        <div style={{ maxWidth: 900, textAlign: "center" }}>
          <h1 style={titleStyle}>Blog Right</h1>
          <p style={paragraphStyle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* --- Breadcrumb --- */}
        <div style={breadcrumbStyle} className="mb-5">
          <span>Home</span>
          <span style={{ margin: "0 10px" }}>/</span>
          <span style={{ color: "#ff4b4b" }}>Blog Right</span>
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;
