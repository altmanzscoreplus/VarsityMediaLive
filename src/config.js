export const amplifyConfig = {
  aws_project_region: "us-east-1",
  aws_cognito_identity_pool_id: "us-east-1:d4356d64-091c-4a97-8e01-840535208498",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: "us-east-1_Wee3PTJmd",
  aws_user_pools_web_client_id: "6rkdmvkl1231309k2u7br73dft",
  aws_appsync_graphqlEndpoint: "https://umrbsi3jkndw5c4ssnrrzcumhm.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS"
};

export const auth0Config = {
  client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
  domain: process.env.REACT_APP_AUTH0_DOMAIN
};

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
};

export const gtmConfig = {
  containerId: process.env.REACT_APP_GTM_CONTAINER_ID
};
