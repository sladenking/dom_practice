'use strict';

function DomElemement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;    
}

DomElemement.prototype.selectorAdd = function() {
    if (this.selector.slice(0,1) === '.'){
        const div = document.createElement('div');
        div.textContent="div";
        div.classList.add(this.selector.slice(1));
        div.style.cssText = `height: ${this.height}px; width: ${this.width}px; 
        background-color: ${this.bg}; font-size: ${this.fontSize}px`;
        document.body.append(div);
    }
    if (this.selector.slice(0,1) === '#'){
        const p = document.createElement('p');
        p.textContent="p";
        p.id=this.selector.slice(1);
        p.style.cssText = `height: ${this.height}px; width: ${this.width}px; 
        background-color: ${this.bg}; font-size: ${this.fontSize}px`;
        document.body.append(p);
    }  
};

let p = new DomElemement('#paragraph', 100, 200, '#bbb', 20);
let div = new DomElemement('.block', 100, 200, '#47d147', 20);


p.selectorAdd();
div.selectorAdd();