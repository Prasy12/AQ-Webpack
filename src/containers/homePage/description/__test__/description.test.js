/** * @jest-environment jsdom */

import { render, cleanup, screen } from '@testing-library/react';
import React from 'react';
import Descripton from '..';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

afterEach(cleanup);

describe('HeaderDescription', () => {
	it('shows correct color with colorcode', () => {
		render(<Descripton />);
		const HeaderDescription = screen.getByTestId('HeaderDesc');
		expect(HeaderDescription).toHaveStyle('color: #101820');
	});
	it('shows correct text with colorcode', () => {
		render(<Descripton />);
		const HeaderDescription = screen.getByTestId('HeaderDesc');
		expect(HeaderDescription).toHaveTextContent(/A Workflow Orchestration/i);
	});
});

describe('InfoDescripton', () => {
	it('shows correct color with colorcode', () => {
		render(<Descripton />);
		const InfoDescripton = screen.getByTestId('InfoDesc');
		expect(InfoDescripton).toHaveStyle('color: #333333');
	});
	it('shows correct text with colorcode', () => {
		render(<Descripton />);
		const InfoDescripton = screen.getByTestId('InfoDesc');
		expect(InfoDescripton).toHaveTextContent(/Covalent is a/i);
	});
});
