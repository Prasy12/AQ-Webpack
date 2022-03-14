import React from 'react';
import styled from 'styled-components';

const HeaderDescripton = styled.div`
	position: absolute;
	width: 886px;
	height: 140px;
	left: 108px;
	top: 317px;

	font-family: 'Silka';
	font-style: normal;
	font-weight: 600;
	font-size: 50px;
	line-height: 70px;
	/* or 140% */

	color: #101820;
`;
const InfoDescripton = styled.div`
	position: absolute;
	width: 886px;
	height: 70px;
	left: 108px;
	top: 497px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 35px;
	/* or 175% */
	color: #333333;
`;

const LinkContainer = styled.div`
	position: absolute;
	width: 176px;
	height: 68px;
	left: 108px;
	top: 607px;
`;

const LinkDescription = styled.div`
	height: 19px;
	left: 10.21%;
	right: ${props => props.right};
	top: calc(50% - 19px / 2 - ${props => props.top});
	font-family: 'Silka';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	letter-spacing: 1px;
	color: #2386fa;
`;

const Button = styled.button`
	position: absolute;
	width: 227px;
	height: 50px;
	left: 108px;
	top: 715px;

	background: #101820;
	border-radius: 4px;
	color: #ffffff;
`;
const ReadMeText = styled.div`
	position: absolute;
	width: 130px;
	height: 35px;
	left: 377px;
	top: 723px;

	font-family: 'Silka';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 35px;
	/* identical to box height, or 194% */

	color: #101820;
`;

function Descripton() {
	return (
		<div>
			<HeaderDescripton>
				A Workflow Orchestration Platform Designed for Quantum & HPC
			</HeaderDescripton>
			<InfoDescripton>
				Covalent is a Python-based workflow management tool used for creating, scheduling and
				executing modular code on advanced computing resources over the cloud
			</InfoDescripton>
			<LinkContainer>
				<LinkDescription
					right="82.22%"
					top="1709px"
					href="https://github.com/styled-components/styled-components"
					target="_blank"
					rel="noopener"
					primary
				>
					<a
						href="https://github.com/styled-components/styled-components"
						target="_blank"
						rel="noreferrer"
						primary
					>
						Watch Video
					</a>
				</LinkDescription>
				<LinkDescription right="80.28%" top="1666px">
					<a
						href="https://www.thehindu.com/?utm_source=google&utm_medium=cpc&utm_campaign=September&tpcc=THDGL&gclid=Cj0KCQjwz7uRBhDRARIsAFqjulnXE1yvrTfT1nw91yZaTFkNi-NnHtjqp9dDxDBRcSeu0xGJvXc_BPEaAlTgEALw_wcB"
						target="_blank"
						rel="noreferrer"
						primary
					>
						Read the paper
					</a>
				</LinkDescription>
			</LinkContainer>
			<Button>$ PIP INSTALL COVA</Button>
			<ReadMeText>Read the docs</ReadMeText>
		</div>
	);
}

export default Descripton;
