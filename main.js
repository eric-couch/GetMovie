document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("btn").addEventListener("click", function() {
    let searchText = document.getElementById("txt").value;
    let apikey = "86c39163";
    fetch("http://www.omdbapi.com/?apikey=" + apikey + "&t=" + searchText)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        // console.log(myJson.Title);
        // console.log(myJson.Plot);
        let movieInfo = document.getElementById("movieInfo");
        let titleDiv = document.createElement("div");
        titleDiv.innerHTML = myJson.Title;
        let plotDiv = document.createElement("div");
        plotDiv.innerHTML = myJson.Plot;
        movieInfo.appendChild(titleDiv);
        movieInfo.appendChild(plotDiv);

        myJson.Ratings.forEach(function(rating) {
          console.log(rating.Source + ":" + rating.Value);
        });
        let img = document.createElement("img");
        img.src = myJson.Poster;

        movieInfo.appendChild(img);
      });
  });
});
