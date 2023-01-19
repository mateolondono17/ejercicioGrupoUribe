

 const DepartamentoDropdown = () => {

    return (
    <section className="fw-bold mb-2 w-100 mt-5 text-center dropdown col-md-3">
        <label for="dropdown validationDefault04" className="form-label">Departamento</label>
        <select className="dropdown form-select" id="validationDefault04" required>
          <option className="seleccione" selected disabled value="Tipo Identificacion">-Seleccione-</option>
          <option value = "Amazonas">Amazonas</option>
                <option value = "Antioquia">Antioquia</option>
                <option value = "Arauca">Arauca</option>
                <option value = "Atlántico">Atlántico</option>
                <option value = "Bolívar">Bolívar</option>
                <option value = "Boyacá">Boyacá</option>
		            <option value = "Caldas">Caldas</option>
                <option value = "Caquetá">Caquetá</option>
                <option value = "Casanare">Casanare</option>
                <option value = "Cauca">Cauca</option>
                <option value = "Cesar">Cesar</option>
                <option value = "Chocó">Chocó</option>		            
                <option value = "Córdoba">Córdoba</option>
                <option value = "Cundinamarca">Cundinamarca</option>
                <option value = "Guainía">Guainía</option>
		            <option value = "Guaviare">Guaviare</option>
                <option value = "Huila">Huila</option>
                <option value = "La Guajira">La Guajira</option>
                <option value = "Magdalena">Magdalena</option>
		            <option value = "Meta">Meta</option>
                <option value = "Nariño">Nariño</option>
                <option value = "Norte de Santander">Norte de Santander</option>
                <option value = "Putumayo">Putumayo</option>                
                <option value = "Quindío">Quindío</option>  
		            <option value = "Risaralda">Risaralda</option>
                <option value = "San Andrés y Providencia">San Andrés y Providencia</option>
                <option value = "Santander">Santander</option>
                <option value = "Sucre">Sucre</option>
                <option value = "Tolima">Tolima</option>
                <option value = "Valle del Cauca">Valle del Cauca</option>
                <option value = "Vaupés">Vaupés</option>
                <option value = "Vichada">Vichada</option>
        </select>
      </section>
    )};
    
    
    export default DepartamentoDropdown;