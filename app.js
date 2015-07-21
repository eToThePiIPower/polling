Meteor.methods({
  voteChoice: function(pollID, choiceID) {
    // create the increment action
    var voteString = 'choices.' + choiceID + '.votes';
    var action = {};
    action[voteString] = 1;

    // increment the number of votes for the choice

    Polls.update(
      { _id: pollID },
      { $inc: action }
    ); 
  },

  addPoll: function(question, choices) {
    var newPoll = {
      question: question,
      choices: choices,
      created_at: new Date()
    }
    // Check types
    if (!Array.isArray(choices) || typeof question !== "string" ) {
      throw new Meteor.Error(401, 'Invalid parameter type');
    }
    if (choices.length != 3 || question.length < 3 || question.length > 140) {
      throw new Meteor.Error(401, 'Invalid parameter length');
    }

    Polls.insert(newPoll);
  }
});
