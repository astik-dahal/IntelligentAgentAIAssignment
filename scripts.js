

var startBtn = document.querySelector('.start-btn');
var trafficLightPos = 720;


startBtn.addEventListener('click', ()=>{
    document.querySelector('.start-btn').textContent = "Running";
    startGame();
    
})
function startGame(){
    document.querySelector('.cars').classList.toggle('active')
    
    var greenLight = document.querySelector('.green');
    var redLight = document.querySelector('.red');
    var alertText = document.querySelector('.popup-text')
    var i=0;
    var delayInMilliseconds = 4000; //m second
    setInterval(() => {
        greenLight.classList.remove('active')
        redLight.classList.remove('active')
        i++;
        if(i%2==0)
        {
            alertText.textContent = "GO!"
            greenLight.classList.toggle('active')
            // if(document.querySelector('.cars.active .car-1').style.left < trafficLightPos )
            document.querySelector('.cars.active .car-1').style.animationPlayState = "running";
            document.querySelector('.cars.active .car-2').style.animationPlayState = "running";

        }
        else{
            alertText.textContent = "STOP!"
            redLight.classList.toggle('active')
            document.querySelector('.cars.active .car-1').style.animationPlayState = "paused";
            document.querySelector('.cars.active .car-2').style.animationPlayState = "paused";

        }
    }, delayInMilliseconds);


}