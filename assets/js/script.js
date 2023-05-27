// form repeater
$(document).ready(function () {
  $(".repeater").repeater({
    initEmpty: false,
    defaultValues: {
      "text-input": "",
    },
    show: function () {
      $(this).slideDown();
    },
    hide: function (deleteElement) {
      $(this).slideUp(deleteElement);
      setTimeout(() => {
        generateCV();
      }, 500);
    },
    isFirstItemUndeletable: true,
  });
});

const logOutbtn = document.getElementById("signout");
logOutbtn.addEventListener("click", function () {
  document.location.href = "index.html";
});
