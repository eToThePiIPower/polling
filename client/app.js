// Add polls helper to template.body
Template.body.helpers({
  polls: function() {
    return Polls.find({}, {sort: {created_at: -1}});
  }
});

// add index to each item
UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});
