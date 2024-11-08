/* Algerian Arabic Translation for jQuery UI date picker plugin. (can be used for Tunisia)*/
/* Mohamed Cherif BOUCHELAGHEM -- cherifbouchelaghem@yahoo.fr */
var bigRegion = 'ar-DZ';
jQuery.datepicker.regional['ar-DZ'] = {
    closeText: 'إغلاق',
    prevText: '&#x3c;السابق',
    nextText: 'التالي&#x3e;',
    currentText: 'اليوم',
    monthNames: ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان',
    'جويلية', 'أوت', 'سبتمبر','أكتوبر', 'نوفمبر', 'ديسمبر'],
    monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    dayNames: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    dayNamesShort: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    dayNamesMin: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    weekHeader: 'أسبوع',
    dateFormat: 'dd/mm/yy',
    firstDay: 6,
    isRTL: true,
    showMonthAfterYear: false,
    yearSuffix: ''
};
jQuery.datepicker.setDefaults(jQuery.datepicker.regional['ar-DZ']);

jQuery.timepicker.regional['ar-DZ'] = {
	timeText: 'مرة',
	hourText: 'ساعة',
	minuteText: 'دقيقة',
	ampm: true
};
jQuery.timepicker.setDefaults(jQuery.timepicker.regional['ar-DZ']);

