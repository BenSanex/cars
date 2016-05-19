function makesByYear(year) {
	return 'https://api.edmunds.com/api/vehicle/v2/makes?state=used&year=' + year +'&view=basic&fmt=json&api_key=4grgbcd5jh9pgja6amf3g5bv'
};

function modelsByMake(makeNiceName,year) {
	return 'https://api.edmunds.com/api/vehicle/v2/'+makeNiceName+'?state=used&year='+year+'&view=basic&fmt=json&api_key=4grgbcd5jh9pgja6amf3g5bv'
}

function trimsByModel(makeNiceName,modelNiceName,year) {
	return 'https://api.edmunds.com/api/vehicle/v2/'+makeNiceName+'/'+modelNiceName+'?state=used&year='+year+'&view=basic&fmt=json&api_key=4grgbcd5jh9pgja6amf3g5bv'
}


$(document).ready(function() {
	$('form').on('change', 'select.year-select', function() {
		var year = $('select.year-select').val();
		$('.make-select option').remove();
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
		$('.model-select option').remove();

		$.ajax({
			url: modelsByMake(make,year)
		})
		.done(function(data){
				$('select.model-select').append("<option value=''></option>")
			for (var i=0; i< data.models.length; i++ ) {
				$('select.model-select').append("<option value='" + data.models[i].niceName + "'>" + data.models[i].name + "</option>")
			};
			$('.model-select').removeClass('hidden')
		});
	});
	$('form').on('change', '.model-select', function() {
		var make = $('select.make-select').val();
		var model= $('select.model-select').val();
		var year = $('select.year-select').val();
		$.ajax({
			url: trimsByModel(make,model,year)
		})
		.done(function(data){
			$('.trim-select option').remove();
			$('select.trim-select').append("<option value=''></option>")
			for (var i=0; i< data.years[0].styles.length; i++ ) {
				$('select.trim-select').append("<option value='" + data.years[0].styles[i].id + "'>" + data.years[0].styles[i].trim + "</option>")
			};
			$('.trim-select').removeClass('hidden')
		});
	});
	$('form').on('change', '.trim-select', function() {
		$('input[type=submit]').removeClass('hidden');
	});
});

