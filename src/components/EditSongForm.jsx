import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

// Import form and Button setting sfrom React
//run function for editing song. 
// form for editing the data on the card. 

function EditSongForm({ song, updateSong, toggleEdit }) {
  const [updatedSong, setUpdatedSong] = useState({ ...song });

  useEffect(() => {
    setUpdatedSong({ ...song });
  }, [song]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedSong({ ...updatedSong, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSong(song.id, updatedSong);
    toggleEdit();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Song Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={updatedSong.title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Song Body</Form.Label>
        <Form.Control
          type="text"
          name="body"
          value={updatedSong.body}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Album Name</Form.Label>
        <Form.Control
          type="text"
          name="album"
          value={updatedSong.album}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Band Name</Form.Label>
        <Form.Control
          type="text"
          name="band"
          value={updatedSong.band}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Update Song
      </Button>
      <Button variant="secondary" onClick={toggleEdit}>
        Cancel
      </Button>
    </Form>
  );
}

export default EditSongForm;


