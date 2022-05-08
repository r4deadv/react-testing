import { render, screen } from '@testing-library/react'
import InputDisplayHeader from '../InputDisplayHeader'


it('should render Hello and the first name of the user', () => {
    render(<InputDisplayHeader firstNameVal='Stephanie' />)
    const headerElement = screen.getByRole('heading')
    expect(headerElement).toHaveTextContent(/hello, stephanie/i)
})
