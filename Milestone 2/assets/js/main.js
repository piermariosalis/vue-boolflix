let app = new Vue({
  el: '#root',
  data: {
    movies: [

    ],

    keywords: '',
     

  },
  methods: {
   
    getResponse_Results() {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=496c626a3913f2de74aae97a843da9bf', {
          params: {
            query: this.keywords,
          }
        })
        .then(response => {
          console.log(response);
          this.movies = response.data.results;

          this.movies.forEach(starsRating => {
            let toRate = parseInt(starsRating.vote_average/2);
            starsRating.vote_average = toRate;
        })

      })

    }

    
  },
  
})
