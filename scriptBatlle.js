const player1 = localStorage.getItem('player1'); 
const player2 = localStorage.getItem('player2'); 

const fetchPokemon = async () => {
    const response1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${player1.toLowerCase()}`);
    const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${player2.toLowerCase()}`);
  
    if (response1.status && response2.status === 200) {
      const data1 = await response1.json();
      const data2 = await response2.json();
      return {data1, data2};
    }
  }

async function getUser(){ 
    
    const data = await fetchPokemon();
    
    let img1 = data.data1.sprites.front_default; 
    let img2 = data.data2.sprites.front_default; 

    const getImage1 = document.querySelector('.pokemon1'); 
    const getImage2 = document.querySelector('.pokemon2'); 
    getImage1.setAttribute('src', img1);
    getImage2.setAttribute('src', img2); 
    
} 

async function verificarVencedor() {

    const data = await fetchPokemon();

    if(data.data1.base_experience > data.data2.base_experience){
        window.alert(`${data.data1.name} venceu a batalha!`);
    } else {
        window.alert(`${data.data2.name} venceu a batalha!`);
    }
}

getUser();