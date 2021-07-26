import { Box } from "@chakra-ui/react";

const Section = ({ children, ...rest }) => {
  return (
    <Box px={{ base: 4, md: 6 }} {...rest}>
      {children}
    </Box>
  );
};

export default Section;
