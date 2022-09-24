describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.amiiboapi.com/api/amiibo/', {fixture: 'amiiboData'})
    cy.visit("http://localhost:3000/").wait(2000)
  })
  it('should have a header', () => {
    cy.get('h1').contains("AmiiWho?")
  })
  it('should have three havigation buttons', () => {
    cy.get('.nav').should('have.length', 3)
    .get('.nav').first().contains('Home')
    .get('.nav').last().contains('About Us')
  })
  it('should have a form', () => {
    cy.get('input[name="amiiboName"]')
    .get('select[name="amiiboSeries"]')
  })
  it('should have some amiibos on display', () => {
    cy.get('.amiibo-image').should('have.length', 3)
    .get('.amiibo-name').first().contains("King Dedede")
    .get('.amiibo-name').last().contains("Magnamalo")
    .get('.star').should('have.length', 3)
    .url().should('eq', 'http://localhost:3000/')
    
  })
  it('should be able to click on an amiibo to see it`s details', () => {
    cy.intercept('GET', `https://www.amiiboapi.com/api/amiibo/?character=King Dedede&showusage`, {
      fixture: 'dedede'
    })
    cy.get('.amiibo-image').first().click()
    .get('img').last().should('have.attr', 'src').should('include',"https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_1f020000-02560c02.png")
    .get('h2').first().contains("King Dedede")
    .get('p').first().contains("Kirby")
    .get('.release-date-list').contains("au: 2016-06-11")
    .get('.release-date-list').contains("na: 2016-06-10")
    .get('.ds-header').contains('3DS unlockables')
    .get('.ds-list').contains('Unlock a costume resembling this character in BYE-BYE BOXBOY!')
    .get('.switch-header').contains('Switch unlockables')
    .get('.switch-list').contains('Receive star coins and a boost item in Kirby and the Forgotten Land')
    .get('.wii-header').contains('WiiU unlockables')
    .get('.wii-list').contains('Give Kirby a character-based power-up, once a day per character in Kirby and the Rainbow Curse')
    .url().should('eq', 'http://localhost:3000/amiiWho/amiiboDetails/02560c02')
  })
  it('should be able to click on another amiibo to see it`s details', () => {
    cy.intercept('GET', `https://www.amiiboapi.com/api/amiibo/?character=Magnamalo&showusage`, {
      fixture: 'magna'
    })
    cy.get('.amiibo-image').last().click()
    .get('img').last().should('have.attr', 'src').should('include',"https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_35080000-040f1802.png")
    .get('h2').first().contains("Magnamalo")
    .get('p').first().contains("Monster Hunter Rise")
    .get('.release-date-list').contains("au: 2021-03-26")
    .get('.release-date-list').contains("na: 2021-03-26")
    .get('.ds-header').contains('3DS unlockables')
    .get('.switch-header').contains('Switch unlockables')
    .get('.switch-list').contains('Unlock special layered armor / Enter daily lottery for a variety of useful items in Monster Hunter Rise')
    .get('.wii-header').contains('WiiU unlockables')
    .url().should('eq', 'http://localhost:3000/amiiWho/amiiboDetails/040f1802')
  })
  it('should be able to go back to the home back when looking at amiibo details', () => {
    cy.get('.amiibo-image').last().click()
    .get('.link').click()
    .url().should('eq', 'http://localhost:3000/')
  })
  it('should be able to favorite a amiibo', () => {
    cy.get('.star').first().should('have.attr', 'src').should('include', '/static/media/blackStar.48df4f26962ca69c969f.png')
    .get('.star').first().click()
    .get('.star').first().should('have.attr', 'alt').should('include', "favorite icon")
  })
  it('should be able to unfavorite an amiibo', () => {
    cy.get('.star').first().should('have.attr', 'src').should('include', '/static/media/blackStar.48df4f26962ca69c969f.png')
    .get('.star').first().click()
    .get('.star').first().should('have.attr', 'alt').should('include', "favorite icon")
    .get('.star').first().click()
    .get('.star').first().should('have.attr', 'src').should('include', '/static/media/blackStar.48df4f26962ca69c969f.png')
  })
  it('should be able to see favorited amiibo in their collection', () => {
    cy.get('.star').last().click()
    cy.get('#myCollection').click()
    .get('img').should('have.attr', 'src').should('include',"https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_35080000-040f1802.png")
    .url().should('eq', 'http://localhost:3000/amiiWho/myCollection')
  })
  it('should be able to delete an amiibo from their collection', () => {
    cy.get('.star').last().click()
    cy.get('#myCollection').click()
    .get('.trash-icon').click()
    .get('img').should('have.length', 0)
  })
  it('should be able to see an about us page', () => {
    cy.get('#aboutUs').click()
    .get('h2').contains('Our Purpose')
    .get('p').contains("Did you ever want to figure out what cool features your amiibos unlock in other games? Well look no further cause AmiiWho is your one stop place for all your questions! Find your the amiibo you're looking for and see what specific console/games your amiibo unlocks cool features in. Don't want to look for them again in the future? Just add them to your collection by favoriting them and you can see all your saved amiibos all in one place.")
    .get('.blathers').should('have.attr', 'src').should('include',"/static/media/blathers.eece80d1bbde3181d61c.png")
    .get('.egad').should('have.attr', 'src').should('include',"/static/media/Egad.02f36b1647c3ae9ca2f8.png")
  })
  it('should see an error page when the url is wrong', () => {
    cy.visit('http://localhost:3000/boo')
    .get('h2').contains("Oh no...looks like you need help. Click me and i'll take you back home hehehehe ")
    .get('img').should('have.attr', 'src').should('include',"/static/media/merchant.27874e453d8a8f60e417.png")
  })
  it('should be able to go back to homepage after getting error', () => {
    cy.visit('http://localhost:3000/boo')
    .get('img').click()
    .get('h1').contains("AmiiWho?")
  })
  it('should be able to search amiibo by name', () => {
    cy.get('input[name="amiiboName"]').type('King Dedede').should('have.value', 'King Dedede')
    .get('img').should('have.attr', 'src').should('include',"https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_1f020000-02560c02.png")
  })
  it('should be able to search by amiibo category', () => {
    cy.get('select[name="amiiboSeries"]').select('Kirby').should('have.value', 'Kirby')
    .get('img').should('have.attr', 'src').should('include',"https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_1f020000-02560c02.png")
  })
  it('should be able to see an error if no amiibo matches the search criterias ', () => {
    cy.get('input[name="amiiboName"]').type('King Dedede').should('have.value', 'King Dedede')
    cy.get('select[name="amiiboSeries"]').select('Monster Hunter Rise').should('have.value', 'Monster Hunter Rise')
    .get('h2').contains("Sorry there are no characters with that name and or series, please try again🥲")
  })
})
