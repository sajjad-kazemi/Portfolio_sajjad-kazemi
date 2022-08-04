import './Sample.css'

function Sample({ resume }) {
  return (
    <>
      {Object.keys(resume).map((item,index) => {
        const sample = resume[item];
        return (
          <div style={{backgroundImage:`url(${sample.img})`}} className="sample" key={index}>
            <div className="btns">
              {sample.code && (<button onClick={()=> window.open(sample.code)} className="btnCode">Code</button>)}
              {sample.preview && (<button onClick={() =>window.open(sample.preview)} className="btnPreview">Preview</button>)}
            </div>
            <h1 className="title">{sample.name}</h1>
          </div>
        );
      })}
    </>
  );
}

export default Sample;
