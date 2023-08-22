const dev = {
  // STRIPE_KEY:
  //   "pk_test_51NfN1yBfwMjAXQQV2rkldDhdqL1WBjTrQX3p9Xy9cSy2RPDa3r6C0LoiW18PCK8RJXQiXAEaCrMH6iTN8pCcbXPG00215DU79R",
  // s3: {
  //   REGION: "ap-southeast-1",
  //   BUCKET: "notes-app-prod-attachmentsbucket-1eil5wellx7jv",
  // },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://gs016vtpta.execute-api.ap-southeast-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_uJZ9TOJV9",
    APP_CLIENT_ID: "2v3ro19g5bqh018k2rsh7e6jsb",
    IDENTITY_POOL_ID: "ap-southeast-1:559eaead-daee-4943-8dda-8b60ee03d0a9",
  },
};

const prod = {
  // STRIPE_KEY:
  //   "pk_test_51NfN1yBfwMjAXQQV2rkldDhdqL1WBjTrQX3p9Xy9cSy2RPDa3r6C0LoiW18PCK8RJXQiXAEaCrMH6iTN8pCcbXPG00215DU79R",
  // s3: {
  //   REGION: "ap-southeast-1",
  //   BUCKET: "notes-app-prod-attachmentsbucket-1eil5wellx7jv",
  // },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://gs016vtpta.execute-api.ap-southeast-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_uJZ9TOJV9",
    APP_CLIENT_ID: "2v3ro19g5bqh018k2rsh7e6jsb",
    IDENTITY_POOL_ID: "ap-southeast-1:559eaead-daee-4943-8dda-8b60ee03d0a9",
  },
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;
