import styled from "@emotion/styled"
import { Button, Inputs } from "../components"
import { colors, Flex, Text } from "../design-token"
import { useState } from "react"

export const Login = () => {
  const [datas, setDatas] = useState<{id : string, password: string}>({
    id: '',
    password: ''
  })

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>, type: string) => {
    setDatas((prev) => ({ ...prev, [type]: e.target.value }));
  }

  
  return (
    <Container>
      <LoginContent>
        <Flex isColumn gap={32}>
          <Text fontSize={24} fontWeight={700}>로그인</Text>
          <Flex width="100%" gap={12} isColumn>
            <Inputs value={datas.id} onChange={(e) => handleChange(e, "id")} label="아이디" placeholder="아이디를 입력하세요"/>
            <Inputs isPwd value={datas.password} onChange={(e) => handleChange(e, "password")} label="비밀번호" placeholder="비밀번호를 입력하세요"/>
          </Flex>
          <Button width="100%">로그인</Button>
        </Flex>
      </LoginContent>
    </Container>
  )
}

const Container = styled.div `
  width: 100vw;
  height: 100vh;
  background-color: #FAFAFA;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

const LoginContent = styled.div `
  border-radius: 24px;
  background-color: ${colors.gray[100]};
  border: 1px solid ${colors.gray[300]};
  padding: 27px 38px;
  width: 500px;
`