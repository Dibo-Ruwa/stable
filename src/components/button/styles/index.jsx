import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
  background-color: ${props => (props.bordered ?'transparent' :`${props.color}`)};
  color: ${props => (props.bordered ? `${props.color}` : '#fff')};
  border: ${props => (props.bordered ? `2px solid ${props.color}` : 'none')};
  border-radius: 10px;
  padding: ${props =>
    props.size === 'xs'
      ? '4px 8px'
      : props.size === 'sm'
      ? '8px 16px'
      : props.size === 'md'
      ? '12px 24px'
      : props.size === 'lg'
      ? '20px 50px'
      : '20px 40px'};
  font-size: ${props =>
    props.size === 'xs'
      ? '12px'
      : props.size === 'sm'
      ? '14px'
      : props.size === 'md'
      ? '16px'
      : props.size === 'lg'
      ? '18px'
      : '20px'};
  font-weight: 600;
  cursor: pointer;
  outline: none;
`;
