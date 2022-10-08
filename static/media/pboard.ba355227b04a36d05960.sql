SELECT
	potential_boards.id AS 'potential_board_id',
	potential_boards.comment,
	potential_events.type,
	SUM(potential_events.additional_value) AS 'total'
FROM
	potential_boards
LEFT JOIN
	potential_squares ON (potential_squares.potential_board_id = potential_boards.id)
LEFT JOIN
	potential_events ON (potential_events.id = potential_squares.event_id)
GROUP BY
	potential_events.type,
	potential_squares.potential_board_id
HAVING
	potential_events.type NOT IN ("PotentialEvent::Select", "PotentialEvent::Skill")
ORDER BY
	potential_boards.id ASC,
	potential_events.type ASC