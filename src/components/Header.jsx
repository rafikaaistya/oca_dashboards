import React, { useEffect, useState } from "react";
import "../assets/style/style.css";
import { FaSearch } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="row mx-1">
        <div className="col-4 mt-4">
          <div className="input-group border-0">
            <div className="input-group-prepend">
              <span
                className="input-group-text border-1 bg-white"
                id="basic-addon1"
                style={{ borderRightColor: "white" }}
              >
                <FaSearch />
              </span>
            </div>
            <input
              type="text"
              className="form-control form-border"
              placeholder="Any help?"
            />
          </div>
        </div>
        <div className="col-8 mt-2 text-right flex">
          <div className="col mt-2 font-small">
            <b>Hi, Adjie</b>
            <p>Adjie.g4nt3ng@banget.com</p>
          </div>
          <p className="text-grey" style={{ fontSize: "30px" }}>
            <FaUserCircle />
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
