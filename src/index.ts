async function adatBetoltes() {
    // JSON: JavaScript Object Notation
    
    const response = await fetch('/src/quotes.json');
    const eredmeny = await response.json();

    console.log(eredmeny);
   
    }

    adatBetoltes();
