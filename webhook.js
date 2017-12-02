const webhook = require('jovo-framework').Webhook;
const app = require('./dist/index.js');

// Listen for post requests
webhook.listen(3000, () => {
  console.log('Local development server listening on port 3000.');
});

webhook.post('/webhook', (req, res) => {
  app.handler(req, res);
});
