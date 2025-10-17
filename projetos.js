import { loadPhoneModel } from './phone.js';
import { loadMCRModel } from './mcr.js';
import { loadAEModel } from './lora.js';

function projetos(section) {
  section.innerHTML = `
    <header>
      <h2>Projetos</h2>
    </header>
    <div class="content">
      <div class="cards">
        <div class="card">
          <h3>Fire Alert</h3>
          <p>
            Aplicativo que funciona em conjunto com o MCR, permitindo o monitoramento remoto
            de várias centrais de alarme Tecnohold. Utiliza banco de dados em tempo real
            para armazenar eventos e comandos, oferecendo praticidade e segurança.
          </p>
          <div class="img-wrapper">
            <div id="phone-container"></div>
            <div class="buttons">
              <a href="https://www.tecnohold.com.br/imagens/manuais/modulos/MAN0085%20-%20MANUAL%20MCR%20E%20FIRE%20ALERT.pdf" target="_blank" title="Aplicativo Fire Alert e MCR">
              </a>
            </div>
          </div>
          <p>Flutter - Dart - Banco de dados</p>
        </div>

        <div class="card">
          <h3>MCR</h3>
          <p>
            Módulo responsável por supervisionar e comandar centrais de alarme.
            Faz comunicação via RS485, Ethernet ou Wi-Fi, enviando e recebendo dados
            em tempo real com o banco de dados utilizado pelo aplicativo Fire Alert.
          </p>
          <div class="img-wrapper">
            <div id="mcr-container"></div>
            <div class="buttons">
              <a href="https://www.tecnohold.com.br/produtos/linha-avalon-evolution-sistema-de-alarme-analogico/mcr-modulo-de-supervisao-e-comando-remoto" target="_blank" title="Módulo de Comando Remoto">
              </a>
            </div>
          </div>
          <p>RS485 - Ethernet - WiFi - Banco de dados</p>
        </div>

        <div class="card">
          <h3>AE 21</h3>
          <p>
            Sistema de alarme de emergência utilizando tecnologia LoRa para comunicação.
            O sistema é composto por botoeira, alarme e uma central de monitoramento, garantindo monitoramento eficiente e comunicação em tempo real.
          </p>
          <div class="img-wrapper">
            <div id="lora-container"></div>
            <div class="buttons">
              <a href="https://www.dagaztecnologia.com/produtos/ae-27" target="_blank" title="Sistema de Alarme de Emergência">
              </a>
            </div>
          </div>
          <p>Lora - WiFi</p>
        </div>
      </div>
    </div>`;

  loadPhoneModel("phone-container");
  loadMCRModel("mcr-container");
  loadAEModel("lora-container");
}

export { projetos };