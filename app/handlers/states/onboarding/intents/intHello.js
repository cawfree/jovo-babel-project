import * as constants from './../../../../constants';

/**
 * welcome the user
 */
export default function intHello() {
  this.tell("Hello, world!");
  // TODO: Note, you can use the architecture below to control state transitions when handling asynchronous user input. (i.e. when an intent is triggered, a state can be popped!)
  // // fetch the return intent
  // const stateIntent = constants.popStateIntent(this);
  // // navigate back with the result
  // this.toStateIntent(stateIntent.state, stateIntent.intent, ...data);
}
