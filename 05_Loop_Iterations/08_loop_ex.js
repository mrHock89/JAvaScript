const books = [
    {title: 'Book One', genre: "Fiction", publish: 1981, edition: 2004},
    {title: 'Book two', genre: "Science", publish: 1983, edition: 2014},
    {title: 'Book three', genre: "Horror", publish: 1991, edition: 2024},
    {title: 'Book four', genre: "Come", publish: 1986, edition: 2014},
    {title: 'Book Five', genre: "Si-Fi", publish: 1909, edition: 2011},
    {title: 'Book six', genre: "Novel", publish: 1936, edition: 2008},
    {title: 'Book Seven', genre: "Science", publish: 1999, edition: 2019},
    {title: 'Book Eight', genre: "Cartoons", publish: 1991, edition: 2016}
]

const userBooks = books.filter((bk) => bk.genre === 'Science');

// console.log(userBooks);
console.log(books.genre);