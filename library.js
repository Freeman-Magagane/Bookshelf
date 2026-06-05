const library=[];
const book1={
    id: 1,
    title: "The Hobbit",
    author: "J.R.R Tolkein",
    pages: 310,
    isRead: false
};
library.push(book1);
console.log(library)

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


const toggleReadStatus=(id)=>{
    const book=library.find(b=>b.id===id);
    if(book){
        book.isRead=!book.isRead;
        return book;
    }else{
        return null;
}
}

const deleteBook=(id)=>{
    const index=library.findIndex(b=>b.id===id);
    if(index!==-1){
        library.splice(index,1);
        return true;
    }else{
        return false;
    }
}


const formatBook=()=>{
    return library.map(book=>`${book.title} by ${book.author} (${book.pages} pages) - ${book.isRead ? "Read" : "Unread"}`);
};
console.log(formatBook());
