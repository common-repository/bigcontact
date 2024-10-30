/* Romanian initialisation for the jQuery UI date picker plugin.
 *
 * Written by Edmond L. (ll_edmond@walla.com)
 * and Ionut G. Stan (ionut.g.stan@gmail.com)
 */
var bigRegion = 'ro';
jQuery.datepicker.regional['ro'] = {
    closeText: 'Închide',
    prevText: '&laquo; Luna precedentă',
    nextText: 'Luna următoare &raquo;',
    currentText: 'Azi',
    monthNames: ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie',
    'Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'],
    monthNamesShort: ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun',
    'Iul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Duminică', 'Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
    dayNamesShort: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
    dayNamesMin: ['Du','Lu','Ma','Mi','Jo','Vi','Sâ'],
    weekHeader: 'Săpt',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
jQuery.datepicker.setDefaults(jQuery.datepicker.regional['ro']);

jQuery.timepicker.regional[bigRegion] = {
	timeText: 'Timp',
	hourText: 'Oră',
	minuteText: 'Minut'
};
jQuery.timepicker.setDefaults(jQuery.timepicker.regional[bigRegion]);