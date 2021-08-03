let params={};
let validate_flg=true;
function validateDate(){
    validate_flg=true;
    let date = $("#date").val();
    let validator = /\d{2}[-]\d{2}[-]\d{4}/;
    if(date.match(validator)){
        console.log("Date is Correct");
        alert("Date is Correct");
        params['date']=date;
    }
    else{
        console.log("Please enter valid date");
        alert("Please enter valid date");
        validate_flg=false;
    }
}

$("#checkdate").click(function (){
    validateDate();
    if(validate_flg){  
        
    $.ajax({
        type: "POST",
        url: "/datecheck",
        data: params,
        success: function (data) {
            alert("Date submitted");
        },
        error: function (err) {
            console.log(err);
        }
    });
    }

    else{
        alert("Fill the fields properly");
    }
});