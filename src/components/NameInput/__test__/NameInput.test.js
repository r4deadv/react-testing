import { render, screen } from "@testing-library/react"
import NameInput from '../NameInput'

describe('NameInput', () => {
    it('will be visible on screen', () => {
        render(<NameInput />)
    })
    
})