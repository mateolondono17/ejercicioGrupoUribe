import './App.css';
import FormularioInscripcion from './components/helpers/FormularioInscripcion';
import Titulo from './components/layouts/Titulo';

function App() {
  return (

    <section className="App">
    <div>
    <Titulo/>
   </div>
      <FormularioInscripcion/>
    </section>
  );
}

export default App;
