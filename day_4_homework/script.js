

const input = document.getElementById("input")
const subButton = document.getElementById("SubButton")
const hintButton = document.getElementById("HintButton")
const clue = document.getElementById("clue")
const output = document.getElementById("output")
const reveal = document.getElementById("RevAns")

const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]
   
// Displaying explanation
const rand_index = Math.round(Math.random() * 10);

clue.innerHTML = movies[rand_index].explanation


subButton.addEventListener('click', (e) => {
    
    const elem = document.createElement('div');
    elem.classList.add('alert');
    output.innerHTML = '';

    if (input.value == movies[rand_index].title){
        elem.innerHTML = "Yes it was " + movies[rand_index].title;
        elem.classList.add('alert-success');
    } else {
        elem.innerHTML = "Nope try again. Hit reveal answer if you are a quitter";
        elem.classList.add('alert-danger');
    }
    output.appendChild(elem);
})

hintButton.addEventListener('click', (e) => {
    const elem = document.createElement('div');
    elem.innerHTML = movies[rand_index].hint
    output.innerHTML = '';

    output.appendChild(elem);
})

reveal.addEventListener('click', (e) =>{
    const elem = document.createElement('div');
    elem.innerHTML = movies[rand_index].title
    output.innerHTML = '';

    output.appendChild(elem);
})