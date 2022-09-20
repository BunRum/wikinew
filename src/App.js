import React, { useEffect, useState } from 'react';
import { Grid, Text, Card } from "@nextui-org/react";
import parse from 'html-react-parser';

export default function App() {
  const [html, setHTML] = useState("");
  useEffect(() => {
    fetch("/files" + window.location.pathname + ".html")
      // .then(async response => {
      //   const isJson = response.headers.get('content-type')?.includes('application/json');
      //   const data = isJson ? await response.json() : null;
      //   if (!response.ok) {
      //     // get error message from body or default to response status
      //     const error = (data && data.message) || response.status;
      //     return Promise.reject(error);
      //   }
      // })
      // .catch(error => {
      //   setHTML('<h2 id="getting-started-with-unidokkan">Getting Started with UniDokkan</h2>');
      // })
      .then(data => data.text())
      .then(text => {
        setHTML(text);
      })
  }, []);
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={8}>
        <Card variant="bordered">
          <Card.Body>
            {/* <Text>Bordered card.</Text> */}
            <Text>{parse(html)}</Text>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  )
}