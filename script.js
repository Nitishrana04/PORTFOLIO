const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

/* Dark mode styles */
const darkModeStyles = `
/* Dark mode styles */
.dark-mode {
    background-color: #121212;
    color: #ffffff;
}

.dark-mode .navbar {
    background-color: #1c1c1c;
}

.dark-mode .nav-links a {
    color: #ffffff;
}

.dark-mode .nav-links a.active,
.dark-mode .nav-links a:hover {
    color: #ffdd57;
}

.dark-mode .hero-buttons .btn {
    background-color: #ffdd57;
    color: #121212;
}

.dark-mode .hero-buttons .btn.secondary {
    background-color: #ffffff;
    color: #121212;
}

.dark-mode .note {
    background-color: #ffeb3b;
    color: #121212;
}

.dark-mode .hero-content h1 {
    color: #ffffff; /* Dark mode title color */
}

.dark-mode .ipad-screen {
    background-color: #333333; /* Dark mode iPad screen background */
}
.dark-mode .ipad {
    background-color: #121212; /* Dark mode iPad background color */
  }
  

`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);
