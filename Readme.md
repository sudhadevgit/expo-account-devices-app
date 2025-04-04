**Expo Project with React Navigation & Apollo Client**

This is a simple React Native application built using Expo and integrates Apollo Client for handling GraphQL queries. 
It also uses React Navigation for navigating between different screens.

**Features**

. **Navigation**: Utilizes React Navigation's stack navigator for seamless screen transitions.

. **Apollo Client** : Handles data fetching using GraphQL in the app.

. **Screens**:

        Accounts Screen
        Account Detail Screen
        Create Account Screen
        Create Device Screen
   

**Installation**


**Prerequisites**

Make sure you have Node.js installed. You can download it from here.

Install Expo CLI globally if not present:

        npm install -g expo-cli


**Steps to Get Started**

1. **Clone the Repository:**

        clone in your local directory:
        git clone https://github.com/sudhadevgit/expo-account-devices-app.git
        cd expo-account-devices-app

2. **Manual Install Dependencies:**

        npm install

3. ***IMP:*** update below uri in "src/api/client.js" to the running graphgql federation server URL :
which was setup using https://github.com/sudhadevgit/gql-federation-services

        uri: 'http://localhost:4000/graphql'

4. **Run the App:**

        npm start


This will start the development server. Scan the QR code in the terminal with the Expo Go app on your mobile device or run it on an Android/iOS emulator or on web 
http://localhost:8081/

4. **OR Docker Install**
        
        docker-compose build
        docker-compose up

        Check if http://localhost:8081/  is up and running


**Project Structure**

        expo-account-devices-app
        ├── src/
        │   ├── api/
        │   │   |── client.js            # Apollo Client configuration
        |   |   └── queries.js           # Graphql queries from gql federation services
        │   ├── screens/
        │   │   ├── AccountsScreen.js    # Accounts listing screen
        │   │   ├── AccountDetailScreen.js # Account detail screen
        │   │   ├── CreateAccountScreen.js # Screen to create a new account
        │   │   └── CreateDeviceScreen.js  # Screen to create a new device
        ├── App.js                       # Main entry point for the app
        ├── package.json                 # Project dependencies and scripts
        └── README.md       