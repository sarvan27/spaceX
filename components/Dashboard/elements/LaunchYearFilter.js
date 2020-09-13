import React from 'react';
import style from '../../../styles/Dashboard.module.css'
import FilterButton from '../../../modules/FilterButton';


const years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

function LaunchYearFilter({activeYear, setActiveYear}){

  const handleClick = (year) => {
    if(year === activeYear){
      setActiveYear('')
    }else{
      setActiveYear(year);
    }
  }

  return(
    <div className={style.launchYearRoot}>
      <div className={style.launchYearTitle}>
        Launch Year
      </div>
      <hr id={'hr1'}/>
      <div className={style.filterButtonFlex}>
        {years.map((year, index) => (
          <FilterButton data={year} key={index} handleClick={handleClick} active={activeYear} />
        ))}
      </div>
    </div>
  )
}

export default LaunchYearFilter;