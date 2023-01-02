import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'

import App from '../App'

describe('Commics test', () => {
  test('Should show comics', async () => {
    render(<App />)

    await waitForElementToBeRemoved(() => screen.getByRole('figure'))

    expect(screen.getByLabelText(/Introduce el nombre/i)).toBeDefined()

    expect(screen.getAllByRole('img')).length(2)
  })
})
