Cypress.on('window:before:load', (win: Window) => {
  const anyWin = win as any
  cy.stub(anyWin.console, 'log').callsFake(() => {})
  cy.stub(anyWin.console, 'info').callsFake(() => {})
  cy.stub(anyWin.console, 'warn').callsFake(() => {})
  cy.stub(anyWin.console, 'error').callsFake(() => {})
})

Cypress.Commands.overwrite<'visit'>('visit', (
    originalFn: Cypress.CommandOriginalFn<'visit'>,
    urlOrOptions: string | (Partial<Cypress.VisitOptions> & { url: string }),
    options?: Partial<Cypress.VisitOptions>
  ) => {
    if (typeof urlOrOptions === 'string') {
      return originalFn({
        url: urlOrOptions,
        ...options,
        onBeforeLoad(win: Window) {
          cy.stub(win, 'fetch').callsFake((...args: [RequestInfo | URL, RequestInit?]) => {
            const req = args[0];
            if (
              typeof req === 'string' &&
              (req.includes('/action/') ||
                req.includes('6sense') ||
                req.includes('js_tracking'))
            ) {
              return new Promise(() => {});
            }
            return fetch(...args);
          });
        },
      });
    }

    return originalFn({
      ...urlOrOptions,
      onBeforeLoad(win: Window) {
        cy.stub(win, 'fetch').callsFake((...args: [RequestInfo | URL, RequestInit?]) => {
          const req = args[0];
          if (
            typeof req === 'string' &&
            (req.includes('/action/') ||
              req.includes('6sense') ||
              req.includes('js_tracking'))
          ) {
            return new Promise(() => {});
          }
          return fetch(...args);
        });
      },
    });
  }
);