import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <Card>
        <Card.Img variant="top" src={character.image} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Status:</strong> {character.status}</ListGroup.Item>
            <ListGroup.Item><strong>Species:</strong> {character.species}</ListGroup.Item>
            <ListGroup.Item><strong>Origin:</strong> {character.origin.name}</ListGroup.Item>
            <ListGroup.Item><strong>Location:</strong> {character.location.name}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CharacterDetails;
