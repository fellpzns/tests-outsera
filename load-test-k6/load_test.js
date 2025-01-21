import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 100 },  // Aumento gradual para 100 usuários em 1 minuto
    { duration: '3m', target: 500 },  // Mantém 500 usuários por 3 minutos
    { duration: '1m', target: 0 },    // Redução gradual de usuários
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% das requisições devem ser menores que 500ms
    http_req_failed: ['rate<0.01'],   // Menos de 1% de falhas aceitáveis
  },
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/posts');

  check(res, {
    'status code is 200': (r) => r.status === 200,
    'response time is acceptable': (r) => r.timings.duration < 500,
  });

  sleep(1);
}