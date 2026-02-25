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
                        <li><a href="#acerca-de">Acerca de Nosotros<span>&#711;</span></a></li>
                        
                        <li class="dropdown">
                            <a href="#productos">Productos <span>&#711;</span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#cobre">Concentrado de Cobre</a></li>
                                <li><a href="#oro">Concentrado de Oro</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                </nav>
                
                <a href="#contacto" class="btn-contact">Contacto</a>
            </header>
        `;
    }
});