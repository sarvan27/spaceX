import React, { useState, useEffect } from 'react';
import styles from '../../styles/Dashboard.module.css'
import Filter from './Filter';
import axios from 'axios';
import MissionViewer from './MissionViewer';

function Dashboard() {

  const [activeYear, setActiveYear] = useState('');
  const [activeSuccess, setActiveSuccess] = useState('');
  const [activeLaunch, setActiveLaunch] = useState('');
  const [missionDetails, setMissionDetails] = useState([]);

  useEffect(() => {
    setMissionDetails([])
    let url = 'https://api.spaceXdata.com/v3/launches?limit=100';
    if(activeYear){
      url += `&launch_year=${activeYear}`
    }
    if(activeLaunch){
      url += `&launch_success=${activeLaunch.toLowerCase()}`
    }
    if(activeSuccess){
      url += `&land_success=${activeSuccess.toLowerCase()}`
    }

    axios
      .get(url)
      .then((res) => setMissionDetails(res.data))
      .catch(() => {});
  },[activeYear, activeSuccess, activeLaunch]);

  return(
    <div className={styles.dashboardRoot}>
      <Filter 
        activeYear={activeYear}
        setActiveYear={setActiveYear}
        activeSuccess={activeSuccess}
        setActiveSuccess={setActiveSuccess}
        activeLaunch={activeLaunch}
        setActiveLaunch={setActiveLaunch}
      />
      {missionDetails.length > 0 ? <MissionViewer missionDetails={missionDetails}/> : <></>}
    </div>
  )
}

export default Dashboard;