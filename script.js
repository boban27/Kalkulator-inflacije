function inflationCalculator(){
    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelctor('#money');

    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
     
    let years = document.querySelector('#years').value;
    years =parseFloat(years);

    let worth = money +(money *(inflationRate / 100));
    console.log(worth);

    for (i=1; i<years; i++){
        worth +=worth * (inflationRate/100);
    }
    worth = worth.toFixed(2);

    let newElement =document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText ='Danasnji ${money} vredi isto kao ${worth} za ${years} godina.'
    document.querySelector('.conatainer').appendChild(newElement);

}