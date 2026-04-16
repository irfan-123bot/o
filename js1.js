// Initialize AOS animation
AOS.init({
    offset: 0
});

// Select elements
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");
const scrollBtn = document.querySelector(".scrollToTop-btn");

// Scroll button effect
window.addEventListener("scroll", function () {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

// Scroll to top
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Toggle menu when menu button clicked
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

// Sticky header effect
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Close menu when navigation item clicked
navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});

// Contact form
const form = document.querySelector(".contact-form form");

if(form){
form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = form.querySelector("input[name='name']").value;
    const email = form.querySelector("input[name='email']").value;
    const message = form.querySelector("textarea[name='message']").value;

    if(name && email && message){
        alert("Message sent successfully!");
        form.reset();
    }else{
        alert("Please fill all fields!");
    }
});
}