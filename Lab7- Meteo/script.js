// Exemple
var Forecast7DaysModel = Backbone.Model.extend({
    url: 'http://api.wunderground.com/api/e78755f0aada0cf3/forecast7day/geolookup/q/autoip.json',
    parse: function (data) {
        var location = data.location;
        var forecastday = data.forecast.simpleforecast.forecastday;
        return {
            city: location.city,
            days: forecastday,
            sunday: [forecastday[0].date.weekday, forecastday[0].icon, forecastday[0].high.celsius, forecastday[0].low.celsius]
        }
    }
});


var ForecastModel = Backbone.Model.extend({
    url: 'http://api.wunderground.com/api/e78755f0aada0cf3/forecast7day/geolookup/q/autoip.json',
    dayId: 0,
    parse: function (data) {
        var location = data.location;
        var day = data.forecast.simpleforecast.forecastday[this.dayId]
        return {
            city: location.city,
            weekday: day.date.weekday,
            condition: day.conditions,
            icon_url: day.icon_url,
            high: day.high.celsius,
            low: day.low.celsius
        }
    }
})

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