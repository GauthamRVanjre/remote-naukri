import React from "react";
import close from "../components/images/icon-remove.svg";
import Image from "next/image";

const Header = ({ keywords, removekeywords, removeAllKeywords }: any) => {
  return (
    <>
      <div className="header-container">
        {/* <ul>
          {keywords.map((key, id) => {
            return (
              <li key={id}>
                {key}
                <button className="close" onClick={() => removekeywords(key)}>
                  &#x2716;
                </button>
              </li>
            );
          })}
          <a href="/" onClick={() => removeAllKeywords()}>
            Clear Filters
          </a>
        </ul> */}
      </div>
    </>
  );
};

export default Header;
