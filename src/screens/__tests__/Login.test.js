import { render } from '@testing-library/react-native'
import React from 'react'
import App from '../../../App'
import Login from '../Login'

describe("Login Screen", () => {
    it("should show login",() =>{
        
        const page = render(<App />) 
        page.getByTestId("login")

    })
})