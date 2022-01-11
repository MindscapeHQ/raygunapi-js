# Raygun SDK

An SDK built specifically for interacting with Raygun's API. Built with Typescript & Rollup.

## Getting Started

### Step 1 - Adding the SDK to your project
The SDK can be included in any Javascript project using any of the methods outlined below:

**NPM**
Run `npm i --save @raygun.io/sdk` from a command prompt in the root directory of your project.

**Yarn**
Run `yarn add @raygun.io/sdk` from a command prompt in the root directory of your project.

**Script Tag**
Add `<script async src="https://cdn.raygun.io/sdk/index.min.js"></script>` to the `head` tag of each html document that will be using the SDK directly.

### Step 2 - Setting up the Client
Add the following lines to your JS site code and paste in your `clientId`, `clientSecret` and Raygun `userIdentifier`, to set up the sdk client which can then be used to make requests to the Raygun API.
```
 const raygunClient = await Raygun.createClient({
  userIdentifier: "yourRaygunUserIdentifierGoesHere",
  authStrategy: new Raygun.AuthStrategies.BasicAuthStrategy("yourClientIdGoesHere", "yourClientSecretGoesHere")
});
```

Note: There are currently 2 Authentication Strategies that can be chosen from.

### Step 3 - Make a request
Now that you have access to the `raygunClient`, you will be able to interact with the Raygun API like so:
`await raygunClient.Alerts.getAll(...)`

