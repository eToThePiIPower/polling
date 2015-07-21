// run this when the meteor server is started
Meteor.startup(function() {

  // If the polls collection is empty, we bootstrap it with some sample data
  if (Polls.find().count() === 0) {
    var samplePolls = [
      {
        question: 'What is the best web framework?',
        created_at: new Date(),
        choices: [
          { text: 'Meteor, naturally', votes: 0 },
          { text: 'Ruby on Rails, of course', votes: 0 },
          { text: 'Django, for sure', votes: 0 },
          { text: 'Drupal is a framework too!', votes: 0 },
        ]
      },{
        question: 'Which is the greatest web browser?',
        created_at: new Date(),
        choices: [
          { text: 'Chromium/Chrome', votes: 0 },
          { text: 'Aurora/Firefox', votes: 0 },
          { text: 'Links', votes: 0 },
          { text: 'Something closed source', votes: 0 },
        ]
      }
    ];

    // loop over each sample poll and insert into database
    _.each(samplePolls, function(poll) {
      Polls.insert(poll);
    });
  }
});
