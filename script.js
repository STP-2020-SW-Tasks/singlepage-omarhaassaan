var validate = [0, 0, 0];
var verify = function () {
    if (validate[0] && validate[1] && validate[2])
        $(".btn-primary").removeAttr("disabled");
    else
        $(".btn-primary").attr("disabled", 0);

}
$(document).ready(function () {

    $("#name").change(function () {
        let str = String($(this).val());
        if (/[0-9]/.test(str) || str == "") {
            $(this).css("borderColor", "red");
            validate[0] = 0;
        }
        else {
            $(this).css("borderColor", "lightgreen");
            validate[0] = 1;
        }
        verify();
    });
    $("#email").change(function () {
        let str = String($(this).val());
        if (str.includes("@")) {
            $(this).css("borderColor", "lightgreen");
            validate[1] = 1;
        }
        else {
            $(this).css("borderColor", "red");
            validate[1] = 0;
        }
        verify();
    });
    $("#number").change(function () {
        let n = String($(this).val());
        if (n.length != 11) {
            $(this).css("borderColor", "red");
            validate[2] = 0;
        }
        else {
            $(this).css("borderColor", "lightgreen");
            validate[2] = 1;
        }
        verify();
    });


});