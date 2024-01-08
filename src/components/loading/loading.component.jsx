import React from "react";
import logo from "../../assets/ks-logo.png";
import ReactLoading from "https://cdn.skypack.dev/react-loading@2.0.3";

import "./loading.component.styles.scss";

export default function Loading() {
  return (
    <div className="loading-container">
      <ReactLoading type={"bars"} color={"#c0c48d"} height={100} width={100} />
    </div>
  );

  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        top: "calc(50% - 50px)",
        left: "calc(50% - 50px)",
        backgroundColor: "#00000033",
        borderRadius: 10,
        padding: 20,
      }}
    >
      <img
        alt="logo"
        src={logo}
        style={{
          borderRadius: 70,
          width: 70,
          height: 70,
          marginBottom: -75,
          marginTop: 10,
          padding: 3,
          margin: "auto",
          backgroundColor: "#c0c48d",
        }}
      />
      <div>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
