import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// Im port useState, buttons and run functions. 

function AddSongForm({ addSong }) {
  const [song, setSong] = useState({ title: '', body: '', album: '', band: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSong({ ...song, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(song);
    setSong({ title: '', body: '', album: '', band: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Song Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={song.title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Song Body</Form.Label>
        <Form.Control
          type="text"
          name="body"
          value={song.body}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Album Name</Form.Label>
        <Form.Control
          type="text"
          name="album"
          value={song.album}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Band Name</Form.Label>
        <Form.Control
          type="text"
          name="band"
          value={song.band}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Song
      </Button>
    </Form>
  );
}

export default AddSongForm;
