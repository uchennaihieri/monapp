import { init } from 'next-firebase-auth'

const initAuth = () => {
    init({
        authPageURL: '/auth',
        appPageURL: '/Dashboard',
        loginAPIEndpoint: '/api/login',
        logoutAPIEndpoint: '/api/logout',
        onLoginRequestError: (err) => {
            console.error(err)
        },
        onLogoutRequestError: (err) => {
            console.error(err)
        },
        firebaseAdminInitConfig: {
            credential: {
                projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
                // The private key must not be accessible on the client side.
                privateKey: process.env.FIREBASE_PRIVATE_KEY,
            },
            databaseURL: 'https://my-example-app.firebaseio.com',
        },
        // Use application default credentials (takes precedence over firebaseAdminInitConfig if set)
        // useFirebaseAdminDefaultCredential: true,
        firebaseClientInitConfig: {
            apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY, // required
            authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        },
        cookies: {
            name: 'ExampleApp', // required
            // Keys are required unless you set `signed` to `false`.
            // The keys cannot be accessible on the client side.
            keys: [
                process.env.COOKIE_SECRET_CURRENT,
                process.env.COOKIE_SECRET_PREVIOUS,
            ],
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
            overwrite: true,
            path: '/',
            sameSite: 'strict',
            secure: true, // set this to false in local (non-HTTPS) development
            signed: true,
        },
        onVerifyTokenError: (err) => {
            console.error(err)
        },
        onTokenRefreshError: (err) => {
            console.error(err)
        },
    })
}

export default initAuth