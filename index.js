let score =  20;

let highscore = 0;

let number = Math.floor(Math.random() * 20 + 1)

let guess;

document.querySelector('.check').addEventListener('click' , function(){
    guess =  Number(document.querySelector('.guess').value)
      console.log(guess);
      if(!guess){
       getMessage("u havent enter any number")
      }else{
         if(guess === number){
            document.querySelector('.number').textContent = number
            document.querySelector('.number').style.fontSize = '70px'
          getMessage("congratulation!!!!")
          document.body.style.backgroundColor=`green`
          if(highscore<score){
            highscore = score;
            document.querySelector(".highscore").innerHTML=score
          }

      }
      else if(guess !== number){
			if(score > 0 ){
				displayMessage();	
			}else{
                document.querySelector('.message').textContent = "you have lost the game";
			}
      }
      
    
      
      }
      document.querySelector('.guess').value = ''
      

})

 document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.number').innerHTML = '?'
    document.querySelector('.score').innerHTML = score;
    getMessage('Start guessing...')
    number = Math.floor(Math.random() * 20 + 1)
   document.body.style.backgroundColor = '#222'
    

})

var displayMessage = function(){
   document.querySelector(".message").textContent= ( guess > number ? 'number is too high' :'number is too low')
   score--;
   document.querySelector(".score").innerHTML=score
}

function getMessage(msg){
   document.querySelector('.message').innerHTML = msg;
}

