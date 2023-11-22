import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ru.top.app',
  appName: 'web-python-stake',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
