import React from 'react'
import { Link } from 'react-router'

export function PageSearch() {
  return (
    <>
                <div className="pageSearch">
                <div className="Search">
                    <input className="searchBox" type="text" id="searchInput" placeholder="Sök..."></input>
                    <button className="Button searchButton ButtonText">Sök</button>
                </div>
            </div>
    </>
  )
}

export default PageSearch

/*
const btn = document.querySelector('.searchButton');
let searchWord = '';

btn.addEventListener('click', async () => {
    const searchBox = document.querySelector('.searchBox');
    searchWord = searchBox.value;
    savedFilter = searchWord;
    document.querySelector('#GroupsList').innerHTML = '';
    loadGroups(true);
})
*/