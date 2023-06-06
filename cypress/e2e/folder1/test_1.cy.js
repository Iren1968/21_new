const users_new = require('../../fixtures/new_users.json');

describe('Testing login', () => {
  it('RegisterUser', () => {
    cy.visit('/');
    //if (cy.contains('Irina')) {
    // cy.get(
    //  '.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account"] > .header-item > .header-item__text > .txt--med'
    // ).click();
    //  cy.get('.base--clickable > .txt--med').click();
    //  }
    cy.get(
      '.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > a > .base--clickable > .header-item__text > .txt--med'
    ).click();
    cy.get('input[name=email]').type(users_new.userAutor.email);
    cy.get('input[name=password]').type(users_new.userAutor.password);
    cy.get('.form-auth__button').click();
    cy.contains('тайный санта.', { timeout: 10000 });
    cy.clearCookies();
  });

  it('RegisterUser', () => {
    cy.visit('/');
    if (cy.contains('Irina')) {
      cy.get(
        '.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account"] > .header-item > .header-item__text > .txt--med'
      ).click();
      cy.get('.base--clickable > .txt--med').click();
    }
    cy.get(
      '.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > a > .base--clickable > .header-item__text > .txt--med'
    ).click();
    cy.get('input[name=email]').type(users_new.userAutor.email);
    cy.get('input[name=password]').type(users_new.userAutor.password);
    cy.get('.form-auth__button').click();
    cy.contains('Irina').should('exist');
    cy.clearCookies();
  });

  it('User not register', () => {
    cy.visit('/');
    cy.get(
      '.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > a > .base--clickable > .header-item__text > .txt--med'
    ).click();
    cy.get('input[name=email]').type(users_new.user4.email);
    cy.get('input[name=password]').type(users_new.user4.password);
    cy.get('.form-auth__button').click();
    cy.contains(
      'Мы не нашли пользователя с таким email. Зарегистрироваться?'
    ).should('exist');
  });

  it('Not valid email', () => {
    cy.visit('/');
    cy.get(
      '.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > a > .base--clickable > .header-item__text > .txt--med'
    ).click();
    cy.get('input[name=email]').type(users_new.user5.email);
    cy.get('input[name=password]').type(users_new.user5.password);
    cy.get('.form-auth__button').click();
    cy.contains('Некорректный email').should('exist');
  });

  it('Not valid password', () => {
    cy.visit('/');
    cy.get(
      '.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > a > .base--clickable > .header-item__text > .txt--med'
    ).click();
    cy.get('input[name=email]').type(users_new.user6.email);
    cy.get('input[name=password]').type(users_new.user6.password);
    cy.get('.form-auth__button').click();
    cy.contains('Неверное имя пользователя или пароль').should('exist');
  });
});
