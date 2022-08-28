import styled from "styled-components";
export const Button = styled.button`
	background-color: lightblue;
	border: none;
	border-radius: 5px;
	padding: 10px;
`;
export const Card = styled.div`
	width: 250px;
	height: 280px;
	color: black;
	background-color: rgba(255, 255, 255, 0.4);
	border-radius: 10px;
`;
export const ProductCard = styled(Card)`
	width: 250px;
	height: 280px;
`;
export const CatagoryCard = styled(Card)`
	margin-left: 10px;
	width: 220px;
	height: 220px;
	margin-bottom: 10px;
	background-color: rgba(1, 2, 3, 1);
`;
export const HomeCardLeft = styled(Card)`
	width: 56%;
	height: 450px;
`;
export const HomeCardRight = styled(Card)`
	background-color: red;
	width: 44%;
	height: 450px;
`;
export const Container = styled.div`
	width: 94%;
	margin-left: 3%;
`;
