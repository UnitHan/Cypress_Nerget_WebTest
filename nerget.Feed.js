describe('Feed Menu Test', () => {
  beforeEach(() => {
    // 각 테스트 케이스 전에 페이지를 방문합니다
    cy.visit('https://nerget.co.kr');
  });

  it('TestCase #1 - Hamberger Button Open', () => {	
    // 햄버거 버튼을 찾습니다
    cy.get('.css-1twcu11').should('exist');

    // 클릭 이벤트 전에 2초의 지연 시간을 추가합니다
    cy.wait(2000);

    // 햄버거 버튼을 클릭합니다
    cy.get('.css-1twcu11').click();

    // 클릭 이벤트 후에 2초의 지연 시간을 추가합니다
    cy.wait(2000);

    // 클릭 이벤트가 발생했는지 확인합니다
    cy.get('button.css-1twcu11.em29epn0').should('have.class', 'css-1twcu11').and('have.class', 'em29epn0');

    // 테스트 결과를 확인합니다
    cy.get('body').then(($body) => {
      if ($body.find('.css-1twcu11.em29epn0').hasClass('css-1twcu11') && $body.find('.css-1twcu11.em29epn0').hasClass('em29epn0')) {
        // 햄버거 버튼이 정상적으로 동작하여 클래스가 포함되었으므로 테스트 통과
        cy.log('테스트 결과: Pass');
      } else {
        // 햄버거 버튼이 동작하지 않아서 클래스가 포함되지 않았으므로 테스트 실패
        cy.log('테스트 결과: Fail');
      }
    });
  });

  it('TestCase #2 - Feed Page Step', () => {
    // 각 테스트 케이스 전에 페이지를 방문합니다
    cy.visit('https://nerget.co.kr');
	
	// 햄버거 버튼을 클릭하여 메뉴를 펼칩니다
    cy.get('button.css-1twcu11.em29epn0').click();

    // 클릭 이벤트 후에 2초의 지연 시간을 추가합니다
    cy.wait(2000);

    // '피드' 버튼을 찾아 클릭합니다
    cy.get('#__next > main > div.css-154oegn.ealk4jc0 > div.css-1ylc42b.e1dl5d3m0 > div > nav > ul > li:nth-child(5) > a')
      .should('exist')
      .click();

    // 클릭 이벤트 후에 2초의 지연 시간을 추가합니다
    cy.wait(2000);

    // 피드 페이지로 이동했는지 확인합니다
    cy.url().should('include', '/feed');

    // 테스트 결과를 확인합니다
    cy.get('body').then(($body) => {
      if ($body.find('#feed-page').length) {
        // 피드 페이지가 표시되었으므로 테스트 통과
        cy.log('테스트 결과: Pass');
      } else {
        // 피드 페이지가 표시되지 않았으므로 테스트 실패
        cy.log('테스트 결과: Fail');
      }
    });
  });
  
  it('TestCase #3 - Feed Banner #1', () => {
    // 각 테스트 케이스 전에 페이지를 방문합니다
    cy.visit('https://nerget.co.kr');	

	// 햄버거 버튼을 클릭하여 메뉴를 펼칩니다
    cy.get('button.css-1twcu11.em29epn0').click();

    // 클릭 이벤트 후에 2초의 지연 시간을 추가합니다
    cy.wait(2000);

    // '피드' 버튼을 찾아 클릭합니다
    cy.get('#__next > main > div.css-154oegn.ealk4jc0 > div.css-1ylc42b.e1dl5d3m0 > div > nav > ul > li:nth-child(5) > a')
      .should('exist')
      .click();

    // 클릭 이벤트 후에 2초의 지연 시간을 추가합니다
    cy.wait(2000);	
   // 아래 배너를 클릭합니다
 // 배너 영역을 찾고 검증합니다
	cy.wait(1500); // 1.5초 대기
	cy.get('#__next > main > div.css-1pv6kct.e1ehywaw0 > div > div:nth-child(1) > div').should('exist');

	cy.wait(1500); // 1.5초 대기
  // 아래 배너를 클릭합니다
  cy.get('#__next > main > div.css-1pv6kct.e1ehywaw0 > div > div:nth-child(1) > div').click();
	cy.wait(1500); // 1.5초 대기

  // 페이지 하단까지 스크롤합니다
  cy.scrollTo('bottom');

  // 버튼 요소가 나타날 때까지 스크롤합니다
  cy.get('#__next > main > div.css-1pv6kct.e1ehywaw0 > div > div > div > div.css-o7dq7h.exqotfg0 > div:nth-child(10) > div > span').scrollIntoView({ 
    duration: 2000, // 스크롤 속도 설정 (2초)
    offset: { top: 0, left: 0 } // 스크롤 위치 오프셋
  });

  // 맨 위로 다시 스크롤합니다
  cy.scrollTo('top');
  
    // 아래 버튼 요소를 찾고 있으면 클릭하여 이전 페이지로 이동합니다
  cy.get('#__next > main > div.css-1pv6kct.e1ehywaw0 > nav > nav > button.css-1a424xt.esge1ab0 > svg').should('exist').click();


  // 테스트 결과를 확인합니다
  cy.get('body').then(($body) => {
    if ($body.find('.bottom-banner-clicked').length && $body.find('.bottom-scrolled').length && $body.find('button-at-bottom').length) {
      // 아래 배너를 클릭하고 하단까지 스크롤했으며 버튼 요소까지 내려왔으므로 테스트 통과
      cy.log('테스트 결과: Pass');
    } else {
      // 하단으로 스크롤하지 않았거나 아래 배너를 클릭하지 않았거나 버튼 요소까지 내려오지 않았으므로 테스트 실패
      cy.log('테스트 결과: Fail');
    }
	
	
  });
});
  
  
});
