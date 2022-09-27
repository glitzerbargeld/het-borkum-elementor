jQuery(document).ready(function($){
	// Datepicker range
	$(".spiffy-date-field").datepicker({
		dateFormat : "yy-mm-dd",
		showButtonPanel: false,
		beforeShowDay: function (date) {
			var date1 = $.datepicker.parseDate('yy-mm-dd', $("#event_begin").val());
			var date2 = $.datepicker.parseDate('yy-mm-dd', $("#event_end").val());
			return [true, date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight" : ""];
		},
		onSelect: function(dateText, inst) {
			var olddate1 = $.datepicker.parseDate('yy-mm-dd', $("#event_begin").val());
			var olddate2 = $.datepicker.parseDate('yy-mm-dd', $("#event_end").val());
			$(this).val(dateText);
			var date1 = $.datepicker.parseDate('yy-mm-dd', $("#event_begin").val());
			var date2 = $.datepicker.parseDate('yy-mm-dd', $("#event_end").val());
			var selectedDate = $.datepicker.parseDate('yy-mm-dd', dateText);

			if (date2 < date1) {
				if (dateText == $("#event_begin").val()) {
					$("#event_end").val( $("#event_begin").val() );
				} else {
					$("#event_begin").val( $("#event_end").val() );					
				}
			}
		}
	});	
});