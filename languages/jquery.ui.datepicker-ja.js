/* Japanese initialisation for the jQuery UI date picker plugin. */
/* Written by Kentaro SATO (kentaro@ranvis.com). */
var bigRegion = 'ja';
jQuery.datepicker.regional['ja'] = {
    closeText: '閉じる',
    prevText: '&#x3c;前',
    nextText: '次&#x3e;',
    currentText: '今日',
    monthNames: ['1月','2月','3月','4月','5月','6月',
    '7月','8月','9月','10月','11月','12月'],
    monthNamesShort: ['1月','2月','3月','4月','5月','6月',
    '7月','8月','9月','10月','11月','12月'],
    dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
    dayNamesShort: ['日','月','火','水','木','金','土'],
    dayNamesMin: ['日','月','火','水','木','金','土'],
    weekHeader: '週',
    dateFormat: 'yy/mm/dd',
    firstDay: 0,
    isRTL: false,
    showMonthAfterYear: true,
    yearSuffix: '年'
};
jQuery.datepicker.setDefaults(jQuery.datepicker.regional['ja']);

jQuery.timepicker.regional[bigRegion] = {
	timeText: '時間',
	hourText: '時間',
	minuteText: '分'
};
jQuery.timepicker.setDefaults(jQuery.timepicker.regional[bigRegion]);
