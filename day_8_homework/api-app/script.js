const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
const tableBody = document.getElementById('table_body');
const tableHead = document.getElementById('table_head');

async function getPokemon() {
    const response = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            'Content-Tye': 'application/json',
        }
    });

    return response.json();
}

async function getPokeDeets(name) {
    const response = await fetch(baseUrl + name, {
        method: 'GET',
        headers: {
            'Content-Tye': 'application/json',
        }
    });

    return response.json();
}

async function getMoveDesc(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Tye': 'application/json',
        }
    })

    return response.json();
}

async function moreInfo(e, name) {
    tableBody.innerHTML = "";
    tableHead.innerHTML = "";

    // table head work
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const thDesc = document.createElement('th');

    th.innerHTML = 'Abilities';
    thDesc.innerHTML = 'Description'

    tr.appendChild(th);
    tr.appendChild(thDesc);
    tableHead.appendChild(tr);
    
    // table body work
    const details = await getPokeDeets(name);
    const abilities = details.abilities;

    for (let i=0; i<abilities.length; i++) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const tdDesc = document.createElement('td');

        td.innerHTML = abilities[i].ability.name;

        // get description of ability
        const description = await getMoveDesc(abilities[i].ability.url);

        tdDesc.innerHTML = description.effect_entries[1].effect;

        tr.appendChild(td);
        tr.appendChild(tdDesc);
        tableBody.appendChild(tr);
    }

}

async function main() {
    const pokemon = await getPokemon();
    pokemon_arr = pokemon.results

    for (let i = 0; i < pokemon.count; i++) {
        const tr = document.createElement('tr');

        const tdName = document.createElement('td');
        const tdUrl = document.createElement('td');
        const moreButton = document.createElement('button');
        moreButton.innerHTML = "More Info";
        moreButton.classList.add("btn",  "btn-primary", "my-1")
        moreButton.addEventListener('click', (e) => {
            moreInfo(e, pokemon_arr[i].name )
        })

        tdName.innerHTML = pokemon_arr[i].name 
        tdUrl.innerHTML = pokemon_arr[i].url

        tr.appendChild(tdName);
        tr.appendChild(tdUrl);
        tr.appendChild(moreButton);
        

        tableBody.appendChild(tr)
    }
}

main();

