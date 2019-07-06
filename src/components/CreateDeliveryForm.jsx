import React from 'react';
import FormLine from './FormLine';

function CreateDeliveryForm(props) {
  const { onChange, delivery } = props;
  return (
    <div>
      <FormLine
        titulo="Descripción"
        tipo="text"
        nombre="description"
        value={delivery.description}
        onChange={onChange}
      />
    </div>
  );
}

export default CreateDeliveryForm;
