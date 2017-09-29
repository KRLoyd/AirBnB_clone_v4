//
$(function() {
    let list = [];
     $('input').change(function(){
	if(this.checked){
	    let thing = $(this).attr('data-name');
	    console.log(thing);
	    list.push($('input.data-id'));
	    $('.amenities h4').text(thing);
	}
	else {
	    if($('input.data-id') in list) {
		let trash = list.indexOf($('input.data-id'));
		list.remove[trash];
		$('div.amenities h4').text(list);
	    };
	};
    });
});
