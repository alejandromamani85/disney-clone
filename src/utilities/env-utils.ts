export const getEnvVariable = (variable: string) => {
  const value = process.env[variable];
  if (value) return value;
  throw new Error(`Environment variable not found! variable: ${variable}`);
};
