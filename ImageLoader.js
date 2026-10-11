const cache = {};

// Make sure your image file is called Images. 
// If not them change the word Images from below to the new file name 

const modules = import.meta.glob('./Images/*.{png,jpg,jpeg,svg,gif}', {eager: true});

for (const path in modules){
    const filename = path.split('/').pop();
    cache[filename] = modules[path].default || modules[path];
}

export default cache;



//Example of js file with image

/* 
import images from './imageLoader.js';

const ComboIMG10 = document.createElement('img');
ComboIMG10.src = images['BaconSausageShrimp.png'];


*/