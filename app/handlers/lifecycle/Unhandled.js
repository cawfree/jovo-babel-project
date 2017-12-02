/**
 * called when the user has fell into a case where the app isn't
 */
export function Unhandled() {
  // does the intent exist?
  if(this.handlers[this.getState()].Unhandled !== undefined && this.handlers[this.getState()].Unhandled !== null) {
    // allow the state to override
    this.toStateIntent(this.getState(), 'Unhandled');
  } else {
    // generic
    this.ask([
      'Sorry, what was that?',
      'Sorry, I didn\'t understand that. Say it again?',
      'I didn\'t get that. Can you say it again?',
      'I missed what you said. Say it again?',
      'Sorry, could you say that again?',
      'Sorry, can you say that again?',
      'Can you say that again?',
      'Sorry, I didn\'t get that.',
      'Sorry, what was that?',
      'One more time?',
      'What was that?',
      'Say that again?',
      'I didn\t get that.',
      'I missed that.',
    ]);
  }
}
