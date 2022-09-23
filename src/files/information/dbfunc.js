import React from 'react';
import { Grid, Text, Card, Table, Modal, Spacer, Image, Code, Collapse } from "@nextui-org/react";
import datajson from './data.json';
// import effic
import './dbfunc.css'

const modaldescriptions =
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
    "isTargetEnemyCondition": (
        <Table css={{
            height: "auto",
            minWidth: "100%",
        }}
            selectionMode='single'
        >
            <Table.Header>
                <Table.Column align="center">Status Mask</Table.Column>
                <Table.Column>Description</Table.Column>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell align="center">1</Table.Cell>
                    <Table.Cell>Unknown</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">2</Table.Cell>
                    <Table.Cell>Unknown</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">4</Table.Cell>
                    <Table.Cell>Unknown</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">8</Table.Cell>
                    <Table.Cell>Unknown</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">16</Table.Cell>
                    <Table.Cell>ATK Down</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">32</Table.Cell>
                    <Table.Cell>DEF Down</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">64</Table.Cell>
                    <Table.Cell>Unknown</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">128</Table.Cell>
                    <Table.Cell>Unknown</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">256</Table.Cell>
                    <Table.Cell>Efficacy Type 9</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">512</Table.Cell>
                    <Table.Cell>Efficacy Type 47</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">1024</Table.Cell>
                    <Table.Cell>Sealed (Efficacy Type 48)</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">2048</Table.Cell>
                    <Table.Cell>Efficacy Type 8</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">4096</Table.Cell>
                    <Table.Cell>Unknown</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">8192</Table.Cell>
                    <Table.Cell>Efficacy Type 53</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">16384</Table.Cell>
                    <Table.Cell>Efficacy Type 75</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">32768</Table.Cell>
                    <Table.Cell>Efficacy Type 94</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">65536</Table.Cell>
                    <Table.Cell>Efficacy Type 96</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">131072</Table.Cell>
                    <Table.Cell>Unknown</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">262144</Table.Cell>
                    <Table.Cell>Unknown</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">524288</Table.Cell>
                    <Table.Cell>Efficacy Type 100</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell align="center">1048576</Table.Cell>
                    <Table.Cell>Efficacy Type 101</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}
