import { setupServer } from 'msw/node';
import { rest } from 'msw';
import resGetNoop from './mock-rest-data/get_noop.json';
import resGetHomepage from './mock-rest-data/get_homepage.json';
import resAuthLocalRegister from './mock-rest-data/auth_local_register.json';

const API_BASE_URL = 'http://localhost:1337/api';

export const handlers = [
  rest.get(`${API_BASE_URL}/noops`, (req, res, ctx) =>
    res(ctx.json(resGetNoop))
  ),
  rest.get(`${API_BASE_URL}/homepage`, (req, res, ctx) =>
    res(ctx.json(resGetHomepage))
  ),
];

export const authHandlers = [
  rest.post(`${API_BASE_URL}/auth/local/register`, (req, res, ctx) =>
    res(ctx.json(resAuthLocalRegister))
  ),
  rest.post(`${API_BASE_URL}/auth/local`, (req, res, ctx) =>
    res(ctx.json(resAuthLocalRegister))
  ),
];

export const server = setupServer(...handlers, ...authHandlers);

export {
  resGetNoop,
  resGetHomepage,
  resAuthLocalRegister,
};
