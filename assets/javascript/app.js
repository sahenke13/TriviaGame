$(document).ready(function(){

    const triviaQuestions = [
        {
            quest: "What was the first sport televised in the USA?",
            corrAnswer: "Baseball",
            possAnswer: [ "Baseball" ,"Football", "Soccer", "Hockey" ]
    
            },
        {
            quest:"When was the first game of Scrabble released?",
            corrAnswer:  1948,
            possAnswer: [1997, 1912, 1948 , 1951]
            },
        {
        
            quest:"On average, how much does the human head weight?",
            corrAnswer: "8 lbs",
            possAnswer: ["8 lbs", "7 lbs" ,"10lbs"]
        },
    
        {   
            
            quest:"Spelunkers explore caves, is this true or false.", 
            corrAnswer: "True",
            possAnswer: ["True", "False"]
        },
    
        {
            
            quest:"What is the Indianapolis Speedway also known as?",
            corrAnswer: "The Brickyard",
            possAnswer: ["The Dusty Trail", "The Indianapolis 500", "The Brickyard"]
        },
    
        {
            
            quest:"What item of clothing was Ralph Lauren first product?",
            corrAnswer: "A Necktie",
            possAnswer: ["A Necktie", "Polo Shirts", " a Three Piece Suit", "a Handbag"]
        },
        {
            
            quest:"What is Shawshank, in the movie The Shawshank Redemption??",
            corrAnswer: "A Prison",
            possAnswer: ["A Shank", "A Resort", " A Prison", "A Hotel"]
        },
        {
            
            quest:"What is the edible part of a Sea Urchin",
            corrAnswer: "The Gonads",
            possAnswer: ["The Gonads", "The Shell", "The Heart", "The Roe"]
        },
        {
            
            quest:"What company's tea shipment was destroyed during the Boston Tea Party in 1773?",
            corrAnswer: "East India Company",
            possAnswer: ["Tea with the Queen", "India Tea Company", "English Tea Company", "East India Company"]
        },
        {
            
            quest:"Who is the lead singer for the rock band Guns N’ Roses??",
            corrAnswer: "Axl Rose",
            possAnswer: ["Keith Richards", "Sting", "Axl Rose"]
        },  
        {
            
            quest:"The circumference of the earth is 24,901 miles",
            corrAnswer: "True",
            possAnswer: ["True", "False"]
        },  
        {
            
            quest:"Naan is the Persian word for what??",
            corrAnswer: "Bread",
            possAnswer: ["Beer", "Milk", "Rice", "Bread"]
        },  
        {
            
            quest:"What was the nickname for the four engine B-17 bomber planes used during WWII??",
            corrAnswer: "Flying Fortress",
            possAnswer: ["Flying Fortress", "Nighttime Bomber", "Sky Bees", "Memphis Belles"]
        },
        {
            quest:"",
            corrAnswer:"",
            possAnswer: ""
        }
    
    ]
    
    var possibleAnswers = $("#possibleAnswers");
    var currentQuestion =  $("#question");
    var output = $("#gameResponse");
    var timeDisplay = $("#clock");
    var time = 5;
    var intervalId;
    var clockRunning = false;
    var i = 0;
    var j = 0;
    var yourGuess;
    var right = 0;
    var wrong = 0;
    var ontime;
    output.hide();
    
    $("#buttonStart").on("click", function(){
        if (!clockRunning){
            start();
            clockRunning=true;
            console.log("start has been clicked");
            currentQuestion.show();
        }
        else if(clockRunning)
        {       
                i=0;
                j=0;
                right=0;
                wrong = 0;
                time=6;
                clockRunning=false;
                possibleAnswers.empty();
                display();
                currentQuestion.hide();
                console.log("start has been clicked");
                clearInterval(intervalId);
                // reset();
        }});
      
        
    function start(){
        output.hide();
        intervalId = setInterval(count, 1000);
        currentQuestion.text(triviaQuestions[i].quest);
        generateQuest();
        endOfGame();
        
    };
    
    function endOfGame(){
        if(i<triviaQuestions.length-1){
            console.log("end of Game")
            console.log("i is:"+ i);
            gamePlay();
    
        }else{
            output.text("Game is Over.")
            output.show();
            clearInterval(intervalId);
            
        }
    
    }
    
    function reset(){
            output.hide();
            display();
            i++;
            time = 6;
            possibleAnswers.empty();
            currentQuestion.text(triviaQuestions[i].quest);
            generateQuest();   
            endOfGame();
        
    };
    
    function count(){
        
        if(time > 0){
            time--;
            timeDisplay.text(time);
        }else{
            wrong+=1
            output.text("The Correct answer is " + triviaQuestions[i].corrAnswer);
            output.show();
            setTimeout(reset, 750);
          
        }
        
        
    }
    //function that generates questions and assigns correct or incorrect id
    
    function generateQuest(){
        
        for(j =0; j < triviaQuestions[i].possAnswer.length; j++)
            {
                
                if(triviaQuestions[i].possAnswer[j]==triviaQuestions[i].corrAnswer)
                    {
                 
                    possibleAnswers.append('<div class = "option" value ="correct">' +triviaQuestions[i].possAnswer[j]+'</div>');
                    }else
                {
                    possibleAnswers.append('<div class = "option" value ="incorrect">' +triviaQuestions[i].possAnswer[j]+'</div>')
                }
            }
    }
    
    
    function display(){
        $("#incorrectGuess").text(wrong);
        $("#correctGuess").text(right);
    }
    
    function gamePlay(){ 
    
        
            $(".option").on("click",function(){
                yourGuess=$(this).attr("value");
                if(yourGuess==="correct"){
                    right++;
                    output.show();
                    output.text("You Answered Correctly")
                    setTimeout(reset,1000);
                    setTimeout(count,1000);
    
                    
                }else if(yourGuess==="incorrect")
                {
                wrong++;
                output.show();
                output.text("The Correct answer is " + triviaQuestions[i].corrAnswer)
                
                setTimeout(reset,1000);
                setTimeout(count,1000);
                console.log("wrong count is "+ wrong)
                
                }
                display();
            }) 
    
        
        }
    
    })