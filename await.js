
async function buscarClima(){
    const apikey = "Rggd2AIuLJvpAOHAKTcyHHKPn5d5CQp7"
    let cidades = document.getElementById('cidade').ariaValueMax
    let dados = await fetch(
        `http://dataservice.accuweather.com/locations/v1/search?q=${cidades}&apikey=Rggd2AIuLJvpAOHAKTcyHHKPn5d5CQp7`);
    let cidade = await dados.json();
}
