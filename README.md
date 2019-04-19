## Google Maps in React

* [Bill's notes as he goes](https://www.evernote.com/l/AF66Ujp7hstPxoBWI_Xebjx2c4uY5X7hnq0)

This is a prototype Progressive Web App (PWA) — here are guidelines from:

* [Google](https://developers.google.com/web/progressive-web-apps/)
* [Mozilla](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
* [Microsoft](https://developer.microsoft.com/en-us/windows/pwa)

In short, a PWA should act kind of like a native mobile app — they work best on Android devices and desktop, and they're getting better on iOS, [especially in 12.2](https://medium.com/@firt/whats-new-on-ios-12-2-for-progressive-web-apps-75c348f8e945) (March 25, 2019). [Here's a comparison between iOS and Android](https://medium.com/@firt/progressive-web-apps-on-ios-are-here-d00430dee3a7) from March 2018 that's still pretty good.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).