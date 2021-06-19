import React from 'react';

interface Props{
    login?:string
}

const UserInfo: React.FC<Props> = ({login}) => {
    return (
        <div>
            <h1>Name: {login}</h1>
        </div>
    );
};

export default UserInfo;