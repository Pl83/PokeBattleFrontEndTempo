if (! localStorage.getItem('PokeTrainer')){
    window.location.href = "login.html";
}
const socket = io('https://pokebattlebackend.onrender.com');
socket.on('connect', () => {
    console.log('connect');
});
