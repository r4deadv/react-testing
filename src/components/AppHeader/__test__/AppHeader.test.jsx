import { render } from "@testing-library/react"
import AppHeader from "../AppHeader"


describe('AppHeader', () => {
    it('will match snapshot', () => {
        const appHeader = render(<AppHeader />)
        //run test to create snapshot, 
        //then runs every time you test app and if component changes from snapshot, will get failed test
        expect(appHeader).toMatchSnapshot()
    })
    
})