Template.pollForm.events({
  //handle the form submission
  'submit form': function(event) {
    //stop the form from submitting
    event.preventDefault();

    //get the data we need from the form
    var question = event.target.question.value;
    var choices = [
      { text: event.target.choice1.value, votes: 0 },
      { text: event.target.choice2.value, votes: 0 },
      { text: event.target.choice3.value, votes: 0 },
    ];

    // create the new poll
    Meteor.call('addPoll', question, choices);
  }
});
