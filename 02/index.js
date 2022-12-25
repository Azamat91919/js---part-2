const objectJ = {
    key:34,
    key2:378,
}
console.log("Подождите")
setTimeout (function(){
    let Prom = new Promise(function(resolve){
       
    const jsonData = JSON.stringify(objectJ)
        console.log("еще немного");
        resolve (jsonData)  
    })
    .then (function(jsonData) {
        setTimeout(function() {
            const jsa = JSON.parse(jsonData)
        console.log("готово");
        console.log(jsa);
        }, 1000) 
    })
    .catch(function(){
        console.log("ошибка");
    })
}, 2000);
