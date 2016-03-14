var ForecastModel = Backbone.Model.extend({
    default:{
        id: 0
    },
    parse: function (data) {
        return {
            weekday: data.date.weekday,
            condition: data.conditions,
            icon_url: data.icon_url,
            high: data.high.celsius,
            low: data.low.celsius
        }
    }
});


var cityModel = Backbone.Model.extend({
    default: {
        city: "undefined"
    },

    render: function() {
        console.log(this.city);
    }
});

var ForecastCollection = Backbone.Collection.extend({
    url: 'http://api.wunderground.com/api/e78755f0aada0cf3/forecast7day/geolookup/q/autoip.json',
    model: ForecastModel,
    parse: function(data){
        return data.forecast.simpleforecast.forecastday;
    }
});



var ForecastView = Backbone.View.extend({
    initialize: function () {
        _.bindAll(this, 'render');
        this.collection = new ForecastCollection();


        this.listenTo(this.collection, 'sync', this.render);
        this.collection.fetch();
    },
    render: function () {
        console.log(this.collection.toJSON())
        var template = _.template($('#forecast-template').html());
        var compiledTemplate = template({collection: this.collection.models});
        this.$el.html(compiledTemplate);
    }
});

var forecast = new ForecastView();





/*
var Song = Backbone.Model.extend({
    defaults: {
        name: "Not specified",
        artist: "Not specified"
    },
    initialize: function(){
        console.log("Music is the answer");
    }
});

var Album = Backbone.Collection.extend({
    model: Song
});

var song1 = new Song({ name: "How Bizarre", artist: "OMC" });
var song2 = new Song({ name: "Sexual Healing", artist: "Marvin Gaye" });
var song3 = new Song({ name: "Talk It Over In Bed", artist: "OMC" });

var myAlbum = new Album([ song1, song2, song3]);
console.log( myAlbum.models ); // [song1, song2, song3]

var ForecastView = Backbone.View.extend({
    initialize: function () {
        this.model = new ForecastModel();
        this.listenTo(this.model, 'sync', this.render);
        this.model.fetch();
    },
    render: function () {
        console.log(this.model.toJSON());
    }
});

var forecast = new ForecastView();

/*
 var ForecastCollection = Backbone.Collection.extend({
 model: ForecastModel,
 url: 'http://api.wunderground.com/api/e78755f0aada0cf3/forecast7day/geolookup/q/autoip.json'
 });


 var forecasts = new ForecastCollection();
 */

/*
 var forecasts = new ForecastCollection();
 forecasts.fetch();
 forecasts.bind('reset', function () {
 console.log(forecasts);
 });*/