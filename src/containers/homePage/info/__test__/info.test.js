/** * @jest-environment jsdom */

import { render, cleanup, screen } from '@testing-library/react';
import React from 'react';
import Info from '..';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

afterEach(cleanup);

describe('Logo', () => {
	test('Logo must have src = "/https://media-exp1.licdn.com/dms/image/C4E0BAQFazUUEA1n9rw/company-logo_200_200/0/1619630150259?e=2147483647&v=beta&t=BheIcPOPe-h4tPAYiUurh7137oXzAhsidqfKHOooWlg" and alt = "Logo"', () => {
		render(<Info />);
		const logo = screen.getByTestId('Logo');
		expect(logo).toHaveAttribute(
			'src',
			'https://media-exp1.licdn.com/dms/image/C4E0BAQFazUUEA1n9rw/company-logo_200_200/0/1619630150259?e=2147483647&v=beta&t=BheIcPOPe-h4tPAYiUurh7137oXzAhsidqfKHOooWlg'
		);
		expect(logo).toHaveAttribute('alt', 'Logo');
	});
});
