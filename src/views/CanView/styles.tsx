import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f3f4f6;
  overflow: auto;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #376281;
  overflow: hidden;
`;

export const Logos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Header = styled.div`
  background-color: #376281;
  color: white;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const SmallText = styled.div`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

export const Subtitle = styled.p`
  font-size: 0.75rem;
`;

export const Subtitle2 = styled.p`
  padding: 1rem 1rem 0 1rem;
  font-size: 1.25;
`;

export const Amount = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const MainContent = styled.div`
  background-color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border-radius: 1rem 1rem 0 0;
  overflow: auto;
`;

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border: 2px solid #e5e7eb;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1rem;
`;

export const LoadingText = styled.div`
  color: #4b5563;
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #93c5fd;
  color: #1f2937;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  border-radius: 3rem;

  &:hover {
    background-color: #60a5fa;
  }
`;
