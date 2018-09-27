
$(document).ready(function(){
//question and answer bank
        var gameOn = false;
        var currentQuestion =  $("#question");
        var possibleAnswers = $("#possibleAnswers")

        var answeredCorrect = 0;
        var answeredIncorrect = 0;
        var yourGuess;
        const triviaQuestions = [
            {
                quest: "What are apples?",
                corrAnswer: "fruits",
                possAnswer: [ "fruits" ,"apples", "apple" ]

                },
            {
                quest:"what is food?",
                corrAnswer: "tastey",
                possAnswer: ["100", "tastey", "30" , "1"]
                },
            {
            
                quest:"what is Lactose?",
                corrAnswer: "something",
                possAnswer: ["500", "something" ,"cool"]
            },

            {   
                
                quest:"who is abraham linclon?", 
                corrAnswer: "1",
                possAnswer: [10, 1]
            },

            {
                
                quest:"how old is einstein",
                corrAnswer: "he's not alive anymore?",
                possAnswer: [100, "he's not alive anymore?", 10]
            },

            {
                
                quest:"How much do you know?",
                corrAnswer: "not much",
                possAnswer: [100, "not much", 10, 1]
            }]

           
            //Some Global Variables
            var intervalId;
           
            var i = 0;
         
            
            
            
            
            
            //creating my timer/counter object.
            var timer = {
            
                time: 0,

                start: function() {   
                    if(!gameOn){
                    intervalId = setInterval(timer.count, 1000);
                    gameOn = true;
                    }  else {
                        clearInterval(setInterval);
                    }
                },
                stop: function() {
                    clearInterval(intervalId);
                    gameOn = false;

                },
                reset: function(){
                        timer.time = 5;
                        gameOn = false;

                        
                },
                count: function(){
                    gamePlay();
                    
                }   
                };

                
            console.log(triviaQuestions.length)

            $("#buttonStart").on("click",timer.start);


            // $("div #select").on("click", function(){
            //     yourGuess = $("#select").attr('val');
            //     console.log(yourGuess);
            //     console.log("------")
            //       });

            function gamePlay(){  
                
                
                $("div #select").on("click", function(){
                   yourGuess = $("div #select").attr('val');
                   console.log(yourGuess);
                   console.log("------")
                     });


                if(timer.time > 0 && i < triviaQuestions.length){
                    timer.time--;
                    $("#clock").text(timer.time); 
                    
                }
                else if (i < triviaQuestions.length){    
                    //empty out current possible answers div
                    possibleAnswers.empty();
                    //
                    for(let j =0; j < triviaQuestions[i].possAnswer.length; j++){
                        currentQuestion.text(triviaQuestions[i].quest);
                        if(triviaQuestions[i].possAnswer[j]==triviaQuestions[i].corrAnswer){
                                    console.log("We have a winner")
                                    possibleAnswers.append("<div id = 'select' val = 'correct'>" +triviaQuestions[i].possAnswer[j]+"</div>");
                            }else{
                                    possibleAnswers.append("<div id = 'select' val = 'wrong'>" +triviaQuestions[i].possAnswer[j]+"</div>")
                                }
                            }
                            i++;
                            timer.reset(); 
                        } 
                        
                       
                    }   

                              
})
