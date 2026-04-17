import React, { useEffect, useState } from 'react'
import { fetchGroup } from '../services/APIService';
import { useParams } from 'react-router';
import '../css/profileinfo.css'

function Profileinfo() {
    const { musicGroupId } = useParams();
    const [group, setGroup] = useState();

    useEffect(() => {
        const fetchGroupData = async () => {
            const g = await fetchGroup(musicGroupId);
            setGroup(g.item);
        };
        fetchGroupData();
    }, [musicGroupId]);

    return (
        group ?
            <>
                <div className="TitleAndPics">
                    <button className="Button" onClick={() => window.history.back()}>Tillbaka</button>
                    <div className="felipa-regular TitleName">  {group.name}</div>
                    <div className="ImgFlex">
                        <img className="Primary Img" src="../img/sabaton-jpg.jpg" alt="">{/*Images are not part of MusicGroupsAPI*/}</img>
                        <img className="Primary Img" src="../img/Hellfest2017Sabaton_01.jpg" alt="">{/*Images are not part of MusicGroupsAPI*/}</img>
                    </div>
                </div>
                <div className="ProfileText">
                    <div className="YoB">{group.establishedYear}</div>
                    <div className="Genre">{group.strGenre}</div>
                    <fieldset className="Information">
                        <legend className="TitleMembers">Information</legend>
                        <p>{`${group.name} är en musikgrupp i genren ${group.strGenre} som givit ut ${group.albums.length} album sedan deras start ${group.establishedYear}. Gruppen har ${group.artists.length} medlemmar.`}</p>
                    </fieldset>
                    <div className="flexInfo">
                        <fieldset className="Members flexDiv">
                            <legend className="TitleMembers">Bandmedlemmar</legend>
                            {group.artists.map(a => (
                                <div className="member" key={`${a.firstName}${a.lastName}`}>{`${a.firstName} ${a.lastName}`}</div>
                            ))}
                        </fieldset>
                        <fieldset className="Diskografi, flexDiv">
                            <legend className="DiscographyTitle">Diskografi</legend>
                            {group.albums.map(a => (
                                <div className="member" key={`${a.releaseYear}${a.copiesSold}`}>{`${a.releaseYear} ${a.name} : ${a.copiesSold} kopior sålda`}</div>
                            ))}
                        </fieldset>
                    </div>
                </div>
            </>
            : <></>
    )
}

export default Profileinfo