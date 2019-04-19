## Progressive Web Apps

This is a prototype Progressive Web App (PWA) — here are guidelines from:

* [Google](https://developers.google.com/web/progressive-web-apps/)
* [Mozilla](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
* [Microsoft](https://developer.microsoft.com/en-us/windows/pwa)

In short, a PWA should be fine on a desktop browser and also behave like a *native* mobile app on a phone — support is best on Android, and it's getting better on iOS, [especially in 12.2](https://medium.com/@firt/whats-new-on-ios-12-2-for-progressive-web-apps-75c348f8e945) which came out March 25, 2019. [Here's a comparison between iOS and Android](https://medium.com/@firt/progressive-web-apps-on-ios-are-here-d00430dee3a7) from March 2018 that's still pretty accurate.

## Google Maps in React

This particular app is an experiment combining:

* [Google Maps](https://developers.google.com/maps/documentation/javascript/tutorial) — via the adapter [react-google-maps](https://github.com/tomchentw/react-google-maps)
* [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/), bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

Install `npm` (or `yarn` — in which case substitute the equivalent `yarn` commands below) and run:

### `npm install`

Then, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes — ready to be [deployed](https://facebook.github.io/create-react-app/docs/deployment)!

## Further Reading

### PWAs

* Alex Russell's [What, Exactly, Makes Something A Progressive Web App](https://infrequently.org/2016/09/what-exactly-makes-something-a-progressive-web-app/) (2016, but a classic) — includes timeless UX advice. Alex is a Chrome developer who helped make modern PWA's possible.

* Owen Campbell-Moore's [Designing Great UIs for Progressive Web Apps](https://medium.com/@owencm/designing-great-uis-for-progressive-web-apps-dd38c1d20f7) — more high-level advice.

* Elisabeth Morant's Google IO talk [Asking for Permission: respectful, opinionated UI](https://www.youtube.com/watch?v=4QQyjqtHwlY) — how to ask for permissions in such a way that users say "Yes", and related principles such as allowing the user to revoke a permission and handling failure gracefully.

### React

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Implementation notes

* [Bill's notes as he goes](https://www.evernote.com/l/AF66Ujp7hstPxoBWI_Xebjx2c4uY5X7hnq0)

