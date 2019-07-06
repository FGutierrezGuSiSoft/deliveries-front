import React from 'react';
import FormLine from './FormLine';

function RegisterForm(props) {
  const { user, onChange, onRegister } = props;

  return (
    <div>
      <FormLine titulo="Correo" tipo="email" nombre="email" value={user.email} onChange={onChange} />
      <FormLine titulo="Contraseña" tipo="password" nombre="password" value={user.password} onChange={onChange} />
      <FormLine titulo="Confirmar Contraseña" tipo="password" nombre="confirmation" value={user.confirmation} onChange={onChange} />

      <div className="line" id="submit">
        <input type="submit" value="Ingresar" onClick={onRegister} />
      </div>
    </div>
  );
}

export default RegisterForm;
