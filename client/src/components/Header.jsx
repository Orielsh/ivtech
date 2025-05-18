import { Button, Flex, Text, Anchor, ActionIcon } from "@mantine/core";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { removeTokenFromLS } from "../services/LSService";
import classes from './Header.module.css';

export default function Header() {

    const auth = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    function handleLogOut() {
        auth.setToken(null);
        removeTokenFromLS();
        navigate("/");
    }

    return (
        auth.loginDetails ?
            <Flex gap={10}>
                <Text>
                    Hello, connected as {auth.loginDetails.nickName}
                </Text>
                <Button ml="auto" fw={"bold"} onClick={handleLogOut}>Log out</Button>
                {location.pathname !== "/userInfo" && <Anchor component={Link} to="/userInfo" bg={"blue"} className={classes.login}>
                    <ActionIcon variant="filled" aria-label="Settings">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                    </ActionIcon>
                </Anchor>}
                {location.pathname !== "/" && <Anchor component={Link} to="/" bg={"blue"} className={classes.login}>
                    <ActionIcon variant="filled" aria-label="Settings">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                        </svg>
                    </ActionIcon>
                </Anchor>}
            </Flex>
            :
            <Anchor
                component={Link}
                to={location.pathname === "/login" ? "/" : "/login"} bg={"blue"}
                className={classes.login}
                c={"white"}
                py="2" px={"3"}
            >
                {location.pathname === "/login" ? "Back to home page" : "Login"}
            </Anchor>
    )
}