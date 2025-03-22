// Get the current question from the database
function getCurrentQuestion() {
    // Make a GET request to the API to retrieve the current question
    fetch('/api/questions')
      .then(response => response.json())
      .then(data => {
        // Display the current question on the screen
        document.getElementById('question').innerHTML = data.question;
      });
  }
  
  // Check the user's answer and update the score
  function checkAnswer() {
    // Get the user's answer from the input field
    const userAnswer = document.getElementById('answer').value;
    
    // Make a POST request to the API to check the answer
    fetch('/api/answers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ answer: userAnswer })
    })
      .then(response => response.json())
      .then(data => {
        // Update the score and display the feedback
        if (data.correct) {
          document.getElementById('score').innerHTML = 'Correct!';
        } else {
          document.getElementById('score').innerHTML = 'Incorrect!';
        }
      });
  }
  
  // Display the feedback and the next question
  function displayFeedback() {
    // Get the feedback from the API
    fetch('/api/feedback')
      .then(response => response.json())
      .then(data => {
        // Display the feedback on the screen
        document.getElementById('feedback').innerHTML = data.feedback;
      });
    
    // Get the next question from the API
    fetch('/api/questions')
      .then(response => response.json())
      .then(data => {
        // Display the next question on the screen
        document.getElementById('question').innerHTML = data.question;
      });
  }