'use strict';

const piano = document.querySelector('.piano');

let check = false;
let pianokey = document.querySelectorAll('.piano-key');

piano.addEventListener('mousedown', (event) => {
        if(event.target && event.target.tagName == "DIV"){
            event.target.classList.add('piano-key-active');
            event.target.classList.add('piano-key-active-pseudo');
            PlayAudio(event.target);
            check = true;
        }
});

piano.addEventListener('mouseup', (event) => {
    check = false;
    event.target.classList.remove('piano-key-active');
    event.target.classList.remove('piano-key-active-pseudo');
});

piano.addEventListener('mouseover', (event) => {
    if(event.target && event.target.tagName == "DIV" && check === true){
        event.target.classList.add('piano-key-active');
        event.target.classList.add('piano-key-active-pseudo');
        PlayAudio(event.target);
    }
});

piano.addEventListener('mouseout', (event) => {
    if(event.target && event.target.tagName == "DIV"){
        event.target.classList.remove('piano-key-active');
        event.target.classList.remove('piano-key-active-pseudo');
    }
});


const PlayAudio = (elem) => {
    let audio = new Audio(`./assets/audio/${elem.getAttribute('data-note')}.mp3`);
    audio.play();
}

var downCheck =[false,false,false,false,false,false,false,false,false,false,false];


window.addEventListener('keydown', (event) => {
    pianokey.forEach(
        function playbtn(e) {
            if(`Key${e.dataset.letter}` == event.code) {
                if(!downCheck[e.dataset.num]) {
                    const audio = new Audio(`assets/audio/${e.dataset.note}.mp3`);
                    audio.play();
                    e.classList.add('piano-key-active');
                    e.classList.add('piano-key-active-pseudo');
                    downCheck[e.dataset.num] = true;
                }
            }
        }
    )
});

window.addEventListener('keyup', (event) => {
    pianokey.forEach(
        function noplaybtn(e) {
            if(`Key${e.dataset.letter}` == event.code) {
                    e.classList.remove('piano-key-active');
                    e.classList.remove('piano-key-active-pseudo');
                    downCheck[e.dataset.num] = false;
            }
        }
    )
});

const letter = document.querySelector('.btn-letters');
const notes = document.querySelector('.btn-notes');
const divs = document.querySelectorAll('.piano-key');
letter.addEventListener('click', () => {
    if(!letter.classList.contains('btn-active')){
        notes.classList.remove('btn-active');
    letter.classList.add('btn-active');
    divs.forEach(item => {
            item.classList.toggle('piano-key-letter');
    });
    }
    
    
});

notes.addEventListener('click', () => {
    if(!notes.classList.contains('btn-active')){
        letter.classList.remove('btn-active');
    notes.classList.add('btn-active');
     divs.forEach(item => {
            item.classList.toggle('piano-key-letter');
    });
    }
    
   
    
});

const screen = document.querySelector('.fullscreen');

screen.addEventListener('click', () => {
    document.documentElement.requestFullscreen();
    if (document.fullscreenElement) {
        document.exitFullscreen();
       }
});


