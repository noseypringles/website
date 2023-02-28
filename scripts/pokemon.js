var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=251"
var spriteUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

fetch(apiUrl).then(respone => {
	return respone.json();
}).then(data => {
	var results = data.results
	for(var i = 0; i < results.length; i++){
		document.body.innerHTML += results[i].name + "<img src=\"" + spriteUrl
		+ (i+1) + ".png\"><br>"
	}
	}).catch(err => {
});