const all = document.getElementById("all")
const game = document.getElementById("game")
const film = document.getElementById("film")
const book = document.getElementById("book")
const result = document.getElementById("result")

const moviedata = [
    {
        title: "Harry Poter",
        type: "film",
        id: 11,
    },
    {
        title: "God of war",
        type: "game",
        id: 12,
    },
    {
        title: "Production Ready - Microservices",
        type: "book",
        id: 13,
    },
    {
        title: "Avatar",
        type: "film",
        id: 14,
    },
    {
        title: "Elden Ring",
        type: "game",
        id: 15,
    },
    {
        title: "Capital",
        type: "book",
        id: 16
    },
];
const allEl = () => {
    result.innerText = ""
    for (let i = 0; i < moviedata.length; i++) {
       result.innerHTML += `<p>title:${moviedata[i].title}
       <br>
type:${moviedata[i].type} 
<br>           
     </p>`
    }
}

const filmEl = ()=>{
    result.innerText = ""
    for (let i = 0; i < moviedata.length; i++){
        if(moviedata[i].type === "film")
        result.innerHTML += `<p>title:${moviedata[i].title}
        <br>  
        type:${moviedata[i].type}      
        <br>       
             </p>`
    }

}
const bookEl = ()=>{
    result.innerText = ""
    for (let i = 0; i < moviedata.length; i++){
        if(moviedata[i].type === "book")
        result.innerHTML += `<p>title:${moviedata[i].title} 
        <br>  
        type:${moviedata[i].type}  
        <br>         
             </p>`
    }

}
const gameEl = ()=>{
    result.innerText = ""
    for (let i = 0; i < moviedata.length; i++){
        if(moviedata[i].type === "game")
        result.innerHTML += `<p>title:${moviedata[i].title}
        <br>  
        type:${moviedata[i].type}  
        <br>         
             </p>`       
    }
}

all.addEventListener("click",allEl);
film.addEventListener("click",filmEl);
book.addEventListener("click",bookEl);
game.addEventListener("click",gameEl);
