describe('Testes completos da API', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
  
    it('GET - Buscar todos os posts', () => {
      cy.request('GET', `${baseUrl}/posts`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.greaterThan(0);
      });
    });
  
    it('POST - Criar um novo post', () => {
      cy.request('POST', `${baseUrl}/posts`, {
        title: 'Novo Post',
        body: 'Este é um post de teste',
        userId: 1
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
        expect(response.body.title).to.eq('Novo Post');
      });
    });
  
    it('PUT - Atualizar um post existente', () => {
      cy.request('PUT', `${baseUrl}/posts/1`, {
        title: 'Post Atualizado',
        body: 'Texto atualizado',
        userId: 1
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.title).to.eq('Post Atualizado');
      });
    });
  
    it('DELETE - Excluir um post', () => {
      cy.request('DELETE', `${baseUrl}/posts/1`).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
  