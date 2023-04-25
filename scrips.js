function myFunc(){
    fetch("https://api.adviceslip.com/advice", {method: 'GET', headers: {'Accept': 'application/json'} })
    .then(response => response.json()
        .then(value => console.log("Advice #" + value['slip']['id'] + " is " + value['slip']['advice'])));
        
}
