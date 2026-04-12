import React from 'react'

export function pagesearch() {
  return (
    <>
                <div className="pageSearch">
                <div className="Search">
                    <input className="searchBox" type="text" id="searchInput" placeholder="Sök..."></input>
                    <button className="Button searchButton ButtonText" id="searchButton">Sök</button>
                </div>
            </div>
    </>
  )
}

export default pagesearch