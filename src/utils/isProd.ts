export const isProd = process.env.NEXT_PUBLIC_DEPLOY_STAGE === "production";
export const isStaging = process.env.NEXT_PUBLIC_DEPLOY_STAGE === "staging";
export const isLocal = process.env.NEXT_PUBLIC_DEPLOY_STAGE === "local";
