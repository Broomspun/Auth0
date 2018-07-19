interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'ML646C9GUnU8t820J9mCWObd9d9T14l3',
  domain: 'broomspun.auth0.com',
  callbackURL: 'http://localhost:4200/callback',
  apiUrl: 'https://angel-auth.herokuapp.com/'
};
