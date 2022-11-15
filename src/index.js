
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('all').addEventListener('click', async () => {
        
        let response = await fetch('./quotes.json');
        let eredmeny = await response.json();
    
    
        let adatok = document.getElementById('adatok');
        adatok.textContent = '';

        let asd = document.querySelector(".lista");
    
        
        for (let p of sorrend){
            asd.innerHTML += `Author: ${p.author} Quote: ${p.quote}`
        }
    });

    document.getElementById('the').addEventListener('click', async () => {
        
        let response = await fetch('./quotes.json');
        let eredmeny = await response.json();

        let tomb = [];
        for(let p of eredmeny.quotes){
            let sor = p.quote;
            sor = sor.replaceAll(" the ", "<b> the </b>");
            sor = sor.replaceAll("The ", "<b>The </b>");
            tomb.push(sor);
        }

      
        let adatok = document.getElementById('adatok');
        adatok.textContent = '';

        for(let p of tomb){
            let li = document.createElement('li');
            li.innerHTML = p;
            adatok.appendChild(li);
        }
    })

    document.getElementById('hossz').addEventListener('click', async () => {
       
        let response = await fetch('./quotes.json');
        let eredmeny = await response.json();

        let lista = [];
        for(let p of eredmeny.quotes){
            let szam = parseInt(p.quote.length);
            lista.push(szam);
            lista.join(',');
        }

        document.getElementById('hossz').textContent = lista;
    })

    document.getElementById('db').addEventListener('input', async () => {
       
        let response = await fetch('./quotes.json');
        let eredmeny = await response.json();

    })
})