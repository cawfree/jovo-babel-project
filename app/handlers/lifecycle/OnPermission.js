/**
 * go to state-dedicated handler; here we force an override
 * called when an app permission has been provided
 */
export function ON_PERMISSION() {
  this.toStateIntent(this.getState(), 'ON_PERMISSION');
}
