let arr=['East of Eden', 'Cat in the Hat', 'The book Thief','Goosebumps'];

function bookInfo(book){
 console.log(`${book} is a great book!`)
}


for (const book of arr) {
    bookInfo(book)
}

arr.forEach(bookInfo)


console.log(2**3)