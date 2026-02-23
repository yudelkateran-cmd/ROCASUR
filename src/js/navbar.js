document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("header-container");

    if (headerContainer) {
        headerContainer.innerHTML = `
            <header class="main-header">
                
                <div class="logo">
                    <img src="image/ROCA.png" alt="Logo Roca Sur" class="logo-img">
                    <div class="logo-text">
                        <span class="logo-title">ROCASUR</span>
                        <span class="logo-subtitle">Global Mining</span>
                    </div>
                </div>
                
                <nav class="nav-links">
                    <ul>
                        <li><a href="#">Acerca de Nosotros <span>&#711;</span></a></li>
                        <li><a href="#">Productos <span>&#711;</span></a></li>
                    </ul>
                </nav>
                
                <a href="#contacto" class="btn-contact">Contacto</a>
            </header>
        `;
    }
});