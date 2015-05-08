/*!
 *  Gadget v1.0
 */

var year 	= 2015;
var month 	= 6;
var day 	= 1;
var hour 	= 0;
var minute 	= 0;
var second 	= 0;

var eventDate = new Date(year, month-1, day, hour, minute, second);

setInterval(function(){
	'use strict';

	var currentDate = new Date().getTime();
	var secondsLeft = (eventDate - currentDate) / 1000;

	secondsLeft = parseInt(secondsLeft);

	var days = parseInt(secondsLeft / 86400);
	secondsLeft = secondsLeft % 86400;
	if (days > 0) {
		$('#minutes').addClass('hidden-xs');
		$('#seconds').addClass('hidden-xs hidden-sm');
	}

	var hours = parseInt(secondsLeft / 3600);
	secondsLeft = secondsLeft % 3600;
	if (hours > 0 && days === 0) {
		$('#minutes').addClass('hidden-xs');
		$('#seconds').addClass('hidden-xs hidden-sm');
	}

	var minutes = parseInt(secondsLeft / 60);
	if (minutes > 0 && hours === 0 && days === 0) {
		$('#minutes').removeClass('hidden-xs');
		$('#seconds').addClass('hidden-xs hidden-sm');
	}

	var seconds = parseInt(secondsLeft % 60);
	if (seconds > 0 && minutes === 0 && hours === 0 && days === 0) {
		$('#minutes').addClass('hidden-xs');
		$('#seconds').removeClass('hidden-xs hidden-sm');
	}

	$('.countdown .days').html(days);
	$('.countdown .hours').html(hours);
	$('.countdown .minutes').html(minutes);
	$('.countdown .seconds').html(seconds);
}, 1000);
