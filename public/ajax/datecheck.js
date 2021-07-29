$("#checkdate").click(function () {
    let date = $("#date").val();
    let checkdate = {
        date: date
    };

    $.ajax({
        type: "POST",
        url: "/datecheck",
        data: checkdate,
        success: function (data) {
            alert("Date submitted");
        },
        error: function (err) {
            console.log(err);
        }
    });
});