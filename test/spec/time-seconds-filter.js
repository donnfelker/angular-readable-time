'use strict';
describe('Filter: secondsTime', function() {
    var secondsTime;
    secondsTime = null;
    beforeEach(module('secondsTime'));
    beforeEach(inject(function(_$filter_) {
        return secondsTime = _$filter_('secondsTime');
    }));
    return it('Formats times correctly', function() {
        expect(secondsTime('0')).toEqual('12:00AM');
        expect(secondsTime('3600')).toEqual('1:00AM');
        expect(secondsTime('7200')).toEqual('2:00AM');
        expect(secondsTime('10800')).toEqual('3:00AM');
        expect(secondsTime('14400')).toEqual('4:00AM');
        expect(secondsTime('18000')).toEqual('5:00AM');
        expect(secondsTime('21600')).toEqual('6:00AM');
        expect(secondsTime('25200')).toEqual('7:00AM');
        expect(secondsTime('28800')).toEqual('8:00AM');
        expect(secondsTime('32400')).toEqual('9:00AM');
        expect(secondsTime('36000')).toEqual('10:00AM');
        expect(secondsTime('39600')).toEqual('11:00AM');
        expect(secondsTime('43200')).toEqual('12:00PM');
        expect(secondsTime('46800')).toEqual('1:00PM');
        expect(secondsTime('50400')).toEqual('2:00PM');
        expect(secondsTime('54000')).toEqual('3:00PM');
        expect(secondsTime('57600')).toEqual('4:00PM');
        expect(secondsTime('61200')).toEqual('5:00PM');
        expect(secondsTime('64800')).toEqual('6:00PM');
        expect(secondsTime('68400')).toEqual('7:00PM');
        expect(secondsTime('72000')).toEqual('8:00PM');
        expect(secondsTime('75600')).toEqual('9:00PM');
        expect(secondsTime('79200')).toEqual('10:00PM');
        expect(secondsTime('82800')).toEqual('11:00PM');


        // Time intervals
        expect(secondsTime('60')).toEqual('12:01AM');
        expect(secondsTime('36060')).toEqual('10:01AM');
        expect(secondsTime('900')).toEqual('12:15AM');
        expect(secondsTime('72900')).toEqual('8:15PM');
        expect(secondsTime('73800')).toEqual('8:30PM');


        return expect(secondsTime('86399')).toEqual('11:59PM');
    });
});
