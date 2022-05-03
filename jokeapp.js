const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

// function generateJoke() {
//     const config  ={
//         headers: {
//             Accept:'application/json'
//         }
//     }

//     fetch ('https://icanhazdadjoke.com/', config)
//     .then(res => res.json())
//     .then(data => {
//         jokeEl.innerText = data.joke;
//     })
// }

function generateJoke() {
  jokeBtn.addEventListener("click", function () {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        jokeEl.innerHTML = data.joke;
      });
  });
}
