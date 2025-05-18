import { Container, Card, Text, Textarea, TagsInput, TextInput, Button } from "@mantine/core";
import { useForm } from "react-hook-form"
import { Link, Navigate, useNavigate } from "react-router";
import { useContext, useState } from "react";
import classes from "./CreateQuestion.module.css";
import { createQuestion } from "../../services/questionService"
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { ToastContext } from '../../contexts/ToastContext/ToastContext';

export default function CreateQuestion() {

    const [tags, setTags] = useState([]);
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const toasts = useContext(ToastContext);

    const {
        register,
        handleSubmit,
    } = useForm()

    async function onSubmit(data) {
        try {
            const question = { ...data, tags: tags, userId: auth.loginDetails.id };
            const response = await createQuestion(question, auth.token);
            if (response.success) {
                toasts.addToast({
                    success: true,
                    headerText: "Question added successfully",
                })
                navigate(`/question/${response.data._id}`, {state: response.data});
            }
        } catch (error) {
            toasts?.addToast({ headerText: "Failed", message: error.message, success: false });
        }
    }

    return (
        <Container w={"100%"} pt={20}>
            <Link to={"/"} className={classes.link}>Back to questions</Link>
            <Card withBorder mt="30" component="form" onSubmit={handleSubmit(onSubmit)}>
                <Text fz={"h1"}>
                    Ask a question
                </Text>
                <Text>
                    Get help from the community by asking a clear, detailed question
                </Text>
                <TextInput
                    label="Question Ttile"
                    description="A good title is concise but descriptive"
                    placeholder="What's your question? Be specific."
                    mt={10}
                    {...register("title")}
                    required
                />
                <Textarea
                    styles={{ input: { fontSize: "18px" } }}
                    mt={30}
                    label="Question Details"
                    placeholder="Explain your question in detail. Include any relevant information."
                    resize="vertical"
                    autosize
                    minRows={6}
                    {...register("body")}
                    required
                />
                <TagsInput mt={20} label="Press Enter to submit a tag" placeholder="Add relevant tags" required onChange={setTags} value={tags} data={[]} />
                <Button mt={30} type="submit">Submit question</Button>
            </Card>
        </Container>
    )
}