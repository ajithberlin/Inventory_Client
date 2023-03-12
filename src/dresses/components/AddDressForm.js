import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChromePicker } from 'react-color';

function AddDressForm({ addDress }) {
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('#000000');
  const [image, setImage] = useState(null);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDress({
      id: Date.now(),
      name,
      size,
      type,
      color,
      image,
    });
    setName('');
    setSize('');
    setType('');
    setColor('#000000');
    setImage(null);
    setShowColorPicker(false);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="form-group">
        <label htmlFor="dressName">Dress name:</label>
        <input type="text" className="form-control" id="dressName" placeholder="Enter dress name" value={name} onChange={(event) => setName(event.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="dressSize">Dress size:</label>
        <input type="text" className="form-control" id="dressSize" placeholder="Enter dress size" value={size} onChange={(event) => setSize(event.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="dressType">Dress type:</label>
        <select className="form-control" id="dressType" value={type} onChange={(event) => setType(event.target.value)} required>
          <option value="">Select a dress type</option>
          <option value="casual">Casual</option>
          <option value="formal">Formal</option>
          <option value="party">Party</option>
          <option value="wedding">Wedding</option>
          <option value="ethnic">Ethnic</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="dressColor">Dress color:</label>
        <div className="input-group">
          <input type="text" className="form-control" id="dressColor" placeholder="Enter dress color" value={color} onChange={(event) => setColor(event.target.value)} required />
          <div className="input-group-append">
            <button type="button" className="btn btn-outline-secondary" onClick={() => setShowColorPicker(!showColorPicker)}>Select color</button>
          </div>
        </div>
        {showColorPicker && <ChromePicker color={color} onChange={handleColorChange} />}
      </div>
      <div className="form-group">
        <label htmlFor="dressImage">Dress image:</label>
        <input type="file" className="form-control-file" id="dressImage" accept="image/*" onChange={(event) => setImage(event.target.files[0])} />
      </div>
      <button type="submit" className="btn btn-primary">Add Dress</button>
    </form>
  );
}

export default AddDressForm;
