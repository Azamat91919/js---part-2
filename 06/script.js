const filterEl = document.getElementById("filter");
const postsContainerEl = document.getElementById("posts-container");
const loaderEl = document.getElementById("loader");

let loaderIndicate = false;
let page = 1;
let limit = 10;
let dataFromBack = [];

const renderItem = ({id, title, body}) => {
    return ` 
    <div class = "post">
        <div class = "number">${id}</div>

        <div class = "post-info">
            <h2 class = "post-title">${title}</h2>
            <p class = "post-body">${body}</p>
        </div>
    </div>
    `;
};

const getData = async() => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );
    const data = await response.json();
    page++;
    dataFromBack = [...dataFromBack, ...data];

    return data;
};

const renderPosts = () => {
    loaderIndicate = true;
    loaderEl.classList.toggle("show");

    getData()
    .then((posts) => {
        postsContainerEl.innerHTML += posts.reduce((itemTemplate, item) => itemTemplate + renderItem(item), "");
    })
    .finally(() => {
        loaderEl.classList.toggle("show");
        loaderIndicate = false;
    });
};

const scrollCheck = () => {
    if (loaderIndicate) {
        return;
    }

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight -1) {
        renderPosts();
    }
};

const searchElements = (event) => {
    console.log(event.target.value);
    const term = event.target.value.toLowerCase();const filterPosts = dataFromBack.filter (({body}) => body.toLowerCase().indexOf(term) >-1);
    
    postsContainerEl.innerHTML = filterPosts.reduce((postTemplate, post) => (postTemplate +renderItem(post)), "");
};



renderPosts();

window.addEventListener("scroll", scrollCheck);
filterEl.addEventListener("input", searchElements);



