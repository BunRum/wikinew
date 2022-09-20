import React from 'react';
import { Grid, Text, Card } from "@nextui-org/react";
// import parse from 'html-react-parser';

export default function Cardassets() {
    return (
        <Grid.Container style={{
            'display': 'flex',
            'justify-content': 'center',
            'position': 'fixed',
            'top': '50%',
            'transform': 'translate(0, -50%)',
            // 'textAlign': 'center',
        }}>
            <Grid xs={8} style={{
                'display': 'flex',
                'justify-content': 'center'
            }}>
                <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px" }}

                // className='center'
                >
                    <Card.Body>
                        <Text style={{
                            'display': 'flex',
                            'justify-content': 'center'}}
                        >A pressable card.</Text>
                </Card.Body>
            </Card>
        </Grid>
        </Grid.Container >
    )
}