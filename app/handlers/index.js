import * as LAUNCH from './lifecycle/BeginSession';
import * as END from './lifecycle/EndSession';
import * as Unhandled from './lifecycle/Unhandled';
import * as ON_PERMISSION from './lifecycle/OnPermission';

import * as StateOnBoarding from './states/onboarding/StateOnBoarding.js';

export default Object.assign(
  // jovo life cycle
  LAUNCH,
  END,
  Unhandled,
  ON_PERMISSION,
  // custom states
  StateOnBoarding,
);
