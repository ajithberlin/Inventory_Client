import React, { useState } from 'react';

function DressTable({ dresses, deleteDress }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Size</th>
          <th>Color</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {dresses.map((dress) => (
          <tr key={dress.id}>
            <td>{dress.name}</td>
            <td>{dress.size}</td>
            <td>{dress.color}</td>
            <td><button onClick={() => deleteDress(dress.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DressTable;