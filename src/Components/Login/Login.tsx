import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Login.css'

const GITHUB_CLIENT_ID = "513b29a1aae99d4cc532";
const gitHubRedirectURL = "http://localhost:4000/api/auth/github";
const path = "/";
const Login = (): JSX.Element => {

    // const clientSecret:string  = 'dc9105a17314ef588888982b4515bd85a96e7bc1';
    // const clientID:string  = '513b29a1aae99d4cc532';
    const [user, setUser] = useState();
    // console.log(user)
    const userInfo = Object(user)
    console.log(userInfo)

    useEffect(() => {
        (async function () {
            const usr: any = await axios
                .get(`http://localhost:4000/api/me`, {
                    withCredentials: true,
                })
                .then((res) => res.data);
            setUser(usr);
        })();
    }, []);
    return (
        <div className="container">
            {!user ? (
                <a
                    href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${gitHubRedirectURL}?path=${path}&scope=user:email`}
                >
                    LOGIN WITH GITHUB
                </a>
            ) : (
                <div className="container">
                    <div className="welcome-user text-center p-4 shadow">
                        <h1>Welcome {userInfo.name}</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="collection-info shadow p-4"><h1>This is Collection Card</h1></div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-info shadow p-4">
                                <div id="profile-image" className="d-flex justify-content-center mb-5">
                                    <img src={userInfo.avatar_url} className="" alt="" />
                                </div>
                                <div className="profile-info">
                                    <h4>Name: {userInfo.name}</h4>
                                    <h4>Address: {userInfo.location}</h4>
                                    <h4>Followers: {userInfo.followers}</h4>
                                    <h4>Total Repositories: {userInfo.public_repos}</h4>
                                    <Button variant="primary" className="w-100"><a href={userInfo.html_url} className="text-white">See GitHub Profile</a></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default Login;