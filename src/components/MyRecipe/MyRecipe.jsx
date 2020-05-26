import React from 'react'

const MyRecipe = () => {
  return (
    <li>
      <span>Recipe Title</span> 
      <div>
        <button className='btn-delete'>
                   delete
        </button>
        <button className='btn-edit'>
                   edit
        </button>
      </div>
    </li>
  );
};
export default MyRecipe;

