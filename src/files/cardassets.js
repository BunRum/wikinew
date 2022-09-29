import React from 'react';
import { Grid, Card, Text } from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";
// import parse from 'html-react-parser';

const sql = `
drop table if exists variables;

create temporary table "variables" (
	"Client"	text not null,
	"CustomCardResourceFolder" integer default 1642010,
	"CustomCardID"	integer default 1642011,
	"StartingID" integer not null default 694200,
	"date" datetime not null default CURRENT_TIMESTAMP
);

// Example

select CustomCardID from variables;

insert or replace into cards VALUES((select CustomCardID from variables),'name',(select StartingID from variables),(select StartingID from variables)
,'cost','rarity',"hp_init", "hp_max", "atk_init", "atk_max", "def_init", "def_max",'element id','lvl_max',"skill_lv_max", "grow_type", 
"optimal_awakening_grow_type", "price", "exp_type", "training_exp", "special_motion"
(select startingID from variables) -- passive_skill_set_id
,'leader_skill_set_id','link_skill_id1','link_skill_id2','link_skill_id3','link_skill_id4','link_skill_id5','link_skill_id6','link_skill_id7',
50,4,150,12,200,24,1,'1',1,336,769,NULL,NULL,NULL,NULL,0,0,NULL,
(select CustomCardResourceFolder from variables),'bg_effect_id',
"selling_exchange_point", "awakening_element_type", -- these dont matter at all
'potential_board_id', -- this matters
(select date from variables),(select date from variables),(select date from variables));


`;

export default function Cardassets() {
    return (
        <Grid.Container gap={2} justify="center">
            <Grid xs={8}>
                <Card variant="bordered">
                    <Card.Body>

                        <Text h3 css={{ padding: '0.75rem' }}>QOL Variables template</Text>
                        <SyntaxHighlighter language="sql" style={dark}>
                            {sql}
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
                                    <li>
                                    • i think this links to the sprite folder
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container >
    )
}