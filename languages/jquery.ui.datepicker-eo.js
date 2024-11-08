/* Esperanto initialisation for the jQuery UI date picker plugin. */
/* Written by Olivier M. (olivierweb@ifrance.com). */
var bigRegion = 'eo';
jQuery.datepicker.regional['eo'] = {
    closeText: 'Fermi',
    prevText: '&lt;Anta',
    nextText: 'Sekv&gt;',
    currentText: 'Nuna',
    monthNames: ['Januaro','Februaro','Marto','Aprilo','Majo','Junio',
    'Julio','Aŭgusto','Septembro','Oktobro','Novembro','Decembro'],
    monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
    'Jul','Aŭg','Sep','Okt','Nov','Dec'],
    dayNames: ['Dimanĉo','Lundo','Mardo','Merkredo','Ĵaŭdo','Vendredo','Sabato'],
    dayNamesShort: ['Dim','Lun','Mar','Mer','Ĵaŭ','Ven','Sab'],
    dayNamesMin: ['Di','Lu','Ma','Me','Ĵa','Ve','Sa'],
    weekHeader: 'Sb',
    dateFormat: 'dd/mm/yy',
    firstDay: 0,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
jQuery.datepicker.setDefaults(jQuery.datepicker.regional['eo']);

jQuery.timepicker.regional['eo'] = {
	timeText: 'Tempo',
	hourText: 'Horo',
	minuteText: 'Minuto'
};
jQuery.timepicker.setDefaults(jQuery.timepicker.regional['eo']);