console.log(modaldescriptions)

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
            <Grid xs={11}>
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

                        <Collapse.Group>
                            <Collapse title="Casualty Types" expanded>
                                <Table
                                    aria-label="Casualty Table"
                                    css={{
                                        minWidth: "100%",
                                        height: 'auto',
                                        'textAlign': 'left',
                                        'whiteSpace': 'pre-line'
                                    }}
                                    selectionMode='single'
                                    onSelectionChange={(keys) => {
                                        var selectedkey = keys.anchorKey;
                                        if (modaldescriptions[selectedkey]) {
                                            setVisible(true)
                                            setModalDescription(modaldescriptions[selectedkey])
                                        }
                                    }}
                                    shadow={false}
                                >
                                    <Table.Header>
                                        <Table.Column>Causalty ID</Table.Column>
                                        <Table.Column>Name</Table.Column>
                                        <Table.Column>Description</Table.Column>
                                        <Table.Column align='center'>cau_val1</Table.Column>
                                        <Table.Column align='center'>cau_val2</Table.Column>
                                        <Table.Column align='left'>cau_val3</Table.Column>
                                        <Table.Column align='center'>info</Table.Column>
                                    </Table.Header>
                                    <Table.Body css={{ 'textAlign': 'center', 'white-space': 'pre-line' }}>
                                        {
                                            Object.values(datajson.Casualties).map((key, index) => (
                                                // console.log(key, index),
                                                <Table.Row key={key.name}>
                                                    <Table.Cell >{key.id}</Table.Cell>
                                                    <Table.Cell css={{ 'textAlign': 'center', 'white-space': 'pre-line' }}>{key.name}</Table.Cell>
                                                    <Table.Cell css={{ 'textAlign': 'center', 'white-space': 'pre-line' }}>{key.description ? key.description : <Text b><Code className='Null'>None</Code></Text>}</Table.Cell>
                                                    <Table.Cell css={{ 'textAlign': 'center', 'white-space': 'pre-line' }}>{key.cau_value1 ? <Text b><code className='IS'>{key.cau_value1}</code></Text> : <Text b><Code className='Null'>None</Code></Text>}</Table.Cell>
                                                    <Table.Cell css={{ 'textAlign': 'center', 'white-space': 'pre-line' }}>{key.cau_value2 ? <Text b size={1}><code className='IS'>{key.cau_value2}</code></Text> : <Text b><Code className='Null'>None</Code></Text>}</Table.Cell>
                                                    <Table.Cell css={{ 'textAlign': 'center', 'white-space': 'pre-line' }}>{key.cau_value3 ? <Text b size={1}><code className='IS'>{key.cau_value3}</code></Text> : <Text b><Code className='Null'>None</Code></Text>}</Table.Cell>
                                                    <Table.Cell css={{ 'textAlign': 'center', 'white-space': 'pre-line' }}>{modaldescriptions[key.name] ? <Text b><code>More Info</code></Text> : <Text b><Code className='Null'>None</Code></Text>}</Table.Cell>
                                                </Table.Row>
                                            ))
                                        }
                                    </Table.Body>
                                    <Table.Pagination
                                        shadow
                                        noMargin
                                        align="center"
                                        rowsPerPage={10}
                                        onPageChange={(page) => console.log({ page })}
                                    />
                                </Table>
                            </Collapse>
                            <Collapse title="Efficacy Types" expanded>
                                <Table
                                    aria-label="Efficacy Table"
                                    selectionMode='single'
                                    onSelectionChange={(keys) => {
                                        var selectedkey = keys.anchorKey;
                                        if (modaldescriptions[selectedkey]) {
                                            setVisible(true)
                                            setModalDescription(modaldescriptions[selectedkey])
                                        }
                                    }}
                                    shadow={false}
                                >
                                    <Table.Header>
                                        <Table.Column>Efficacy ID</Table.Column>
                                        <Table.Column>Name</Table.Column>
                                        <Table.Column>Description</Table.Column>
                                        <Table.Column align='center'>eff_val1</Table.Column>
                                        <Table.Column align='center'>eff_val2</Table.Column>
                                        <Table.Column>eff_val3</Table.Column>
                                        <Table.Column align='center'>info</Table.Column>
                                    </Table.Header>
                                    <Table.Body items={datajson.efficacies}>

                                        {
                                            Object.values(datajson.efficacies).map((key, index) => (
                                                // console.log(key, index),
                                                <Table.Row>
                                                    <Table.Cell >{key.id}</Table.Cell>
                                                    <Table.Cell css={{ 'textAlign': 'left' }}>{key.name}</Table.Cell>
                                                    <Table.Cell>{key.description ? key.description : <Text b><Code className='Null'>None</Code></Text>}</Table.Cell>
                                                    <Table.Cell css={{ 'textAlign': 'center' }}>{key.eff_value1 ? <Text b><code className='IS'>{key.eff_value1}</code></Text> : <Text b><Code className='Null'>None</Code></Text>}</Table.Cell>
                                                    <Table.Cell css={{ 'textAlign': 'center' }}>{key.eff_value2 ? <Text b size={1}><code className='IS'>{key.eff_value2}</code></Text> : <Text b><Code className='Null'>None</Code></Text>}</Table.Cell>
                                                    <Table.Cell css={{ 'textAlign': 'left' }}>{key.eff_value3 ? <Text b size={1}><code className='IS'>{key.eff_value3}</code></Text> : <Text b><Code className='Null'>None</Code></Text>}</Table.Cell>

                                                    <Table.Cell align="center">{modaldescriptions[key.name] ? <Text b><code>More Info</code></Text> : <Text b><Code className='Null'>None</Code></Text>}</Table.Cell>

                                                </Table.Row>
                                            ))
                                        }

                                    </Table.Body>
                                    <Table.Pagination
                                        shadow
                                        noMargin
                                        align="center"
                                        rowsPerPage={10}
                                        onPageChange={(page) => console.log({ page })}
                                    />
                                </Table>
                            </Collapse>
                        </Collapse.Group>
                        <Text h3 css={{ padding: '0.75rem' }}>Calc Options</Text>
                        {/* <Spacer x={4}/> */}
                        <Card
                            css={{
                                maxWidth: '19%',
                                filter: 'drop-shadow(0 5px 5px rgb(0 0 0 / 0.15));', // shadows.md
                            }}
                            shadow={false}
                            // variant='shadow'
                            
                        >
                            <Card.Body>
                                <Table
                                    aria-label="Calc Options"
                                    css={{
                                        alignItems: 'center'
                                    }}
                                    shadow={false}
                                >
                                    <Table.Header>
                                        <Table.Column>Calc Option</Table.Column>
                                        <Table.Column css={{ 'textAlign': 'center' }}>Description</Table.Column>
                                    </Table.Header>
                                    <Table.Body css={{ 'textAlign': 'center' }}> 
                                        <Table.Row key='cplus' >
                                            <Table.Cell>0</Table.Cell>
                                            <Table.Cell>Calc Plus</Table.Cell>
                                        </Table.Row>
                                        <Table.Row key='cminus'>
                                            <Table.Cell>1</Table.Cell>
                                            <Table.Cell>Calc Minus</Table.Cell>
                                        </Table.Row>
                                        <Table.Row key='cpplus'>
                                            <Table.Cell>2</Table.Cell>
                                            <Table.Cell>Calc Percent Plus</Table.Cell>
                                        </Table.Row>
                                        <Table.Row key='cpminus'>
                                            <Table.Cell>3</Table.Cell>
                                            <Table.Cell>Calc Percent Minus</Table.Cell>
                                        </Table.Row>
                                        <Table.Row key='cequal'>
                                            <Table.Cell>4</Table.Cell>
                                            <Table.Cell>Calc Equal</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
            </Grid>
            <Modal
                closeButton
                open={visible}
                onClose={closeHandler}
                width='40%'
                scroll

                noPadding
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