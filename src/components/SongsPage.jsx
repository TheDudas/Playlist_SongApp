import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SongCard from './components/SongCard';
import AddSongForm from './components/AddSongForm';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

// import data for configuring the page that will function all Songs and manage updates, changes, and deletions. 
// functions for setting songs and useState

function SongsPage() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    const response = await fetch(BASE_URL);
    let data = await response.json();
    data = data.filter(song => song.title && song.body && song.album && song.band);
    setSongs(data.slice(0, 10)); // limiting to 10 songs for simplicity
  };

  const addSong = async (song) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(song),
    });
    const newSong = await response.json();
    setSongs([...songs, newSong]);
  };

  const updateSong = async (id, updatedSong) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedSong),
    });
    const updatedData = await response.json();
    setSongs(songs.map(song => (song.id === id ? updatedData : song)));
  };

  const deleteSong = async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    setSongs(songs.filter(song => song.id !== id));
  };

  return (
    <Container>
      <Row>
        {songs.map((song, index) => (
          <Col key={`${song.id}-${index}`}>
            <SongCard song={song} deleteSong={deleteSong} updateSong={updateSong} />
          </Col>
        ))}
      </Row>
      <Row>
        <AddSongForm addSong={addSong} />
      </Row>
    </Container>
  );
}

export default SongsPage;
