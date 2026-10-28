function direBonjour(){
    console.log('Bonjour les amis')
}

const monButton = document.querySelector('button');

monButton.addEventListener();

monButton.addEventListener('click',(event)=>{if(event.type === 'click'){
    console.log('Je clique')
}
console.log(event.target);
console.log(event.currentTarget);
event.target.style.background})

MediaSourceHandle.addEventListener('click',(e)=>{
e.preventDefault();
e.target.style.backgroundColors ='red';
})

const listeFruits = document.querySelector('#fruits');

console.log(event.target.mATCHES('li')? event.target.textContent : "ce n'est pas un fruit :(")

const monli = document.createElement;

listeFruits.addEventListener('click',(event)=>{

    if(event.target.matches('li')){
        console.log(event.target.textContent);
    }
})