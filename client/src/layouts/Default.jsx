import { Route, Routes } from "react-router";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home/Home";
import UserInfo from "../pages/UserInfo/UserInfo";
import Header from "../components/Header";
import QuestionPage from "../pages/QuestionPage/QuestionPage";
import { Flex } from "@mantine/core";
import CreateQuestion from "../pages/CreateQuestion/CreateQuestion";

export default function Default() {
  return (
    <Flex direction={"column"} h={"100vh"} p={10} gap={10}>
      <Header />
      <Flex justify={"center"}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/userInfo' element={<UserInfo />} />
          <Route path='/createQuestion' element={<CreateQuestion />} />
          <Route path='/question/:id' element={<QuestionPage />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Flex>
    </Flex>
  )
}
