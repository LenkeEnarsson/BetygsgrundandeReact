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