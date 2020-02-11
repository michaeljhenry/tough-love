const myForm = document.getElementById('myForm');

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var value = document.getElementById('bad_habit').value;
  var response = modifyString(value);
  var feedback = getFeedback();
  response = response + feedback;
  
  document.getElementById("feedback").innerHTML = response;
});

var modifyString = function(str) {
  var i;
  var answerArray = str.split(' ');
  var length = answerArray.length;
  var pronounArray = ['me', 'my','i','we'];

  if(str.replace(/^\s+|\s+$/g,'') == '') {
    str = "Your bad habit is not filling out forms huh?<br>";
    return str;
  }
  else {
    
    pronounArray.forEach(el => {
      for(i = 0; i<length; i++) {
        answerArray[i] = answerArray[i].toLowerCase();
        if(el == answerArray[i]) {
          if((el == 'my') || (el == 'we')) {        
            answerArray[i] = 'your';       
          }
          if((el == 'me') || (el == 'i')) {
            answerArray[i] = 'you';
          }
        }
      }
    })
  }
  var newStr;
  var flag = 0;

    if((answerArray[0] == 'you') || (answerArray[0] == 'your')) {
      flag = 1;
    }
    else {
    }

    newStr = answerArray.join(' ');
    newStr = newStr.replace(',', ' ');
  
  if(flag != 1) {
    newStr = 'You ' + newStr + '?<br>';
  }
  else {
    newStr = newStr[0].toUpperCase() + newStr.slice(1) + '?<br>';
  }

  return newStr;
}


var getFeedback = function() {

  var index = Math.round(Math.random()*18);
  var feedbackArray = ["That's terrible! You should knock that off!",
  "Seriously? Why don't you grow the hell up?!",
  "Aren't you a little old for that crap?",
  "You are bad and you should feel bad!",
  "Gross. You are gross.",
  "Are you going to suck all your life?",
  "What? Who does that?!",
  "I thought you were better than that.",
  "My disapproval is overwhelming.",
  " ಠ__ಠ ",
  "Are you freaking kidding me?",
  "NO! Bad!",
  "And when do you plan on becoming an adult?",
  "That is totally unacceptable.",
  "You should be utterly ashamed.",
  "Ugh! That's horrible!",
  "A kitten dies everytime you do that.",
  "I can't believe you are that disgusting."];

  return feedbackArray[index];
}
