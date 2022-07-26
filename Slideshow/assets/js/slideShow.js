
'use strict'

const images = [
    { 'id': '1', 'url':'./assets/img/got1.webp' },
    { 'id': '2', 'url':'./assets/img/got2.jpg' },
    { 'id': '3', 'url':'./assets/img/got3.jpg' },
    { 'id': '4', 'url':'./assets/img/got4.jpg' },
    { 'id': '5', 'url':'./assets/img/got5.jpeg' },
    { 'id': '6', 'url':'./assets/img/got6.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => { 
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', next);
document.querySelector('#next').addEventListener('click', previous);

