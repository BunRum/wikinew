import React, {useState} from 'react';
import { Grid, Card } from "@nextui-org/react";
import parse from 'html-react-parser';
import { useLocation } from 'react-router';

export default function Home(match) {
  const [html, setHTML] = useState("");
  let location = useLocation().pathname;
  fetch(`${window.location.pathname}/files${location}.html`)
    .then(data => data.text())
    .then(text => {
      setHTML(text);
    })
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={8}>
        <Card variant="bordered">
          <Card.Body>
            {parse(html)}
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  )
}