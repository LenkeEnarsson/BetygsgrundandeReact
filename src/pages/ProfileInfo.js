import React, { useEffect, useState } from 'react'
import '../css/profileinfo.css'
import { fetchGroup } from '../services/APIService';
import { useParams, useNavigate } from 'react-router';

function Profileinfo() {
    const { musicGroupId } = useParams();
    const [group, setGroup] = useState();

    console.log(musicGroupId);

    useEffect(() => {
        const fetchGroupData = async () => {
            const g = await fetchGroup(musicGroupId);
            setGroup(g);
        };
        fetchGroupData();
    }, [musicGroupId]);

    return (
        <>
            <div className="ImgFlex">
                <img className="primaryPic" src="img/sabaton-jpg.jpg" alt=""></img>
                <img className="secondaryPic" src="img/Hellfest2017Sabaton_01.jpg" alt=""></img>
            </div>
            <div className="TitleAndPics">
                <button className="Button" onClick={() => window.history.back()}>Tillbaka</button>
                <img className="Primary Img" src="../img/sabaton-jpg.jpg" alt="">{/*Images are not part of MusicGroupsAPI*/}</img>
                <img className="Primary Img" src="../img/Hellfest2017Sabaton_01.jpg" alt="">{/*Images are not part of MusicGroupsAPI*/}</img>

            </div>
        </>
    )
    /*
    <div className="felipa-regular TitleName">{response.item.name}</div>
    
    const pics = document.createElement("div");
    pics.classList.add("ImgFlex");
    pics.appendChild(primaryPic, secondaryPic);
    const titleAndPics = document.querySelector(".TitleAndPics");
    titleAndPics.appendChild(titleName, pics);
    
    const ProfileText = document.createElement("div");
    ProfileText.classList.add("ProfileText");
    
    const YoB = document.createElement("div");
    YoB.classList.add("YoB");
    YoB.textContent = response.item.establishedYear;
    ProfileText.appendChild(YoB);
    
    const genre = document.createElement("div");
    genre.classList.add("Genre");
    genre.textContent = response.item.strGenre;
    ProfileText.appendChild(genre);
    
    const information = document.createElement("fieldset");
    information.classList.add("Information");
    ProfileText.appendChild(information);
    const infoLegend = document.createElement("legend");
    infoLegend.classList.add("TitleMembers");
    infoLegend.textContent = "Information";
    information.appendChild(infoLegend);
    const InfoText = document.createElement("p");
    const text = `${response.item.name} är en musikgrupp i genren ${response.item.strGenre} `; //som givit ut X album sedan deras start X. Gruppen har X medlemmar.
    InfoText.textContent = text;
    information.appendChild(InfoText);

    const flexInfo = document.createElement("div");
    flexInfo.classList.add("flexInfo");
    ProfileText.appendChild(flexInfo);


    const members = document.createElement("fieldset");
    members.classList.add("Memebers", "flexDiv");
    flexInfo.appendChild(members);

    const membersTitle = document.createElement("legend");
    membersTitle.classList.add("TitleMembers");
    membersTitle.textContent = "Bandmedlemmar";
    members.appendChild(membersTitle);

    for (let i = 0; i < response.item.artists.length; i++) {
        const m = response.item.artists[i];
        if (!Object.hasOwn(response.item.artists, i)) continue;

        const artist = document.createElement("div");
        artist.classList.add("member");
        artist.textContent = `${m.firstName} ${m.lastName}`;
        members.appendChild(artist);
    }

    const albums = document.createElement("fieldset");
    albums.classList.add("Diskografi", "flexDiv");
    flexInfo.appendChild(albums);

    const albumsTitle = document.createElement("legend");
    albumsTitle.classList.add("DiscographyTitle");
    albumsTitle.textContent = "Diskografi";
    albums.appendChild(albumsTitle);

    for (let i = 0; i < response.item.albums.length; i++) {
        const a = response.item.albums[i];
        if (!Object.hasOwn(response.item.artists, i)) continue;

        const album = document.createElement("div");
        album.classList.add("member");
        album.textContent = `${a.releaseYear} ${a.name} : ${a.copiesSold} kopior sålda`;
        albums.appendChild(album);
    }

    const scrollview = document.querySelector(".Scrollview");
    scrollview.appendChild(ProfileText);
    */
}


export default Profileinfo