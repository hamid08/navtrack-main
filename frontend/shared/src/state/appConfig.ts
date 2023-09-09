import { atom } from "recoil";

export type AppConfig = {
  api: {
    url: 'http://localhost:4001';
  };
  authentication: {
    clientId: string;
    apple?: {
      clientId: string;
      redirectUri: string;
    };
    google?: {
      clientId: string;
    };
    microsoft?: {
      clientId: string;
      authority: string;
    };
  };
  sentry?: {
    dsn: string;
  };
  map: {
    tileUrl: string;
  };
};

export const appConfigAtom = atom<AppConfig | undefined>({
  key: "Navtrack:AppConfig",
  default: undefined
});
