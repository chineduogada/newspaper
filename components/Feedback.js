import { Flex } from "@chakra-ui/layout";
import { Button, Icon, Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { MdError } from "react-icons/md";

const Wrapper = ({ icon, text, children, ...rest }) => (
  <Flex
    flexDir="column"
    h="60vh"
    justifyContent="center"
    alignItems="center"
    textAlign="center"
    color="brand.secondary"
    {...rest}
  >
    {icon}
    <Text type="lg-bold">{text}</Text>
    {children}
  </Flex>
);

export const Loader = ({ message, ...rest }) => (
  <Wrapper icon={<Spinner />} text={message} {...rest} />
);

//
export const SomethingWentWrong = ({
  message = "Sorry, something went wrong",
  description,
  onRetry,
  ...rest
}) => (
  <Wrapper
    icon={
      <Icon fontSize="2rem">
        <MdError />
      </Icon>
    }
    text={message}
    {...rest}
  >
    {description && <Text type="md-regular">{description}</Text>}
    {onRetry && (
      <Button onClick={onRetry} mt={2}>
        Retry
      </Button>
    )}
  </Wrapper>
);
