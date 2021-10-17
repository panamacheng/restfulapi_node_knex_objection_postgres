import app from '../server';
import supertest from 'supertest';

describe('App Controller Test Case', () => {
  test('POST /api/validate', async () => {
    await supertest(app)
      .post('/api/validate')
      .send({
        shopName: 'gate4life2.myshopify.com',
        accessToken: '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'
      })
      .expect(200)
      .then((response) => {
        // Check type and length
        console.log(response.body);
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
