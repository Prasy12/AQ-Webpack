import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
	position: absolute;
	width: 35.21px;
	height: 48px;
	left: 702px;
	top: 102px;
`;

const Container = styled.div`
	position: relative;
	width: 1440px;
	height: 800px;
	background: linear-gradient(0deg, #040406, #040406),
		linear-gradient(346.04deg, #e35050 -22.82%, #3d2383 -22.81%, #000000 34.17%), #040406;
`;

const WelcomeTextContainer = styled.div`
	position: absolute;
	width: 133px;
	height: 44px;
	left: 654px;
	top: 180px;
`;

const WelcomeText = styled.span`
	position: static;
	width: 133px;
	height: 44px;
	left: 0px;
	top: 0px;
	font-family: 'Nunito';
	font-style: normal;
	font-weight: 200;
	font-size: 32px;
	line-height: 44px;
	/* identical to box height */
	/* Basics/01 White Dust */
	color: #fafafa;
`;

const SocialMediaContainer = styled.div`
	position: absolute;
	width: 220px;
	height: 112px;
	left: 610px;
	top: 252px;
`;

const GoogleContainer = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 8px 16px;
	font-weight: 300;

	position: static;
	width: 220px;
	height: 48px;
	left: 0px;
	top: 0px;
	/* Basics/04 Space (Black) */

	background: #040406;
	/* Colours/01 Purple */

	border: 1px solid #6e33ed;
	/* Inside auto layout */

	flex: none;
	order: 1;
	align-self: stretch;
	flex-grow: 0;
	margin: 16px 0px;
	color: white;
	font-family: 'Nunito';
`;

const GitHubContainer = styled(GoogleContainer)`
	top: 64px;
`;

const EmailContainer = styled.div`
	position: absolute;
	width: 120px;
	height: 22px;
	left: 663px;
	top: 400px;
	font-family: 'Nunito';
	font-style: normal;
	font-weight: 200;
	font-size: 16px;
	line-height: 22px;
	/* identical to box height */

	text-decoration-line: underline;

	/* Basics/01 White Dust */

	color: #fafafa;
`;

const RegisterContainer = styled(EmailContainer)`
	width: 58px;
	height: 22px;
	left: 691px;
	top: 529px;
`;

function Login() {
	return (
		<Container>
			<Logo
				data-testid="Logo"
				alt="Logo"
				src="https://agnostiq.ai/wp-content/uploads/2022/01/Hero-img.png"
			/>
			<WelcomeTextContainer>
				<WelcomeText data-testid="WelcomeText">Welcome</WelcomeText>
			</WelcomeTextContainer>
			<SocialMediaContainer>
				<GoogleContainer data-testid="GoogleLogin">Login with Google</GoogleContainer>
				<GitHubContainer data-testid="GitHubLogin">Login with Github</GitHubContainer>
			</SocialMediaContainer>
			<EmailContainer data-testid="EmailLogin">Login with email</EmailContainer>
			<RegisterContainer data-testid="Register">Register</RegisterContainer>
		</Container>
	);
}

export default Login;
