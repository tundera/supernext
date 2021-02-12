declare namespace Cypress {
  interface Chainable {
    google(): Chainable<Window>
    navigate(pageName: string): void
  }
}
