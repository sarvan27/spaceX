import React from 'react';
import style from '../../styles/Dashboard.module.css';
import LaunchYearFilter from './elements/LaunchYearFilter';
import SuccessLaunchFilter from './elements/SuccessLaunchFilter';
import SuccessLaingFilter from './elements/SuccessLaingFilter';

function Filter({activeYear, setActiveYear, activeSuccess, setActiveSuccess, activeLaunch, setActiveLaunch}) {

  return (
    <div className={style.filterRoot}>
      <h2 className={style.filterHeader}>
        Filters
      </h2>
      <LaunchYearFilter 
        activeYear={activeYear}
        setActiveYear={setActiveYear}
      />
      <SuccessLaunchFilter
        activeLaunch={activeLaunch}
        setActiveLaunch={setActiveLaunch}
      />
      <SuccessLaingFilter 
        activeSuccess={activeSuccess}
        setActiveSuccess={setActiveSuccess}
      />
    </div>
  )
}

export default Filter