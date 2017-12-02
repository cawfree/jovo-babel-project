import * as constants from './../../constants';

/**
 * called when a user's session has ended
 */
export function END() {
  // alexa?
  if (this.getType() == constants.TYPE_PLATFORM_ALEXA) {
    // fetch the reason
    const reason = this.getEndReason();
    // print
    console.log(`Detected that a user session has ended. (${JSON.stringify(reason)})`);
  } else {
    // assert that we've lost a Google Home user
    console.log('Detected that a user session has ended.');
  }
}
