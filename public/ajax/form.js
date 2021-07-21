$("#submitform").click(function(){
    let fname = $("#fname").val();
    let passwd=$("#passwd").val();
    let gender=$("input[name=gender]:checked").val();
    let agegroup=$("#agegroup").val();
    let submitform={
        fname:fname,
        passwd:passwd,
        gender:gender,
        agegroup:agegroup,
    };

    $.ajax({
        type:"POST",
        url:"/details",
        data:submitform,
        success:function(data){
            alert("Form Submitted");
        },
        error: function(err){
            console.log(err);
        },
    });

});