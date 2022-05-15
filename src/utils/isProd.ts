export const isProd = process.env.DEPLOY_STAGE === "production";
export const isStaging = process.env.DEPLOY_STAGE === "staging";
export const isLocal = process.env.DEPLOY_STAGE === "local";
