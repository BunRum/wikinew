import React from 'react';
import { Grid, Text, Card, Table, Modal, Spacer, Image, Code } from "@nextui-org/react";
import casualtyjson from './Casualties.json';
import './dbfunc.css'

const modaldescriptions = [
    {
        "IsOverEnergyRate": (
            <Text>
                To make passives like "when Ki is X or more", the formula is pretty simple:
                <br />
                eball_num100 (<code>cards</code>) * (cau_value/100) (<code>skill_casualties</code>) = ki requirement
            </Text>
        ),
        'funny test': (
            <Image src='https://media.discordapp.net/attachments/1014637907761430619/1021470973901418496/or0dr9992ke.gif' alt='stupid ass bitch' />
        ),
    }
]

export default function Dbfunc() {

    const [visible, setVisible] = React.useState(false);
    const [GetModalDescription, setModalDescription] = React.useState("");

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    // var casualties = JSON.parse(casualtyjson)
    return (
        <Grid.Container gap={2} justify="center">
            <Grid xs={8}>
                <Card variant="bordered">
                    <Card.Body>
                        {/* <Text>Bordered card.</Text> */}
                        {/* <Text>{parse(html)}</Text> */}
                        <h2 id="database-function-tables">Database Function Tables</h2>
                        <hr />
                        <Spacer y={0.25} />
                        <Text b style={{
                            'textAlign': 'center'
                        }}> rows with <code>More Info</code> in the info column indicates more information by clicking on the row </Text>
                        <Spacer y={0.25} />
                        <hr />
                        <h4 id="causality-types">Causality Types</h4>
                        <Table
                            aria-label="Example static collection table"
                            css={{
                                height: "auto",
                                minWidth: "100%",
                            }}
                            selectionMode='single'
                        onSelectionChange={(keys) => {
                            var selectedkey = keys.anchorKey;
                            if (modaldescriptions[0][selectedkey]) {
                                setVisible(true)
                                setModalDescription(modaldescriptions[0][selectedkey])
                            }
                        }}
                        >
                            <Table.Header>
                                <Table.Column align='center'>Causality ID</Table.Column>
                                <Table.Column align='center'>Name</Table.Column>
                                <Table.Column align='center'>Description</Table.Column>
                                <Table.Column align='center'>cau_val1</Table.Column>
                                <Table.Column align='center'>cau_val2</Table.Column>
                                <Table.Column align='center'>cau_val3</Table.Column>
                                <Table.Column align='center'>info</Table.Column>
                            </Table.Header>
                            <Table.Body css={{
                                'textAlign': 'center'
                            }}>
                                {
                                    // Object.entries(casualtyjson).map((casualty, i) => (
                                    //     console.log(casualty),
                                    //     <Table.Row key={i}>
                                    //         <Table.Cell align="center">{casualty.id}</Table.Cell>
                                    //         <Table.Cell align="center">{casualty.id}</Table.Cell>
                                    //         <Table.Cell align="center">{casualty.description ? casualty.description : "nothing"}</Table.Cell>
                                    //         <Table.Cell align="center">{casualty.val1 ? <Text b><code>{casualty.val1}</code></Text> : "None"}</Table.Cell>
                                    //         <Table.Cell align="center">{casualty.val2 ? <Text b><code>{casualty.val2}</code></Text> : "None"}</Table.Cell>
                                    //         <Table.Cell align="center">{casualty.val3 ? <Text b><code>{casualty.val3}</code></Text> : "None"}</Table.Cell>
                                    //         <Table.Cell align="center">{casualty.Info ? <Text b><code>More Info</code></Text> : ''}</Table.Cell>
                                    //     </Table.Row>
                                    // ))
                                    Object.entries(casualtyjson).map((key, index) => (
                                        // console.log(index),
                                        <Table.Row key={key[0]}>
                                            <Table.Cell align="center">{key[1].id}</Table.Cell>
                                            <Table.Cell align="center">{key[0]}</Table.Cell>
                                            <Table.Cell align="center">{key[1].description ? key[1].description : <Text b><Code className='Null'>Nothing</Code></Text>}</Table.Cell>
                                            <Table.Cell align="center">{key[1].cau_value1 ? <Text b><code>{key[1].cau_value1}</code></Text> : <Text b><Code className='Null'>Nothing</Code></Text>}</Table.Cell>
                                            <Table.Cell align="center">{key[1].cau_value2 ? <Text b><code>{key[1].cau_value2}</code></Text> : <Text b><Code className='Null'>Nothing</Code></Text>}</Table.Cell>
                                            <Table.Cell align="center">{key[1].cau_value3 ? <Text b><code>{key[1].cau_value3}</code></Text> : <Text b><Code className='Null'>Nothing</Code></Text>}</Table.Cell>
                                            <Table.Cell align="center">{modaldescriptions[0][key[0]] ? <Text b><code>More Info</code></Text> : <Text b><Code className='Null'>Nothing</Code></Text>}</Table.Cell>
                                        </Table.Row>
                                    ))
                                }
                            </Table.Body>
                        </Table>
                    </Card.Body>
                </Card>
            </Grid>
            <Modal
                closeButton
                open={visible}
                onClose={closeHandler}
                width='40%'
                scroll
            >
                <Modal.Header>
                    <Text id="modal-title" size={18} weight='bold'>
                        Extra Knowledge
                    </Text>
                </Modal.Header>
                <Modal.Body style={{
                    'display': 'flex',
                    'alignItems': 'center'
                }} >
                    {GetModalDescription}
                </Modal.Body>
            </Modal>
        </Grid.Container>
    )
}