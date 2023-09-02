const container = document.querySelector('.container');

function generateMasonryGrid(columns, posts){

    container.innerHTML = '';
    
    let columnWrappers = {};

    for(let i = 0; i < columns; i++){
        columnWrappers[`column${i}`] = [];
    }

    for(let i = 0; i < posts.length; i++){
        const column = i % columns;
        columnWrappers[`column${column}`].push(posts[i]);
    }

    for(let i = 0; i < columns; i++){
        let columnPosts = columnWrappers[`column${i}`];
        let div = document.createElement('div');
        div.classList.add('column');

        columnPosts.forEach(post => {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');
            let image = document.createElement('img');
            image.src = post.image;
            let hoverDiv = document.createElement('div');
            hoverDiv.classList.add('overlay');
            let title = document.createElement('h3');
            title.innerText = post.title;
            hoverDiv.appendChild(title);
    
            
            postDiv.append(image, hoverDiv)
            div.appendChild(postDiv) 
        });
        container.appendChild(div);
    }
}
generateMasonryGrid(4, posts)