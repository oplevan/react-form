import React from 'react';
import {
  MessageWrapper,
  Inner,
  MessageContent,
  MessageIcon,
  Text,
  CloseButton,
} from './styles/message';
import { RiCloseLine, RiCheckboxCircleFill } from 'react-icons/ri';

const Message = (props) => {
  const handleOnClose = () => {
    //console.log(props);
    //setOpen(false);
    setTimeout(() => {
      props.onClose(false);
    }, 200);
  };
  return (
    <MessageWrapper>
      <Inner>
        <MessageContent>
          <MessageIcon>
            <RiCheckboxCircleFill />
          </MessageIcon>
          <Text>Your application was successfully sent.</Text>
        </MessageContent>
        <CloseButton onClick={() => handleOnClose()}>
          <RiCloseLine />
        </CloseButton>
      </Inner>
    </MessageWrapper>
  );
};

export default Message;
