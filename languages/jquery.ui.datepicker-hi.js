/* Hindi initialisation for the jQuery UI date picker plugin. */
/* Written by Michael Dawart. */
var bigRegion = 'hi';
jQuery.datepicker.regional['hi'] = {
    closeText: 'बंद',
    prevText: 'पिछला',
    nextText: 'अगला',
    currentText: 'आज',
    monthNames: ['जनवरी ','फरवरी','मार्च','अप्रेल','मई','जून',
    'जूलाई','अगस्त ','सितम्बर','अक्टूबर','नवम्बर','दिसम्बर'],
    monthNamesShort: ['जन', 'फर', 'मार्च', 'अप्रेल', 'मई', 'जून',
    'जूलाई', 'अग', 'सित', 'अक्ट', 'नव', 'दि'],
    dayNames: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
    dayNamesShort: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
    dayNamesMin: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
    weekHeader: 'हफ्ता',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
jQuery.datepicker.setDefaults(jQuery.datepicker.regional['hi']);

jQuery.timepicker.regional[bigRegion] = {
	timeText: 'समय',
	hourText: 'घंटा',
	minuteText: 'मिनट'
};
jQuery.timepicker.setDefaults(jQuery.timepicker.regional[bigRegion]);