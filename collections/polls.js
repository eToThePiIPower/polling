Polls = new Mongo.Collection('polls');

if (Meteor.isServer) {
  // Publish the polls to the client
  Meteor.publish('recentPolls', function() {
    return Polls.find({}, {sort: {created_at: -1}, limit: 3});
  });
}

if (Meteor.isClient) {
  Meteor.subscribe('recentPolls');
}
