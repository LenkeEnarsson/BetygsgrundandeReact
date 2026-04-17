const urlAPI = 'https://music.api.public.seido.se/api/';

async function myFetch(url, method = null, body = null) {
    try {

        method ??= 'GET';
        let res = await fetch(url, {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: body ? JSON.stringify(body) : null
        });

        if (res.ok) {

            //get the data from server
            let data = await res.json();
            return data;    
        }
        else {

            //typcially you would log an error instead
            alert(`Failed to recieved data from server: ${res.status} - ${res.statusText}}`);
        }
    }
    catch (err) {

        //typcially you would log an error instead
        alert(`Failed to recieved data from server: ${err.message}`);
    }
}

export async function fetchGroups(pageNr) {
    const url = `${urlAPI}MusicGroups/Read?seeded=false&flat=false&pageNr=${pageNr}&pageSize=10`;
    const response = await myFetch(url, 'GET');
    return await response;
}

export async function fetchGroup(id) {
    const url = `${urlAPI}MusicGroups/ReadItem?id=${id}&flat=false`;
    const response = await myFetch(url, 'GET');
    return await response;
}

export async function fetchInfo() {
    const url = `${urlAPI}MusicGroups/Read?seeded=true&flat=false&pageNr=1&pageSize=10`;
    const response = await myFetch(url, 'GET');
    return await response;
}

//API-filtret buggigt utifrån uppgiftens krav. Filtret sorterar inte endast på musikgruppernas namn. (Testa sök på "Rock")
export async function fetchFilteredGroups(searchWord, pageNr) {
    const url = `${urlAPI}MusicGroups/Read?seeded=false&flat=false&filter=${searchWord}&pageNr=${pageNr}&pageSize=10`
    const response = await myFetch(url, 'GET');
    return await response;
}

export async function postGroup(group = { name: "Okänt Namn", establishedYear: "1900", genre: 1 }) {
    const url = `${urlAPI}/MusicGroups/CreateItem`;
    const newItem = {
        "musicGroupId": null,
        "name": group.name,
        "establishedYear": group.establishedYear,
        "genre": group.genre,
        "albumsId": [],
        "artistsId": []
    };
    const response = await myFetch(url, 'POST', newItem);
    return await response;
}