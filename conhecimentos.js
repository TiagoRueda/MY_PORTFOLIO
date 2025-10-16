function conhecimentos(section) {
  section.innerHTML = `<header>
      <h2>Projetos</h2>
    </header>
    <div class="content">
      <div class="cards">
        <div class="card">
          <h3>Fire Alert</h3>
          <div class="img-wrapper">
            <div id="phone-container"></div>
            <div class="buttons">
              <a href="https://www.tecnohold.com.br/imagens/manuais/modulos/MAN0085%20-%20MANUAL%20MCR%20E%20FIRE%20ALERT.pdf" target="_blank" title="Aplicativo Fire Alert e MCR">
              </a>
            </div>
          </div>
          <p>Flutter - Dart - Banco de dados</p>
          <script src="phone.js"></script> <!-- Carrega phone.js -->
        </div>

        <div class="card">
          <h3>MCR</h3>
          <div class="img-wrapper">
            <div id="mcr-container"></div>
            <div class="buttons">
              <a href="https://www.tecnohold.com.br/produtos/linha-avalon-evolution-sistema-de-alarme-analogico/mcr-modulo-de-supervisao-e-comando-remoto" target="_blank" title="Módulo de Comando Remoto">
              </a>
            </div>
          </div>
          <p>RS485 - Ethernet - WiFi</p>
          <script src="mcr.js"></script> <!-- Carrega mcr.js -->
        </div>
        
      </div>
    </div>`;
}

export { conhecimentos };