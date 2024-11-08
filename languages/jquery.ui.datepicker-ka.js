/* Georgian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Lado Lomidze (lado.lomidze@gmail.com). */
var bigRegion = 'ka';
jQuery.datepicker.regional['ka'] = {
    closeText: 'დახურვა',
    prevText: '&#x3c; წინა',
    nextText: 'შემდეგი &#x3e;',
    currentText: 'დღეს',
    monthNames: ['იანვარი','თებერვალი','მარტი','აპრილი','მაისი','ივნისი', 'ივლისი','აგვისტო','სექტემბერი','ოქტომბერი','ნოემბერი','დეკემბერი'],
    monthNamesShort: ['იან','თებ','მარ','აპრ','მაი','ივნ', 'ივლ','აგვ','სექ','ოქტ','ნოე','დეკ'],
    dayNames: ['კვირა','ორშაბათი','სამშაბათი','ოთხშაბათი','ხუთშაბათი','პარასკევი','შაბათი'],
    dayNamesShort: ['კვ','ორშ','სამ','ოთხ','ხუთ','პარ','შაბ'],
    dayNamesMin: ['კვ','ორშ','სამ','ოთხ','ხუთ','პარ','შაბ'],
    weekHeader: 'კვირა',
    dateFormat: 'dd-mm-yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
jQuery.datepicker.setDefaults(jQuery.datepicker.regional['ka']);

