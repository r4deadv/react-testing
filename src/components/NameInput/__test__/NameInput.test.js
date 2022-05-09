import { render, screen, fireEvent } from '@testing-library/react'
import NameInput from '../NameInput'

//define test block
//render component on screen
//find elements
//interact with elements
//assert elements work as expected

// ====== FIRST TEST - 1 ===== //

//GET BY
it('Renders label on screen', () => {
  render(<NameInput />)
  const labelElement = screen.getByText(/first name:/i)
  expect(labelElement).toBeVisible() //vs. toBeInTheDocument() => may not be visible, but is still in the document
})



// //FIND BY
// it('Renders label on screen', async () => {
//   render(<NameInput />)
//   const labelElement = await screen.findByText(/first name:/i)
//   expect(labelElement).toBeVisible()
// })

// //QUERY BY
// it('Renders label on screen', () => {
//   render(<NameInput />)
//   const labelElement = screen.queryByText(/first name:/i)
//   expect(labelElement).toBeVisible()
// })

// ====== SECOND TEST - 2 ===== //
// add setup func to reduce repeat code
const setup = () => {
  const renderedComponent = render(<NameInput />)
  const inputElement = renderedComponent.getByPlaceholderText(/type first name here/i)
  return {
    inputElement,
    ...renderedComponent
  }

}
//Test if value changes when user types into input
it('should be able to type into input and update its value', () => {
  const { inputElement } = setup()
  fireEvent.change(inputElement, {target: {value: 'Stephanie'}})
  expect(inputElement.value).toBe('Stephanie')
})

//Integration test - two components that interact with each other

it('renders user name in header', () => {
  const { inputElement } = setup()
  const headerElement = screen.getByRole('heading')
  fireEvent.change(inputElement, { target: { value: 'Stephanie' } })
  expect(headerElement).toHaveTextContent(/hello, stephanie/i)
})








