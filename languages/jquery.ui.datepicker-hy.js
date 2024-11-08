/* Armenian(UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Levon Zakaryan (levon.zakaryan@gmail.com)*/
var bigRegion = 'hy';
jQuery.datepicker.regional['hy'] = {
    closeText: 'Փակել',
    prevText: '&#x3c;Նախ.',
    nextText: 'Հաջ.&#x3e;',
    currentText: 'Այսօր',
    monthNames: ['Հունվար','Փետրվար','Մարտ','Ապրիլ','Մայիս','Հունիս',
    'Հուլիս','Օգոստոս','Սեպտեմբեր','Հոկտեմբեր','Նոյեմբեր','Դեկտեմբեր'],
    monthNamesShort: ['Հունվ','Փետր','Մարտ','Ապր','Մայիս','Հունիս',
    'Հուլ','Օգս','Սեպ','Հոկ','Նոյ','Դեկ'],
    dayNames: ['կիրակի','եկուշաբթի','երեքշաբթի','չորեքշաբթի','հինգշաբթի','ուրբաթ','շաբաթ'],
    dayNamesShort: ['կիր','երկ','երք','չրք','հնգ','ուրբ','շբթ'],
    dayNamesMin: ['կիր','երկ','երք','չրք','հնգ','ուրբ','շբթ'],
    weekHeader: 'ՇԲՏ',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
jQuery.datepicker.setDefaults(jQuery.datepicker.regional['hy']);

jQuery.timepicker.regional[bigRegion] = {
	timeText: 'ժամ',
	hourText: 'ժամ',
	minuteText: 'րոպե'
};
jQuery.timepicker.setDefaults(jQuery.timepicker.regional[bigRegion]);
