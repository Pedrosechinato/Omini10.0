import React from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
//Componente :Bloco isolado de HTML, CSS e JS, que não interfere no restante da aplicação
//Propriedade:Informaçoes que um componente pai passa o componente filho
//Estado: Informaçoes mantidas pelo componente(Lembrar: Imutabilidade)

function App() {
  return(
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div  class="input-block">
            <label htmlFor="github_username">Usuario do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div  class="input-block">
            <label htmlFor="techs">Techs</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">

            <div  class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div  class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>

          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
