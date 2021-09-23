document.getElementById('sub_btn').addEventListener('click', function () {
    var userName = $("#fname").val();
    var email = $("#email").val();
    var message = $("#comment").val();
    if ($("#fname").val() && $("#email").val() && $("#comment").val()) {
        alert("Hi" + userName + " we have received your message. Thank you for reaching out to MAGICAL TRIP.");
    } else {
        alert("Please fill all fields!");
    }
  });