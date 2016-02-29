/**
 * Created by P C on 2016-02-28.
 */

$.ajaxPrefilter( function ( options, originalOptions, jqXHR){
    options.url = 'http://localhost:5000' + options.url;
});

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
