var questions = [
    {
        question:"HTML stands for",
        option1:"Hyper Text markup language",
        option2:"Hyper Link markup language",
        option3:"Hyper Text makeup language",
        correctAns:"Hyper Text markup language"
    },
    {
        question:"CSS stands for",
        option1:"Cascading Style sheet",
        option2:"Cascading Styling sheet",
        option3:"Cascading super sheet",
        correctAns:"Cascading Style sheet"
    },{
        question:"In how many ways can CSS be written in?",
        option1:"1",
        option2:"2",
        option3:"3",
        correctAns:"3"
    },{
        question:"Which tag gives your the largest heading in html",
        option1:"<h6>",
        option2:"<h2>",
        option3:"<h1>",
        correctAns:"<h1>"
    },{
        question:"How many data types in js?",
        option1:"6",
        option2:"7",
        option3:"8",
        correctAns:"8"
    }
    ,{
        question:"Which symbol is used for comments in JavaScript? ",
        option1:"//",
        option2:"||",
        option3:"<!--",
        correctAns:"//"
    },
    {
        question:"Name the property used to specify the background color of an element in css",
        option1:"bg-Color",
        option2:"background-color",
        option3:"color",
        correctAns:"background-color"
    },
    {
        question:"It removes the area around the border. It is transparent",
        option1:"Margin",
        option2:"Border",
        option3:"Content",
        correctAns:"Margin"
    },
    {
        question:"Displays the alert box containing the message with ok button",
        option1:"Alert",
        option2:"Document.write()",
        option3:"Console",
        correctAns:"Alert"
    },
    {
        question:"How many days in febuary",
        option1:"29",
        option2:"28",
        option3:"both",
        correctAns:"both"
    },
    
]
    var question = document.getElementById("Questions")
    var opt1 = document.getElementById("option1")
    var opt2 = document.getElementById("option2")
    var opt3 = document.getElementById("option3")
    var btn = document.getElementById("btn")
    var time = document.getElementById("time")
    var index =0
    var score =0
    var min = 1
    var sec  = 59



    setInterval(function(){
        time.innerHTML = `${min}:${sec}`;
        sec--
        if(sec<0){
            min--;
            sec = 59    
        }
        if(min<0){
            min= 1;
            sec = 59;
            nextQuestion()
        }
    },1000)
    

function reset(){
    min=1
    sec=59
    time.innerHTML = `${min}:${sec}`;
}




function nextQuestion(){
  
   


    var getOpt = document.getElementsByName("option")
    for(var i = 0;i<getOpt.length;i++)
    {
       
        if(getOpt[i].checked){
            var selectedValue = getOpt[i].value
            
            var selectedQuestion = questions[index - 1]["question"];
            var selectedAns = questions[index -1][`option${selectedValue}`]
            var correctAns = questions[index - 1]["correctAns"]
            
            if(selectedAns === correctAns){
                score++
              console.log(score)
           
            }
        }
        getOpt[i].checked = false
   
    }
    btn.disabled = true


   if(index > questions.length - 1 && score >=7 ){
   
    Swal.fire(
  'Good job!',
  `Your percentage is ${((score / questions.length)*100).toFixed(2)}`,
  'success'
        )

   }

else if (index > questions.length - 1 && score>=5){

     
    Swal.fire(
        'Practice more!',
        `Your percentage is ${((score / questions.length)*100).toFixed(2)}`,
        'warning'
              )
}
else if (index > questions.length - 1 && score>=0){

     
    Swal.fire(
        'FAIL',
        `Your percentage is ${((score / questions.length)*100).toFixed(2)}`,
        'error'
              )
}















else{
    question.innerText=questions[index].question
    opt1.innerText=questions[index].option1
    opt2.innerText=questions[index].option2
    opt3.innerText=questions[index].option3
    index++
}    }






function clicked(){
    btn.disabled = false
}


console.log(score)