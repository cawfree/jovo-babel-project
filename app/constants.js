export const TYPE_PLATFORM_ALEXA = 'AlexaSkill';
export const TYPE_PLATFORM_GOOGLE_ASSISTANT = 'GoogleAction';
export const KEY_SESSION_STATE_STACK = '$stack';

/**
 * returns a slot value for a given name (alexa only)
 */
export const getSlotResolution = (app, slotName) => { // TODO this functionality will be included in future versions of jovo
  // fetch resolution
  const resolution = app.request().request.intent.slots[slotName].resolutions.resolutionsPerAuthority[0];
  // did the slot match?
  if(resolution.status.code === 'ER_SUCCESS_MATCH') {
    // return the value
    return resolution.values[0].value.name;
  }
  else {
    // resort to default behaviour
    return app.getInput(slotName);
  }
}

/**
 * returns the value at a named slot
 */
export const getInputFor = (app, slotName) => {
  // platform
  switch(app.getType()) {
    case TYPE_PLATFORM_GOOGLE_ASSISTANT :
      // return value at input
      return app.getInput(slotName);
    case TYPE_PLATFORM_ALEXA :
      // return the value for a synonym (incompatible with Amazon's simulator)
      return getSlotResolution(app, slotName);
    default :
      throw `Failed to fetch input for slot ${slotName}! (${app.getType()})`;
  }
}
