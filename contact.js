document.getElementById('sub_btn').addEventListener('click', function () {
    var userName = $("#fname").val();
    var email = $("#email").val();
    var message = $("#comment").val();
    if ($("#fname").val() && $("#email").val() && $("#comment").val()) {
        swal ("Hi! " + userName + " we have received your message.Thank you for reaching out to MAGICAL TRIP.");
    } else {
        swal ("Please fill all fields!"," ", "error");
    }
  });