	describe('template spec', () => {
	  it('passes', () => {
		cy.visit('https://nerget.co.kr')
		/* ==== Generated with Cypress Studio ==== */
		cy.wait(1500); // 1초 대기
		cy.get('#__next > main > div.css-154oegn.ealk4jc0 > div.css-1ylc42b.e1dl5d3m0 > header > button.css-1twcu11.em29epn0').should('be.visible'); // 햄버거 버튼 확인
		cy.wait(1500); // 1.5초 대기	
		cy.get('#__next > main > div.css-154oegn.ealk4jc0 > div.css-1ylc42b.e1dl5d3m0 > header > button.css-1twcu11.em29epn0').click(); // 햄버거 버튼 클릭
		cy.wait(1500); // 1.5초 대기
		cy.get('#__next > main > div.css-154oegn.ealk4jc0 > div.css-1ylc42b.e1dl5d3m0 > div > nav > ul > li:nth-child(2)').should('be.visible'); //자주하는 질문 버튼 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('#__next > main > div.css-154oegn.ealk4jc0 > div.css-1ylc42b.e1dl5d3m0 > div > nav > ul > li:nth-child(2)').click(); //자주하는 질문 버튼 클릭
		cy.wait(1500); // 1.5초 대기
		
		cy.scrollTo(0, 500) // Scroll the window 500px down

		
		cy.get('.notion-block-f59df3868c174e9c84915b0be15fae04 > :nth-child(1) > .notion-h-title').should('be.visible') // 요소가 화면에 보이는지 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-f59df3868c174e9c84915b0be15fae04 > :nth-child(1) > .notion-h-title').click(); // 최근 많은 분들이 물어보셨어요 링크 클릭
		cy.wait(1500); // 1.5초 대기
		
		cy.get('.notion-block-51a4ea06f6804ff9beac697336d61b17 > summary').should('be.visible'); // 파티페이가 무엇인가요? 버튼 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-51a4ea06f6804ff9beac697336d61b17 > summary').click(); //파티페이가 무엇인가요? 버튼 클릭해서 열기(펼치기)
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-51a4ea06f6804ff9beac697336d61b17 > summary').click(); //파티페이가 무엇인가요? 버튼 클릭해서 닫기
		cy.wait(1500); // 1.5초 대기
		
		cy.get('.notion-block-99fe16a6d9f049999fd7d2ff049ecf0e > summary'); // LG유플러스에 약정이 남아있어요. 너겟으로 이동할 수 있나요? 버튼 확인
		cy.get('.notion-block-99fe16a6d9f049999fd7d2ff049ecf0e > summary').click(); //LG유플러스에 약정이 남아있어요. 너겟으로 이동할 수 있나요? 버튼 클릭해서 열기(펼치기)
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-99fe16a6d9f049999fd7d2ff049ecf0e > summary').click(); //LG유플러스에 약정이 남아있어요. 너겟으로 이동할 수 있나요?  버튼 클릭해서 닫기
		cy.wait(1500); // 1.5초 대기
		
		cy.get('.notion-block-2c366797630c4b0c80a241a23b865109 > summary').should('be.visible'); // LG유플러스에 가입하면서 사용 중인 휴대폰 그대로 너겟으로 이동하고 싶은데, 이동이 어렵다는 메시지가 떠요 버튼 확인
		cy.get('.notion-block-2c366797630c4b0c80a241a23b865109 > summary').click(); //LG유플러스에 가입하면서 사용 중인 휴대폰 그대로 너겟으로 이동하고 싶은데, 이동이 어렵다는 메시지가 떠요 버튼 클릭해서 열기(펼치기)
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-2c366797630c4b0c80a241a23b865109 > summary').click(); //LG유플러스에 가입하면서 사용 중인 휴대폰 그대로 너겟으로 이동하고 싶은데, 이동이 어렵다는 메시지가 떠요   버튼 클릭해서 닫기
		cy.wait(1500); // 1.5초 대기
		
		
		cy.get('.notion-block-723c3131a4b14432aba4be0f04dc682c > summary').should('be.visible'); //LG유플러스 내 결합상품을 너겟에서도 유지할 수 있나요? 버튼 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-723c3131a4b14432aba4be0f04dc682c > summary').click(); //LG유플러스 내 결합상품을 너겟에서도 유지할 수 있나요? 버튼 클릭해서 열기(펼치기)
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-723c3131a4b14432aba4be0f04dc682c > summary').click(); //LG유플러스 내 결합상품을 너겟에서도 유지할 수 있나요? 버튼 클릭해서 닫기
		cy.wait(1500); // 1.5초 대기
			
		
		cy.get('.notion-block-5e99e78f2dae4abfb45536414e72abac > :nth-child(1) > .notion-h-title').should('be.visible') // 가입/개통 요소가 화면에 보이는지 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-5e99e78f2dae4abfb45536414e72abac > :nth-child(1) > .notion-hash-link').click(); // 가입/개통 링크 클릭
		cy.wait(1500); // 1.5초 대기
		
		cy.get('.notion-block-1d2a9b369eb74880863ab4ab6040a805 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-1d2a9b369eb74880863ab4ab6040a805 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-1d2a9b369eb74880863ab4ab6040a805 > summary').click();
		cy.wait(1500); // 1.5초 대기
		
		cy.get('.notion-block-997457183a9042d8afeaf97a53a03803 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-997457183a9042d8afeaf97a53a03803 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-997457183a9042d8afeaf97a53a03803 > summary').click();
		cy.wait(1500); // 1.5초 대기
		
		cy.get('.notion-block-a51319d47aa6465eb5c741d40ca1f122 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-a51319d47aa6465eb5c741d40ca1f122 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-a51319d47aa6465eb5c741d40ca1f122 > summary').click();
		cy.wait(1500); // 1.5초 대기
		
		cy.get('.notion-block-dc241dd4eba141cc82eaee80c8a26f88 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-dc241dd4eba141cc82eaee80c8a26f88 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-dc241dd4eba141cc82eaee80c8a26f88 > summary').click();
		cy.wait(1500); // 1.5초 대기
		
		cy.get('.notion-block-4fd1761c25764ca4b3e97c53cb43411e > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-4fd1761c25764ca4b3e97c53cb43411e > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-4fd1761c25764ca4b3e97c53cb43411e > summary').click();
		cy.wait(1500); // 1.5초 대기
		
		cy.get('.notion-block-4e240799f1e34358aab738a8167708cb > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-4e240799f1e34358aab738a8167708cb > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-4e240799f1e34358aab738a8167708cb > summary').click();
		cy.wait(1500); // 1.5초 대기
		
		cy.get('.notion-block-994bc89580724a8b844d945bc36f02a9 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-994bc89580724a8b844d945bc36f02a9 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-994bc89580724a8b844d945bc36f02a9 > summary').click();
		cy.wait(1500); // 1.5초 대기
		
		cy.get('.notion-block-7471c7f92b4d480197e4a537e363997b > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-7471c7f92b4d480197e4a537e363997b > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-7471c7f92b4d480197e4a537e363997b > summary').click();
		cy.wait(1500); // 1.5초 대기
		
		cy.get('.notion-block-3ea91359b16c433697f1742a3c98f20f > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-3ea91359b16c433697f1742a3c98f20f > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-3ea91359b16c433697f1742a3c98f20f > summary').click();
		cy.wait(1500); // 1.5초 대기
		
		cy.get('.notion-block-769a66de81074e1bb4ae6cdd64b01732 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-769a66de81074e1bb4ae6cdd64b01732 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-769a66de81074e1bb4ae6cdd64b01732 > summary').click();
		cy.wait(1500); // 1.5초 대기
		
		cy.get('.notion-block-ec08da7b1019459894806d795fe9ba5a > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-ec08da7b1019459894806d795fe9ba5a > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-ec08da7b1019459894806d795fe9ba5a > summary').click();
		cy.wait(1500); // 1.5초 대기
		
		cy.get('.notion-block-515ad08b5d7a4312aca5894709d97950 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-515ad08b5d7a4312aca5894709d97950 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-515ad08b5d7a4312aca5894709d97950 > summary').click();
		cy.wait(1500); // 1.5초 대기


		
		
		
		
		


		cy.get('.notion-block-a01e5e9fd9824df7aa200a05c8e1533d > :nth-child(1) > .notion-h-title').should('be.visible') // eSIM 개통 요소가 화면에 보이는지 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-a01e5e9fd9824df7aa200a05c8e1533d > :nth-child(1) > .notion-hash-link').click(); // eSIM 개통 링크 클릭
		cy.wait(1500); // 1.5초 대기
		
		cy.get('.notion-block-a400cde9877a47dc959166bf53e98d4d > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-a400cde9877a47dc959166bf53e98d4d > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-a400cde9877a47dc959166bf53e98d4d > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-310db8dca2254959a56f3ea17feacc34 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-310db8dca2254959a56f3ea17feacc34 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-310db8dca2254959a56f3ea17feacc34 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-9d85e75fc49e413d8a06d839f588b837 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-9d85e75fc49e413d8a06d839f588b837 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-9d85e75fc49e413d8a06d839f588b837 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-42ac822e44cf430cac5bb6946a56abc6 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-42ac822e44cf430cac5bb6946a56abc6 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-42ac822e44cf430cac5bb6946a56abc6 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-af1a7b4d2df94f88a8dd1e1443131f70 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-af1a7b4d2df94f88a8dd1e1443131f70 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-af1a7b4d2df94f88a8dd1e1443131f70 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-abb25ee53a4748d5ac0f50b0f3ad5933 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-abb25ee53a4748d5ac0f50b0f3ad5933 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-abb25ee53a4748d5ac0f50b0f3ad5933 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-92480e0509b74095a76524949d80e889 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-92480e0509b74095a76524949d80e889 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-92480e0509b74095a76524949d80e889 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-bfec9b5e104b46a596bfc8d94225f303 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-bfec9b5e104b46a596bfc8d94225f303 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-bfec9b5e104b46a596bfc8d94225f303 > summary').click();
		cy.wait(1500); // 1.5초 대기






		cy.get('.notion-block-4d0c737fcdcf4399a39b7f7087217ffe > :nth-child(1) > .notion-h-title').should('be.visible') // USIM 당일배송 요소가 화면에 보이는지 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-4d0c737fcdcf4399a39b7f7087217ffe > :nth-child(1) > .notion-hash-link').click(); // USIM 당일배송 링크 클릭

		cy.get('.notion-block-f7f7d29044be4c428306c49bb7e817e0 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-f7f7d29044be4c428306c49bb7e817e0 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-f7f7d29044be4c428306c49bb7e817e0 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-fb6d4fab568540568058b60c2265c5cc > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-fb6d4fab568540568058b60c2265c5cc > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-fb6d4fab568540568058b60c2265c5cc > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-6ec1efae1e874716a55e150b556729ee > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-6ec1efae1e874716a55e150b556729ee > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-6ec1efae1e874716a55e150b556729ee > summary').click();
		cy.wait(1500); // 1.5초 대기







		cy.get('.notion-block-f75ee96453464cecadbe329dc713bd82 > :nth-child(1) > .notion-h-title').should('be.visible') // 결제/환불내역 요소가 화면에 보이는지 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-f75ee96453464cecadbe329dc713bd82 > :nth-child(1) > .notion-hash-link').click(); // 결제/환불내역 링크 클릭
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-fb137415fabc4633b38358cf14e46fec > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-fb137415fabc4633b38358cf14e46fec > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-fb137415fabc4633b38358cf14e46fec > summary').click();
		cy.wait(1500); // 1.5초 대기


		cy.get('.notion-block-6797bb4970c8459ba3ff4f2a1f2616fb > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-6797bb4970c8459ba3ff4f2a1f2616fb > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-6797bb4970c8459ba3ff4f2a1f2616fb > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-b58b2336edc247d9a4799cc7a3fd3ca1 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-b58b2336edc247d9a4799cc7a3fd3ca1 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-b58b2336edc247d9a4799cc7a3fd3ca1 > summary').click();
		cy.wait(1500); // 1.5초 대기



		cy.get('.notion-block-9c051f7239c7462c94d6c6149cfbf352 > :nth-child(1) > .notion-h-title').should('be.visible') // 파티페이 요소가 화면에 보이는지 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-9c051f7239c7462c94d6c6149cfbf352 > :nth-child(1) > .notion-hash-link').click(); // 파티페이 링크 클릭
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-d06b2c7f3dee4ab9bbfadc6d6756b6ca > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-d06b2c7f3dee4ab9bbfadc6d6756b6ca > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-d06b2c7f3dee4ab9bbfadc6d6756b6ca > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-74ed064fe60f408ab06646089f0c1adc > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-74ed064fe60f408ab06646089f0c1adc > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-74ed064fe60f408ab06646089f0c1adc > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-bb7562ab01714e759b714edcdfa1b539 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-bb7562ab01714e759b714edcdfa1b539 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-bb7562ab01714e759b714edcdfa1b539 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-fe6a8e689e3f4cfaa6746e67743e3d2a > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-fe6a8e689e3f4cfaa6746e67743e3d2a > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-fe6a8e689e3f4cfaa6746e67743e3d2a > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-d30e4a5374824d58bba720904002db13 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-d30e4a5374824d58bba720904002db13 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-d30e4a5374824d58bba720904002db13 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-e1402eaaff304da0b683cb0f4bccbd5f > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-e1402eaaff304da0b683cb0f4bccbd5f > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-e1402eaaff304da0b683cb0f4bccbd5f > summary').click();
		cy.wait(1500); // 1.5초 대기


		
		
		cy.get('.notion-block-7a758ea463194ff89821ae4621219ee3 > :nth-child(1) > .notion-h-title').should('be.visible') // 요금제 변경 요소가 화면에 보이는지 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-7a758ea463194ff89821ae4621219ee3 > :nth-child(1) > .notion-hash-link').click(); // 요금제 변경 링크 클릭
		cy.wait(1500); // 1.5초 대기
		

		cy.get('.notion-block-1b5f1d3810a44225b2d795d6aaf21a91 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-1b5f1d3810a44225b2d795d6aaf21a91 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-1b5f1d3810a44225b2d795d6aaf21a91 > summary').click();
		cy.wait(1500); // 1.5초 대기	

		cy.get('.notion-block-ed2e3ed261b84fe4a6cd31af535e7864 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-ed2e3ed261b84fe4a6cd31af535e7864 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-ed2e3ed261b84fe4a6cd31af535e7864 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-ba611a2187b7405c960a1ac17ceb3ce3 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-ba611a2187b7405c960a1ac17ceb3ce3 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-ba611a2187b7405c960a1ac17ceb3ce3 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-916bc645b5ce47508c192dfd47453225 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-916bc645b5ce47508c192dfd47453225 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-916bc645b5ce47508c192dfd47453225 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-8a359ccf19114effa2808685804dfcbc > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-8a359ccf19114effa2808685804dfcbc > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-8a359ccf19114effa2808685804dfcbc > summary').click();
		cy.wait(1500); // 1.5초 대기


		cy.get('.notion-block-a300dc49cee348f6be6b0e7bef9d48f5 > :nth-child(1) > .notion-h-title').should('be.visible') // 번호이동 요소가 화면에 보이는지 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-a300dc49cee348f6be6b0e7bef9d48f5 > :nth-child(1) > .notion-hash-link').click(); // 번호이동 링크 클릭
		cy.wait(1500); // 1.5초 대기
			
			
		cy.get('.notion-block-fcae65fdbd90401bad168771976ea811 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-fcae65fdbd90401bad168771976ea811 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-fcae65fdbd90401bad168771976ea811 > summary').click();
		cy.wait(1500); // 1.5초 대기


		cy.get('.notion-block-0457e9b3298f43cc8532a355be0a48b2 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-0457e9b3298f43cc8532a355be0a48b2 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-0457e9b3298f43cc8532a355be0a48b2 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-b7888ecc73c346a6976ac80aeea5a5d4 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-b7888ecc73c346a6976ac80aeea5a5d4 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-b7888ecc73c346a6976ac80aeea5a5d4 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-925d271009d845ca9d235607ae6b5490 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-925d271009d845ca9d235607ae6b5490 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-925d271009d845ca9d235607ae6b5490 > summary').click();
		cy.wait(1500); // 1.5초 대기
		
		
		
		cy.get('.notion-block-94c88f341acc46d3a0b419c9f416e6d8 > :nth-child(1) > .notion-h-title').should('be.visible') // ExTem	요소가 화면에 보이는지 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-94c88f341acc46d3a0b419c9f416e6d8 > :nth-child(1) > .notion-hash-link').click(); // ExTem 링크 클릭
		cy.wait(1500); // 1.5초 대기
		
		cy.get('.notion-block-69109342ba41411590e48df8449fae53 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-69109342ba41411590e48df8449fae53 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-69109342ba41411590e48df8449fae53 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-ff52d6d9a22741a5b788cf3ced774ea3 > summary').should('be.visible');
		cy.get('.notion-block-ff52d6d9a22741a5b788cf3ced774ea3 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-ff52d6d9a22741a5b788cf3ced774ea3 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-a40e1c464bc64a6ab938dbf0de5a4b6f > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-a40e1c464bc64a6ab938dbf0de5a4b6f > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-a40e1c464bc64a6ab938dbf0de5a4b6f > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-a0aa3786c2714004a1eefd4f32ca206d > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-a0aa3786c2714004a1eefd4f32ca206d > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-a0aa3786c2714004a1eefd4f32ca206d > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-4fd581a380a24823b0140fd1a2962f0d > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-4fd581a380a24823b0140fd1a2962f0d > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-4fd581a380a24823b0140fd1a2962f0d > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-a5ed2fb3be08482796b4ed34da28a6f7 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-a5ed2fb3be08482796b4ed34da28a6f7 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-a5ed2fb3be08482796b4ed34da28a6f7 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-007010614c2d4e5fae09f8bf041235db > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-007010614c2d4e5fae09f8bf041235db > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-007010614c2d4e5fae09f8bf041235db > summary').click();
		cy.wait(1500); // 1.5초 대기


			
		
		
		cy.get('.notion-block-19a6ca39b64e4c0c8430219b66f8d024 > :nth-child(1) > .notion-h-title').should('be.visible') // 번호 해지 및 취소	요소가 화면에 보이는지 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-19a6ca39b64e4c0c8430219b66f8d024 > :nth-child(1) > .notion-hash-link').click(); // 번호 해지 및 취소 링크 클릭
		cy.wait(1500); // 1.5초 대기
			

		cy.get('.notion-block-b7c7c672d9344bfab868a238611218b3 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-b7c7c672d9344bfab868a238611218b3 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-b7c7c672d9344bfab868a238611218b3 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-dcfdd1158df64edfb35596746850519e > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-dcfdd1158df64edfb35596746850519e > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-dcfdd1158df64edfb35596746850519e > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-81f57637ca424c118e56cba9c6c23f44 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-81f57637ca424c118e56cba9c6c23f44 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-81f57637ca424c118e56cba9c6c23f44 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-46d9671a03be40f09691d9d540c3b97a > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-46d9671a03be40f09691d9d540c3b97a > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-46d9671a03be40f09691d9d540c3b97a > summary').click();
		cy.wait(1500); // 1.5초 대기
		
		
		cy.get('.notion-block-1b862a03d80a4e91814c8a6d36e7bc1a > :nth-child(1) > .notion-h-title').should('be.visible') // 해외 데이터 로밍	요소가 화면에 보이는지 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-1b862a03d80a4e91814c8a6d36e7bc1a > :nth-child(1) > .notion-hash-link').click(); // 해외 데이터 로밍 링크 클릭
		cy.wait(1500); // 1.5초 대기
			
		cy.get('.notion-block-d3f8c3cd804c40e9bc7be49b6364b4b8 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-d3f8c3cd804c40e9bc7be49b6364b4b8 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-d3f8c3cd804c40e9bc7be49b6364b4b8 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-7fbbb3386d3943438030987efcaa23d3 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-7fbbb3386d3943438030987efcaa23d3 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-7fbbb3386d3943438030987efcaa23d3 > summary').click();
		cy.wait(1500); // 1.5초 대기
		
		
		
		cy.get('.notion-block-695fbcfc281d4f08810a594f646be580 > :nth-child(1) > .notion-h-title').should('be.visible') // 납부 방법 변경 (은행 자동이체) 요소가 화면에 보이는지 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-695fbcfc281d4f08810a594f646be580 > :nth-child(1) > .notion-hash-link').click(); // 납부 방법 변경 (은행 자동이체) 링크 클릭
		cy.wait(1500); // 1.5초 대기
			
		cy.get('.notion-block-b403c67a5ce441f2a630f3f330456ecf > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-b403c67a5ce441f2a630f3f330456ecf > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-b403c67a5ce441f2a630f3f330456ecf > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-a28ac84709fd4daaaefa60bd3df68523 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-a28ac84709fd4daaaefa60bd3df68523 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-a28ac84709fd4daaaefa60bd3df68523 > summary').click();
		cy.wait(1500); // 1.5초 대기


		cy.get('.notion-block-34681089cd4a4840907ed54fabd7c661 > :nth-child(1) > .notion-h-title').should('be.visible') // 복지할인 추가/변경 요소가 화면에 보이는지 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-34681089cd4a4840907ed54fabd7c661 > :nth-child(1) > .notion-hash-link').click(); // 복지할인 추가/변경 링크 클릭
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-7ae026bbc6474ef2b13cd163033b3caf > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-7ae026bbc6474ef2b13cd163033b3caf > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-7ae026bbc6474ef2b13cd163033b3caf > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-4884dc82eee948218304d3e33a9fe8b9 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-4884dc82eee948218304d3e33a9fe8b9 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-4884dc82eee948218304d3e33a9fe8b9 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-7fd30cbb70944388bcc70444b63bfed0 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-7fd30cbb70944388bcc70444b63bfed0 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-7fd30cbb70944388bcc70444b63bfed0 > summary').click();
		cy.wait(1500); // 1.5초 대기


		cy.get('.notion-block-0ebcf4f3051c4d43b95b3b020f41a5cd > :nth-child(1) > .notion-h-title').should('be.visible') // 2nd 전용 요금제 요소가 화면에 보이는지 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-0ebcf4f3051c4d43b95b3b020f41a5cd > :nth-child(1) > .notion-hash-link').click(); // 2nd 전용 요금제 링크 클릭
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-540dd83bd7a8418b920751b204d31647 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-540dd83bd7a8418b920751b204d31647 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-540dd83bd7a8418b920751b204d31647 > summary').click();
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-a3e1a6284788450eabb46e7d3a40a88f > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-a3e1a6284788450eabb46e7d3a40a88f > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-a3e1a6284788450eabb46e7d3a40a88f > summary').click();
		cy.wait(1500); // 1.5초 대기


		cy.get('.notion-block-a8f886beb87440b286275570262bba7c > :nth-child(1) > .notion-h-title').should('be.visible') // 명의 변경 요소가 화면에 보이는지 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-a8f886beb87440b286275570262bba7c > :nth-child(1) > .notion-hash-link').click(); // 명의 변경 링크 클릭
		cy.wait(1500); // 1.5초 대기
		
		cy.get('.notion-block-3e61b8d1fe044f569aa64bdb172255b7 > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-3e61b8d1fe044f569aa64bdb172255b7 > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-3e61b8d1fe044f569aa64bdb172255b7 > summary').click();
		cy.wait(1500); // 1.5초 대기

		
		cy.get('.notion-block-739d9f3ae4a245d89494629b60b909a7 > :nth-child(1) > .notion-h-title').should('be.visible') // 외국인 가입 요소가 화면에 보이는지 확인
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-739d9f3ae4a245d89494629b60b909a7 > :nth-child(1) > .notion-hash-link').click(); // 외국인 가입 링크 클릭
		cy.wait(1500); // 1.5초 대기

		cy.get('.notion-block-32d24f45fc5c4ccea05cf2297ce6554b > summary').should('be.visible');
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-32d24f45fc5c4ccea05cf2297ce6554b > summary').click();
		cy.wait(1500); // 1.5초 대기
		cy.get('.notion-block-32d24f45fc5c4ccea05cf2297ce6554b > summary').click();
		cy.wait(1500); // 1.5초 대기


		/* ==== End Cypress Studio ==== */
	  })
	})