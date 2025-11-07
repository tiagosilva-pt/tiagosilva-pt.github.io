// Dropdown maker
const articles = document.querySelectorAll("article");
const menu = document.getElementById("articleMenu");

articles.forEach(article => {
    const title = article.querySelector(".article-title").innerText;
    const option = document.createElement("option");
    option.value = `#${article.id}`;
    option.textContent = title;
    menu.appendChild(option);
});

menu.addEventListener("change", () => {
    const targetId = menu.value;
    const targetElement = document.querySelector(targetId);
    const headerHeight = document.querySelector("header").offsetHeight;
    
    switch (targetId) {
        case "about":
            window.location = "about.html"
            return;
        case "home":  
            window.location = "index.html"
            return;  
    }

    if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }
});

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Copyright
document.getElementById("copyright").outerHTML = `© ${new Date().getFullYear()} <a href='https://tiagosilva-pt.github.io/'>Tiago Silva</a>`;