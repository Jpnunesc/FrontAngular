const PROTOCOLO = "http://";
const IP_SERVICO = "localhost";
const PORTA_SERVICO = "55769"

const API = PROTOCOLO + IP_SERVICO + ":" + PORTA_SERVICO;

export const environment = {
  production: false,
  url_api: API
};
