const key = "88593eb394c8d654d           590f6e5e7fa356e";
const hash = "ba2a8c7c15bda7cb7d706           70ceca21ebf";
const content = document.querySelector(".content");
const marvel = {
  render: () => {
    const urlAPI = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${key}&hash=${hash}`;
    const content = document.querySelector("#marvel-row");
    let contentHTML = "";

    fetch(urlAPI)
      .then((res) => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML += `
              <div class="col-md-4">
                  <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                  </a>
                  <h3 class="title">${hero.name}</h3>
              </div>`;
        }
        content.innerHTML = contentHTML;
      });
  },
};
marvel.render();
