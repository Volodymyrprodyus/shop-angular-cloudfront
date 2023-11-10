import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    products: 'https://j4gsy4ue76.execute-api.us-east-1.amazonaws.com/dev',
    product: 'https://j4gsy4ue76.execute-api.us-east-1.amazonaws.com/dev',
    order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    import: 'https://8o1mv1b0h3.execute-api.us-east-1.amazonaws.com/dev',
    bff: 'https://j4gsy4ue76.execute-api.us-east-1.amazonaws.com/dev',
    cart: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    products: true,
    product: true,
    order: false,
    import: true,
    bff: true,
    cart: false,
  },
};
