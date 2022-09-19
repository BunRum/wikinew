import React, { useEffect, useState } from 'react';
import { Grid, Text } from "@nextui-org/react";
import parse from 'html-react-parser';

export default function App() {
  const [html, setHTML] = useState("");
  useEffect(() => {
    fetch("/files" + window.location.pathname + ".html")
      .then(data => data.text())
      .then(text => {
        setHTML(text);
      })
  }, []);
  return (
      <Grid.Container gap={2} justify="center">
        <Grid xs={8}>
              <Text>{parse(html)}</Text>
        </Grid>
      </Grid.Container>
  )
}