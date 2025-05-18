import { Text, Flex, Group, Badge, ActionIcon, Card } from "@mantine/core";
import { Link } from "react-router";
import formatDate from "../../utils/date";
import classes from "./QuestionCard.module.css"

export default function QuestionCard({ question }) {
    return (
        question
        &&
        <Card w={"50vw"} className={classes.card}>
            <Link className={classes.link} to={ `/question/${question._id}`} state={question}>{question.title}</Link>
            <Text lineClamp={2} className={classes.q_body} mt={10}>{question.body}</Text>
            <Flex mt={20} align={"center"}>
                <Group>
                    {question?.tags?.map((tag) => (
                        <Badge variant="light" color="blue" size="lg" radius="lg" key={tag}>{tag}</Badge>
                    ))}
                </Group>
                <Group ms={"auto"} gap={2}>
                    <ActionIcon variant="subtle" aria-label="Comments" size={22}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                    </ActionIcon>
                    <Text fz="lg">{question?.answers?.length ?? 0}</Text>
                </Group>
                <Group ms={30} gap={0}>
                    <Text>Asked by
                        <Text span fw={"bold"}>
                            &nbsp;{question?.userId?.nickName}
                        </Text>
                        <Text span>
                            &nbsp; on {formatDate(question.createdAt)}
                        </Text>
                    </Text>
                </Group>
            </Flex>
        </Card>
    )
}