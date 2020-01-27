import React from 'react';
import styled from 'styled-components';

const Radios = styled.div`
	display: flex;
	width: 200px;
	justify-content: space-around;
	margin: 0 auto;
`;

const RadioInput = styled.input`
	margin-right: 5px;
`;
const RadioLabel = styled.label`
	cursor: pointer;
`;

function PlayersRadioSelection(props) {
	const { numOfPlayers, setNumOfPlayers } = props;

	return (
		<Radios>
			<RadioLabel>
				<RadioInput
					type='radio'
					name='players-number'
					value='2'
					checked={numOfPlayers === '2'}
					onChange={e => setNumOfPlayers(e.target.value)}
				/>
				2
			</RadioLabel>
			<RadioLabel>
				<RadioInput
					type='radio'
					name='players-number'
					value='3'
					checked={numOfPlayers === '3'}
					onChange={e => setNumOfPlayers(e.target.value)}
				/>
				3
			</RadioLabel>
			<RadioLabel data-testid='radio3'>
				<RadioInput
					type='radio'
					name='players-number'
					value='5'
					checked={numOfPlayers === '5'}
					onChange={e => setNumOfPlayers(e.target.value)}
				/>
				5
			</RadioLabel>
		</Radios>
	);
}

export default PlayersRadioSelection;
