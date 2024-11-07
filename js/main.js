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
var connectDiv = $("#connect");

// Ensure only homeDiv is visible on page load
$(document).ready(function() {
    homeDiv.show();
    aboutDiv.hide();
    skillsDiv.hide();
    educationDiv.hide();
    projectDiv.hide();
    connectDiv.hide();
});

// Menu icon reloader
$("#menu-icon").on("click", function () {
    window.location.reload(true);
});

// Mobile Menu toggle
$("#btn-menu").on("click", function () {
    $("#mobile-menu").toggle();
});

// Hide mobile menu on page navigation
$(".homePage, .aboutPage, .skillsPage, .educationPage, .projectsPage, .connectPage").on("click", function () {
    $("#mobile-menu").hide();
});

// CSS classes for active/inactive states
var remBar = "text-gray-300 hover:bg-gray-700 hover:text-white";
var currentBar = "bg-gray-900 text-white";

// Function to handle active navbar styling
function activateNavBar(activePage) {
    const pages = [homePage, aboutPage, skillsPage, educationPage, projectPage, connectPage];
    pages.forEach(page => page.removeClass(currentBar).addClass(remBar));
    activePage.removeClass(remBar).addClass(currentBar);
}

// Function to show/hide sections
function showSection(showDiv) {
    [homeDiv, aboutDiv, skillsDiv, educationDiv, projectDiv, connectDiv].forEach(div => div.hide());
    showDiv.show();
}

// Page implementations
homePage.on("click", function () {
    showSection(homeDiv);
    activateNavBar(homePage);
});

aboutPage.on("click", function () {
    showSection(aboutDiv);
    activateNavBar(aboutPage);
});

skillsPage.on("click", function () {
    showSection(skillsDiv);
    activateNavBar(skillsPage);
});

educationPage.on("click", function () {
    showSection(educationDiv);
    activateNavBar(educationPage);
});

projectPage.on("click", function () {
    showSection(projectDiv);
    activateNavBar(projectPage);
});

connectPage.on("click", function () {
    showSection(connectDiv);
    activateNavBar(connectPage);
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

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,  // Ensure the key matches the EmailJS template variable
        message: document.getElementById("message").value,
    };

    const serviceID = "service_13gnh78";  // Update with your actual service ID
    const templateID = "template_0lqw71e";  // Update with your actual template ID

    emailjs.send(serviceID, templateID, params)
        .then(function(response) {
            alert("Hey, " + params.name + "! Thank you for connecting!!");
            
            //clearing input field
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";            
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            alert("Oops! Something went wrong. Please try again.");
            console.error("FAILED...", error);
        });
}
