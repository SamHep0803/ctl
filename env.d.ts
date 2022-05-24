declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXTAUTH_URL: string;
      NEXTAUTH_SECRET: string;
      VATSIM_CLIENT_ID: string;
      VATSIM_CLIENT_SECRET: string;
      VATSIM_URL: string;
      VATSIM_SCOPES: string;
      SESSION_SECRET: string;
      DATABASE_URL: string;
      NEXT_PUBLIC_DEPLOY_STAGE: string;
    }
  }
}

export {}
