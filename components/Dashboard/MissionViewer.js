import React from 'react';
import style from '../../styles/Dashboard.module.css';
import MissionCard from '../../modules/MissionCard';

function MissionViewer({missionDetails}) {

  return(
    <div className={style.missionDetailsRoot}>
      <div className={style.missionDetailsFlex}>
        {missionDetails && missionDetails.length > 0 && missionDetails.map((mission, index) => (
          <MissionCard data={mission} key={index} />
        ))}
      </div>
      <div className={style.developedBY}>
        <strong>Developed By : </strong>
        <span>Saravana Kumar R</span>
      </div>
    </div>
  )
}

export default MissionViewer;