(function () {
    'use strict';
    angular.module('secondsTime', []).filter('secondsTime', function () {
        return function (seconds) {
            var format, hour, minute, noon, ampm, h, m, temp;
            seconds = parseInt(seconds, 10);
            minute = 60;
            hour = minute * 60;
            noon = hour * 12;
            format = function (number) {

                h = Math.floor(seconds / hour);
                if (h == 0) {
                    h = 12;             // 0 is midnight, 12am
                } else if (h > 12) {
                    h = h - 12;         // Do not use 24 hour time
                }

                temp = seconds % hour;
                m = Math.floor(temp / minute);
                if (m < 10) {
                    m = "0" + m.toString();
                }

                ampm = number >= noon ? "PM" : "AM";
                return "" + h + ":" + m + "" + ampm;
            };
            return format(seconds);
        };
    });

}).call(this);

/*
 //@ sourceMappingURL=angular-seconds-time.js.map
 */