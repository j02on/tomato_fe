import styled from "@emotion/styled"
import { colors, Flex, Text } from "../design-token"
import {Button} from "./Button"

interface IModalType {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen?: boolean;
  onDelete: () => void
}

export const DelModal = ({setIsOpen, isOpen, onDelete} : IModalType) => {

  return (
    isOpen && (
    <Back>
      <ModalContent>
      <Flex isColumn gap={40} alignItems="center">
        <Flex isColumn gap={8} alignItems="center">
          <Text fontSize={20} fontWeight={600}>삭제하시겠습니까?</Text>
          <Text fontSize={12} fontWeight={300} color={colors.gray[700]}>삭제하시면 다시 복구할 수 없습니다</Text>
        </Flex>
        <Flex gap={12} alignItems="center">
          <Button backgroundColor={colors.red[100]} color={colors.red[600]} onClick={() => setIsOpen(false)}>취소</Button>
          <Button onClick={onDelete}>삭제</Button>
        </Flex>
      </Flex>
      </ModalContent>
    </Back>
    )
  )
}

const Back = styled.div `
  width: 100vw;
  height: 100vh;
  background-color: #00000014;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`

const ModalContent  = styled.div `
  min-width: 398px;
  padding: 40px 80px;
  border-radius: 20px;
  background-color: ${colors.gray[100]};
  display: flex;
  justify-content: center;
  align-items: center;
`