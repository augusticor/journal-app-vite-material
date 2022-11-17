export const getEnvironments = () => {
  // Load the environment variables
  const object = import.meta.env;

  console.log(object);

  //   Return them
  return {
    // ...import.meta.env,
    ...object,
  };
};
