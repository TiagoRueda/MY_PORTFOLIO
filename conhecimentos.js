function conhecimentos(section) {
  section.innerHTML = `
    <style>
      /* ===== Seletor específico para não interferir no style principal ===== */
      #${section.id} .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
      }

      #${section.id} .card {
        background: transparent; /* mantém fundo escuro do site */
        border-radius: 12px;
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

      /* ===== Textos claros ===== */
      #${section.id} .card h3 {
        margin-bottom: 10px;
        font-size: 1.3em;
        color: #fff; /* branco */
      }

      #${section.id} .card p {
        margin-bottom: 15px;
        color: #ddd; /* cinza claro */
      }

      #${section.id} .tech span {
        font-size: 0.9em;
        color: #fff; /* branco */
      }

      #${section.id} .img-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
        margin-bottom: 10px;
      }

      #${section.id} .tech {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      #${section.id} .tech img {
        width: 60px;
        height: 60px;
        object-fit: contain;
        margin-bottom: 5px;
        transition: transform 0.2s;
      }

      #${section.id} .tech img:hover {
        transform: scale(1.2);
      }

      /* ===== Responsividade ===== */
      @media (max-width: 600px) {
        #${section.id} .tech img {
          width: 50px;
          height: 50px;
        }
        #${section.id} .card {
          padding: 15px;
        }
      }
    </style>

    <header>
      <h2>Conhecimentos</h2>
    </header>

    <div class="content">
      <div class="cards">

        <!-- Linguagens -->
        <div class="card">
          <h3>Linguagens</h3>
          <p>Principais linguagens que utilizo</p>
          <div class="img-wrapper">
            <div class="tech"><img src="https://skillicons.dev/icons?i=c" alt="C"><span>C</span></div>
            <div class="tech"><img src="https://skillicons.dev/icons?i=cpp" alt="C++"><span>C++</span></div>
            <div class="tech"><img src="https://skillicons.dev/icons?i=cs" alt="C#"><span>C#</span></div>
            <div class="tech"><img src="https://skillicons.dev/icons?i=py" alt="Python"><span>Python</span></div>
            <div class="tech"><img src="https://skillicons.dev/icons?i=js" alt="JavaScript"><span>JavaScript</span></div>
          </div>
        </div>

        <!-- Design -->
        <div class="card">
          <h3>Design</h3>
          <p>Ferramentas para criar interfaces e designs</p>
          <div class="img-wrapper">
            <div class="tech"><img src="https://skillicons.dev/icons?i=html" alt="HTML"><span>HTML</span></div>
            <div class="tech"><img src="https://skillicons.dev/icons?i=css" alt="CSS"><span>CSS</span></div>
            <div class="tech"><img src="https://skillicons.dev/icons?i=blender" alt="Blender"><span>Blender</span></div>
            <div class="tech"><img src="https://skillicons.dev/icons?i=autocad" alt="AutoCAD"><span>AutoCAD</span></div>
          </div>
        </div>

        <!-- Tools -->
        <div class="card">
          <h3>Tools</h3>
          <p>Ferramentas e frameworks para desenvolvimento e deploy</p>
          <div class="img-wrapper">
            <div class="tech"><img src="https://skillicons.dev/icons?i=nodejs" alt="NodeJS"><span>NodeJS</span></div>
            <div class="tech"><img src="https://skillicons.dev/icons?i=dotnet" alt=".NET"><span>.NET</span></div>
            <div class="tech"><img src="https://skillicons.dev/icons?i=vscode" alt="VSCode"><span>VSCode</span></div>
            <div class="tech"><img src="https://skillicons.dev/icons?i=git" alt="Git"><span>Git</span></div>
          </div>
        </div>

      </div>
    </div>
  `;
}

export { conhecimentos };
