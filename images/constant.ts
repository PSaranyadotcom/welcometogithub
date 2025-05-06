export const orchestratorHost =
  process.env.ORCHESTRATOR_HOST || 'http://orc-service:3003';
export const dnaBasicAuth = process.env.DNA_BASIC_AUTH;

export const oauthServicePrefix = '/oauth/v1';
export const firstPartyServicePrefix = '/firstparty/v1';
export const userServicePrefix = '/user/v1';
export const resetPasswordServicePrefix = '/user/v1/resetPassword';
