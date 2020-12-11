    /* global $ */

    /*eslint-env jquery*/


    $(document).ready(function () {

    //Variable declarations that use or refer to jquery should be INSIDE the ready function to make sure jquery is instanciated. 
    $name = $('input[name="reason_expense"'); //notice the different declaration…
    $amount = $('input[name="expense_val"'); 
    $date = $('input[name="date"');

    var formatDate = function(d) {
    //2014-07-09
    var d = d.split('-');//Since we know the value comes yyyy-mm-dd…

    var dt = new Date(d[0],d[1],d[2]);//Note: The month is off by +1 - for JS Date object, 

    var formattedDate = '';

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];//Now we can get the month like this:

    formattedDate += months[ dt.getMonth()-1 ]; //Months are 0-11 for getDate

    var formattedDay;//We are gonna store the formatted day here.

    switch( d[2].substring(1) ) {//We can use the string of the day (dd format) to access the last number, which determines what we append...
    case '1':
    formattedDay = parseInt(d[2]) + "st"; //1st, 21st, etc
    break;        
    case '2':
    formattedDay = parseInt(d[2]) + "nd"; //2nd
    break;        
    case '3':
    formattedDay = parseInt(d[2]) + "rd"; //etc…
    break;  
    default:
    formattedDay = parseInt(d[2]) + "th";
    }
    //Add a space and the day, now correctly appended
    formattedDate += ' ' + formattedDay;
    //Return nice formatted date!
    return formattedDate;
    }  

    var form_validated = true;
    //Add your validation tests, have them set form_validated to false if they fail
    //TODO

    if(form_validated) {
    //Now we can use our references we made before
    $("table tr:first").after('<tr><td>'+type_icon+'</td><td>'+$name.val()+'</td><td>'+formatDate($date.val())+'</td><td class="amount">$'+$amount.val()+'</td></tr>');
    $date.val(null);
    $expense_val.val(null);
    $name.val(null);
    $("#if-empty").remove();
    };
    });

    });