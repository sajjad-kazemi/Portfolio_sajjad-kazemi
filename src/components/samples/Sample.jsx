import './Sample.css'
function Sample({ resume }) {
  return (
    <>
      {Object.keys(resume).map((item,index) => {
        const sample = resume[item];
        return (
          <div style={{backgroundImage:`url(${sample.img})`}} className="sample" key={index}>
            <div className="btns">
              {sample.code && (<a target="_blank" href={sample.code}>Code</a>)}
              {sample.preview && (<a target="_blank" href={sample.preview} >Preview</a>)}
            </div>
            <h1 className="title">{sample.name}</h1>
          </div>
        );
      })}
    </>
  );
}

export default Sample;
