document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.getElementById("footer-container");

    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="main-footer">
                <div class="footer-left">
                    <h3 class="footer-slogan">
                        <span class="slogan-es">Desde Chile para el Mundo: Minerales Esenciales, Futuro Sostenible /</span>
                        <span class="slogan-en">From Chile to the World: Essential Minerals, Sustainable Future</span>
                    </h3>
                </div>
                <div class="footer-right">
                    <svg class="footer-star" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" fill="white" opacity="0.6"/>
                    </svg>
                </div>
            </footer>
        `;
    }
});