/* Norwegian initialisation for the jQuery UI date picker plugin. */
/* Written by Naimdjon Takhirov (naimdjon@gmail.com). */

var bigRegion = 'no';
jQuery.datepicker.regional['no'] = {
    closeText: 'Lukk',
    prevText: '&laquo;Forrige',
    nextText: 'Neste&raquo;',
    currentText: 'I dag',
    monthNames: ['januar','februar','mars','april','mai','juni','juli','august','september','oktober','november','desember'],
    monthNamesShort: ['jan','feb','mar','apr','mai','jun','jul','aug','sep','okt','nov','des'],
    dayNamesShort: ['søn','man','tir','ons','tor','fre','lør'],
    dayNames: ['søndag','mandag','tirsdag','onsdag','torsdag','fredag','lørdag'],
    dayNamesMin: ['sø','ma','ti','on','to','fr','lø'],
    weekHeader: 'Uke',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
jQuery.datepicker.setDefaults(jQuery.datepicker.regional['no']);

jQuery.timepicker.regional[bigRegion] = {
	timeText: 'Tid',
	hourText: 'Time',
	minuteText: 'Minutt'
};
jQuery.timepicker.setDefaults(jQuery.timepicker.regional[bigRegion]);
