import React from 'react';

function CreateDeliveryDialog(props) {
  const { visible, onCancel, onAccept} = props;
  const display = visible ? 'block' : 'none';

  return (
    <div className="dialogContainer" style={{ display: display }}>
      <div className="dialog">
        <div className="dialogTitle">
          <h3>{props.title}</h3>
        </div>
        {props.children}
        <div className="dialogButtonsContainer">
          <button onClick={onCancel}>Cancelar</button>
          <button onClick={onAccept}>Aceptar</button>
        </div>
      </div>
    </div>
  );
}

export default CreateDeliveryDialog;
