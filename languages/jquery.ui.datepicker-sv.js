/* Swedish initialisation for the jQuery UI date picker plugin. */
/* Written by Anders Ekdahl ( anders@nomadiz.se). */
var bigRegion = 'sv';
jQuery.datepicker.regional['sv'] = {
    closeText: 'Stäng',
    prevText: '&laquo;Förra',
    nextText: 'Nästa&raquo;',
    currentText: 'Idag',
    monthNames: ['Januari','Februari','Mars','April','Maj','Juni',
    'Juli','Augusti','September','Oktober','November','December'],
    monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
    'Jul','Aug','Sep','Okt','Nov','Dec'],
    dayNamesShort: ['Sön','Mån','Tis','Ons','Tor','Fre','Lör'],
    dayNames: ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'],
    dayNamesMin: ['Sö','Må','Ti','On','To','Fr','Lö'],
    weekHeader: 'Ve',
    dateFormat: 'yy-mm-dd',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
jQuery.datepicker.setDefaults(jQuery.datepicker.regional['sv']);

jQuery.timepicker.regional[bigRegion] = {
	timeText: 'Tid',
	hourText: 'Timme',
	minuteText: 'Minut'
};
jQuery.timepicker.setDefaults(jQuery.timepicker.regional[bigRegion]);
