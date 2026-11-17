var body = document.body;
var aboutBtn = document.getElementById("aboutBtn");
var aboutClose = document.getElementById("about-Close");
var skills = document.getElementById("skills");
var skillsBtn = document.getElementById("skillsBtn");
var skillsOpen = document.getElementById("skillsOpen");
var lightbox = document.getElementById("lightbox");
var lbImg = document.getElementById("lbImg");
var lbCap = document.getElementById("lbCap");
var emailBtn = document.getElementById("emailBtn");

// ---------- about me panel -
function openAbout() {
  body.classList.add("about-open");
}

function closeAbout() {
  body.classList.remove("about-open");
}

aboutBtn.onclick = openAbout;
aboutClose.onclick = closeAbout;

// the "about" link in the top menu opens the panel too
document.getElementById("aboutLink").onclick = function (event) {
  event.preventDefault();
  openAbout();
};

// Escape key closes the panel
document.onkeydown = function (event) {
  if (event.key === "Escape") {
    closeAbout();
  }
};

// ---------- skills folder ----------
function toggleSkills() {
  if (skills.classList.contains("open")) {
    skills.classList.remove("open");
    skillsOpen.textContent = "click to open";
  } else {
    skills.classList.add("open");
    skillsOpen.textContent = "click to close";
  }
}

skillsBtn.onclick = toggleSkills;

// ---------- portfolio: click an image to enlarge ----------
var shots = document.getElementsByClassName("img");

for (var i = 0; i < shots.length; i++) {
  shots[i].onclick = function () {
    var img = this.getElementsByTagName("img")[0];
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = this.getAttribute("data-caption");
    lightbox.showModal();
  };
}

document.getElementById("lbClose").onclick = function () {
  lightbox.close();
};

// ---------- email: first click shows the address ----------
var emailShown = false;

emailBtn.onclick = function (event) {
  if (emailShown === false) {
    event.preventDefault();
    emailBtn.textContent = emailBtn.getAttribute("data-email");
    emailBtn.style.textTransform = "none";
    emailShown = true;
  }
};