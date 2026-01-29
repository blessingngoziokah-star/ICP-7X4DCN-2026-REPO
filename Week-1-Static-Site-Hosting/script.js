// SIMPLE LOGIN SYSTEM (DEMO ONLY)
function loginUser() {
    alert("Logged in successfully!");
    window.location.href = "dashboard.html";
}

function signupUser() {
    alert("Account created successfully!");
    window.location.href = "login.html";
}

function logoutUser() {
    alert("Logged out!");
    window.location.href = "index.html";
}

// MOBILE MENU TOGGLE
const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

if (menuIcon) {
    menuIcon.onclick = () => {
        navMenu.classList.toggle("show");
    };
}
// ---------- DASHBOARD CHARTS ----------

// SALES CHART
if (document.getElementById("salesChart")) {
    const ctx = document.getElementById("salesChart").getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Monthly Sales",
                data: [1200, 1900, 3000, 2500, 3400, 4200],
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true }
            }
        }
    });
}

// USERS CHART
if (document.getElementById("usersChart")) {
    const ctx2 = document.getElementById("usersChart").getContext("2d");

    new Chart(ctx2, {
        type: "bar",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [{
                label: "New Users",
                data: [50, 75, 60, 90, 120, 140],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true }
            }
        }
    });
}
// Smooth Hero Text Animation
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero h1");
    hero.style.opacity = 0;
    hero.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        hero.style.transition = "0.8s";
        hero.style.opacity = 1;
        hero.style.transform = "translateY(0)";
    }, 300);
});
