import { Text, Paper, Flex } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { getUserById } from "../../services/userService"
import { ToastContext } from '../../contexts/ToastContext/ToastContext';

export default function UserInfo() {

    const auth = useContext(AuthContext);
    const [userDetails, setUserDetails] = useState();
    const toasts = useContext(ToastContext);

    useEffect(() => {
        if (auth && auth.loginDetails)
            (async () => {
                try {
                    const response = await getUserById(auth.token, auth.loginDetails?.id)
                    if (response.success)
                        setUserDetails(response.data);
                }
                catch (error) {
                    toasts?.addToast({ headerText: "Failed", message: error.message, success: false });
                }
            })();
    }, [auth.loginDetails])

    return (


        <Paper shadow="md" pe="100" w={"100%"} p={50} m={10}>
            <Flex direction={"column"} gap={5}>
                <Text>
                    full name:
                </Text>
                <Text fw={"bold"}>{userDetails?.fullName}</Text>
                <Text>
                    Nickname:
                </Text>
                <Text component="span" fw={"bold"}>
                    {userDetails?.nickName}
                </Text>
                <Text>
                    Email:
                </Text>
                <Text component="span" fw={"bold"}>
                    {userDetails?.email}
                </Text>
                <Text>
                    Questions:
                </Text>
                <Text component="span" fw={"bold"}>
                    {userDetails?.questions?.length > 0 ? userDetails.questions.length : "No questions asked"}
                </Text>
                <Text>
                    Answers:
                </Text>
                <Text component="span" fw={"bold"}>
                    {userDetails?.answers?.length > 0 ? userDetails.answers.length : "No answers given"}
                </Text>
            </Flex>
        </Paper>


    );
};