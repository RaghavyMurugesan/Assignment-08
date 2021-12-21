class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getPG(a) {
    let PG = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i].rating === "PG") {
        PG.push(a[i].title);
      }
    }
    return PG;
  }
}
let movie1 = new Movie("Casino Royale", "Eon Productions", "PG");
let movie2 = new Movie("Finding Nemo", "Pixar Animation Studio", "R");
let movie3 = new Movie("Bahubali", "Arka Media Works", "PG");
let movie4 = new Movie("Moana", "Walt Disney");
let movie5 = new Movie("Iron Man", "Marvel Studio");
const a = [movie1, movie2, movie3, movie4, movie5];
let res = movie1.getPG(a);
console.log(res);

//____________OUTPUT___________
[ 'Casino Royale', 'Bahubali', 'Moana', 'Iron Man' ]
