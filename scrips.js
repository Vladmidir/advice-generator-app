function giveAdvice(){
    slip = fetch("https://api.adviceslip.com/advice")
    .then(response => response.json()
    .then(value => {
        document.getElementById("advice-id").innerText = value['slip']['id'];
        document.getElementById("advice-text").innerText = value['slip']['advice'];
    }));
        
}


window.addEventListener('load', load =>{
    giveAdvice();
});