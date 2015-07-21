// Add polls helper to template.body
Template.body.helpers({
  polls: function() {
    return Polls.find();
  }
});
