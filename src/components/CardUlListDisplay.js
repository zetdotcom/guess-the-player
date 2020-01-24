import styled from 'styled-components';

const CardUlListDisplay = styled.ul`
	display: flex;
	flex: 1;
	flex-flow: wrap;
	padding: 0;
	margin: 10px;
	justify-content: center;
	& li {
		list-style: none;
		margin: 7px;
		max-width: 220px;
		flex: 1 0 45%;
	}
`;

export default CardUlListDisplay;
