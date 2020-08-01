// eslint-disable-next-line import/prefer-default-export
export const generateLogs = () => {
  console.log(`[LOG] Node environment: ${process.env.NODE_ENV}.`);
  console.log(
    `[LOG] Environment variables such as DB_HOST = ${process.env.DB_HOST} and DB_PASS = ${process.env.DB_PASS} are located in .env file.`,
  );
};
