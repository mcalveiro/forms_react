import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function CasoDeUsoFormulario() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    descripcion: '',
    fechaSolicitud: '',
    solicitante: ''
  });
  const [errores, setErrores] = useState({});

  const clientesInternos = [
    "Cliente 1",
    "Cliente 2",
    "Cliente 3",
    "Cliente 4"
  ];

  useEffect(() => {
    // Lógica de validación del formulario
    const errores = {};
    if (!formulario.nombre) {
      errores.nombre = 'El nombre del caso de uso es obligatorio';
    }
    if (!formulario.descripcion) {
      errores.descripcion = 'La descripción del caso de uso es obligatoria';
    }
    if (!formulario.fechaSolicitud) {
      errores.fechaSolicitud = 'La fecha de solicitud es obligatoria';
    }
    if (!formulario.solicitante) {
      errores.solicitante = 'El solicitante es obligatorio';
    }
    setErrores(errores);
  }, [formulario]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos al servidor o almacenarlos localmente
    console.log('Formulario enviado:', formulario);
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-5">Desarrollo de Caso de Uso</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre del Caso de Uso</label>
          <input type="text" className="form-control" id="nombre" name="nombre" value={formulario.nombre} onChange={handleInputChange} />
          {errores.nombre && <div className="text-danger">{errores.nombre}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción del Caso de Uso</label>
          <textarea className="form-control" id="descripcion" name="descripcion" value={formulario.descripcion} onChange={handleInputChange} />
          {errores.descripcion && <div className="text-danger">{errores.descripcion}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="fechaSolicitud" className="form-label">Fecha de Solicitud</label>
          <input type="date" className="form-control" id="fechaSolicitud" name="fechaSolicitud" value={formulario.fechaSolicitud} onChange={handleInputChange} />
          {errores.fechaSolicitud && <div className="text-danger">{errores.fechaSolicitud}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="solicitante" className="form-label">Solicitante</label>
          <select className="form-select" id="solicitante" name="solicitante" value={formulario.solicitante} onChange={handleInputChange}>
            <option value="">Seleccionar solicitante</option>
            {clientesInternos.map((cliente, index) => (
              <option key={index} value={cliente}>{cliente}</option>
            ))}
          </select>
          {errores.solicitante && <div className="text-danger">{errores.solicitante}</div>}
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default CasoDeUsoFormulario;
