import { Constants } from 'expo';
import ENV from './app-config';

// const currentEnv = Constants.manifest.releaseChannel || 'dev';
const currentEnv = 'staging';
export const apiUrl = ENV[currentEnv].apiUrl;
export const apiVersion = '/api/v1/';



// Use apiUrl in your API requests


// Expo uses release channels to distinguish between different environments. 
// Ensure that your release channels in your app.json match 
// the environment names (e.g., dev, staging, prod).

// expo build:android --release-channel=dev
