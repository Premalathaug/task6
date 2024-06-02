class movie
{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(typeof this.rating==="undefined"){
            this.rating="PG";
        }
    }
}
/*instance of class movie*/
const movie1=new movie("ghilli","fsdwk60","4");
const movie2=new movie("leo","full stack","5");
const movie3=new movie("star","fsd","4");
const movie4=new movie("doctor","fsd1");
const movie5=new movie("ps","fsd");
console.log(movie1);
console.log(movie2);
console.log(movie3);
console.log(movie4);
console.log(movie5);
function getPG(film){
    let a=[];
    for(let i=0;i<film.length;i++){
        if(film[i].rating=="PG"){
            a.push(film[i].title);
        }
    }
    return a;
}

let arr = [movie1,movie2,movie3,movie4,movie5];
console.log(getPG(arr));

let movie6=new movie("casino royale","eon production","PG13");
console.log(movie6);




