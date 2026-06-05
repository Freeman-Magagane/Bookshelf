const library=[];
const book1={
    id: 1,
    title: "The Hobbit",
    author: "J.R.R Tolkein",
    pages: 310,
    isRead: false
};
library.push(book1);
console.log(library);

const addBook=({title, author, pages, isRead})=>{
    const book={
        id: library.length+1,
        title,author,pages,isRead
    }
    library.push(book);
    return book;
}
addBook({ title: "1984", author: "George Orwell", pages: 328, isRead: true });
addBook({ title: "Dune", author: "Frank Herbert", pages: 412, isRead: false });
console.log(library);

const toggleReadStatus=(id)=>{
    const book=library.find(b=>b.id===id);
    if(book){
        book.isRead=!book.isRead;
        return book;
    }else{
        return null;
}
}
console.log(toggleReadStatus(1)); 
console.log(toggleReadStatus(99)); 

const deleteBook=(id)=>{
    const index=library.findIndex(b=>b.id===id);
    if(index!==-1){
        library.splice(index,1);
        return true;
    }else{
        return false;
    }
}
console.log(deleteBook(2)); 
console.log(deleteBook(99));
console.log(library);