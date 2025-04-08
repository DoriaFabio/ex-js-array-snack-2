const books = [
    { 
        title: "React Billionaire", 
        pages: 250, 
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    { 
        title: "Advanced JS", 
        pages: 500, 
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    { 
        title: "CSS Secrets", 
        pages: 320, 
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    { 
        title: "HTML Mastery", 
        pages: 200, 
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
  ];


//! Snack 1 - Filtra e Modifica
//? Libri con più di 300 pagine
const longBooks = books.filter((book) => book.pages > 300);
// console.log(longBooks);
//? Titoli dei libri con più di 300 pagine
const longBooksTitles = longBooks.map((book) => book.title);
console.log("I titoli dei libri con più di 300 pagine sono:");
longBooksTitles.forEach(t => console.log(t));


//! Snack 2 - Il primo libro scontato   
//? Libri disponibili
const availableBooks = books.filter((book) => book.available);
console.log("I libri disponibili sono:", availableBooks);
//? Prezzo scontato dei libri disponibili
const discountedBooks = availableBooks.map((book) => {
    const discountPrice = parseFloat(book.price.replace("€", ""))*0.8;
    return {
        ...book,
        price: `${discountPrice}€`
    }
});
console.log("La lista dei libri disponibili con il prezzo scontato:", discountedBooks);
//? Primo libro disponibile con un prezzo intero
const fullPricedBook = discountedBooks.find((book) => Number.isInteger(parseFloat(book.price.replace("€", ""))));
console.log("Il primo libro disponibile con un prezzo intero è:", fullPricedBook);

//! Snack 3 Ordinare gli autori
//? Autori dei libri
const authors = books.map((book) => book.author);
console.log("Gli autori dei libri sono:", authors);
//? Autori maggiorenni
const areAuthorsAdults = authors.every(book => book.age>18);
console.log("Gli autori sono tutti maggiorenni??", areAuthorsAdults);
//? Autori ordinati in base all'età
authors.sort((a,b) => {
    if(areAuthorsAdults === true) {
        return a.age - b.age;
    } else {
        return b.age - a.age;
    }
})
console.log("La lista degli autori ordinati:", authors);

//! Snack 4 Calcolo età media
//? Età degli autori
const ages = books.map((book) => parseInt(book.author.age));
console.log("Le età degli autori sono:", ages);
//? Somma età
const agesSum = ages.reduce((acc, età) => {
    return acc + età;
}, 0);
console.log("La somma dell'età degli autori è:", agesSum);
//? Età media degli autori
const agesAverage = agesSum/ages.length;
console.log("L'età media degli autori è:", agesAverage);


