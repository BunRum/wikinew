import React from 'react';
import { Grid, Text, Card, Table, Modal, Spacer } from "@nextui-org/react";
// import './dbfunc.css';

export default function Dbfunc() {

    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    return (
        <Grid.Container gap={2} justify="center">
            <Grid xs={8}>
                <Card variant="bordered">
                    <Card.Body>
                        {/* <Text>Bordered card.</Text> */}
                        {/* <Text>{parse(html)}</Text> */}
                        <h2 id="database-function-tables">Database Function Tables</h2>
                        <hr/>
                        <Spacer y={0.25}/>
                        <Text b style={{
                            'text-align': 'center'
                        }}> rows with <code>More Info</code> in the info column indicates more information by clicking on the row </Text>
                        <Spacer y={0.25}/>
                        <hr/>
                        <h4 id="causality-types">Causality Types</h4>
                        <Table
                            aria-label="Example static collection table"
                            css={{
                                height: "auto",
                                minWidth: "100%",
                            }}
                            selectionMode='single'
                            onSelectionChange={(keys) => {
                                // console.log(keys)
                                var selectedkey = parseInt(keys.anchorKey);
                                if (selectedkey === 3) {
                                    handler();
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
                                'text-align': 'center'
                            }}>
                                <Table.Row key="0">
                                    <Table.Cell align="center">0</Table.Cell>
                                    <Table.Cell>isNoneRule</Table.Cell>
                                    <Table.Cell>Nothing</Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>

                                <Table.Row key="1">
                                    <Table.Cell align="center">1</Table.Cell>
                                    <Table.Cell>isOverHpRate</Table.Cell>
                                    <Table.Cell>HP is above percent</Table.Cell>
                                    <Table.Cell>HP Percent</Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row key="2">
                                    <Table.Cell align="center">2</Table.Cell>
                                    <Table.Cell>isUnderHpRate</Table.Cell>
                                    <Table.Cell>HP is below percent</Table.Cell>
                                    <Table.Cell>HP Percent</Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row key="3">
                                    <Table.Cell align="center">3</Table.Cell>
                                    <Table.Cell>isOverEnergy</Table.Cell>
                                    <Table.Cell>Ki is above a number</Table.Cell>
                                    <Table.Cell>Ki Amount</Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell>
                                        <Text b><code>More Info</code></Text>
                                        <Modal
                                            closeButton
                                            aria-labelledby="modal-title"
                                            open={visible}
                                            onClose={closeHandler}
                                            width='40%'
                                            aria-describedby="modal-description"
                                        >
                                            <Modal.Header>
                                                <Text id="modal-title" size={18} weight='bold'>
                                                    Extra Knowledge
                                                </Text>
                                            </Modal.Header>
                                            <Modal.Body style={{
                                                'display': 'flex',
                                                'align-items': 'center'
                                            }} >
                                                To make passives like "when Ki is X or more", the formula is pretty simple:
                                                <br />
                                                <u>eball_num100 (<code>cards</code>) * (cau_value/100) (<code>skill_casualties</code>) = ki requirement</u>
                                                {/* <Text>yolo</Text> */}
                                                {/* by:<strong>LukeNintendata</strong> */}
                                            </Modal.Body>
                                        </Modal>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row key="4">
                                    <Table.Cell align="center">4</Table.Cell>
                                    <Table.Cell>issUnderEnergy</Table.Cell>
                                    <Table.Cell>Ki is below a number</Table.Cell>
                                    <Table.Cell>Ki Amount</Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>


                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>
    )
}