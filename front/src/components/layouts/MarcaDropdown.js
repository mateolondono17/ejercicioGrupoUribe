

 const MarcaDropdown = () => {

    return (
    <section className="fw-bold mb-2 w-100 mt-5 text-center dropdown col-md-3">
        <label for="dropdown validationDefault04" className="form-label">Marca</label>
        <select className="dropdown form-select" id="validationDefault04" required>
          <option className="seleccione" selected disabled value="Tipo Identificacion">-Seleccione-</option>
          
          <option className="casillas" value="Americanino">Americanino</option>
          <option className="casillas" value="American Eagle">American Eagle</option>
          <option className="casillas" value="Chevignon">Chevignon</option>
          <option className="casillas" value="Esprit">Esprit</option>
          <option className="casillas" value="Naf Naf">Naf Naf</option>
          <option className="casillas" value="rifle">rifle</option>
        </select>
      </section>
    )};
    
    
    export default MarcaDropdown;