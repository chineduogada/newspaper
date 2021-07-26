import NextLink from "next/link";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

export const Link = ({ children, href = "#", as, mute, d, ...rest }) => {
  return (
    <NextLink href={href} as={as}>
      <a style={d ? { display: d } : {}}>
        <Box
          as="span"
          _hover={{
            color: "brand.black1",
            textDecoration: mute ? "none" : "underline",
          }}
          {...rest}
        >
          {children}
        </Box>
      </a>
    </NextLink>
  );
};

Link.propTypes = {
  children: PropTypes.any.isRequired,
  mute: PropTypes.bool,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
