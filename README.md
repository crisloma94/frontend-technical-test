# Frontend technical test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

To install all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run serve`

Serves the built app on localhost server.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## How to see the final result

In the project directory, run the following commands:

`npm install`\
`npm run build`\
`npm run serve`\

Open [http://localhost:3000](http://localhost:3000) to view the final app in your browser.

## Final implementation explained

The following bugs have been fixed:

- You can add/remove favorites
- You can add new meetups
- You can see your favorites at the favorites page
- The names of the component files and their export names have been changed to be the same

New features:

- The desired scroll behaviour has been implemented, including a debounce hook to improve performance
- More unit testing with enzyme have also been added
- Static testing and formatting with prettier has been added for vscode users on workspace file

Due to the short deadline and the size of the app, I have implemented all the logic using react states and passing them by props.
If the app was a real project and I had a clear vision of how is going to evolve, a solution with redux or context API, depending on the needs of the project, would be a better choice for managing general states.
Also, a backend-mock with json-server or a similar library could be implemented to provide the data that should come from the server.
