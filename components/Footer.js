import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import dateFormat from "dateformat";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialYoutube,
} from "react-icons/ti";
import { FiChevronsUp } from "react-icons/fi";
import Brand from "./Brand";
import { Image } from "./Image";
import { Link } from "./Link";

const Footer = () => {
  return (
    <Box pos="relative">
      <Image
        filter="brightness(20%)"
        pos="absolute"
        w="100%"
        h="100%"
        src="/img/footer.jpg"
      />

      <Box color="white" pos="relative" zIndex={1}>
        <Grid templateColumns="1.7fr .8fr .8fr 1.2fr" pt={16} px={5}>
          <GridItem>
            <Box w="200px">
              <Brand size="3xl" />

              <Text fontSize="xs" my={4}>
                © Munich, LLC. All rights reserved. Pulses Pro® is a registered
                U.S. trademark of tagDiv, LLC.
              </Text>

              <HStack spacing="2">
                <Link>
                  <Icon fontSize="1.5rem">
                    <TiSocialFacebook />
                  </Icon>
                </Link>
                <Link>
                  <Icon fontSize="1.5rem">
                    <TiSocialTwitter />
                  </Icon>
                </Link>
                <Link>
                  <Icon fontSize="1.5rem">
                    <TiSocialInstagram />
                  </Icon>
                </Link>
                <Link>
                  <Icon fontSize="1.5rem">
                    <TiSocialYoutube />
                  </Icon>
                </Link>
              </HStack>
            </Box>
          </GridItem>

          <GridItem>
            <Heading as="h6" fontSize="lg" color="yellow.500" mb={5}>
              About Us
            </Heading>

            <Stack spacing={1}>
              <Link
                mute
                fontSize="xx-small"
                textTransform="uppercase"
                letterSpacing={1}
                _hover={{ color: "yellow.500" }}
              >
                Advertise
              </Link>
              <Link
                mute
                fontSize="xx-small"
                textTransform="uppercase"
                letterSpacing={1}
                _hover={{ color: "yellow.500" }}
              >
                Advertise
              </Link>
              <Link
                mute
                fontSize="xx-small"
                textTransform="uppercase"
                letterSpacing={1}
                _hover={{ color: "yellow.500" }}
              >
                Advertise
              </Link>
              <Link
                mute
                fontSize="xx-small"
                textTransform="uppercase"
                letterSpacing={1}
                _hover={{ color: "yellow.500" }}
              >
                Advertise
              </Link>
              <Link
                mute
                fontSize="xx-small"
                textTransform="uppercase"
                letterSpacing={1}
                _hover={{ color: "yellow.500" }}
              >
                Advertise
              </Link>
              <Link
                mute
                fontSize="xx-small"
                textTransform="uppercase"
                letterSpacing={1}
                _hover={{ color: "yellow.500" }}
              >
                Advertise
              </Link>
            </Stack>
          </GridItem>

          <GridItem>
            <Heading as="h6" fontSize="lg" color="yellow.500" mb={5}>
              Popular Category
            </Heading>

            <Stack spacing={1}>
              <Link
                mute
                fontSize="xx-small"
                textTransform="uppercase"
                letterSpacing={1}
                _hover={{ color: "yellow.500" }}
              >
                Advertise
              </Link>
              <Link
                mute
                fontSize="xx-small"
                textTransform="uppercase"
                letterSpacing={1}
                _hover={{ color: "yellow.500" }}
              >
                Advertise
              </Link>
              <Link
                mute
                fontSize="xx-small"
                textTransform="uppercase"
                letterSpacing={1}
                _hover={{ color: "yellow.500" }}
              >
                Advertise
              </Link>
              <Link
                mute
                fontSize="xx-small"
                textTransform="uppercase"
                letterSpacing={1}
                _hover={{ color: "yellow.500" }}
              >
                Advertise
              </Link>
              <Link
                mute
                fontSize="xx-small"
                textTransform="uppercase"
                letterSpacing={1}
                _hover={{ color: "yellow.500" }}
              >
                Advertise
              </Link>
              <Link
                mute
                fontSize="xx-small"
                textTransform="uppercase"
                letterSpacing={1}
                _hover={{ color: "yellow.500" }}
              >
                Advertise
              </Link>
            </Stack>
          </GridItem>

          <GridItem>
            <Heading as="h6" fontSize="lg" color="yellow.500" mb={5}>
              Editor Picks
            </Heading>

            <Stack spacing={5}>
              <SM_ListCard
                title="Now Is the Time to Think About Your Small-Business Success"
                imageIsRound={false}
              />

              <SM_ListCard
                title="Program Will Lend $10M to New Detroit Minority Businesses"
                imageIsRound={false}
              />
            </Stack>
          </GridItem>
        </Grid>

        <Flex justifyContent="flex-end" px={5} pb={5}>
          <Link href="?top=true">
            <Button rounded="sm" size="sm" colorScheme="purple">
              <FiChevronsUp />
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

const SM_ListCard = ({ title, imageIsRound = "full", noImage, ...rest }) => (
  <Flex {...rest}>
    <Box mr={5}>
      <TitleText size="sm" text={title} mb={1} />

      <DateText />
    </Box>

    {!noImage && (
      <CardImage
        wrapperProps={{
          flexShrink: 0,
        }}
        boxSize={50}
        src="/img/news.jpg"
        rounded={imageIsRound}
      />
    )}
  </Flex>
);

const CardImage = ({ wrapperProps, w, h, src, ...rest }) => (
  <Box w={w} h={h} pos="relative" {...wrapperProps}>
    <Image w="100%" h="100%" src={src} {...rest} />
  </Box>
);

const TitleText = ({ text, size = "2xl", ...rest }) => (
  <Heading
    fontSize={size}
    fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
    {...rest}
  >
    {text}
  </Heading>
);

const DateText = ({ date = Date.now(), text, size = "xs", ...rest }) => (
  <Text fontStyle="italic" fontSize={size} {...rest}>
    {text}
    {text && " - "}
    {dateFormat(date, "fullDate")}
  </Text>
);

export default Footer;
