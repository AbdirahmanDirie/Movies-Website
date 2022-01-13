const MOVIE_API_KEY = `142d39c1e40b047f96a3e57926a9d83d`;
const Api_Url = `https://api.themoviedb.org/3/movie/popular?`;
const Image_Url = `https://image.tmdb.org/t/p/w500`;

let movie_container =document.querySelector(".movie-container");

let modal_container =document.querySelector(".modal-container");

let movie_title =document.querySelector(".movie-title");

let movie_detail =document.querySelector(".movie-detail");

let close =document.querySelector(".close");

let modal =document.querySelector(".modal");

movie_container.addEventListener("click", (e)=>{
    // console.log();
    if(e.target.classList[0] == "movie-image"){

        // console.log()

        movie_detail.innerHTML = e.target.parentElement.children[0].value

        movie_title.innerHTML = e.target.parentElement.children[2].children[0].textContent



        modal_container.classList = "modal-container show"
    }

})


close.addEventListener("click", (e)=>{
    // console.log(e.target.classList[0]);
    if(e.target.classList[0] == "close"){
        modal_container.classList = "modal-container hide"
    }

})

modal.addEventListener("mouseleave", (e)=>{
    // console.log(e.target.classList[0]);
    if(e.target.classList[0] == "modal"){
        modal_container.classList = "modal-container hide"
    }

})


const buildTheDom = (results) =>{

    results.forEach(movie => {
       movie_container.innerHTML += ` <div class="movie">
       <input type="hidden" value="${movie.overview}">
   
   <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="" class="movie-image">
   
   <div class="info">
       <span class="movie-title">${movie.original_title}</span>
   
       <div class="counts">
           <div class="vote-average">
               <span>${movie.vote_average}</span>
           </div>
           <div class="release-date">
               <span>${movie.release_date}</span>
           </div>
       </div>
   </div>
   </div>`;
    });


    // let temp = ;
}

const getMostPopularMovies = async () => {

    const request = await fetch(`${Api_Url}api_key=${MOVIE_API_KEY}&page=1`);

    const {results} = await request.json();

    buildTheDom(results);
}

getMostPopularMovies()
