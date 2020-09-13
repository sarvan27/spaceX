import React from 'react';
import style from '../../../styles/Dashboard.module.css'
import FilterButton from '../../../modules/FilterButton';


const years = [{
  first: '2006', 
  second: '2007',
 }, {
  first: '2008', 
  second: '2009',
 }, {
  first: '2010', 
  second: '2011',
 }, {
  first: '2012', 
  second: '2013',
 }, {
  first: '2014', 
  second: '2015',
 }, {
  first: '2016', 
  second: '2017',
 }, {
  first: '2018', 
  second: '2019',
 }, {
  first: '2020',
 }];

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
      <table style={{width: '100%'}}>
        {years.map((year, index) => (
          <tr>
            <td>
              <FilterButton data={year.first} key={index} handleClick={handleClick} active={activeYear} />
            </td>
            {year.second && <td>
              <FilterButton data={year.second} key={index} handleClick={handleClick} active={activeYear} />
            </td>}
          </tr>
        ))}
      </table>
      {/* <div className={style.filterButtonFlex}>
        {years.map((year, index) => (
          <FilterButton data={year} key={index} handleClick={handleClick} active={activeYear} />
        ))}
      </div> */}
    </div>
  )
}

export default LaunchYearFilter;