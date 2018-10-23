# Firebase note

## Documentation

* https://firebase.google.com/docs/?authuser=0

* Source code repo: https://github.com/fredericaltorres/fFirebase.git

## Machine Setup

* Command line tools

```bash
C:\>npm install firebase-tools -g    
```

## Application Setup

* Application initialization

```bash
C:\>firebase login
C:\>firebase init hosting
C:\>firebase serve
C:\>firebase deploy
    Project Console: https://console.firebase.google.com/project/fredtodo-f553b/overview
    Hosting URL: https://fredtodo-f553b.firebaseapp.com
# Functions    
C:\>firebase init functions
C:\>set NODE_TLS_REJECT_UNAUTHORIZED=0
C:\>cd functions
C:\>firebase deploy --only --debug functions

```

* Authentication

In the firebase project UI

https://console.firebase.google.com/project/fredtodo-f553b/authentication/providers

authorize Google providers.

