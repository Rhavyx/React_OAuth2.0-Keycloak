import React, { Component, useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';

const Secured: React.FC = () => {

    const [keycloak, setKeycloak] = useState<any>(null)
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(()=> {
        const keycloak = Keycloak({
          url: "http://localhost:8080/auth",
          realm: "test-realm",
          clientId: 'test-client-app'
        });

        keycloak.init({onLoad: 'login-required'}).then(authenticated => {
          setKeycloak(keycloak)
          setAuthenticated(authenticated)
        })
    }, [])

    const logout = () => {
      console.log(keycloak)
    }

    if (keycloak) {
        if (authenticated) return (
          <div>
            <p>This is a Keycloak-secured component of your application. You shouldn't be able
            to see this unless you've authenticated with Keycloak.</p>
            <button onClick={ () => logout() }>
              Logout
          </button>
          </div>
        ); else return (<div>Unable to authenticate!</div>)
      }
      return (
        <div>Initializing Keycloak...</div>
      );

}

export default Secured