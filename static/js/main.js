const savedMode = localStorage.getItem("sentiment-theme");

if (savedMode === "light") {
    document.body.classList.add("light-mode");
    document.documentElement.setAttribute("data-bs-theme", "light");
}

const toggle = document.getElementById("darkModeToggle");

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        const isLight = document.body.classList.contains("light-mode");
        document.documentElement.setAttribute("data-bs-theme", isLight ? "light" : "dark");
        localStorage.setItem("sentiment-theme", isLight ? "light" : "dark");
        toggle.textContent = isLight ? "Light Mode" : "Dark Mode";
    });
}

document.querySelectorAll("[data-fill]").forEach(button => {
    button.addEventListener("click", () => {
        const targetName = button.getAttribute("data-fill");
        const target = document.querySelector(`[name="${targetName}"]`);
        if (target) {
            target.value = button.textContent.trim();
            target.focus();
        }
    });
});
