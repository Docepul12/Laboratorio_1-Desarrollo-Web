import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CharacterCard({ character }) {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={character.image} alt={character.name} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </Card.Text>
        <Button variant="primary" href={`/character/${character.id}`}>
          More Info
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;
