import React from 'react';
import { Grid, Card, Text, Code, Table } from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";
// import parse from 'html-react-parser';
import templatesql from "./template.sql";
import cardjson from "./card.json";
import { useState } from "react";

export default function Cardassets() {
    // console.log(templatesql)
    const [Getsql, SetSql] = useState("");

    fetch(templatesql)
        .then(data => data.text())
        .then(text => {
            // return text
            SetSql(text)
        })

    return (
        <Grid.Container gap={2} justify="center">
            <Grid xs={8}>
                <Card variant="bordered">
                    <Card.Body>

                        <Text h3 css={{ padding: '0.75rem' }}>QOL Variables template</Text>
                        <SyntaxHighlighter language="sql" style={dark}>
                            {Getsql}
                        </SyntaxHighlighter>
                        <Text h3 css={{ padding: '0.75rem' }}>Cards Breakdown/Dependency Tree</Text>
                        <ul>
                            <li>
                                • <code className='IS'>id, integer only</code>
                            </li>
                            <li>
                                • <code className='IS'>name, string only</code>
                            </li>
                            <li>
                                • <code className='IS'>character_id, integer only</code>
                                <ul>
                                    • i think this links to the sprite folder
                                </ul>
                            </li>
                            <li>
                                • <code className='IS' id="rarity">rarity, integer only</code>
                                <ul>
                                    <Code>
                                        0: N<br />
                                        1: R<br />
                                        2: SR<br />
                                        3: SSR<br />
                                        4: UR<br />
                                        5: LR<br />
                                    </Code>
                                </ul>
                            </li>
                            <li>
                                • <code className='IS' id="element">element, integer only</code>
                                <ul>
                                    <Code>
                                        0: AGL<br/>
                                        1: TEQ<br/>
                                        2: INT<br/>
                                        3: STR<br/>
                                        4: PHY<br/>
                                        10: Super AGL<br/>
                                        11: Super TEQ<br/>
                                        12: Super INT<br/>
                                        13: Super STR<br/>
                                        14: Super PHY<br/>
                                        20: Extreme AGL<br/>
                                        21: Extreme TEQ<br/>
                                        22: Extreme INT<br/>
                                        23: Extreme STR<br/>
                                        24: Extreme PHY<br/>
                                    </Code>
                                </ul>
                            </li>
                        </ul>

                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container >
    )
}