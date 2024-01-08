import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate, Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import Button from "../../components/button/button.component";

import fb_icon_img from "../../assets/fb-icon.png";
import ig_icon_img from "../../assets/ig-icon.png";
import left_arrow_img from "../../assets/left-arrow.png";
import right_arrow_img from "../../assets/right-arrow.png";

import "./stylists.styles.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "solid thick #c0c48d",
    width: "70%",
    overflow: "hidden",
  },
};

Modal.setAppElement("#root");

const StylistModal = ({
  open,
  setOpen,
  stylists,
  stylist,
  setSelectedStylist,
}) => {
  const navigate = useNavigate();

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      style={customStyles}
    >
      <div className="stylist-modal">
        <button className="close-button" onClick={() => setOpen(!open)}>
          &#x2715;
        </button>

        <div className="modal-border">
          <div className="modal-content">
            {/* First */}
            <div>
              <img
                onClick={() => {
                  let tempId = stylist.id;

                  if (tempId > 1) {
                    tempId = stylist.id - 1;
                    setSelectedStylist(
                      stylists.filter((obj) => obj.id === tempId)[0]
                    );
                  } else {
                    setOpen(false);
                  }
                }}
                className="navigation-arrows"
                src={left_arrow_img}
                alt="left navigation arrow"
              />
            </div>

            {/* Second */}
            <div>
              <img
                className="profile-picture"
                src={stylist?.profileImg}
                alt="stylist profile"
              />
              <img src={stylist?.teamLogoImg} alt="stylist team logo" />
              <Button onClick={() => navigate("/contact")} buttonType="tan">
                BOOK WITH THIS STYLIST
              </Button>
              <div>
                <a
                  href="https://www.facebook.com/karensuttonhairstudio"
                  target="_blank"
                >
                  <img
                    className="social-media-icons"
                    src={fb_icon_img}
                    alt="Facebook icon"
                  />
                </a>
                <a
                  href="https://www.instagram.com/karensuttonhairstudio/"
                  target="_blank"
                >
                  <img
                    className="social-media-icons"
                    src={ig_icon_img}
                    alt="Instagram icon"
                  />
                </a>
              </div>
            </div>

            {/* Third */}
            <div>
              <h1>{stylist?.name?.toUpperCase()}</h1>
              <img src={stylist?.quoteImg} alt="stylist quote" />
              {/* <p className="stylist-bio">{stylist?.bio}</p> */}
              <ReactQuill
                theme="bubble"
                value={stylist?.bio}
                style={{
                  marginTop: "1px",
                  marginBottom: "2px",
                  fontFamily: "Montserrat",
                  textAlign: "justify",
                  textAlignLast: "left",
                  marginBottom: "2rem",
                  fontSize: "14px",
                }}
                readOnly
              />
            </div>

            {/* Fourth */}
            <div>
              <img
                onClick={() => {
                  let tempId = stylist.id;
                  if (tempId < 5) {
                    tempId = stylist.id + 1;
                    setSelectedStylist(
                      stylists.filter((obj) => obj.id === tempId)[0]
                    );
                  } else setOpen(false);
                }}
                className="navigation-arrows"
                src={right_arrow_img}
                alt="right navigation arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default StylistModal;
