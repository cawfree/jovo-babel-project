import { Jovo as app } from 'jovo-framework';
import handlers from './handlers';

// define intents that can be redirected to the unhandled state (these are the Amazon defaults)
app.setIntentsToSkipUnhandled([
  'CancelIntent',
  'HelpIntent',
]);

// define intent mapping between different platforms (as of yet, there are none)
app.setIntentMap({
  // TODO
  // i.e. 'AMAZON.HelpIntent' : 'MyHelpIntent' (No documentation on built-in Intents on DialogFlow.)
});

// translation between `Google Entity``Alexa Slot` naming conventions.
// Assume for the project they are camel cased, prefixed param. i.e. paramEntityName
app.setInputMap({
  // 'incomingInputName' : 'mappedInputName',
});

// print incoming transactions
app.enableRequestLogging();
// print output transactions
app.enableResponseLogging();

/**
 * callback entry point for Google/Amazon platform i/o
 */
export const handler = (event, context) => {
  app.handleRequest(event, context, handlers);
  app.execute();
};
