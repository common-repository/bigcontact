/* Bosnian i18n for the jQuery UI date picker plugin. */
/* Written by Kenan Konjo. */
var bigRegion = 'bs';
jQuery.datepicker.regional['bs'] = {
    closeText: 'Zatvori',
    prevText: '&#x3c;',
    nextText: '&#x3e;',
    currentText: 'Danas',
    monthNames: ['Januar','Februar','Mart','April','Maj','Juni',
    'Juli','August','Septembar','Oktobar','Novembar','Decembar'],
    monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
    'Jul','Aug','Sep','Okt','Nov','Dec'],
    dayNames: ['Nedelja','Ponedeljak','Utorak','Srijeda','Četvrtak','Petak','Subota'],
    dayNamesShort: ['Ned','Pon','Uto','Sri','Čet','Pet','Sub'],
    dayNamesMin: ['Ne','Po','Ut','Sr','Če','Pe','Su'],
    weekHeader: 'Wk',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
jQuery.datepicker.setDefaults(jQuery.datepicker.regional['bs']);

jQuery.timepicker.regional['bs'] = {
	timeText: 'Vrijeme',
	hourText: 'Ura',
	minuteText: 'Minut'
};
jQuery.timepicker.setDefaults(jQuery.timepicker.regional['bs']);
