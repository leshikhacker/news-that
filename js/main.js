'use strict';
$(document).ready(function() {
  $.simpleWeather({
    location: 'Lviv, Ukraine',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      $('.js-weather-label').html(weather.alt.temp + '&deg;С');
      $('.js-weather-image').attr('src', weather.thumbnail);
      console.log(weather);
    }
  });
});