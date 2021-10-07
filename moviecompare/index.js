const autocompleteConfig = {
    renderOption(movie) {
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
        return `
            <img src="${imgSrc}"/>
            ${movie.Title} (${movie.Year})
        `;
    },
    
    inputValue(movie) {
        return movie.Title;
    },
    async fetchData(searchTerm) {
        const response = await axios.get('https://www.omdbapi.com/', {
            params: {
                apikey: 'cae9cc7d', 
                //i: 'tt0848228'
                s: searchTerm
            }
        });
    
        if(response.data.Error) {
            return [];
        }
    
        return response.data.Search;
    }
};

createAutoComplete({
    ...autocompleteConfig,
    root: document.querySelector('#left-autocomplete'),
    
    onOptionSelect(movie) {
        document.querySelector('.tutorial').classList.add('is-hidden');
        onMovieSelect(movie, document.querySelector('#left-summary'), 'left');
    }
});

createAutoComplete({
    ...autocompleteConfig,
    root: document.querySelector('#right-autocomplete'),
    
    onOptionSelect(movie) {
        document.querySelector('.tutorial').classList.add('is-hidden');
        onMovieSelect(movie, document.querySelector('#right-summary'), 'right');
    }
});

let leftMovie;
let rightMovie;

const onMovieSelect = async (movie, summaryElement, side) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'cae9cc7d',
            i: movie.imdbID
        }
    });

    summaryElement.innerHTML = movieTemplate(response.data);
    if(side === 'left') {
        leftMovie = response.data;
    } else {
        rightMovie = response.data;
    }

    if(leftMovie && rightMovie) {
        runComparison();
    }
};

const runComparison = () => {
        const leftSideStats = document.querySelectorAll('#left-summary .notification');
        const rightSideStats = document.querySelectorAll('#right-summary .notification');

        leftSideStats.forEach((leftStat, index) => {
            const rightStat = rightSideStats[index]
            
            const leftSideValue = leftStat.dataset.value;
            const rightSideValue = rightStat.dataset.value;
            
            if(rightSideValue > leftSideValue) {
                leftStat.classList.remove('is-primary')
                leftStat.classList.add('is-warning')
            } else {
                rightStat.classList.remove('is-primary')
                rightStat.classList.add('is-warning')
            }
        })
}


const movieTemplate = (movieDetail) => {
    const dollars = parseInt(movieDetail.BoxOffice.replace(/\$/g, '').replace(/,/g,""))
    const imdbRating = parseFloat(movieDetail.imdbRating);
    const movieVotes = parseInt(movieDetail.imdbVotes.replace(/,/g,''));
    const rottenTometo = parseInt(movieDetail.Ratings[1].Value);
    const metascore = parseInt(movieDetail.Metascore);
    
    //let count = 0;
    const awards = movieDetail.Awards.split(" ").reduce((prev, word) => {
        const value = parseInt(word)
        
        if(isNaN(value)) {
            return prev;
        } else {
            return prev + value;
            //count = count + 1;
        }
    }, 0);
    console.log(awards)
    //console.log(dollars, imdbRating, movieVotes, rottenTometo, metascore)
    
    return `
    
    <div id="media-style"> 
        <article class="media">
            <figure class="media-left">
                <p class="image">
                    <img src="${movieDetail.Poster}" />
                </p>
            </figure>
        
            <div class="media-content">
                <div class="content">
                    <h1> ${movieDetail.Title} </h1>
                    <h4> ${movieDetail.Genre} </h4>
                    <p> ${movieDetail.Plot} </p>
                </div>
            </div>
        </article>
    </div>
              
        <article data-value=${awards} class="notification is-primary">
            <p class="title"> ${movieDetail.Awards} </p>
            <p class="subtitle"> Awards </p>
        </article>
        
        <article data-value=${dollars} class="notification is-primary">
            <p class="title"> ${movieDetail.BoxOffice} </p>
            <p class="subtitle"> Box Office </p>
        </article>
        
        <article data-value=${imdbRating} class="notification is-primary">
            <p class="title"> ${movieDetail.imdbRating} </p>
            <p class="subtitle"> IMDB Rating </p>
        </article>
        
        <article data-value=${movieVotes} class="notification is-primary">
            <p class="title"> ${movieDetail.imdbVotes} </p>
            <p class="subtitle"> IMDB Votes </p>
        </article>
        
        <article data-value=${rottenTometo} class="notification is-primary">
            <p class="title"> ${movieDetail.Ratings[1].Value} </p>
            <p class="subtitle"> Rotten Tomatoes </p>
        </article>     
        
        <article data-value=${metascore} class="notification is-primary">
            <p class="title"> ${movieDetail.Metascore} </p>
            <p class="subtitle"> Metascore </p>
        </article>
    `;
};