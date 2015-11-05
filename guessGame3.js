$('#answers').hide();
$('#meGameSubmit').on('click', function(){
  $('#answers').fadeToggle("slow", "linear");
});

document.getElementById('meGameSubmit').addEventListener('click', function() {
  var correctAnswers = 0;
  var answersToQuestions = ["PUYALLUP", "YES", "SNAKE"];
  var answerOne = document.getElementById('answerOne').value;
  var answerTwo = document.getElementById('answerTwo').value;
  var answerThree = document.getElementById('answerThree').value;
  var meGameAnswers = [answerOne, answerTwo, answerThree];
  for (var index = 0; index < meGameAnswers.length; index ++) {
    if (meGameAnswers[index].toUpperCase() === answersToQuestions[index]) {
      correctAnswers +=1;
    }
  } $('#meGameTable tr:last').after(correctAnswers);
    $('#clearForm').on('click', function() {
      location.reload();
  });
});

