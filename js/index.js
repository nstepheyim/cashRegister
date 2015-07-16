//Stephanie Yim
//CashRegister HW for GA FEWD61 2015 
//July 17th, 2015


$(function () {

	var total = 0.0;

 	function addLine () {
		// get and store user input
		var newAmount = $('#newEntry').val(); 
		newAmount = parseFloat(newAmount);
		//calculate new total
		total = total + newAmount;
		$('#entries').append('<tr><td></td><td>$'+ newAmount.toFixed(2) + '</td></tr>');
		

		$('#total').html(total);
	}


	$('#entry').submit(function(e) {
		e.preventDefault();
		
		addLine();

		//clear input field
		$('#newEntry').val(''); 
	});

});




