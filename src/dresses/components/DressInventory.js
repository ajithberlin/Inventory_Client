import React, { useState } from 'react';
import DressTable from './DressTable';
import AddDressForm from './AddDressForm';

function DressInventory() {
  const [dresses, setDresses] = useState([]);

  const addDress = (newDress) => {
    setDresses([...dresses, newDress]);
  };

  const deleteDress = (id) => {
    setDresses(dresses.filter((dress) => dress.id !== id));
  };

  return (
    <div>
      <h1>Dress Inventory Management</h1>
      <AddDressForm addDress={addDress} />
      <DressTable dresses={dresses} deleteDress={deleteDress} />
    </div>
  );
}

export default DressInventory;
