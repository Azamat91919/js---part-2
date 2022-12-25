const box = document.getElementById("box");
const box2 = document.getElementById("box2");
const input = document.getElementById("input")
const btn = document.getElementById("btn")
console.log(btn);
fetch ("https://jsonplaceholder.typicode.com/posts")
.then(async(response)=>{
const data =await response.json();
return data
for(key in data){
    if(data[key].userId==1)
    box.innerHTML += `<div id="div"><div>UserId:${data[key].userId}</div><div>id:${data[key].id}</div><div>title:${data[key].title}</div><div>body:${data[key].body}</div></div>`
}
}).then((data)=>{
    console.log(data);
window.inter =  function int() {
for(key in data){
       if(input.value ==data[key].userId)
        box.innerHTML += `<div id="div"><div>UserId:${data[key].userId}</div><div>id:${data[key].id}</div><div>title:${data[key].title}</div><div>body:${data[key].body}</div></div>`
    }
}
 btn.addEventListener("click",inter)   
})

