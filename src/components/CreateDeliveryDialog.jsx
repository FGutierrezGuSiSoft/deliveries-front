import React from 'react';
import CreateDeliveryForm from './CreateDeliveryForm';
import Dialog from './Dialog';

function CreateDeliveryDialog(props) {
  const { delivery, visible, onCancel, onAccept, onChange } = props;

  return (
    <Dialog
      title="Crear Pedido"
      visible={visible}
      onCancel={onCancel}
      onAccept={onAccept}
    >
      <CreateDeliveryForm delivery={delivery} onChange={onChange} />
    </Dialog>
  );
}

export default CreateDeliveryDialog;
