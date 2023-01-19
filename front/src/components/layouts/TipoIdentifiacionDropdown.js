

 const Dropdown = () => {

return (
<section className="fw-bold mb-2 w-100 mt-5 text-center dropdown col-md-3">
    <label for="dropdown validationDefault04" className="form-label">Tipo Identificacion</label>
    <select className="dropdown form-select" id="validationDefault04" required>
      <option className="seleccione" selected disabled value="Tipo Identificacion">-Seleccione-</option>
      <option value="cc">CC</option>
      <option value="ce">CE</option>
      <option value="ti">TI</option>
    </select>
  </section>
)};


export default Dropdown;