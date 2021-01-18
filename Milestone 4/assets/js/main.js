let app = new Vue({
  el: '#root',
  data: {
    movies: [

    ],
    series: [

    ],
    keywords: '',
    keywordsTv: '',
    flag: '',
  },
  methods: {

    getResponse_Results() {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=496c626a3913f2de74aae97a843da9bf&language=it-IT', {
          params: {
            query: this.keywords,
          }
        })
        .then(response => {
          console.log(response);
          this.movies = response.data.results;

          this.movies.forEach(starsRating => {
            let toRate = parseInt(starsRating.vote_average / 2);
            starsRating.vote_average = toRate;
          });
        });

      axios.get('https://api.themoviedb.org/3/search/tv?api_key=496c626a3913f2de74aae97a843da9bf&language=en-EN', {
          params: {
            query: this.keywords,
          }
        })
        .then(responseTv => {
          this.series = responseTv.data.results;
          console.log(responseTv);

          this.series.forEach(starsRating => {
            let toRate = parseInt(starsRating.vote_average / 2);
            starsRating.vote_average = toRate;
          })
        })
    },

      imgError(image) {
        
         image.target.src = "./assets/img/noposter.jpg";
          return true;
},
    flagCountry(lang) {
      lang.forEach(movies => {
        this.flag = movies.original_language;
        let countryFlag =
          "https://www.countryflags.io/" + this.flag + "/flat/64.png";
        return (movies.flag = countryFlag);
      });
    },
    flagCountry(lang) {
      lang.forEach(series => {
        this.flag = series.original_language;
        let countryFlag =
          "https://www.countryflags.io/" + this.flag + "/flat/64.png";
        return (series.flag = countryFlag);
      });
    },
  }
})
