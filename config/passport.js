const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID =
    "1007324087081-kq9ibsssded9rlu2f5gc7o8lffoml8g9.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

module.exports = async function (passport) { 
    passport.use(
        new GoogleStrategy(
            {
                clientID: GOOGLE_CLIENT_ID,
                clientSecret: GOOGLE_CLIENT_SECRET,
                callbackURL: "http://localhost:3000/api/v1/auth/google/callback"
            },
            async (accessToken, refreshToken, profile, done) => {
                const user = {
                    googleId: profile.id,
                    displayName: profile.displayName,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    image: profile.photos[0].value,
                    email: profile.emails[0].value
                }

                done(null, user)           
            }
        )
    )

    passport.serializeUser(function (user, cb) {
        cb(null, user);
    });

    passport.deserializeUser(function (obj, cb) {
        cb(null, obj);
    });

}