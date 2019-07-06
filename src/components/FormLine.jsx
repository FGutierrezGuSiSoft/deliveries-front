import React from 'react';

function FormLine(props) {
  return (
    <div className="line">
      <label>{props.titulo}</label>
      <input
        name={props.nombre}
        className="fullWidth"
        type={props.tipo}
        value={props.value}
        onChange={(evento) => props.onChange(props.nombre, evento.target.value)}
      />
    </div>
  );
}

export default FormLine;
