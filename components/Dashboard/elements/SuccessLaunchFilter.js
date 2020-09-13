import React from 'react';
import style from '../../../styles/Dashboard.module.css'
import FilterButton from '../../../modules/FilterButton';


const success = ['True', 'False'];

function SuccessLaunchFilter({activeLaunch, setActiveLaunch}){

  const handleClick = (data) => {
    if(data === activeLaunch){
      setActiveLaunch('')
    }else{
      setActiveLaunch(data);
    }
  }

  return(
    <div className={style.launchYearRoot}>
      <div className={style.launchYearTitle}>
        Successful Launch
      </div>
      <hr id={'hr1'}/>
      <div className={style.filterButtonFlex}>
        {success.map((obj, index) => (
          <FilterButton data={obj} key={index} handleClick={handleClick} active={activeLaunch} />
        ))}
      </div>
    </div>
  )
}

export default SuccessLaunchFilter;