function jobman_apply_filter() {
	var ii, field;
	var empty = new Array();
	for( ii in jobman_mandatory_ids ) {
		field = jQuery("[name=jobman-field-" + jobman_mandatory_ids[ii] + "]");
		
		if( field.length > 0 && '' == field.attr('value') ) {
			empty.push( jobman_mandatory_labels[ii] );
		}
	}
	
	if( empty.length > 0 ) {
		var error = jobman_strings['apply_submit_mandatory_warning'] + ":\n";
		for( ii in empty ) {
			error += empty[ii] + "\n";
		}
		alert( error );
		return false;
	}
	else {
		return true;
	}
}