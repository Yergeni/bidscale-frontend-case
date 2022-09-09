# Case assesment indications

#### Senior Software Engineer Case:

The goal of this exercise is to test your ability to generate usable code from user stories. These user stories may not have all the answers, and you may be need to find a solution that isn’t laid out in front of you. The expected time to code this should be around an hour, but some additional time researching may be necessary.


| Feature | Story name      | Story                                                                                                                                                                                     | Additional Definitions of Done                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Alerts  | Alert Reducer   | As a developer, I would like to be able to grab a reducer to dispatch new alerts to, so that I can easily add alerts from my components.                                                  | · Alerts must time out after a default or provided timeLimit of 10 seconds and be removed from the state.<br>· timeLimit, text, link, alertType, id, alertTitle should be able to be passed into the dispatch command.<br>· A unique ID should be generated if not provided in dispatch<br>· Reduce must be importable to other components with import {useAlertReducer} from "./(../)\*AlertManager.js"<br>· Reducer should allow adding or removing alerts.<br>· Must support the alertTypes \['error','warning','info','success'\] |
| Alerts  | Alert Manager   | As a User, I would like to be able to see all active alerts on the top right hand view of my screen, so that I can quickly see what I need to pay attention to.                           | · AlertManager component should display all active Alerts.<br>· Alerts should be positioned on the top right hand side of the screen.<br>· AlertManager Component should be positioned in the App.js component.<br>· Key & id attributes of alerts should be the ID of the alert itself.                                                                                                                                                                                                                                              |
| Alerts  | Alert Component | As a User, I would like my alerts to provide a color representation of the warning along with the being clickable by a link provided so that I can quickly address issues that may exist. | · AlertComponent.js should contain a functional, stateless component.<br>· This component cannot utilize any<br>· Tags other than those provided via Material-UI<br>· Color of the alert and text should be determined by the theme from Material-UI<br>· Component should be a clickable link to provided link and not clickable if link is not provided.<br>· Alert Title should be displayed if provided.                                                                                                                          |
| Alerts  | Alerts Example  | As an interviewee, I would like a simple UI that allows me to enter and submit Text, link, timeLimit, and alertType so that I can demonstrate the capability during the case interview.   | · Look & Feel of this component will not be judged.<br>· Material-UI is not necessary for this component.<br>· Would expect to see <AlertExample /> in App.js<br>· Submission button would fire dispatch to the AlertReducer

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
