import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
	position: absolute;
	width: 140px;
	height: 33px;
	left: 108px;
	top: 68px;
`;

const Header = styled.div`
	position: absolute;
	width: 64px;
	height: 19px;
	left: ${props => props.left};
	top: 75px;

	font-family: 'Silka';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;

	color: #101820;
`;

const Button = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 10px 40px;

	position: absolute;
	width: 104px;
	height: 34px;
	left: 1228px;
	top: 67px;

	background: #101820;
	border: 1px solid #101820;
	box-sizing: border-box;
	border-radius: 4px;
	color: white;
`;
const BetaText = styled.div`
	position: absolute;
	width: 63.75px;
	height: 18.7px;
	left: 269.25px;
	top: 224px;
	background: #778af7;
	border-radius: 5px;
	color: #ffffff;
`;
const CovalentText = styled.div`
	position: absolute;
	width: 80.75px;
	height: 16.74px;
	left: 143.09px;
	top: 224.45px;
`;

function Info() {
	return (
		<div>
			<Logo
				data-testid="Logo"
				alt="Logo"
				src="https://media-exp1.licdn.com/dms/image/C4E0BAQFazUUEA1n9rw/company-logo_200_200/0/1619630150259?e=2147483647&v=beta&t=BheIcPOPe-h4tPAYiUurh7137oXzAhsidqfKHOooWlg"
			/>
			<Button>LOGIN</Button>
			<Header left="1124px">Careers</Header>
			<Header left="1035px">About</Header>
			<Header left="960px">Blog</Header>
			<Header left="856px">Solid</Header>
			{/* <BetaText>
                Beta
            </BetaText>
            <CovalentText>
                covalent
            </CovalentText> */}
		</div>
	);
}

export default Info;
