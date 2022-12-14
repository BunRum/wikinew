import React from 'react';
import { Grid, Card, Table, Link, Spacer, Collapse } from "@nextui-org/react";

export default function Assets() {
  // let location = useLocation().pathname;
  // fetch(`${window.location.pathname}/files${location}.html`)
  //   .then(data => data.text())
  //   .then(text => {
  //     text = text.replace(/\/files/gi, `${window.location.pathname}/files`)
  //     console.log(text)
  //     setHTML(text);
  //   })
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={8}>
        <Card variant="bordered">
          <Card.Body>
            {/* {parse(html)} */}

            <Collapse.Group splitted>
              <Collapse title="Image Resolutions" expanded>
                <Table
                  aria-label="Example static collection table"
                  css={{
                    height: "auto",
                    minWidth: "100%",
                  }}
                >
                  <Table.Header>
                    <Table.Column align='center'>Item</Table.Column>
                    <Table.Column align='center'>Resolution</Table.Column>
                  </Table.Header>
                  <Table.Body css={{
                    'textAlign': 'center'
                  }}>
                    <Table.Row>
                      <Table.Cell>Card Art</Table.Cell>
                      <Table.Cell>426x568</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Circle</Table.Cell>
                      <Table.Cell>196x196</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Thumb</Table.Cell>
                      <Table.Cell>250x250</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Piece</Table.Cell>
                      <Table.Cell>74x88</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Cutin</Table.Cell>
                      <Table.Cell>852x266</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>sp_cutin_1</Table.Cell>
                      <Table.Cell>1024x512</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Collapse>
            </Collapse.Group>


            <p><sub>by BunRum</sub></p>
            <h2 id="gui"><strong>GUI</strong></h2>
            <p>This is a Zip Containing all the assets needed to make GUI&#39;s </p>
            <p>Note: for global compatibility just copy whatever is in the folder and put it for the available language folders</p>
            <p> <Link href="https://cdn.discordapp.com/attachments/565625878831169546/662005932871516170/Complete_GUI_Assets.zip">GUI</Link></p>
            <p><sub>By GhostWaves</sub></p>
            <h2 id="templates"><strong>Templates</strong></h2>
            <Link href='https://cdn.discordapp.com/attachments/776894592170983425/1022408588934787072/pngs.zip'>Card Templates (PNG)</Link>
            <Spacer y={0.5} />
            <Link href='https://cdn.discordapp.com/attachments/776894592170983425/1022408589224189982/psds.zip'>Card Templates (PSD)</Link>
            <p><sub>By Energizz ?</sub></p>
            <hr />
            <Collapse.Group accordion={false} splitted>
              <Collapse title="Wallpaper Templates" expanded>
                <p>This <em>ZIP</em> file contains the files necessary for a STATIC image wallpaper, but nothing prevents you from making an animated wallpaper.
                  You will find 1 <em>.lwf</em>, 4 <em>.psd</em> and 1 <em>.json</em> file at the end of the <em>item</em> path.</p>
                <p><u>How to use and understand each file :</u></p>
                <ul>
                  <li>The <strong>icon_XXXX.psd</strong> only contains a black image;</li>
                  <li>The <strong>thumb_XXXX.psd</strong> is a black rectangle with some transparent borders, you only need to put your image in the black rectangle and keep the transparent area;</li>
                  <li>The <strong>MyWallpaper.psd</strong> has 2 layers to guide you :<ul>
                    <li>The black area is what is NOT shown by the game <strong><em>on most phones</em></strong>, but might on bigger screens such as tablets. Note that the screen of my phone is big (6.7 inches), so your phone might not show as high and as low as mine;</li>
                    <li>It also contains the interface of the main screen, so you can try and fit your wallpaper as you wish.</li>
                  </ul>
                  </li>
                  <li>The <strong>info.json</strong> contains 3 variables inside :<ul>
                    <li><em>theme</em> contains the name of the frame you want to use (list below);<ul>
                      <li>If you don&#39;t want to use any frame, set the variable to <em>null</em> without quotes.</li>
                    </ul>
                    </li>
                    <li><em>en</em> contains the english name of the wallpaper that will be displayed;</li>
                    <li><em>fr</em> contains the french name of the wallpaper that will be displayed;<ul>
                      <li>The engine will try to display the french name if you use the French Translation patch or if you play in french on Global. If it doesn&#39;t find it, it will use the english name.</li>
                    </ul>
                    </li>
                    <li>You can also add some filler bars at the top and bottom if your wallpaper isnt big enough to fit big screens, only add this line under the theme variable:<ul>
                      <li>&quot;filler&quot;:true,</li>
                    </ul>
                    </li>
                  </ul>
                  </li>
                  <li>The <strong>framename.psd</strong> in <code>baou_wpadder\theme\</code> contains the basic frame and the ribbon of the basic frame. You can use it to make your own frames, just save it in this folder and give it any name; <ul>
                    <li>You can then use them in your patch exclusively if the name of the frame png is put in the <em>theme</em> variable of the <strong>info.json</strong> file.</li>
                  </ul>
                  </li>
                  <li>Note that you will need to change the <strong>XXXX</strong> in the names of the folder and files, but <strong><em>DO NOT</em></strong> rename the <strong>MyWallpaper.png</strong> and <strong>info.json</strong> files;</li>
                  <li>The engine can detect <strong>id</strong>s from <em>1000 to 2000</em>, so the id you use for your wallpapers must be in this range or it won&#39;t show up in game.</li>
                </ul>
                <p><u>List of the frames included in the Engine:</u></p>
                <pre>
                  <code>-<span className="ruby"> black
                    <br />
                  </span>-<span className="ruby"> blue
                      <br />
                    </span>-<span className="ruby"> gold (original frame)
                      <br />
                    </span>-<span className="ruby"> green
                      <br />
                    </span>-<span className="ruby"> purple
                      <br />
                    </span>-<span className="ruby"> red
                      <br />
                    </span>-<span className="ruby"> white
                      <br />
                    </span>-<span className="ruby"> silver
                      <br />
                    </span>-<span className="ruby"> rainbow
                    </span>
                  </code>
                </pre><p><Link href="https://cdn.discordapp.com/attachments/655235083745230848/753044679586480178/TEMPLATE_ZIP.zip">Download Link of the ZIP</Link></p>
                <p><em>If you are a creator, make sure to check the spreadshit posted in #knowledgebase to add your wallpapers to the list</em></p>
                <p><sub>By Energizz</sub></p>
              </Collapse>
            </Collapse.Group>
            {/* <h2 id="wallpaper-template"><strong>Wallpaper template</strong></h2> */}
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  )
}