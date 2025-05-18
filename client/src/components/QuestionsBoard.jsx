import { useState, useEffect, useContext } from "react";
import { getAllQuestions } from "../services/questionService"
import { ToastContext } from '../contexts/ToastContext/ToastContext';
import { Container, Text, List, Flex, useMantineTheme } from "@mantine/core";
import classes from "./QuestionBoard.module.css";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import QuestionCard from "./QuestionCard/QuestionCard";

export default function QuestionsBoard() {
    const [questions, setQuestions] = useState();
    const toasts = useContext(ToastContext);
    const {loginDetails} = useContext(AuthContext)
    const theme = useMantineTheme();
    useEffect(() => {
        (async () => {
            try {
                const response = await getAllQuestions();
                if (response.success)
                    setQuestions(response.data);
            } catch (error) {
                toasts?.addToast({ headerText: "Failed", message: error.message, success: false });
            }
        })();
    }, [])
    return (
        <Container>
            <Flex justify={"space-between"}>
                <Text variant="text" component="h1" fw={500} fz={"h1"}>Questions Board</Text>
                {loginDetails && <Link to={"/createQuestion"} className={classes.create} style={{ backgroundColor: theme.colors.blue[5] }}>Ask a question</Link>}
            </Flex>
            <Text fz={"h3"} mb={20}>Find answers or ask the community</Text>
            <List listStyleType="none" className={classes.list} styles={{ itemWrapper: { width: "100%" }, itemLabel: { width: "100%" } }}>
                {questions?.map((question) => (
                    <List.Item key={question._id} className={classes.item}>
                        <QuestionCard question={question}/>
                    </List.Item>
                ))}
            </List>
        </Container >
    )
}