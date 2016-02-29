/**
 * Created by P C on 2016-02-28.
 */
var Posts = Backbone.Collection.extend({
    url: '/tasks'
});

var Post = Backbone.Model.extend({
    urlRoot: '/tasks'
});