drop table if exists variables;

create temporary table "variables" (
	"Client"	text not null,
	"CustomCardResourceFolder" integer default 1642010,
	"CustomCardID"	integer default 1642011,
	"StartingID" integer default 694200,
	"date" datetime default CURRENT_TIMESTAMP
);

insert or replace into variables("Client") values(
(case
when (select id from card_categories where name = 'Entropy') then 'Entropy'
when (select id from card_categories where name = 'Custom Cards') then 'KX'
end));

select * from variables;

-- Example

insert or replace into cards VALUES((select CustomCardID from variables),'name',(select StartingID from variables),(select StartingID from variables)
,'cost','rarity',"hp_init", "hp_max", "atk_init", "atk_max", "def_init", "def_max",'element id','lvl_max',"skill_lv_max", "grow_type", 
"optimal_awakening_grow_type", "price", "exp_type", "training_exp", "special_motion"
(select startingID from variables) -- passive_skill_set_id
,'leader_skill_set_id','link_skill_id1','link_skill_id2','link_skill_id3','link_skill_id4','link_skill_id5','link_skill_id6','link_skill_id7',
50,4,150,12,200,24,1,'1',1,336,769,NULL,NULL,NULL,NULL,0,0,NULL,
(select CustomCardResourceFolder from variables),'bg_effect_id',
"selling_exchange_point", "awakening_element_type", -- these dont matter at all
'potential_board_id', --this matters
(select date from variables),(select date from variables),(select date from variables));

mario judah WILL RISE AND MINIONS FOREVER 2025!!!!