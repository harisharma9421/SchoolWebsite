document.addEventListener("DOMContentLoaded", function () {
  // Navbar and hamburger menu toggle
  let navbar = document.querySelector(".res-nav");
  let icon = document.querySelector(".ham .icon");

  document.querySelector(".ham").addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    navbar.classList.toggle("hidden");

    if (navbar.classList.contains("hidden")) {
      icon.src = "svg/ham.svg";
    } else {
      icon.src = "svg/close.svg";
    }
  });

  document.querySelector("body").addEventListener("click", function () {
    navbar.classList.add("hidden");
    icon.src = "svg/ham.svg";
  });

  navbar.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Modal functionality
  var modal = document.getElementById("applyModal");
  var btn = document.getElementById("applyBtn");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function (event) {
    event.stopPropagation(); // Prevent click from bubbling up
    modal.style.display = "block";
    console.log("Modal opened");
  };

  span.onclick = function (event) {
    event.stopPropagation(); // Prevent click from bubbling up
    modal.style.display = "none";
    console.log("Modal closed with close button");
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      console.log("Modal closed by clicking outside");
    }
  };

  document.getElementById("jobApplicationForm").onsubmit = function (event) {
    event.preventDefault(); // Stop form from submitting
    alert("Form submitted!");
    modal.style.display = "none"; // Close the modal after submission
    console.log("Form submitted and modal closed");
  };
});
