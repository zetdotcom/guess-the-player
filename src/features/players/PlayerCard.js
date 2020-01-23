import React from 'react';

import styled from 'styled-components';

const StyledCard = styled.div`
  border-radius: 5px;
  box-shadow: 1px 1px 5px white;
  background: grey;
  cursor: pointer;
  border: ${props => props.player && (props.player.fppg === props.maxFppg()) && props.showFppg && '5px solid green'};
`;

function PlayerCard({ player, showFppg, onClick, maxFppg }) {

  const playerName = `${player.first_name} ${player.last_name}`
  // console.log('card', maxFppg())
  // const maxPoints = maxFppg();
  const hasHighestFppg = player.fppg === maxFppg()
  console.log("TCL: PlayerCard -> hasHighestFppg", hasHighestFppg)

  return (
    <StyledCard onClick={() => onClick(hasHighestFppg)} style={{border: hasHighestFppg && showFppg && '5px solid green'}}>
      <div>
        {playerName}
      </div>
      <img src={player.images.default.url} alt={playerName} width={200} />
      <div>FPPG: {showFppg ? player.fppg.toFixed(2) : '??'}</div>
    </StyledCard>
  )
};

export default React.memo(PlayerCard);