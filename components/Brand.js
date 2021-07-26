import { Text } from "@chakra-ui/react";
import { Link } from "./Link";

const Brand = ({ size = "2xl", ...rest }) => {
  return (
    <Link mute>
      <Text
        fontWeight="500"
        fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
        fontSize={size}
        {...rest}
      >
        NEWS PAPER
      </Text>
    </Link>
  );
};

export default Brand;
