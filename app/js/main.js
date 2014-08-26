var Botinder = Ember.Application.create({
  rootElement: '#app'
});

Botinder.Router.map(function() {
  this.route('home', {path: '/'});
  this.route('liker');
  this.resource('matches', function() {
    this.route('match', {path: '/:match_id'});
  });
  this.route('account');
});