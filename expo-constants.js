import { Constants } from 'expo';
import ENV from './app-config';

const currentEnv = Constants.manifest.releaseChannel || 'dev';
export const apiUrl = ENV[currentEnv].apiUrl;


// Use apiUrl in your API requests


// Expo uses release channels to distinguish between different environments. 
// Ensure that your release channels in your app.json match 
// the environment names (e.g., dev, staging, prod).

// expo build:android --release-channel=dev
