export const getEnvironments = () => {
  // Load the environment variables
  import.meta.env;

  //   Return them
  return {
    ...import.meta.env,
  };
};
