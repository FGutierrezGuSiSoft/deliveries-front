import React from 'react';
import FormLine from './FormLine';

function LoginForm(props) {
  const { user, onChange, onLogin } = props;

  return (
    <div>
      <FormLine titulo="Correo" tipo="email" nombre="email" value={user.email} onChange={onChange} />
      <FormLine titulo="Contraseña" tipo="password" nombre="password" value={user.password} onChange={onChange} />

      <div className="line" id="submit">
        <input type="submit" value="Ingresar" onClick={onLogin} />
      </div>
    </div>
  );
}

export default LoginForm;
