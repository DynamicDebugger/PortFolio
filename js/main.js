const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Pre-final year student";
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

//GitHub for Portfolio
const devGit = document.querySelector("#dev-git");
devGit.addEventListener("click", () => {
  // Open a new tab with the specified URL
  window.open("https://github.com/ishhookayy/PortFolio", "_blank");
});

//GitHub for booksky
const bookskyGit = document.querySelector("#booksky-git");
bookskyGit.addEventListener("click", () => {
  // Open a new tab with the specified URL
  window.open("https://github.com/ishhookayy/booksky", "_blank");
});

//GitHub for currency-convertor
const ccGit = document.querySelector("#currency-convertor-git");
ccGit.addEventListener("click", () => {
  // Open a new tab with the specified URL
  window.open(
    "https://github.com/ishhookayy/CodeSoft/tree/main/CodeSoft/CurrencyConverter",
    "_blank"
  );
});

//GitHub for SIS
const sisGit = document.querySelector("#sis-git");
sisGit.addEventListener("click", () => {
  // Open a new tab with the specified URL
  window.open(
    "https://github.com/ishhookayy/StudentInformationManagement",
    "_blank"
  );
});

//GitGub for miniProjproject
const miniProjGit = document.querySelector("#mini-proj-git");
miniProjGit.addEventListener("click", () => {
  // Open a new tab with the specified URL
  window.open("https://github.com/ishhookayy/mini-projects", "_blank");
});

//Live button
//Live for portfolio need to be cooked portfolio
const portLive = document.querySelector("#live-portfolio");
portLive.addEventListener("click", () => {
  // Open a new tab with the specified URL
  window.location.reload(true);
});
//Live for booksky site
const bookskyLive = document.querySelector("#live-booksky");
bookskyLive.addEventListener("click", () => {
  // Open a new tab with the specified URL
  window.open(
    "https://65b490408a9f9e5701efdbb0--booksky-mini-proj01.netlify.app/",
    "_blank"
  );
});

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

  //Mobile Menu bar
  $("#btn-menu").on("click", function () {
    $("#mobile-menu").toggle();
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
});

//EmailJs implementation
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phn:document.getElementById("phone-no").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_93c0i13";
  const templateID = "template_gnc4ol6";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone-no").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
