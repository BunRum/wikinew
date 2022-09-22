import React from 'react';
import { Grid, Card } from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";
// import parse from 'html-react-parser';

const javaScriptMarkdownCodeblock = `
drop table if exists variables;

create temporary table "variables" (
	"Client"	text not null,
	"CustomCardResourceFolder" integer default 1642010,
	"CustomCardID"	integer default 1642011,
	"StartingID" integer not null default 694200,
	"date" datetime not null default CURRENT_TIMESTAMP
);
`;

export default function Cardassets() {
    return (
        <Grid.Container gap={2} justify="center">
            <Grid xs={8}>
                <Card variant="bordered">
                    <Card.Body>
                        <SyntaxHighlighter language="sql" style={dark}>
                            {javaScriptMarkdownCodeblock}
                        </SyntaxHighlighter>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container >
    )
}