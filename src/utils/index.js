// eslint-disable-next-line import/prefer-default-export
export const generateLogs = () => {
  console.log(`[LOG] Node environment: ${process.env.NODE_ENV}.`);
  console.log('[LOG] Environment variables are loaded from the .env file.');
};
