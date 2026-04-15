
import React, { use, useEffect, useState } from 'react'
import { Outlet, useParams, useNavigate, useOutletContext } from 'react-router';
import '../css/groups.css'
import PageSearch from '../components/PageSearch.js';
import Paginator from '../components/Paginator.js';
import { fetchFilteredGroups, fetchGroups } from "../services/APIService";
import { Link } from 'react-router'
import Loader from '../components/Loader';

const params = new URLSearchParams(window.location.search);
const pageNr = params.get("pageNr");

function Groups() {
    const navigate = useNavigate();
    const [groups, setGroups] = useState([]); //is this response?
    const [currentPage, setCurrentPage] = useState(0);
    const [maxPage, setMaxPage] = useState(0);
    const [totalGroups, setTotalGroups] = useState(0);
    const [filter, setFilter] = useState('');

    useEffect(() => { LoadGroups(); }, [currentPage, filter]);

    const LoadGroups = async () => {
        let response = null;

        if (filter)
            response = await fetchFilteredGroups(filter, currentPage);
        else
            response = await fetchGroups(currentPage);

        setGroups(response.pageItems);
        setCurrentPage(response.pageNr);
        setMaxPage(response.pageCount - 1);
        setTotalGroups(response.dbItemsCount);
    };

    const handleSearch = (searchTerm) => {
        setFilter(searchTerm);
        setCurrentPage(0);
    }
    
    const handlePageChange = (newPage) => {
        if (newPage >= 0 && newPage <= maxPage)
            setCurrentPage(newPage);
    }

    const onView = (e) => {
        console.log(e.musicGroupId);
        navigate(`/ProfileInfo/${e.musicGroupId}`);
    }
    
    /*
DisableButtons(currentPage);
const showResults = document.querySelector("#PageInfo");
showResults.innerHTML = `${currentPage + 1}/${maxPage + 1} (${totalGroups}st)`;
*/

const imageNotInAPI = './img/sabaton-jpg.jpg';

return (
    groups.length === 0 ? <p>Inga resultat att visa</p> :
    <div className="FlexboxAlbum" id="GroupsList">
                <PageSearch onSearch={handleSearch} />
                <Paginator />
                {groups.map(group =>
                (   
                    <div className='FlexboxAlbumItem'>
                        <img src={`${imageNotInAPI}`} alt="" />
                        <div className='FlexBoxItemText'>
                            <p className="felipa-regular TitleName">{group.name}</p>
                            <p>{`*${group.establishedYear ?? 'Unknown'} ${group.strGenre ?? 'Unknown'}`}</p>
                            <p>{`${group.albums.length} album`}</p>
                            <button onClick={onView} params={group.musicGroupId} className="Button DetailsButton">Visa</button>
                        </div>
                    </div>
                ))}
                <Paginator />
            </div>
    );
}

export default Groups

/*

function handleClick(id) {
    Navigate('profileinfo', { state: { group: id } })
}




const start = document.getElementById('paginatorStart');
const back = document.getElementById('paginatorBack');
const forward = document.getElementById('paginatorForward');
const end = document.getElementById('paginatorEnd');
start.addEventListener('click', () => Navigate('start'));
back.addEventListener('click', () => Navigate('back'));
forward.addEventListener('click', () => Navigate('forward'));
end.addEventListener('click', () => Navigate('end'));

DisableButtons(pageNr);

async function Navigate(change) {
    if (typeof change !== 'string' && Object.keys(change).length === 0) return;
    let pageNr = currentPage;

    if (typeof change === 'string') {
        // eslint-disable-next-line default-case
        switch (change) {
            case 'start': pageNr = 0; break;
            case 'back': pageNr = pageNr - 1; break;
            case 'forward': pageNr = pageNr + 1; break;
            case 'end': pageNr = maxPage; break;
        }
    }
    if (pageNr < 0) pageNr = 0;
    if (pageNr > maxPage) pageNr = maxPage;

    document.querySelector('#GroupsList').innerHTML = '';

    if (savedFilter === emptyFilter)
        loadGroups(false, pageNr);
    else
        loadGroups(true, pageNr)
}

function DisableButtons(pageNr) //Paginator buttons
{
    if (pageNr === '0' || pageNr === 0) {
        start.classList.add("Disabled");
        back.classList.add("Disabled");
        forward.classList.remove("Disabled");
        end.classList.remove("Disabled");
    }
    else if (pageNr == maxPage) {
        forward.classList.add("Disabled");
        end.classList.add("Disabled");
        start.classList.remove("Disabled");
        back.classList.remove("Disabled");
    }
    else {
        start.classList.remove("Disabled");
        back.classList.remove("Disabled");
        forward.classList.remove("Disabled");
        end.classList.remove("Disabled");
    }
}

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

/*






const start = document.getElementById('paginatorStart');
const back = document.getElementById('paginatorBack');
const forward = document.getElementById('paginatorForward');
const end = document.getElementById('paginatorEnd');
start.addEventListener('click', () => Navigate('start'));
back.addEventListener('click', () => Navigate('back'));
forward.addEventListener('click', () => Navigate('forward'));
end.addEventListener('click', () => Navigate('end'));

DisableButtons(pageNr);

async function Navigate(change) {
    if (typeof change !== 'string' && Object.keys(change).length === 0) return;
    let pageNr = currentPage;

    if (typeof change === 'string') {
        // eslint-disable-next-line default-case
        switch (change) {
            case 'start': pageNr = 0; break;
            case 'back': pageNr = pageNr - 1; break;
            case 'forward': pageNr = pageNr + 1; break;
            case 'end': pageNr = maxPage; break;
        }
    }
    if (pageNr < 0) pageNr = 0;
    if (pageNr > maxPage) pageNr = maxPage;

    document.querySelector('#GroupsList').innerHTML = '';

    if (savedFilter === emptyFilter)
        loadGroups(false, pageNr);
    else
        loadGroups(true, pageNr)
}

function DisableButtons(pageNr) //Paginator buttons
{
    if (pageNr === '0' || pageNr === 0) {
        start.classList.add("Disabled");
        back.classList.add("Disabled");
        forward.classList.remove("Disabled");
        end.classList.remove("Disabled");
    }
    else if (pageNr == maxPage) {
        forward.classList.add("Disabled");
        end.classList.add("Disabled");
        start.classList.remove("Disabled");
        back.classList.remove("Disabled");
    }
    else {
        start.classList.remove("Disabled");
        back.classList.remove("Disabled");
        forward.classList.remove("Disabled");
        end.classList.remove("Disabled");
    }
}

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
