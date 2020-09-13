import React from 'react';
import style from '../../../styles/Dashboard.module.css'
import FilterButton from '../../../modules/FilterButton';


const successLaing = ['True', 'False'];

function SuccessLaingFilter({activeSuccess, setActiveSuccess}){

  const handleClick = (data) => {
    if(data === activeSuccess){
      setActiveSuccess('')
    }else{
      setActiveSuccess(data);
    }
  }

  return(
    <div className={style.launchYearRoot}>
      <div className={style.launchYearTitle}>
        Successful Laing
      </div>
      <hr id={'hr1'}/>
      <div className={style.filterButtonFlex}>
        {successLaing.map((obj, index) => (
          <FilterButton data={obj} key={index} handleClick={handleClick} active={activeSuccess} />
        ))}
      </div>
    </div>
  )
}

export default SuccessLaingFilter;