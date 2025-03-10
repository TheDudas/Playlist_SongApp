import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import EditSongForm from './components/EditSongForm';

// Import song changes and bootstrap settings. 


function SongCard({ song, deleteSong, updateSong }) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Card style={{ width: '18rem' }}>
      {isEditing ? (
        <EditSongForm song={song} updateSong={updateSong} toggleEdit={toggleEdit} />
      ) : (
        <Card.Body>
          <Card.Title>{song.title}</Card.Title>
          <Card.Text>
            {song.body}
            <br />
            <strong>Album:</strong> {song.album}
            <br />
            <strong>Band:</strong> {song.band}
          </Card.Text>
          <Button variant="danger" onClick={() => deleteSong(song.id)}>Delete</Button>
          <Button variant="primary" onClick={toggleEdit}>Edit</Button>
        </Card.Body>
      )}
    </Card>
  );
}

export default SongCard;
