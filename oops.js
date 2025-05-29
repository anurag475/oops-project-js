class library{
    constructor(){
        this.book=[]
    }
    addbooks(book){
        this.book.push(...books);
        

    }
    listallbook(){
        this.book.forEach(function(book){
            console.log(`${book.name}`)

        });

    }

}
class book{
    constructor(name,isbn,price,author){
        this.name=name;
        this.isbn=isbn;
        this.price=price;
        this.author=author;
        this.readstatus=false;
    }
    info(){
        console.log(`${this.name} is written by ${this.author} and  you have ${this.readstatus ? "read it":"not read it yet"}`);
    }
    changereadstatus(){
        this.readstatus=!this.readstatus;
    }

}
let  book1=new book("life of pie",567,544,"lal sandra");
let assamlibrary=new library();
assamlibrary.addbooks(book1)

        
