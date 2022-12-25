const box = document.getElementById("box");

fetch ("https://jsonplaceholder.typicode.com/posts")
.then(async(response)=>{
const data =await response.json();
for(key in data){
    box.innerHTML += `<div id="div"><div>UserId:${data[key].userId}</div><div>id:${data[key].id}</div><div>title:${data[key].title}</div><div>body:${data[key].body}</div></div>`
}
})