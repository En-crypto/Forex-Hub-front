import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

function LogoutButton() {
    const {
        isAuthenticated,
        logout,
    } = useAuth0();

    return isAuthenticated && (
        <Button onClick={() => {
            logout({ returnTo: window.location.origin });
        }} className = 'mybtn'>Log out</Button>
    );
}

export default LogoutButton;