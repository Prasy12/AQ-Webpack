/** * @jest-environment jsdom */

import { render, cleanup, screen } from '@testing-library/react';
import React from 'react';
import Login from '..';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

afterEach(cleanup);

describe('Logo', () => {
	test('Logo must have src = "/https://agnostiq.ai/wp-content/uploads/2022/01/Hero-img.png" and alt = "Logo"', () => {
		render(<Login />);
		const logo = screen.getByTestId('Logo');
		expect(logo).toHaveAttribute(
			'src',
			'https://agnostiq.ai/wp-content/uploads/2022/01/Hero-img.png'
		);
		expect(logo).toHaveAttribute('alt', 'Logo');
	});
});

describe('WelcomeText', () => {
	it('shows correct color with colorcode', () => {
		render(<Login />);
		const WelcomeText = screen.getByTestId('WelcomeText');
		expect(WelcomeText).toHaveStyle('color: #fafafa');
	});
	it('shows correct text with colorcode', () => {
		render(<Login />);
		const WelcomeText = screen.getByTestId('WelcomeText');
		expect(WelcomeText).toHaveTextContent(/Welcome/i);
	});
});

describe('GoogleLogin', () => {
	it('shows correct color with colorcode', () => {
		render(<Login />);
		const GoogleLogin = screen.getByTestId('GoogleLogin');
		expect(GoogleLogin).toHaveStyle('background: #040406');
	});
	it('shows correct text with colorcode', () => {
		render(<Login />);
		const GoogleLogin = screen.getByTestId('GoogleLogin');
		expect(GoogleLogin).toHaveTextContent(/Login with Google/i);
	});
});

describe('GitHubLogin', () => {
	it('shows correct margin size', () => {
		render(<Login />);
		const GitHubLogin = screen.getByTestId('GitHubLogin');
		expect(GitHubLogin).toHaveStyle('margin: 16px 0px');
	});
	it('shows correct text ', () => {
		render(<Login />);
		const GitHubLogin = screen.getByTestId('GitHubLogin');
		expect(GitHubLogin).toHaveTextContent(/Login with Github/i);
	});
});

describe('EmailLogin', () => {
	it('shows correct font weight', () => {
		render(<Login />);
		const EmailLogin = screen.getByTestId('EmailLogin');
		expect(EmailLogin).toHaveStyle('font-weight: 200');
	});
	it('shows correct text', () => {
		render(<Login />);
		const EmailLogin = screen.getByTestId('EmailLogin');
		expect(EmailLogin).toHaveTextContent(/Login with email/i);
	});
});

describe('Register', () => {
	it('shows correct color with colorcode', () => {
		render(<Login />);
		const Register = screen.getByTestId('Register');
		expect(Register).toHaveStyle('color: #fafafa');
	});
	it('shows correct text ', () => {
		render(<Login />);
		const Register = screen.getByTestId('Register');
		expect(Register).toHaveTextContent(/Register/i);
	});
});
