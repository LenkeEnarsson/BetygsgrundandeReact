
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
        const musicGroupId = e.target.dataset.id;
        navigate(`../profileinfo/${musicGroupId}`);
    }


const imageNotInAPI = './img/sabaton-jpg.jpg';

return (
    groups.length === 0 ? <p>Inga resultat att visa</p> :
    <div className="FlexboxAlbum" id="GroupsList">
                <PageSearch onSearch={handleSearch} />
                <Paginator />
                {groups.map(group =>
                (   
                    <div key={group.musicGroupId} className='FlexboxAlbumItem'>
                        <img src={imageNotInAPI} alt="" />
                        <div className='FlexBoxItemText'>
                            <p className="felipa-regular TitleNameGroups">{group.name}</p>
                            <p>{group.establishedYear ?? 'Unknown'}, {group.strGenre ?? 'Unknown'}</p>
                            <p>{`${group.albums.length} album`}</p>
                            <button onClick={onView} data-id={group.musicGroupId} className="Button DetailsButton">Visa</button>
                        </div>
                    </div>
                ))}
                <Paginator />
            </div>
    );
}

export default Groups

