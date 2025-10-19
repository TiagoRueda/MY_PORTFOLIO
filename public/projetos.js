import { loadPhoneModel } from '/phone.js';
import { loadMCRModel } from '/mcr.js';
import { loadAEModel } from '/lora.js';

function projetos(section) {
  section.innerHTML = `
    <style>
      #${section.id} .cards {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
      }

      #${section.id} .card {
        background: transparent;
        border-radius: 12px;
        flex: 1 1 250px;
        padding: 20px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        transition: transform 0.2s, box-shadow 0.2s;
      }

      #${section.id} .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0,0,0,0.12);
      }

      #${section.id} .card h3 {
        margin-bottom: 10px;
        font-size: 1.3em;
        color: var(--headline);
      }

      #${section.id} .card p {
        margin-bottom: 15px;
        color: var(--paragraph);
      }

      #${section.id} .img-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        margin-bottom: 10px;
      }

      #${section.id} .buttons a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        min-width: 80px;
        margin-top: 10px;
        padding: 0 16px;
        border-radius: 50px;
        text-decoration: none;
        background: var(--secundary-color);
        color: var(--paragraph);
        font-weight: 400;
        transition: background 0.2s, transform 0.2s;
      }

      #${section.id} .buttons a:hover {
        background: var(--third-color);
        transform: scale(1.05);
      }

      /* Modelos 3D */
      #${section.id} #phone-container,
      #${section.id} #mcr-container,
      #${section.id} #lora-container {
        width: 180px;
        height: 180px;
      }

      @media (max-width: 800px) {
        #${section.id} .card {
          padding: 50px;
        }
        #${section.id} #phone-container,
        #${section.id} #mcr-container,
        #${section.id} #lora-container {
          width: 140px;
          height: 140px;
        }
      }
    </style>

    <header>
      <h2>Projetos</h2>
    </header>
    <div class="content">
      <div class="cards">

        <!-- Fire Alert -->
        <div class="card">
          <h3>Fire Alert</h3>
          <p>
            Aplicativo para Android e iOS que funciona em conjunto com o MCR, permitindo o monitoramento remoto
            de várias centrais de alarme Tecnohold. Utiliza banco de dados em tempo real
            para armazenar eventos e comandos, oferecendo praticidade e segurança.
          </p>
          <div class="img-wrapper">
            <div id="phone-container"></div>
            <div class="buttons">
              <a href="https://www.tecnohold.com.br/imagens/manuais/modulos/MAN0085%20-%20MANUAL%20MCR%20E%20FIRE%20ALERT.pdf"
                 target="_blank" title="Aplicativo Fire Alert e MCR">
                 Ver Manual
              </a>
            </div>
          </div>
          <p>Flutter - Dart - Banco de dados</p>
        </div>

        <!-- MCR -->
        <div class="card">
          <h3>MCR</h3>
          <p>
            Módulo responsável por supervisionar e comandar centrais de alarme.
            Faz comunicação via RS485, utiliza Ethernet ou Wi-Fi para enviar e receber dados
            em tempo real com o banco de dados utilizado pelo aplicativo Fire Alert.
          </p>
          <div class="img-wrapper">
            <div id="mcr-container"></div>
            <div class="buttons">
              <a href="https://www.tecnohold.com.br/produtos/linha-avalon-evolution-sistema-de-alarme-analogico/mcr-modulo-de-supervisao-e-comando-remoto"
                 target="_blank" title="Módulo de Comando Remoto">
                 Ver Produto
              </a>
            </div>
          </div>
          <p>RS485 - Ethernet - WiFi - Banco de dados</p>
        </div>

        <!-- AE21 -->
        <div class="card">
          <h3>AE 21</h3>
          <p>
            Sistema de alarme de emergência utilizando tecnologia LoRa para comunicação.
            O sistema é composto por botoeira, alarme e uma central de monitoramento.
          </p>
          <div class="img-wrapper">
            <div id="lora-container"></div>
            <div class="buttons">
              <a href="https://www.dagaztecnologia.com/produtos/ae-27"
                 target="_blank" title="Sistema de Alarme de Emergência">
                 Ver Produto
              </a>
            </div>
          </div>
          <p>LoRa - WiFi</p>
        </div>

      </div>
    </div>
  `;

  loadPhoneModel("phone-container");
  loadMCRModel("mcr-container");
  loadAEModel("lora-container");
}

export { projetos };
