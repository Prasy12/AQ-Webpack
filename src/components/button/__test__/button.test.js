/** * @jest-environment jsdom */

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Button from '../button';
import '@testing-library/jest-dom/extend-expect';

it('renders button correctly', () => {
	render(<Button label="Click me" />);
	const divElement = screen.getByText(/Click me/i);
	expect(divElement).toBeInTheDocument();
});
