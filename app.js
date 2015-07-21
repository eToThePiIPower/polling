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
  }
});
