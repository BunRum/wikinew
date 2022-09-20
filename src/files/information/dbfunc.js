import React from 'react';
import { Grid, Text, Card, Table, Button, Modal } from "@nextui-org/react";
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
                                console.log(selectedkey)
                                if (selectedkey === 3) {
                                    console.log(selectedkey)
                                    handler();
                                }
                            }}
                        >
                            <Table.Header>
                                {/* <Table.Column>NAME</Table.Column>
                                <Table.Column>ROLE</Table.Column>
                                <Table.Column>STATUS</Table.Column> */}

                                <Table.Column>Causality ID</Table.Column>
                                <Table.Column>Name</Table.Column>
                                <Table.Column>Description</Table.Column>
                                <Table.Column>cau_val1</Table.Column>
                                <Table.Column>cau_val2</Table.Column>
                                <Table.Column>cau_val3</Table.Column>
                                <Table.Column>info</Table.Column>
                            </Table.Header>
                            <Table.Body>
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

                                {/* <Popover>
                                    <Popover.Trigger>

                                    </Popover.Trigger>
                                    <Popover.Content>
                                        <Card>
                                            <Card.Body>
                                                <Text>
                                                    hi
                                                </Text>
                                            </Card.Body>
                                        </Card>
                                    </Popover.Content>
                                </Popover> */}
                                <Table.Row key="3">
                                    <Table.Cell align="center">3</Table.Cell>
                                    <Table.Cell>isOverEnergy</Table.Cell>
                                    <Table.Cell>Ki is above a number</Table.Cell>
                                    <Table.Cell>Ki Amount</Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell>
                                        <Button auto flat onPress={handler}>!</Button>
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