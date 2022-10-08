import React from 'react';
import { Grid, Card, Text, Code } from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";
// import parse from 'html-react-parser';
import templatesql from "./template.sql";
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

                        <Text h5 css={{ padding: '0.75rem' }}>Cards Table</Text>
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
                                    • <Code>0: N</Code> <br />
                                    • <Code>1: R</Code> <br />
                                    • <Code>2: SR</Code> <br />
                                    • <Code>3: SSR</Code> <br />
                                    • <Code>4: UR</Code> <br />
                                    • <Code>5: LR</Code> <br />
                                </ul>
                            </li>
                        </ul>

                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container >
    )
}