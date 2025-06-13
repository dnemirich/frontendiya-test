describe('User Search and Profile Display', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display a search form with an input in the header', () => {
    cy.get('header').should('be.visible');

    cy.get('header').find('form#search-form').should('exist');

    cy.get('form#search-form')
      .find('input#search-input')
      .should('exist')
      .and('have.attr', 'placeholder', 'Enter GitHub username')
      .and('have.attr', 'type', 'text');
  });

  it('should display the initial state correctly', () => {
    cy.get('#user-profile').should('not.exist');
    cy.get('#not-found').should('not.exist');

    cy.get('#idle').should('be.visible');
    cy.contains('Start with searching a GitHub user').should('exist');
  });

  it('should display user profile on search', () => {
    cy.intercept('GET', '**/users/*', {
      statusCode: 200,
      body: {
        login: 'testUser',
        id: 1,
        avatar_url: 'https://example.com/avatar.png',
        bio: 'Test User',
        followers: 10,
        following: 5,
        public_repos: 3,
      },
    }).as('fetchUser');

    cy.get('#search-input').should('have.value', '');
    cy.get('#search-input').type('testUser{enter}');

    cy.wait('@fetchUser');

    cy.get(`#user-profile-1`).should('be.visible');
    cy.contains('Test User').should('exist');
    cy.contains('10 followers').should('exist');
    cy.contains('5 following').should('exist');
    cy.get('#no-repos').should('be.visible');
  });

  it('should display user profile and load repositories on search', () => {
    cy.intercept('GET', '**/users/*', {
      statusCode: 200,
      body: {
        login: 'testUser',
        id: 1,
        avatar_url: 'https://example.com/avatar.png',
        bio: 'Test User',
        followers: 10,
        following: 5,
        public_repos: 2,
      },
    }).as('fetchUser');

    cy.intercept('GET', '**/users/testUser/repos?*', {
      statusCode: 200,
      body: [
        {
          id: 101,
          name: 'test-repo-1',
          html_url: 'https://github.com/testUser/test-repo-1',
          description: 'This is the first test repository',
        },
        {
          id: 102,
          name: 'test-repo-2',
          html_url: 'https://github.com/testUser/test-repo-2',
          description: 'This is the second test repository',
        },
      ],
    }).as('fetchRepos');

    cy.get('#search-input').type('testUser{enter}');

    cy.wait('@fetchUser');
    cy.get(`#user-profile-1`).should('be.visible');
    cy.contains('Test User').should('exist');

    cy.wait('@fetchRepos');

    cy.contains('test-repo-1').should('exist');
    cy.contains('This is the first test repository').should('exist');
    cy.contains('test-repo-2').should('exist');
    cy.contains('This is the second test repository').should('exist');

    cy.contains('Repositories (2)').should('exist');
    cy.get('#no-repos').should('not.exist');
  });

  it('should display "User not found" message for invalid username', () => {
    cy.intercept('GET', '**/users/*', { statusCode: 404 }).as('userNotFound');

    cy.get('#search-input').type('unknownUser{enter}');

    cy.wait('@userNotFound');

    cy.contains('User not found').should('be.visible');
  });
});
