import CiudadesDropdown from "../layouts/CiudadesDropdown";
import DepartamentoDropdown from "../layouts/DepartamentoDropdown";
import MarcaDropdown from "../layouts/MarcaDropdown";
import PaisDropdown from "../layouts/PaisDropdown";
import Dropdown from "../layouts/TipoIdentifiacionDropdown";


const FormularioInscripcion = () =>{
  return(
    
    <form className="ml-5 w-25">
  <section class="fw-bold mb-2 w-100 mt-5 text-center ">
    <Dropdown/>
    <section id="emailHelp" class="form-text"></section>
  </section>
  <section class="fw-bold text-center mb-2 w-100">
    <input placeholder="Numero Identificacion" type="text" class="form-control" id="exampleInputPassword1"/>
  </section>
  <section className="fw-bold text-center mb-2 w-100">  
    <input placeholder="Nombre" type="text" class="form-control" id="exampleInputPassword1"/>
  </section>
  <section class="fw-bold text-center mb-2 w-100">
    <input placeholder="Apellidos" type="text" class="form-control" id="exampleInputPassword1"/>
  </section>
  <section className="fw-bold  mb-2 w-100">
    <input  placeholder="Fecha Nacimiento" type="date" className="form-control fecha" id="exampleInputPassword1"/>
  </section>
  <section className="fw-bold text-center mb-2 w-100">
    <input placeholder="Direccion" type="text" className="form-control" id="exampleInputPassword1"/>
  </section>
  <section className="fw-bold pais text-center mb-2 w-100">
    <CiudadesDropdown/>
  </section>
  <section class="fw-bold pais text-center mb-2 w-100">
    <DepartamentoDropdown/>
  </section>
  <section class="fw-bold pais text-center mb-2 w-100">
    <PaisDropdown/>
  </section>
  <section className="pais fw-bold text-center mb-2 w-100">
    <MarcaDropdown/>
  </section>
 <section class="d-flex flex-column mb-2 w-100 gap-3">
  <button type="submit" class="botones fw-bold btn">Listo</button>
  </section>
</form>
    )
}
  
export default FormularioInscripcion;