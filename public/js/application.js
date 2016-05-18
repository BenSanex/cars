function makesByYear(year) {
	return 'https://api.edmunds.com/api/vehicle/v2/makes?state=used&year=' + year +'&view=basic&fmt=json&api_key=4grgbcd5jh9pgja6amf3g5bv'
};

function modelsByMake(niceName,year) {
	return 'https://api.edmunds.com/api/vehicle/v2/'+niceName+'?state=new&year='+year+'&view=basic&fmt=json&api_key=4grgbcd5jh9pgja6amf3g5bv'

}

$(document).ready(function() {
	$('form').on('change', 'select.year-select', function() {
		var year = $('select.year-select').val();

		$.ajax({
			url: makesByYear(year)
		})

		.done(function(data) {

			for (var i = 0; i < data.makes.length; i++) {
				$('select.make-select').append("<option value='"+ data.makes[i].niceName+"'>"+data.makes[i].name+"</option>")
			};
			$('.make-select').removeClass('hidden')
		});
	});
	$('form').on('change', '.make-select', function() {
		var make = $('select.make-select').val();
		var year = $('select.year-select').val();

		$.ajax({
			url: modelsByMake(make,year)
		})
		.done(function(data){
		for (var i=0; i< data.models.length; i++ ) {
			$('select.model-select').append("<option value='" + data.models[i].niceName + "'>" + data.models[i].name + "</option>")
		$('.model-select').removeClass('hidden')
			};
		});
	});
	$('form').on('change', '.model-select', function() {
		$('input[type=submit]').removeClass('hidden');
	});
});

