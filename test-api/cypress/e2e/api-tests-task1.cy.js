describe('Testes de API - JSONPlaceholder', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
  
    it('Validar resposta do GET /posts', () => {
      cy.request('GET', `${baseUrl}/posts/1`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.headers['content-type']).to.include('application/json');
        expect(response.body).to.have.property('id', 1);
        expect(response.body).to.have.property('title');
        expect(response.body).to.have.property('body');
      });
    });
  
    it('Validar erro ao buscar um post inexistente', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/posts/99999`,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });
  