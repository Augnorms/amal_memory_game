//imports from theme.js
import { numbersOption } from './themes.js';

/*----------------------------------------------*/

//main div declaration
var setupMenu = document.querySelector('.setupMenu');
var startGame = document.querySelector('.startGame');

//sub startGame div declaration
var gameInterface = document.querySelector('.gameInterface');
var bottomForPlayersDiv = document.querySelector('.bottomForPlayersDiv');
var onePlayer = document.querySelector('.bottomForSingle');
var fourPlayers = document.querySelector('.bottomForMultiple');

//single player data decalation.
var time = document.querySelector('#time');
var moves = document.querySelector('#moves');

//multipleplayer data declare
var pl1moves = document.querySelector('#pl1moves');
var pl2moves = document.querySelector('#pl2moves');
var pl3moves = document.querySelector('#pl3moves');
var pl4moves = document.querySelector('#pl4moves');

//multiplayer choices

var player1 = document.querySelector('#player1');
var player2 = document.querySelector('#player2');
var player3 = document.querySelector('#player3');
var player4 = document.querySelector('#player4');


//multi-dialog box div container declaration
var Multi_dialog = document.querySelector('#Multi_dialog');
var head = document.querySelector('.head');

//single-dialog box div container declaration
var single_dialog = document.querySelector('#single_dialog');
var single_head = document.querySelector('.single_head');
var timeDisplay = document.querySelector('.timeDisplay');
var movesDisplay = document.querySelector('.movesDisplay');

//setupMenu buttons for game.
var numbers = document.querySelector('.numbers');
var icons = document.querySelector('.icons');
var startbutton = document.querySelector('.startbutton');
var oneButton = document.querySelector('.one');
var fourButton = document.querySelector('.four');
var button4x4 = document.querySelector('.button4x4');
var button6x6 = document.querySelector('.button16x16');
var startbutton = document.querySelector('.startbutton');

//startGame buttons for game
var restart = document.querySelector('.restart');
var newGame = document.querySelector('.newGame');

//single dialog box buttons
var singleDialogRestart = document.querySelector('#singleDialogRestart');
var singleDailogNewGame = document.querySelector('#singleDailogNewGame');



//multiplayer dialiog box button
var multiDiagRest = document.querySelector('#multiDiagRest');
var multiDiagNew = document.querySelector('#multiDiagNew');

/*----------------------------------------------*/
/*----------------------------------------------*/

//randomize number memory
const randomize4x4number = () =>{

	let getData = numbersOption();

    getData[0].sort(()=> Math.random() - 0.5);

	return getData[0];
}

/*----------------------------------------------*/
/*----------------------------------------------*/

//randomize number memory
const randomize6x6number = () =>{

	let getData = numbersOption();

    getData[1].sort(()=> Math.random() - 0.5);

	return getData[1];
}

/*----------------------------------------------*/



//declared number of moves for 4x4 made during the game
var moveIniFig = 0;


//declare variable for moves
var play1moves = 0;
var play2moves = 0;
var play3moves = 0;
var play4moves = 0;


var ranNums4x4 = randomize4x4number(); // 4x4 random
var ranNums6x6 = randomize6x6number(); // 6x6 random




