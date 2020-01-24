import React, { useState, useEffect } from 'react';
import { redBg, greenBg, cardBg } from '../../style';
import styled from 'styled-components';

const StyledCard = styled.div`
	border-radius: 5px;
	box-shadow: 2px 2px 4px skyblue;
	padding-top: 10px;
	/* background: grey; */
	cursor: pointer;
	background: ${props => (props.showTheBest && greenBg) || (!props.showTheBest && props.chosen && redBg) || cardBg};
	transform: ${props => props.chosen && 'scale(1.07)'};
	/* width: 220px; */
	overflow: hidden;
	/* max-height: 293px; */
`;

const StyledImg = styled.img`
	position: relative;
	bottom: -4px;
	width: 100%;
`;

const PlayerName = styled.div`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 0.85em;
`;

function PlayerCard({ player, showFppg, handleCardClick, maxFppgId }) {
	const [chosen, setChosen] = useState(false);

	useEffect(() => {
		!showFppg && setChosen(false);
	}, [showFppg]);

	const playerName = `${player.first_name} ${player.last_name}`;
	const hasHighestFppg = player.id === maxFppgId();
	const playerFppg = player.fppg?.toFixed(2) || 0;

	return (
		<StyledCard
			chosen={chosen}
			showTheBest={hasHighestFppg && showFppg}
			onClick={() => {
				handleCardClick(hasHighestFppg);
				setChosen(true);
			}}
		>
			<PlayerName>{playerName}</PlayerName>
			<div>FPPG: {showFppg ? playerFppg : '??'}</div>
			<StyledImg src={player.images.default.url} alt={playerName} />
		</StyledCard>
	);
}

export default PlayerCard;
