import React from 'react';
import style from "./Error.module.css";
import ErrorImg from "../../../Assets/Error Img.gif";

function Error() {
  return (
      <div id={style.errorContainer}>
            <h1>Page Not Found</h1>
            <img src={ErrorImg} alt='Error Img'/>
      </div>
    )
}

export default Error;