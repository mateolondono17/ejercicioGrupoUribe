
const FormularioInscripcion = () =>{
  return(
    <form className="ml-5 w-25">
  <section class="fw-bold mb-2 w-100 mt-5 text-center ">
    <input placeholder="Tipo Identificacion (CC,CE,TI)" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <section id="emailHelp" class="form-text"></section>
  </section>
  <section class="fw-bold text-center mb-2 w-100">
    <input placeholder="Numero Identificacion" type="text" class="form-control" id="exampleInputPassword1"/>
  </section>
  <section class="fw-bold text-center mb-2 w-100">  
    <input placeholder="Nombre" type="text" class="form-control" id="exampleInputPassword1"/>
  </section>
  <section class="fw-bold text-center mb-2 w-100">
    <input placeholder="Apellidos" type="text" class="form-control" id="exampleInputPassword1"/>
  </section>
  <section class="fw-bold  mb-2 w-100">
    <input placeholder="Fecha Nacimiento" type="date" class="form-control" id="exampleInputPassword1"/>
  </section>
  <section class="fw-bold text-center mb-2 w-100">
    <input placeholder="Direccion" type="text" class="form-control" id="exampleInputPassword1"/>
  </section>
  <section class="fw-bold text-center mb-2 w-100">
    <input placeholder="Ciudad" type="text" class="form-control" id="exampleInputPassword1"/>
  </section>
  <section class="fw-bold text-center mb-2 w-100">
    <input placeholder="Departamento" type="text" class="form-control" id="exampleInputPassword1"/>
  </section>
  <section class="fw-bold text-center mb-2 w-100">
    <input placeholder="Pais" type="text" class="form-control" id="exampleInputPassword1"/>
  </section>
  <section class="fw-bold text-center mb-2 w-100">
    <input placeholder="Marca ()" type="text" class="form-control" id="exampleInputPassword1"/>
  </section>
 <section class="d-flex flex-column mb-2 w-100 gap-3">
  <button type="submit" class="botones fw-bold btn">Listo</button>
  </section>
</form>
    )
}
  
export default FormularioInscripcion;