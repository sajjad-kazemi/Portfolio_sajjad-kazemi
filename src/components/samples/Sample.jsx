import './Sample.css'

import React, { useState } from "react";

function Sample({ resume }) {
  return (
    <>
      {Object.keys(resume).map((item) => {
        const sample = resume[item];
        return (
          <div style={{backgroundImage:`url(${sample.img})`}} className="sample" key={sample.key}>
            <div className="btns">
              <button onClick={()=> window.open(sample.code)} className="btnCode">Code</button>
              <button onClick={() =>window.open(sample.preview)} className="btnPreview">Preview</button>
            </div>
            <div className="title">{sample.name}</div>
          </div>
        );
      })}
    </>
  );
}

export default Sample;
