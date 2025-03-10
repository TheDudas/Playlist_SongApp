import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SongCard from './components/SongCard';
import AddSongForm from './components/AddSongForm';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

// import data for configuring the page that will function all Songs and manage updates, changes, and deletions. 
// functions for setting songs and useState

function SongsPage() {
  const [songs, setSongs] = useState([]);
// add Songs to useState

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    const response = await fetch(BASE_URL);
    let data = await response.json();
    data = data.filter(song => song.title && song.body && song.album && song.band);
    setSongs(data.slice(0, 10)); // limiting to 10 songs for simplicity, can also remove or not have default song listed. 
  };
// adding songs while waiting for a response. 

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
// updating a song is different than adding a song
// Updating and editing is the same. 

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

  // deleting a song and it's ID will delete only the song. 

  const deleteSong = async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    setSongs(songs.filter(song => song.id !== id));
  };

  // return the songs added to the array in the container by row.  
  // Create a card form to show the song data. 

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
