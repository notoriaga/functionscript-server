const { Gateway, FunctionParser } = require('functionscript');


function start() {
  let gateway = new Gateway({
    port: process.env.PORT || 8170,
    maxRequestSizeMB: process.env.MAX_REQUEST_SIZE,
  });
  let functionParser = new FunctionParser();

  try {
    gateway.define(functionParser.load(process.cwd(), 'functions'));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  gateway.listen();

  console.log(`Server started on port ${gateway.port}`);
}

start();