import * as constants from './../../constants';

/**
 * initializes session attributes
 */
const initializeSession = app => (app.setSessionAttribute(constants.KEY_SESSION_STATE_STACK, []));

/**
 * called when a user's session is beginning, i.e. "Open Skill" or "Talk to App".
 */
export function LAUNCH() {
  // initialize the session
  initializeSession(this);
  // move to the desired intent
  this.toStateIntent('StateOnBoarding', 'intHello');

}
