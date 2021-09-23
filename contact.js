document.getElementById('sub_btn').addEventListener('click', function () {
    var userName = $("#fnames").val();
    var email = $("#email").val();
    var message = $("#comment").val();
    if ($("#fnames").val() && $("#email").val() && $("#comment").val()) {
        alert("Hi" + userName + " we have received your message. Thank you for reaching out to MAGICAL TRIP.");
    } else {
        alert("Please fill all fields!");
    }
  });