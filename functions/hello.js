exports.handler = async (event, context, cb) => {
  return {
    statusCode: 200,
    body: "Hello Serverless Function in the Netlify World!😄",
  };
};
