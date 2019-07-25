$( document ).ready(function() {
	$('#expdate').bind('keyup','keydown', function(event) {
  	var inputLength = event.target.value.length;
    if (event.keyCode != 8){ //checks if the pressed key is not backspace
      if(inputLength === 2){
        var thisVal = event.target.value;
        thisVal += '/';
        $(event.target).val(thisVal);
    	}
    }
  })
});

function edit () {
    var currentAmount = $('.payment-form__amount').text();
    $('#pamount').attr("placeholder", currentAmount);
    $('.payment-form__amount').hide();
    $('.payment-form__edit-btn').hide();
    $('#pamount').show();
    $('.payment-form__ok-btn').show();
}

function updateAmount() {
    var updatedAmount = $('#pamount').val();
    if(!updatedAmount == '') { // check if the updated amount is empty
        
        if(updatedAmount.indexOf("$") == 0) { // check if the updated amount has $ symbol mentioned
            $('.payment-form__amount').text(updatedAmount);
        } else {
            $('.payment-form__amount').text("$"+updatedAmount);
        }

        if(updatedAmount.indexOf(".") == -1) { // check if the updated amount entered has decimals mentioned if not add them
            $('.payment-form__amount').append(".00");
        }
    // update the amount in the submit button
        $('input[type="submit"]').attr("value", "Pay "+$('.payment-form__amount').text());

    }
    $('#pamount').hide();
    $('.payment-form__ok-btn').hide();
    $('.payment-form__amount').show();
    $('.payment-form__edit-btn').show();
}

function validateFields(e) {
    e.preventDefault();
    $('input[type="text"]').each(function(){
        if($(this).val() == ""){
            $(this).parent().find('.payment-form__error-msg').css('display', 'block');
        } else {
            $(this).parent().find('.payment-form__error-msg').hide();
        }
    })
}