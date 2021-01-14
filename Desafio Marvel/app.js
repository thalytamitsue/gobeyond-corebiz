document.addEventListener("DOMContentLoaded", function (event) {

    var url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=30&apikey=7e99323b2679072c3e1119052f1aca13&hash=779d449f29c113e00feddbada3e680af';
    var content = document.getElementById('marvel-row');
 


    const getHeroes = async function (url) {
        var data = await fetch(url);
        var body = await data.json();
        var allHeroes = body.data.results;

        Array.from(allHeroes).forEach((item) => {
            var div = document.createElement("div");
            div.classList = 'item';
      
            div.innerHTML = `<a href="${url}" target="_blank">
                                     <img src="${item.thumbnail.path}.${item.thumbnail.extension}">
                                </a>
                                <h3 class="title">${item.name}</h3>`

            content.appendChild(div);

        })
    }

    getHeroes(url);

});