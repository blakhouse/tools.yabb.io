

//const fetch = require("node-fetch");

//const API_ENDPOINT = '';

exports.handler = async (event, context) => {
  try {
    //const response = await fetch(API_ENDPOINT);
    //const data = await response.json();
    //return { statusCode: 200, body: JSON.stringify({ data }) };
    return { statusCode: 200, body: 'hello world' };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};

