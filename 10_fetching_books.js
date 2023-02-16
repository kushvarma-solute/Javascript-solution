// Collect books from array of objects and return collection of books as an array

let friends = 
[
    {
      name: 'Anna',
      books: ['Bible', 'Geeta', 'Harry Potter'],
      age: 20
    },
    {
      name: 'Bob',
      books: ['War and Peace', 'Geeta', 'Quran'],
      age: 22
    },
    {
      name: 'Alice',
      books: ['The Monk', 'Pride and Prejudice', 'Good Morning'],
      age: 21
    }
 ]

 let All_books = friends.reduce((item,index,i) => 
    {
         item.push(...friends[i].books);
         return item;
    },[]);

console.log("All books of friens are:\n",All_books);