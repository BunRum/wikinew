import React from 'react';
import { Grid, Card, Table, Text } from "@nextui-org/react";
import list from './list.json';

export default function Pboard() {
    return (
        <Grid.Container gap={2} justify="center">
            <Grid xs={11}>
                <Card variant="bordered">
                    <Card.Body>
                        <Text b h2>Potential Board</Text>
                        <Table
                            aria-label="potentialboards"
                            key="hi"
                            css={{
                                Width: 'inherit'
                            }}
                        >
                            <Table.Header aria-label="oerjgojregfo">
                                <Table.Column css={{ 'textAlign': 'center', 'white-space': 'pre-line' }}>id</Table.Column>
                                <Table.Column css={{ 'textAlign': 'left', 'white-space': 'pre-line' }}>comment</Table.Column>
                                <Table.Column css={{ 'textAlign': 'center', 'white-space': 'pre-line' }}>type</Table.Column>
                                <Table.Column css={{ 'textAlign': 'center', 'white-space': 'pre-line' }}>total</Table.Column>
                            </Table.Header>
                            <Table.Body aria-label="tgitjtjtj">
                                {
                                    Object.values(list).map((key, index) => (
                                        // console.log(key, index),
                                        <Table.Row key={`potentialboard_${key.id}`}>
                                            <Table.Cell css={{ 'textAlign': 'center', 'white-space': 'pre-line' }}>{key.potential_board_id}</Table.Cell>
                                            <Table.Cell css={{ 'textAlign': 'left', 'white-space': 'pre-line' }}>{key.comment}</Table.Cell>
                                            <Table.Cell css={{ 'textAlign': 'center', 'white-space': 'pre-line' }}>{key.type}</Table.Cell>
                                            <Table.Cell css={{ 'textAlign': 'center', 'white-space': 'pre-line' }}>{key.total}</Table.Cell>
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
                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>
    )
}