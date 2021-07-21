import React from 'react';
import CardTable from "./CardTable";
import LayTable from "./LayTable";
import PointTable from "./PointTable";


const HandFootScores = () => {
  return (
      <React.Fragment>
        <div className="hand-foot-scores">
          <LayTable/>
          <CardTable/>
          <PointTable/>
        </div>
      </React.Fragment>
  );
};
export default HandFootScores;