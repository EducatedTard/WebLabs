/**
 * Created by Daniel on 2016-02-28.
 */
$.ajaxPrefilter( function ( options, originalOptions, jqXHR){
    options.url = 'http://localhost:5000' + options.url;
});

var Task = Backbone.Model.extend({
    urlRoot:'/tasks'
});

var Tasks = Backbone.Collection.extend({
    url: '/tasks',
    model: Task
});

var TaskListView = Backbone.View.extend({
    el: '.task-list',
    render: function () {
        var that = this;
        var tasks = new Tasks();
        tasks.fetch({
            success: function (tasks) {
                var template = _.template($('#task-list-template').html());
                var compiledTemplate = template({tasks: tasks.models});
                that.$el.html(compiledTemplate);
            }
        });
    }
});

var taskListView = new TaskListView();

var Router = Backbone.Router.extend({
    routes: {
        '': 'home'
    }
});

var routeur = new Router();
routeur.on('route:home', function(){
    taskListView.render();
});

Backbone.history.start();