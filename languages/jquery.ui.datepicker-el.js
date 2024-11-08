/* Greek (el) initialisation for the jQuery UI date picker plugin. */
/* Written by Alex Cicovic (http://www.alexcicovic.com) */
var bigRegion = 'el';
jQuery.datepicker.regional['el'] = {
    closeText: 'Κλείσιμο',
    prevText: 'Προηγούμενος',
    nextText: 'Επόμενος',
    currentText: 'Τρέχων Μήνας',
    monthNames: ['Ιανουάριος','Φεβρουάριος','Μάρτιος','Απρίλιος','Μάιος','Ιούνιος',
    'Ιούλιος','Αύγουστος','Σεπτέμβριος','Οκτώβριος','Νοέμβριος','Δεκέμβριος'],
    monthNamesShort: ['Ιαν','Φεβ','Μαρ','Απρ','Μαι','Ιουν',
    'Ιουλ','Αυγ','Σεπ','Οκτ','Νοε','Δεκ'],
    dayNames: ['Κυριακή','Δευτέρα','Τρίτη','Τετάρτη','Πέμπτη','Παρασκευή','Σάββατο'],
    dayNamesShort: ['Κυρ','Δευ','Τρι','Τετ','Πεμ','Παρ','Σαβ'],
    dayNamesMin: ['Κυ','Δε','Τρ','Τε','Πε','Πα','Σα'],
    weekHeader: 'Εβδ',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
jQuery.datepicker.setDefaults(jQuery.datepicker.regional['el']);

jQuery.timepicker.regional['el'] = {
	timeText: 'ώρα',
	hourText: 'ώρα',
	minuteText: 'λεπτό'
};
jQuery.timepicker.setDefaults(jQuery.timepicker.regional['el']);
