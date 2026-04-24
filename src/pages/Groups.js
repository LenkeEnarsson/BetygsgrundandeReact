
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import '../css/groups.css'
import PageSearch from '../components/PageSearch.js';
import Paginator from '../components/Paginator.js';
import Loader from '../components/Loader.js';
import { fetchFilteredGroups, fetchGroups } from "../services/APIService";

function Groups() {
    const navigate = useNavigate();
    const [groups, setGroups] = useState([]);
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

        if (response === undefined) return null;

        setGroups(response.pageItems);
        setCurrentPage(response.pageNr);
        setMaxPage(response.pageCount - 1);
        setTotalGroups(response.dbItemsCount);
    };

    const handleSearch = (searchWord) => {
        setFilter(searchWord);
        setCurrentPage(0);
    }

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }

    const onView = (e) => {
        const musicGroupId = e.target.dataset.id;
        navigate(`../profileinfo/${musicGroupId}`);
    }


    const imageNotInAPI = './img/sabaton-jpg.jpg';

    return (
        groups.length === 0 ? Loader() :
            <div className="FlexboxAlbum">
                <PageSearch onSearch={handleSearch} />
                <div className="Spacer"></div>
                <Paginator onPageChange={handlePageChange} current={currentPage} max={maxPage} totalGroups={totalGroups} />
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
                <Paginator onPageChange={handlePageChange} current={currentPage} max={maxPage} totalGroups={totalGroups} />
                <div className="Spacer"></div>
            </div>
    );
}

export default Groups