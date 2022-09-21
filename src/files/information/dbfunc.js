import React from 'react';
import { Grid, Text, Card, Table, Modal, Spacer, Image } from "@nextui-org/react";

const casualties = [
    {
        name: 'IsNoneRule',
        description: 'Nothing',
        val1: '',
        val2: '',
        val3: '',
        Info: false
    },
    {
        name: 'IsOverHpRate',
        description: 'HP is above percent',
        val1: 'Percentage',
        val2: '',
        val3: '',
        Info: false
    },
    {
        name: 'IsUnderHpRate',
        description: 'HP is below percent',
        val1: 'Percentage',
        val2: '',
        val3: '',
        Info: false
    },
    {
        name: 'IsOverEnergy',
        description: 'Ki is above a number',
        val1: 'Ki Amount',
        val2: '',
        val3: '',
        Info: true,
        modaldescription: function () {
            return (
                <Text>
                    To make passives like "when Ki is X or more", the formula is pretty simple:
                    <br />
                    eball_num100 (<code>cards</code>) * (cau_value/100) (<code>skill_casualties</code>) = ki requirement
                </Text>
            )
        }
    },
    {
        name: 'IsUnderEnergy',
        description: 'Ki is below a number',
        val1: 'Ki Amount',
        val2: '',
        val3: '',
        Info: false
    },
    {
        name: 'funny test',
        description: 'check it out dog',
        val1: 'fr check it out tho',
        val2: '',
        val3: '',
        Info: true,
        modaldescription: function () {
            return (
                <Image src='https://media.discordapp.net/attachments/1014637907761430619/1021470973901418496/or0dr9992ke.gif' alt='stupid ass bitch'/>
            )
        }
    },
    {
        name: 'isElapsedTurn',
    }, 
    {
        name: 'isPartyRaceType',
    }, 
    {
        name: 'isEnemyRaceType',
    }, 
    {
        name: 'isOverFightingPower',
    }, 
    {
        name: 'isUnderFightingPower',
    }, 
    {
        name: 'isOverHpRateOverEnergy',
    }, 
    {
        name: 'isOverHpRateUnderEnergy',
    }, 
    {
        name: 'isUnderHpRateOverEnergy',
    }, 
    {
        name: 'isUnderHpRateUnderEnergy',
    }, 
    {
        name: 'isFirstAttack',
    }, 
    {
        name: 5,
    }, 
    
]
 const template = ['Info', 'description', 'val1', 'val2', 'val3']
casualties.forEach(function (key, index) {
    // console.log(index, key);
   

    // console.log(index, key.Info, key.description, key.val1, key.val2, key.val3)
    template.forEach(function(tempkey, tempindex) {
        console.log(key[tempkey])
    })
});

export default function Dbfunc() {

    const [visible, setVisible] = React.useState(false);
    const [GetModalDescription, setModalDescription] = React.useState("");

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
                                // console.log(keys)
                                var selectedkey = parseInt(keys.anchorKey);
                                console.log(casualties[selectedkey])
                                if (casualties[selectedkey].Info === true) {
                                    setVisible(true)
                                    setModalDescription(casualties[selectedkey].modaldescription)
                                    // console.log(casualties[selectedkey])
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
                                    Object.entries(casualties).map(([sat], i) => (

                                        <Table.Row key={sat}>
                                            <Table.Cell align="center">{sat}</Table.Cell>
                                            <Table.Cell align="center">{casualties[sat].name}</Table.Cell>
                                            <Table.Cell align="center">{casualties[sat].description?casualties[sat].description:"nothing"}</Table.Cell>
                                            <Table.Cell align="center">{!(casualties[sat].val1 === ''|null) ? <Text b><code>{casualties[sat].val1}</code></Text> : 'Nothing'}</Table.Cell>
                                            <Table.Cell align="center">{!(casualties[sat].val2 === ''|undefined) ? <Text b><code>{casualties[sat].val2}</code></Text> : 'Nothing'}</Table.Cell>
                                            <Table.Cell align="center">{!(casualties[sat].val3 === '') ? <Text b><code>{casualties[sat].val3}</code></Text> : 'Nothing'}</Table.Cell>
                                            <Table.Cell align="center">{casualties[sat].Info ? <Text b><code>More Info</code></Text> : ''}</Table.Cell>
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