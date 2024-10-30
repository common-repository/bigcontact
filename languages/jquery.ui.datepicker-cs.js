/* Czech initialisation for the jQuery UI date picker plugin. */
/* Written by Tomas Muller (tomas@tomas-muller.net). */
var bigRegion = 'cs';
jQuery.datepicker.regional['cs'] = {
    closeText: 'Zavřít',
    prevText: '&#x3c;Dříve',
    nextText: 'Později&#x3e;',
    currentText: 'Nyní',
    monthNames: ['leden','únor','březen','duben','květen','červen',
    'červenec','srpen','září','říjen','listopad','prosinec'],
    monthNamesShort: ['led','úno','bře','dub','kvě','čer',
    'čvc','srp','zář','říj','lis','pro'],
    dayNames: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
    dayNamesShort: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
    dayNamesMin: ['ne','po','út','st','čt','pá','so'],
    weekHeader: 'Týd',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
jQuery.datepicker.setDefaults(jQuery.datepicker.regional['cs']);

jQuery.timepicker.regional['cs'] = {
	timeText: 'čas',
	hourText: 'Hodina',
	minuteText: 'Minuta'
};
jQuery.timepicker.setDefaults(jQuery.timepicker.regional['cs']);

