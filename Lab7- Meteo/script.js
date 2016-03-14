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

var city = "";

var ForecastCollection = Backbone.Collection.extend({
    url: 'http://api.wunderground.com/api/e78755f0aada0cf3/forecast7day/geolookup/q/autoip.json',
    model: ForecastModel,
    parse: function(data){
        city = data.location.city;
        return data.forecast.simpleforecast.forecastday;
    }
});

var ForecastView = Backbone.View.extend({
    template: _.template($('#forecast-template').html()),
    el: $('#forecast'),
    initialize: function () {
        _.bindAll(this, 'render');
        this.collection = new ForecastCollection();
        this.listenTo(this.collection, 'sync', this.render);
        this.collection.fetch();
    },
    render: function () {
        this.$el.html(this.template({collection: this.collection.toJSON()}));
        $('#city').html(city);
    }
});

var forecast = new ForecastView();
