import styled from '@emotion/styled';
import { colors } from '../design-token';

interface IButtonType {
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  onClick: () => void;
  children: string;
  isBlocked?: boolean;
  width?: string;
  isRound?: boolean
}

export const Button = ({
  backgroundColor = colors.red[600],
  color = colors.gray[100],
  borderColor = 'transparent',
  onClick,
  children,
  isBlocked,
  width,
  isRound
}: IButtonType) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      color={color}
      borderColor={borderColor}
      onClick={onClick}
      isBlocked={isBlocked}
      width={width}
      isRound={isRound}
    >
      {children}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button<
  Omit<IButtonType, 'onClick' & 'children'>
>`
  width: ${({ width }) => (width ? width : 'fit-content')};
  padding: 15px 27px;
  border-radius: ${({ isRound }) => (isRound ? '100px' : '12px')};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
  cursor: pointer;
  font-size: 20px;
  opacity: ${({ isBlocked }) => (isBlocked ? 0.5 : 1)};
  pointer-events: ${({ isBlocked }) => (isBlocked ? 'none' : 'cursor')};
  white-space: nowrap;
`;
