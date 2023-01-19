import './App.css';
import FormularioInscripcion from './components/helpers/FormularioInscripcion';
import Footer from './components/layouts/Footer';
import Titulo from './components/layouts/Titulo';

function App() {
  return (

    <section className="App">
    <div>
    <Titulo/>
   </div>
      <FormularioInscripcion/>
      <section className="footer">
        <Footer/>
      </section>
      
    </section>
  );
}

export default App;
