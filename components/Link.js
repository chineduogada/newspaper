import NextLink from "next/link";
import PropTypes from "prop-types";
import { Link as LinkUI } from "@chakra-ui/react";

export const Link = ({
  children,
  href = "#",
  as,
  mute,
  d = "inline",
  w = "auto",
  ...rest
}) => {
  return (
    <NextLink href={href} as={as} passHref>
      <LinkUI
        _hover={{
          color: "inherit",
          textDecoration: mute ? "none" : "underline",
        }}
        {...rest}
      >
        {children}
      </LinkUI>
    </NextLink>
  );
};

Link.propTypes = {
  children: PropTypes.any.isRequired,
  mute: PropTypes.bool,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
