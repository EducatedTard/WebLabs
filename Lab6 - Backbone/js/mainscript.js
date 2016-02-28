/**
 * Created by P C on 2016-02-28.
 */
var Router = Backbone.Router.extend({
   routes: {
       '': 'home'
   }
});


var list = new Postits();

var routeur = new Router();
routeur.on('route:home', function(){
    list.render();
});

Backbone.history.start();