numbers.onclick = function(){ //single player mode

oneButton.onclick = function(){

button4x4.onclick = function(){

 	ranNums4x4;  //call 4x4 mode numbers

startbutton.onclick = function(){

	setupMenu.style.display = "none"; //hide setup menu

 	ranNums4x4.forEach((item, index)=>{

       var card = document.createElement('div');
       

       card.classList.add('card');
       gameInterface.classList.add('gridtemp_4x4');

       card.innerText = item.num;
       card.setAttribute('name', item.name);
       
       
       gameInterface.append(card); //appending looped cards to gameboard.
    

      card.onclick = function(e){

      	card.classList.toggle("toggleCards");

      	var clickedCard = e.target;

      	clickedCard.classList.add('flip');


      	let bothFadeCards = document.querySelectorAll(".flip");
      	let bothToggledCrards = document.querySelectorAll('.toggleCards');
        
        //checks the number of moves made to complete the search.
      	if(clickedCard){

      		moveIniFig++;

      		moves.innerText = moveIniFig;

      	}


      	if(bothFadeCards.length == 2){
      		       
           
      		if(bothFadeCards[0].getAttribute('name') === bothFadeCards[1].getAttribute('name')){
               

      			bothFadeCards.forEach((card)=>{

                   card.classList.remove('flip');
                   card.style.pointerEvents = 'none';
                   card.classList.add('matched');
                   
      			});


      		}else{


                bothFadeCards.forEach((card)=>{


                function removeToggle(){

                	card.classList.remove('toggleCards');
                }

                  setTimeout(removeToggle, 400); //delayed time for toggle class

                  card.classList.remove('flip'); // removing flip class.

                }); 

      		}

      	}//if bothFadeCards.length == 2 ends

/*------------------------------------------------------*/      	
  //final display information on dialog

      	var alltoggle = document.querySelectorAll('.toggleCards');
	   
	   if(alltoggle.length == 16){
	   	
          clearInterval(timer);  //stoping the timer when all memory is allocated.
      
          timeDisplay.innerText = '00'+ ":"+ totalSec;
          movesDisplay.innerText = moveIniFig;

          single_dialog.style.display = "block";
	   }

 
      }//card onclick function end.


 	});//runNums4x4 foreach loop ending..

 /*------------------------------------------------------*/    

 	startGame.style.display = "block"; //display gameboard.

  onePlayer.style.display = "flex";  // display singleplayer data.


 //start timmer when game is launched.   
var timer = setInterval(countTime, 1000);
var totalSec = 0;
function countTime(){
	++totalSec;
	var hour = Math.floor(totalSec/3600);
	var min = Math.floor((totalSec - hour*3600)/60);
	var sec = totalSec - (hour*3600 + min*60);
	if(hour < 10){
		hour = "0"+hour;
	}
	if(min < 10){
		min = "0"+min;
	}
	if(sec < 10){
		sec = "0"+sec;
	}
   
   var timerstart = hour + ":" + min + ":" + sec;

   time.innerText = timerstart;
}


 }//start game button function end.	

 }//button 4x4 end

 }//onebutton click button end



/*#################################################*/
/*#################################################*/

 

fourButton.onclick = function(){ //multiplayer mode

button4x4.onclick = function(){

    ranNums4x4; //call 4x4 mode for numbers

startbutton.onclick = function(){

setupMenu.style.display = 'none'; // hide setupmenu
    	
 player1.onclick = function(){
   var forP1 = document.querySelector('#forP1');//for current turns

 	player4.classList.remove('togglePlayer');
 	player2.classList.remove('togglePlayer');
 	player1.classList.add('togglePlayer');
    forP4.innerHTML = "";
    forP2.innerHTML = "";
    forP1.innerHTML = "CURRENT TURN";
  
  //display game for player1

  //clear gameboard for new game 
   gameInterface.innerHTML = "";

  ranNums4x4.forEach((item, index)=>{

    var card = document.createElement('div');
       

       card.classList.add('card');
       gameInterface.classList.add('gridtemp_4x4');

       card.innerText = item.num;
       card.setAttribute('name', item.name);
       
       
       gameInterface.append(card); //appending looped cards to gameboard.


   card.onclick = function(e){

     card.classList.toggle('toggleCards');

     var clickedCard = e.target;

     clickedCard.classList.add('flip');


     let bothFadeCards = document.querySelectorAll(".flip");
     let bothToggledCrards = document.querySelectorAll('.toggleCards');

     if(clickedCard){
     	play1moves++;

     	pl1moves.innerText = play1moves;
     }

     if(bothFadeCards.length == 2){
      		       
           
      		if(bothFadeCards[0].getAttribute('name') === bothFadeCards[1].getAttribute('name')){
               

      			bothFadeCards.forEach((card)=>{

                   card.classList.remove('flip');
                   card.style.pointerEvents = 'none';
                   card.classList.add('matched');
                   
      			});


      		}else{


                bothFadeCards.forEach((card)=>{


                function removeToggle(){

                	card.classList.remove('toggleCards');
                }

                  setTimeout(removeToggle, 400); //delayed time for toggle class

                  card.classList.remove('flip'); // removing flip class.

                }); 

      		}

      	}//if bothFadeCards.length == 2 ends
         
        var toggleOne = document.querySelectorAll('.toggleCards');

      	if(toggleOne.length == 16){

          player1.setAttribute('value', play1moves);

      	}

   }//card onclick ends


 });//end of ranNums4x4 loop 


 }//player1 ends

 /*------------------------------------------------*/

 player2.onclick = function(){
 	var forP2 = document.querySelector('#forP2'); //for curent turn

   player1.classList.remove('togglePlayer');
   player3.classList.remove('togglePlayer');
   player2.classList.add('togglePlayer');
   forP1.innerHTML = "";
   forP3.innerHTML = "";
   forP2.innerHTML = "CURRENT TURN";
   
  //clear gameboard for new game 
   gameInterface.innerHTML = "";


  //display game for player1
  ranNums4x4.forEach((item, index)=>{

    var card = document.createElement('div');
       

       card.classList.add('card');
       gameInterface.classList.add('gridtemp_4x4');

       card.innerText = item.num;
       card.setAttribute('name', item.name);
       
       
       gameInterface.append(card); //appending looped cards to gameboard.

   

   card.onclick = function(e){

     card.classList.toggle('toggleCards');

     var clickedCard = e.target;

     clickedCard.classList.add('flip');


     let bothFadeCards = document.querySelectorAll(".flip");
     let bothToggledCrards = document.querySelectorAll('.toggleCards');

      if(clickedCard){
     	play2moves++;

     	pl2moves.innerText = play2moves;
     }

     if(bothFadeCards.length == 2){
      		       
           
      		if(bothFadeCards[0].getAttribute('name') === bothFadeCards[1].getAttribute('name')){
               

      			bothFadeCards.forEach((card)=>{

                   card.classList.remove('flip');
                   card.style.pointerEvents = 'none';
                   card.classList.add('matched');
                   
      			});


      		}else{


                bothFadeCards.forEach((card)=>{


                function removeToggle(){

                	card.classList.remove('toggleCards');
                }

                  setTimeout(removeToggle, 400); //delayed time for toggle class

                  card.classList.remove('flip'); // removing flip class.

                }); 

      		}

      	}//if bothFadeCards.length == 2 ends

      	var toggleTwo = document.querySelectorAll('.toggleCards');

      	if(toggleTwo.length == 16){

          player2.setAttribute('value', play2moves);

      	}

   } //card onclick ends


 });//end of runNums4x4loop 



 }//player two click ends

 /*------------------------------------------------*/

  player3.onclick = function(){
  	var forP3 = document.querySelector('#forP3'); //for current turn

   player2.classList.remove('togglePlayer');
   player4.classList.remove('togglePlayer');
   player3.classList.add('togglePlayer');
   forP2.innerHTML = "";
   forP4.innerHTML = "";
   forP3.innerHTML = "CURRENT TURN";

   //clear gameboard for new game 
   gameInterface.innerHTML = ""; 


    //display game for player1
  ranNums4x4.forEach((item, index)=>{

    var card = document.createElement('div');
       

       card.classList.add('card');
       gameInterface.classList.add('gridtemp_4x4');

       card.innerText = item.num;
       card.setAttribute('name', item.name);
       
       
       gameInterface.append(card); //appending looped cards to gameboard.

   

   card.onclick = function(e){

     card.classList.toggle('toggleCards');

     var clickedCard = e.target;

     clickedCard.classList.add('flip');


     let bothFadeCards = document.querySelectorAll(".flip");
     let bothToggledCrards = document.querySelectorAll('.toggleCards');

      if(clickedCard){
     	play3moves++;

     	pl3moves.innerText = play3moves;
     }

     if(bothFadeCards.length == 2){
      		       
           
      		if(bothFadeCards[0].getAttribute('name') === bothFadeCards[1].getAttribute('name')){
               

      			bothFadeCards.forEach((card)=>{

                   card.classList.remove('flip');
                   card.style.pointerEvents = 'none';
                   card.classList.add('matched');
                   
      			});


      		}else{


                bothFadeCards.forEach((card)=>{


                function removeToggle(){

                	card.classList.remove('toggleCards');
                }

                  setTimeout(removeToggle, 400); //delayed time for toggle class

                  card.classList.remove('flip'); // removing flip class.

                }); 

      		}

      	}//if bothFadeCards.length == 2 ends

      	var toggleThree = document.querySelectorAll('.toggleCards');

      	if(toggleThree.length == 16){

          player3.setAttribute('value', play3moves);

      	}

   } //card onclick ends


 });//end of runNums4x4loop 


 }//player three click ends

 /*------------------------------------------------*/

  player4.onclick = function(){
  	var forP4 = document.querySelector('#forP4'); //for current turn

   player3.classList.remove('togglePlayer');
   player4.classList.add('togglePlayer');
   forP3.innerHTML = "";
   forP4.innerHTML = "CURRENT TURN";

   //clear gameboard for new game 
   gameInterface.innerHTML = "";


    //display game for player1
  ranNums4x4.forEach((item, index)=>{

    var card = document.createElement('div');
       

       card.classList.add('card');
       gameInterface.classList.add('gridtemp_4x4');

       card.innerText = item.num;
       card.setAttribute('name', item.name);
       
       
       gameInterface.append(card); //appending looped cards to gameboard.

   

   card.onclick = function(e){

     card.classList.toggle('toggleCards');

     var clickedCard = e.target;

     clickedCard.classList.add('flip');


     let bothFadeCards = document.querySelectorAll(".flip");
     let bothToggledCrards = document.querySelectorAll('.toggleCards');

      if(clickedCard){
     	play4moves++;

     	pl4moves.innerText = play4moves;
     }

     if(bothFadeCards.length == 2){
      		       
           
      		if(bothFadeCards[0].getAttribute('name') === bothFadeCards[1].getAttribute('name')){
               

      			bothFadeCards.forEach((card)=>{

                   card.classList.remove('flip');
                   card.style.pointerEvents = 'none';
                   card.classList.add('matched');
                   
      			});


      		}else{


                bothFadeCards.forEach((card)=>{


                function removeToggle(){

                	card.classList.remove('toggleCards');
                }

                  setTimeout(removeToggle, 400); //delayed time for toggle class

                  card.classList.remove('flip'); // removing flip class.

                }); 

      		}

      		

          

      	}//if bothFadeCards.length == 2 ends

       //final display
 /*---------------------------------------------------------------------------*/     

        var alltogglefour = document.querySelectorAll('.toggleCards');

      	if(alltogglefour.length == 16){

      		//declare variables

      		var first = document.querySelector('.first');
      		var play1winner = document.querySelector('.play1winner');
      		var play1pairs = document.querySelector('.play1pairs');

      		var second = document.querySelector('.second');
      		var play2winner = document.querySelector('.play2winner');
      		var play2pairs = document.querySelector('.play2pairs');

      		var third = document.querySelector('.third');
      		var play3winner = document.querySelector('.play3winner');
      		var play3pairs = document.querySelector('.play3pairs');

      		var forth = document.querySelector('.forth');
      		var play4winner = document.querySelector('.play4winner');
      		var play4pairs = document.querySelector('.play4pairs');

            player4.setAttribute('value', play4moves); 

            var p4 = player4.getAttribute('value');
            var p1 = player1.getAttribute('value');
            var p2 = player2.getAttribute('value');
            var p3 = player3.getAttribute('value');

            if(p1 < p2 && p1 < p3 && p1 < p4){
               
               play1winner.innerText = 'player1' +" (winner)"; 

               play1pairs.innerText = p1 + "pairs";

               play2pairs.innerText = p2 + "pairs";
               play3pairs.innerText = p3 + "pairs";
               play4pairs.innerText = p4 + "pairs";

               first.style.background = '#15293b';

               head.innerText = 'player1' +" (winner)";

            }
            else if(p2 < p1 && p2 < p3 && p2 < p4){

            	play2winner.innerText = 'player2' +" (winner)"; 

            	play2pairs.innerText = p2 + "pairs";
              play1pairs.innerText = p1 + "pairs";
              play3pairs.innerText = p3 + "pairs";
              play4pairs.innerText = p4 + "pairs";

                second.style.background = '#15293b';

                head.innerText = 'player2' +" (winner)";

            }
            else if(p3 < p1 && p3 < p2 && p3 < p4){

            	play3winner.innerText = 'player3' +" (winner)"; 

            	play3pairs.innerText = p3 + "pairs";
              play2pairs.innerText = p2 + "pairs";
              play1pairs.innerText = p1 + "pairs";
              play4pairs.innerText = p4 + "pairs";

                third.style.background = '#15293b';

                head.innerText = 'player3' +" (winner)";
            }
            else if(p4 < p1 && p4 < p2 && p4 < p3){

            	play4winner.innerText = 'player4' +" (winner)"; 

            	play4pairs.innerText = p4 + "pairs";
              play3pairs.innerText = p3 + "pairs";
              play2pairs.innerText = p2 + "pairs";
              play1pairs.innerText = p1 + "pairs";

                forth.style.background = '#15293b';

                head.innerText = 'player4' +" (winner)";
            }
            else if(p1 === p2 ){

            	head.innerText = "its a tie";

            	play1winner.innerText = 'player1' +" (winner)"; 

               play1pairs.innerText = p1 + "pairs";

               first.style.background = '#15293b';

               play2winner.innerText = 'player2' +" (winner)"; 

               play2pairs.innerText = p2 + "pairs";
               play4pairs.innerText = p4 + "pairs";
               play3pairs.innerText = p3 + "pairs";

               second.style.background = '#15293b';
            }
            else if(p1 === p3){

            	head.innerText = "its a tie";

            	play1winner.innerText = 'player1' +" (winner)"; 

               play1pairs.innerText = p1 + "pairs";

               first.style.background = '#15293b';


               play3winner.innerText = 'player3' +" (winner)"; 

            	play3pairs.innerText = p3 + "pairs";

              play2pairs.innerText = p2 + "pairs";
               
               play4pairs.innerText = p4 + "pairs";

                third.style.background = '#15293b';
            }
            else if(p1 === p4){ 

            	head.innerText = "its a tie";

            	play1winner.innerText = 'player1' +" (winner)"; 

               play1pairs.innerText = p1 + "pairs";
               play2pairs.innerText = p2 + "pairs";
               play3pairs.innerText = p3 + "pairs";

               first.style.background = '#15293b';


               play4winner.innerText = 'player4' +" (winner)"; 

            	play4pairs.innerText = p4 + "pairs";

                forth.style.background = '#15293b';

            } 
            else if(p2 === p3){

            	head.innerText = "its a tie";

            	play2winner.innerText = 'player2' +" (winner)"; 

               play2pairs.innerText = p2 + "pairs";

               play1pairs.innerText = p1 + "pairs";
               play4pairs.innerText = p4 + "pairs";

               second.style.background = '#15293b';


               play3winner.innerText = 'player3' +" (winner)"; 

            	play3pairs.innerText = p3 + "pairs";

                third.style.background = '#15293b';
            }
            else if(p2 === p4){

            	head.innerText = "its a tie";

            	play2winner.innerText = 'player2' +" (winner)"; 

                play2pairs.innerText = p2 + "pairs";

                play1pairs.innerText = p1 + "pairs";
                play3pairs.innerText = p3 + "pairs";

               second.style.background = '#15293b';


               play4winner.innerText = 'player4' +" (winner)"; 

               play4pairs.innerText = p4 + "pairs";

               forth.style.background = '#15293b';

            }
            else if(p3 === p4){

            	head.innerText = "its a tie";

            	play3winner.innerText = 'player3' +" (winner)"; 

            	play3pairs.innerText = p3 + "pairs";

              play2pairs.innerText = p2 + "pairs";
              play3pairs.innerText = p3 + "pairs"; 

                third.style.background = '#15293b';


                play4winner.innerText = 'player4' +" (winner)"; 

               play4pairs.innerText = p4 + "pairs";

               forth.style.background = '#15293b';
            }

            Multi_dialog.style.display = "block";

/*---------------------------------------------------------------------------*/  
  
         }

   } //card onclick ends

   

 });//end of runNums4x4loop 



 }//player4 click ends

startGame.style.display = 'block'; //display gameboard

fourPlayers.style.display = 'flex';

} //end of startbuton   

}//end of 4x4 

}// end of four 4x4button


}//end of numberbutton 4x4



/*####################################################*/
/*####################################################*/
         //numbers 6x6random game
/*####################################################*/
/*####################################################*/









//new game button 
newGame.addEventListener('click', function(){
  
   location.reload();

});

singleDailogNewGame.addEventListener('click', function(){
   
   location.reload();

});

multiDiagNew.addEventListener('click', function(){

	location.reload();
});


//reset or restart game for multiplayer;

restart.onclick = function(){
  
  location.reload();

}

multiDiagRest.onclick = function(){
 
  location.reload();

}



