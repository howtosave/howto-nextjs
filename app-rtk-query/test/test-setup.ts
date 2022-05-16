// test-setup.js

// Polyfill "window.fetch" used in the React component.
import 'whatwg-fetch'

// Extend Jest "expect" functionality with Testing Library assertions.
import '@testing-library/jest-dom/extend-expect'

//
// jest-extended
//

//To automatically extend expect with all matchers, you can use
//
//"jest": {
//  "setupFilesAfterEnv": ["jest-extended/all"]
//}

// add all jest-extended matchers
//import * as allMatchers from 'jest-extended';
//expect.extend(allMatchers);
// or just add specific matchers
//import { toBeArray, toBeSealed } from 'jest-extended';
//expect.extend({ toBeArray, toBeSealed });
