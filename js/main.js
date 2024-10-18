const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Final year student";
  }, 0);
  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Freelancer";
  }, 8000);
  setTimeout(() => {
    text.textContent = "DBMS Enthusiast";
  }, 12000);
  setTimeout(() => {
    text.textContent = "Full Stack Developer";
  }, 16000); //1s = 1000 milliseconds
};
textLoad();
setInterval(textLoad, 20000);

$(document).ready(function () {
  // NavBar tags and ids
  var homePage = $(".homePage");
  var aboutPage = $(".aboutPage");
  var skillsPage = $(".skillsPage");
  var educationPage = $(".educationPage");
  var projectPage = $(".projectsPage");
  var connectPage = $(".connectPage");

  // Content tags and ids
  var homeDiv = $("#home");
  var aboutDiv = $("#about");
  var skillsDiv = $("#skills");
  var educationDiv = $("#education");
  var projectDiv = $("#projects");
  var conncetDiv = $("#connect");

  //menu icon reloader
  $("#menu-icon").on("click", function () {
    window.location.reload(true);
  });
  //Mobile Menu bar
  $("#btn-menu").on("click", function () {
    $("#mobile-menu").toggle();
  });

  $("#home").on("click", function () {
    $("#mobile-menu").hide();
  });

  $("#about").on("click", function () {
    $("#mobile-menu").hide();
  });

  $("#skills").on("click", function () {
    $("#mobile-menu").hide();
  });

  $("#education").on("click", function () {
    $("#mobile-menu").hide();
  });

  $("#projects").on("click", function () {
    $("#mobile-menu").hide();
  });

  $("#connect").on("click", function () {
    $("#mobile-menu").hide();
  });
  $(".options").on("click", function () {
    $("#mobile-menu").hide();
  });
  //content passed inside addClass or removeClass
  var remBar = "text-gray-300 hover:bg-gray-700 hover:text-white";
  var currentBar = "bg-gray-900 text-white";

  // Home page implementation
  homePage.on("click", function () {
    homeDiv.show();
    aboutDiv.hide();
    skillsDiv.hide();
    educationDiv.hide();
    projectDiv.hide();
    conncetDiv.hide();

    //css effect styling for nav-bar dynamicall
    homePage.removeClass(remBar);
    aboutPage.removeClass(currentBar);
    skillsPage.removeClass(currentBar);
    educationPage.removeClass(currentBar);
    projectPage.removeClass(currentBar);
    connectPage.removeClass(currentBar);

    homePage.addClass(currentBar);
    aboutPage.addClass(remBar);
    skillsPage.addClass(remBar);
    educationPage.addClass(remBar);
    projectPage.addClass(remBar);
    connectPage.addClass(remBar);
  });

  //about page implementation
  aboutPage.on("click", function () {
    homeDiv.hide();
    aboutDiv.show();
    skillsDiv.hide();
    educationDiv.hide();
    projectDiv.hide();
    conncetDiv.hide();

    //css effect styling for nav-bar dynamicall
    homePage.removeClass(currentBar);
    aboutPage.removeClass(remBar);
    skillsPage.removeClass(currentBar);
    educationPage.removeClass(currentBar);
    projectPage.removeClass(currentBar);
    connectPage.removeClass(currentBar);

    homePage.addClass(remBar);
    aboutPage.addClass(currentBar);
    skillsPage.addClass(remBar);
    educationPage.addClass(remBar);
    projectPage.addClass(remBar);
    connectPage.addClass(remBar);
  });

  //skills page implementation
  skillsPage.on("click", function () {
    homeDiv.hide();
    aboutDiv.hide();
    skillsDiv.show();
    educationDiv.hide();
    projectDiv.hide();
    conncetDiv.hide();

    // text-gray-300 hover:bg-gray-700 hover:text-white"

    homePage.removeClass(currentBar);
    aboutPage.removeClass(currentBar);
    skillsPage.removeClass(remBar);
    educationPage.removeClass(currentBar);
    projectPage.removeClass(currentBar);
    connectPage.removeClass(currentBar);

    homePage.addClass(remBar);
    aboutPage.addClass(remBar);
    skillsPage.addClass(currentBar);
    educationPage.addClass(remBar);
    projectPage.addClass(remBar);
    connectPage.addClass(remBar);
  });

  //education page implementation
  educationPage.on("click", function () {
    homeDiv.hide();
    aboutDiv.hide();
    skillsDiv.hide();
    educationDiv.show();
    projectDiv.hide();
    conncetDiv.hide();

    //css effect styling for nav-bar dynamicall

    homePage.removeClass(currentBar);
    aboutPage.removeClass(currentBar);
    skillsPage.removeClass(currentBar);
    educationPage.removeClass(remBar);
    projectPage.removeClass(currentBar);
    connectPage.removeClass(currentBar);

    homePage.addClass(remBar);
    aboutPage.addClass(remBar);
    skillsPage.addClass(remBar);
    educationPage.addClass(currentBar);
    projectPage.addClass(remBar);
    connectPage.addClass(remBar);
  });

  //projects page implementation
  projectPage.on("click", function () {
    homeDiv.hide();
    aboutDiv.hide();
    skillsDiv.hide();
    educationDiv.hide();
    projectDiv.show();
    conncetDiv.hide();

    //css effect styling for nav-bar dynamicall
    homePage.removeClass(currentBar);
    aboutPage.removeClass(currentBar);
    skillsPage.removeClass(currentBar);
    educationPage.removeClass(currentBar);
    projectPage.removeClass(remBar);
    connectPage.removeClass(currentBar);

    homePage.addClass(remBar);
    aboutPage.addClass(remBar);
    skillsPage.addClass(remBar);
    educationPage.addClass(remBar);
    projectPage.addClass(currentBar);
    connectPage.addClass(remBar);
  });

  //connect page implementation
  connectPage.on("click", function () {
    homeDiv.hide();
    aboutDiv.hide();
    skillsDiv.hide();
    educationDiv.hide();
    projectDiv.hide();
    conncetDiv.show();

    //css effect styling for nav-bar dynamicall
    homePage.removeClass(currentBar);
    aboutPage.removeClass(currentBar);
    skillsPage.removeClass(currentBar);
    educationPage.removeClass(currentBar);
    projectPage.removeClass(currentBar);
    connectPage.removeClass(remBar);

    homePage.addClass(remBar);
    aboutPage.addClass(remBar);
    skillsPage.addClass(remBar);
    educationPage.addClass(remBar);
    projectPage.addClass(remBar);
    connectPage.addClass(currentBar);
  });

  // Flag to track whether click event is bound
  var clickEventBound = false;

  // Function to handle the logic for medium devices
  function handleMediumDevices() {
    if (!clickEventBound) {
      // Bind click event only if not already bound
      $("#menu-name").on("click", function () {
        $("#mobile-menu").toggle();
      });
      clickEventBound = true;
    }
  }

  // Function to handle the logic for other devices (not medium)
  function handleOtherDevices() {
    // Remove click event and hide #mobile-menu
    $("#menu-name").off("click");
    $("#mobile-menu").css("display", "none");
    clickEventBound = false;
  }

  // Check device width on page load
  if (window.innerWidth <= 768) {
    // Medium device
    handleMediumDevices();
  } else {
    // Other devices
    handleOtherDevices();
  }

  // Add a resize event listener to handle changes in window size
  $(window).resize(function () {
    if (window.innerWidth <= 768) {
      // Medium device
      handleMediumDevices();
    } else {
      // Other devices
      handleOtherDevices();
    }
  });
});

function sendMail() {

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phn: document.getElementById("phone").value,  // Change this key from phone to phn
        message: document.getElementById("message").value,
    };

    const serviceID = "service_gv0j868";
    const templateID = "template_gnc4ol6";

    // Debugging logs to check parameters
    console.log("Sending email with parameters:", params);

    emailjs.send(serviceID, templateID, params).then(function(res){
      alert("Hey, "+ document.getElementById("name").value + "!Thank you for connecting!!");
    });
}
