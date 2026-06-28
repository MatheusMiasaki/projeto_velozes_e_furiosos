class FastSagaHeader extends HTMLElement {
  connectedCallback() {
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf("/") + 1);

    const activeAttr = this.getAttribute("active");

    const isHomeActive =
      activeAttr === "home" || pageName === "index.html" || pageName === "";

    const isFilmeActive =
      activeAttr === "movies" || pageName === "filme.html";

    const isCuriosidadesActive =
      activeAttr === "curiosities" || pageName === "curiosidades.html";

    const isContatsActive =
      activeAttr === "contats" || pageName === "contato.html";

    const isAboutActive =
      activeAttr === "about" || pageName === "sobre.html";

    this.innerHTML = `
      <div class="container nav-wrapper">
        <!-- Logo -->
        <a href="index.html" class="nav-logo">
          FAST SAGA
        </a>

        <!-- Menu de Navegação -->
        <ul class="nav-menu">
          <li>
            <a href="index.html" class="nav-link ${isHomeActive ? "active" : ""}">
              Galeria
            </a>
          </li>

          <li>
            <a href="filme.html" class="nav-link ${isFilmeActive ? "active" : ""}">
              Filmes
            </a>
          </li>

          <li>
            <a href="curiosidades.html" class="nav-link ${isCuriosidadesActive ? "active" : ""}">
              Curiosidades
            </a>
          </li>

          <li>
            <a href="contato.html" class="nav-link ${isContatsActive ? "active" : ""}">
              Contato
            </a>
          </li>

          <li>
            <a href="sobre.html" class="nav-link ${isAboutActive ? "active" : ""}">
              Sobre
            </a>
          </li>
        </ul>

        <!-- Ações do Menu -->
        <div class="nav-actions">
          <button class="nav-toggle" aria-label="Alternar Menu de Navegação">
            <span class="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    `;

    const toggleBtn = this.querySelector(".nav-toggle");
    const menu = this.querySelector(".nav-menu");

    if (toggleBtn && menu) {
      toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("active");

        const iconSpan = toggleBtn.querySelector(".material-symbols-outlined");

        if (iconSpan) {
          iconSpan.textContent = menu.classList.contains("active")
            ? "close"
            : "menu";
        }
      });

      document.addEventListener("click", (e) => {
        if (menu.classList.contains("active") && !this.contains(e.target)) {
          menu.classList.remove("active");

          const iconSpan = toggleBtn.querySelector(".material-symbols-outlined");

          if (iconSpan) {
            iconSpan.textContent = "menu";
          }
        }
      });
    }
  }
}

class FastSagaFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container footer-wrapper">
        <span class="footer-logo">FAST SAGA</span>

        <span class="footer-copyright">
          © 2026 PROJETO DE FÃ FAST SAGA. CORRER OU MORRER.
        </span>

        <ul class="footer-links">
          <li><a href="#" class="footer-link">Política de Privacidade</a></li>
          <li><a href="#" class="footer-link">Termos de Serviço</a></li>
          <li><a href="#" class="footer-link">Envio de Fãs</a></li>
          <li><a href="#" class="footer-link">Kit de Imprensa</a></li>
        </ul>
      </div>
    `;
  }
}

customElements.define("header-navbar", FastSagaHeader);
customElements.define("footer-section", FastSagaFooter);