//Needed key to use Marvel's API (3000 accesses per day)
var myPubKey="f8382f3a3929c4afea242636a289cfeb"
//Function supposed to search a character by it's name
function searchName(name){
	return $.get("https://gateway.marvel.com:443/v1/public/characters?name=\""+name+"\"&orderBy=name&apikey="+myPubKey)
}
//Function supposed to search a character by it's Id
function searchId(id){
	return $.get("https://gateway.marvel.com:443/v1/public/characters/"+id+"?apikey="+myPubKey)
}
