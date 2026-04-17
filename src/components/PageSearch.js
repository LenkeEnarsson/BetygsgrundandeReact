import { React, useState } from 'react'

export function PageSearch({ onSearch }) {
  const [searchWord, setSearchWord] = useState('');

  const onSearchClick = async(e) => {
    e.preventDefault();
    onSearch(searchWord);
  }

  return (
    <>
                <div className="pageSearch">
                <div className="Search">
                    <input className="searchBox" type="text" value={searchWord} onChange={(e) => setSearchWord(e.target.value)}  placeholder="Sök..."></input>
                    <button className="Button searchButton ButtonText" onClick={onSearchClick}>Sök</button>
                </div>
            </div>
    </>
  )
}

export default PageSearch