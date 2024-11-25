let animals_even = ["Dog", "Cat", "Spider"];
let animals_odd = ["Bat", "Snake", "Bear"];


// pour le tableau animals_even : afficher les animaux dont la clé est un nombre pair

for(let i = 0; i < animals_even.length; i++){
    if(i % 2 === 0)
    {
        console.log(animals_even[i]);
    }
}

// pour le tableau animals_odd : afficher les animaux dont la clé est un nombre impair

for(let i = 0; i < animals_odd.length; i++){
    if(i % 2 !== 0)
    {
        console.log(animals_odd[i]);
    }
}

// Comme nos deux tableaux ont la même longueur on peut même faire une seule boucle

for(let i = 0; i < animals_even.length; i++){
    if(i % 2 === 0)
    {
        console.log(animals_even[i]);
    }
    else
    {
        console.log(animals_odd[i]);
    }
}