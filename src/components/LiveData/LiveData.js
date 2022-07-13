import React from "react";
import "./LiveData.css";

const LiveData = (props) => {
  const { state, active, confirmed, recovered, deaths, lastupdatedtime } =
    props.data;
  return (
    <div className="StateWiseInfo">
      <div>
        <h4>State <br />{state}</h4>
      </div>
      <div>
        <h4>Active<br></br> {active}</h4>
      </div>
      <div>
        <h4>Confirmed<br></br> {confirmed}</h4>
      </div>
      <div>
        <h4>Recovered<br></br> {recovered}</h4>
      </div>
      <div>
        <h4>Deaths<br></br> {deaths}</h4>
      </div>
      <div>
        <h4>Last Updated On<br></br> {lastupdatedtime}</h4>
      </div>
    </div>
  );
};

export default LiveData;
