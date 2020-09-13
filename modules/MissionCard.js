import React, { useState, useEffect } from 'react';
import style from '../styles/Home.module.css';

function MissionCard({data}) {

  const [landSuccess, setLandSuccess] = useState('');

  useEffect(() => {
    if(data.rocket && data.rocket.first_stage && data.rocket.first_stage.cores && data.rocket.first_stage.cores.length > 0 ){
      data.rocket.first_stage.cores.forEach((core) => {
        if(typeof core.land_success === "boolean") {
          setLandSuccess(core.land_success.toString());
          if(!core.land_success){
            return;
          }
        }
      })
    }
  },[data]);

  return (
    <div className={style.missionCardRoot}>
      {/* <img src={data.links && data.links.mission_patch} alt="" /> */}
      <div className={style.missionCardImage}>
        <img width={'100%'} height={'100%'} src={data.links && data.links.mission_patch} alt="" />
      </div>
      <h4>
        {data.mission_name} # {data.flight_number}
      </h4>
      {data.mission_id && data.mission_id.length > 0 && 
        <>
          <strong>
            Mission Ids:
          </strong>
          <div>
            {data.mission_id.map((id, index) => (
              <li key={index}>
                {id}
              </li>
            ))}
          </div>
        </>
      }
      <div>
        <strong>Launch Year : </strong><span>{data.launch_year}</span>
      </div>
      <div>
        <strong>Successful Launch : </strong><span>{typeof data.launch_success === "boolean"  && data.launch_success.toString()}</span>
      </div>
      {landSuccess && <div>
        <strong>Successful Landing : </strong><span>{landSuccess}</span>
      </div>}
    </div>
  )
}

export default MissionCard;