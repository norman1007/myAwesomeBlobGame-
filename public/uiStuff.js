let wHeight = $(window).height();
let wWidth = $(window).width();
let player = {} // This is all things "this" player
let orbs = [] 

let canvas = document.querySelector('#the-canvas');
let context = canvas.getContext('2d');
canvas.width = wWidth;
canvas.height = wHeight;

$(window).load(() => {
    $('#loginModal').modal('show');
})

$('.name-form').submit((event) => {
    event.preventDefault();
    // console.log('Submitted!');
    player.name = document.querySelector('#name-input').value;
    // Hide the login modal 
    $('#loginModal').modal('hide');
    // Show the next modal
    $('#spawnModal').modal('show');
    // Set player name
    document.querySelector('.player-name').innerHTML = player.name;
})

$('.start-game').click((event) => {
    $('.modal').modal('hide');
    $('.hiddenOnStart').removeAttr('hidden');
    init();
})