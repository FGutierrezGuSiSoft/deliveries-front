import React from 'react';

function DeliveriesTable(props) {
  return (
      <table>
        <thead>
          <tr>
            <th>Número</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Fecha de Creación</th>
          </tr>
        </thead>
        <tbody>
          {props.deliveries.map((delivery, key) => (
            <tr key={key}>
              <td>{delivery.number}</td>
              <td>{delivery.description}</td>
              <td>{delivery.status}</td>
              <td>{delivery.creation}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}

export default DeliveriesTable;
