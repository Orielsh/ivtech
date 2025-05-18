import { Card, Container, Text, Textarea, Button, Stack } from "@mantine/core";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { getQuestionById } from "../../services/questionService";
import { ToastContext } from '../../contexts/ToastContext/ToastContext';
import { createAnswer } from "../../services/questionService"
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import formatDate from "../../utils/date";

export default function QuestionPage() {

    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();
    const params = useParams();
    const toasts = useContext(ToastContext);
    const auth = useContext(AuthContext)

    useEffect(() => {
        (async () => {
            try {
                const response = await getQuestionById(params.id);
                if (response.success)
                    setQuestion(response.data)
            } catch (error) {
                toasts?.addToast({ headerText: "Failed", message: error.message, success: false });
            }
        })();
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await createAnswer(auth.token, params.id, { body: answer });
            if (response.success) {
                setQuestion(prevState => ({
                    ...prevState,
                    answers: prevState.answers ? [...prevState.answers, response.data] : [response.data],
                }));
                toasts.addToast({
                    success: true,
                    headerText: "Login success",
                });
                setAnswer("");
            }
        } catch (error) {
            toasts?.addToast({ headerText: "Failed", message: error.message, success: false });
        }
    }

    return (
        question &&
        <Container>
            <QuestionCard question={question} />
            {question.answers?.map((answer) => (
                <Card w={"50vw"} mt={30} key={answer._id}>
                    <Text>
                        {answer.body}
                    </Text>

                    <Text mt={10} ms={"auto"} >
                        By {answer.userId.nickName}
                        &nbsp;
                        On {formatDate(answer.createdAt)}
                    </Text>

                </Card>
            ))}
            <Stack component={"form"} onSubmit={handleSubmit} w={"50vw"}>
                <Textarea
                    styles={{ input: { fontSize: "18px" } }}
                    mt={30}
                    label="Your Answer"
                    placeholder="Answer in detail.."
                    resize="vertical"
                    autosize
                    minRows={6}
                    required
                    onChange={(event) => setAnswer(event.target.value)}
                    value={answer}
                />
                <Button type="submit">
                    Post your Answer
                </Button>
            </Stack>
        </Container>
    )
}