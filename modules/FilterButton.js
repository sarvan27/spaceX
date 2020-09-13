import React from 'react';
import style from '../styles/Home.module.css';

function FilterButton({data, handleClick, active}) {

  return(
    <button
      style={{backgroundColor: active === data ? '#80c91a': '#bfdb7f'}}
      className={style.filterButton} 
      onClick={() => handleClick(data)}
    >
      {data}
    </button>
  )
}

export default FilterButton;