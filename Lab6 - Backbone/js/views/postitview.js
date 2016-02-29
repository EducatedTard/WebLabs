/**
 * Created by P C on 2016-02-28.
 */
var Postits = Backbone.View.extend({
    el: '.postits',
    render: function(){
        var that = this;
        var posts = new Posts();
        posts.fetch({
            success: function(posts){
                var template = _.template($('#posts').html(), {posts: Posts.models});
                that.$el.html(template);
            }
        });
        this.$el.html('CONTENT SHOULD SHOW HERE');
    }
});

