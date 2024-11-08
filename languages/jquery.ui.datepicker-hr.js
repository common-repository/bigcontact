/* Croatian i18n for the jQuery UI date picker plugin. */
/* Written by Vjekoslav Nesek. */
var bigRegion = 'hr';
jQuery.datepicker.regional['hr'] = {
    closeText: 'Zatvori',
    prevText: '&#x3c;',
    nextText: '&#x3e;',
    currentText: 'Danas',
    monthNames: ['Siječanj','Veljača','Ožujak','Travanj','Svibanj','Lipanj',
    'Srpanj','Kolovoz','Rujan','Listopad','Studeni','Prosinac'],
    monthNamesShort: ['Sij','Velj','Ožu','Tra','Svi','Lip',
    'Srp','Kol','Ruj','Lis','Stu','Pro'],
    dayNames: ['Nedjelja','Ponedjeljak','Utorak','Srijeda','Četvrtak','Petak','Subota'],
    dayNamesShort: ['Ned','Pon','Uto','Sri','Čet','Pet','Sub'],
    dayNamesMin: ['Ne','Po','Ut','Sr','Če','Pe','Su'],
    weekHeader: 'Tje',
    dateFormat: 'dd.mm.yy.',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
jQuery.datepicker.setDefaults(jQuery.datepicker.regional['hr']);

jQuery.timepicker.regional[bigRegion] = {
	timeText: 'Vrijeme',
	hourText: 'Sat',
	minuteText: 'Minuta'
};
jQuery.timepicker.setDefaults(jQuery.timepicker.regional[bigRegion]);
