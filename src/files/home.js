import React from 'react';
import { Grid, Card, Image } from "@nextui-org/react";

export default function Home(match) {
  // const [html, setHTML] = useState("");
  // let location = useLocation().pathname;
  // fetch(`${window.location.pathname}/files/lmfao.html`)
  //   .then(data => data.text())
  //   .then(text => {
  //     setHTML(text);
  //   })
  return (
    <Grid.Container gap={0} justify="center" >

      <Grid>
        <Card variant="bordered">
          <Card.Body>
            <Image src="https://cdn.discordapp.com/attachments/1014637907761430619/1022703469456523315/IMG_1886.png" showSkeleton css={{
              // maxWidth: '60%',
              display: 'block'
            }} />
          </Card.Body>
        </Card>
      </Grid>

      <Grid>
        <Card variant="bordered">
          <Card.Body>
            <Image src="https://cdn.discordapp.com/attachments/1014637907761430619/1022703469456523315/IMG_1886.png" showSkeleton css={{
              // maxWidth: '60%',
              display: 'block'
            }} />
          </Card.Body>
        </Card>
      </Grid>

      <Grid>
        <Card variant="bordered">
          <Card.Body>
            <Image src="https://cdn.discordapp.com/attachments/1014637907761430619/1022703469456523315/IMG_1886.png" showSkeleton css={{
              // maxWidth: '60%',
              display: 'block'
            }} />
          </Card.Body>
        </Card>
      </Grid>
<Grid>
        <Card variant="bordered">
          <Card.Body>
            imeating goku black day for fortnite!
            <Image src="https://cdn.discordapp.com/attachments/776894592170983425/1108961690516721815/image.png" showSkeleton css={{
              // maxWidth: '60%',
              display: 'block'
            }} />
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  )
}
