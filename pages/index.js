import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Image } from "components/Image";
import Layout, { Container } from "components/Layout";
import { Link } from "components/Link";
import dateFormat from "dateformat";
import { TiMediaPlay, TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { GoThreeBars } from "react-icons/go";

const HomePage = () => {
  return (
    <Layout>
      {/* First Section */}
      <Container as="section">
        <Grid templateColumns="1fr 1fr 1fr 1fr" columnGap={5} mb={10}>
          <GridItem colSpan={2}>
            <LG_StackCard badge="news" />
          </GridItem>

          <GridItem>
            <MiniSection>
              <MD_StackCard
                badge="business"
                title="Fake engagement is only half the problem"
              />

              <MD_StackCard
                badge="arts"
                title="The Smoke Signal by Frederic Remington, long distance communication"
              />

              <MD_StackCard
                badge="politics"
                title="The Smoke Signal by Frederic Remington, long distance communication"
              />
            </MiniSection>
          </GridItem>

          <GridItem>
            <Stack spacing={5}>
              <MiniSection title="Editor Picks">
                <SM_ListCard title="Jen Kendall Kicked off American Airlines First Flight" />
              </MiniSection>

              <AdCard />

              <MiniSection title="Business">
                <SM_ListCard title="Jen Kendall Kicked off American Airlines First Flight" />
                <SM_ListCard title="Jen Kendall Kicked off American Airlines First Flight" />
                <SM_ListCard title="Jen Kendall Kicked off American Airlines First Flight" />
              </MiniSection>
            </Stack>
          </GridItem>
        </Grid>

        <HStack spacing={1} alignItems="stretch" mb={10}>
          <Box bg="gray.100" p={5}>
            <Heading fontSize="md" color="purple.800" mb={5}>
              New Podcast
            </Heading>

            <Flex>
              <Box>
                <TitleText
                  fontSize="sm"
                  text="Mark Steinberg Reads Donald Trump’s Mean Tweets on Kimmel"
                />

                <DateText my={1} />
              </Box>

              <Image rounded="full" boxSize="60px" src="/img/shoes.jpg" />
            </Flex>
          </Box>

          <Box bg="gray.100" p={5}>
            <Heading fontSize="md" color="purple.800" mb={5}>
              Subscribe to our newsletter
            </Heading>

            <MoreText
              text="To be updated with all the latest news, offers and special announcements."
              fontStyle="italic"
              size="xs"
              mb={4}
            />

            <Flex as="form">
              <Input
                rounded="none"
                placeholder="Your email address"
                size="xs"
                h="40px"
                bg="white"
                color="black"
              />
              <Box h="40px">
                <Button
                  bg="purple.800"
                  color="white"
                  rounded="none"
                  size="xs"
                  h="40px"
                  _hover={{ opacity: 0.8 }}
                >
                  SUBSCRIBE
                </Button>
              </Box>
            </Flex>
          </Box>

          <Box bg="gray.100" p={5}>
            <Heading fontSize="md" color="purple.800" mb={5}>
              Stay Connected
            </Heading>

            <HStack spacing={1} color="white">
              <Link mute>
                <Box
                  transition=".15s"
                  _hover={{ bg: "black" }}
                  textAlign="center"
                  bg="facebook.300"
                  p={2}
                  w="84px"
                >
                  <Icon fontSize="1.5rem">
                    <TiSocialFacebook />
                  </Icon>

                  <Text fontWeight="bold">16,000</Text>
                  <Text fontSize="xs">Fans</Text>
                </Box>
              </Link>
              <Link mute>
                <Box
                  transition=".15s"
                  _hover={{ bg: "black" }}
                  textAlign="center"
                  bg="twitter.400"
                  p={2}
                  w="84px"
                >
                  <Icon fontSize="1.5rem">
                    <TiSocialTwitter />
                  </Icon>

                  <Text fontWeight="bold">16,000</Text>
                  <Text fontSize="xs">Followers</Text>
                </Box>
              </Link>
              <Link mute>
                <Box
                  transition=".15s"
                  _hover={{ bg: "black" }}
                  textAlign="center"
                  bg="red.500"
                  p={2}
                  w="84px"
                >
                  <Icon fontSize="1.5rem">
                    <TiMediaPlay />
                  </Icon>

                  <Text fontWeight="bold">16,000</Text>
                  <Text fontSize="xs">Subscribers</Text>
                </Box>
              </Link>
            </HStack>
          </Box>
        </HStack>

        <Grid templateColumns="1fr 1.9fr 1.1fr" mb={10}>
          <GridItem
            as="aside"
            h="fit-content"
            pos="sticky"
            top={{ md: "87.43px", lg: "60px" }}
          >
            <MiniSection
              title="Magazine"
              p={5}
              border="1px"
              borderColor="gray.300"
              moreButton
            >
              <SM_ListCard
                title="Jen Kendall Kicked off American Airlines First Flight"
                noImage
                borderBottom="1px"
                borderColor="gray.300"
                pb={2}
              />
              <SM_ListCard
                title="Jen Kendall Kicked off American Airlines First Flight"
                noImage
                borderBottom="1px"
                borderColor="gray.300"
                pb={2}
              />
              <SM_ListCard
                title="Jen Kendall Kicked off American Airlines First Flight"
                noImage
                borderBottom="1px"
                borderColor="gray.300"
                pb={2}
              />
              <SM_ListCard
                title="Jen Kendall Kicked off American Airlines First Flight"
                noImage
                borderBottom="1px"
                borderColor="gray.300"
                pb={2}
              />
            </MiniSection>
          </GridItem>

          <GridItem>
            <MiniSection title="Politics" p={5}>
              <MD_ListCard
                badge="arts"
                title="The Smoke Signal by Frederic Remington, long distance communication"
              />

              <MD_ListCard
                badge="arts"
                title="The Smoke Signal by Frederic Remington, long distance communication"
              />

              <MD_ListCard
                badge="arts"
                title="The Smoke Signal by Frederic Remington, long distance communication"
              />

              <MD_ListCard
                badge="arts"
                title="The Smoke Signal by Frederic Remington, long distance communication"
              />

              <MD_ListCard
                badge="arts"
                title="The Smoke Signal by Frederic Remington, long distance communication"
              />
            </MiniSection>
          </GridItem>

          <GridItem as="aside">
            <MiniSection
              title="Sport"
              p={5}
              mb={5}
              border="1px"
              borderColor="gray.300"
              moreButton
            >
              <SM_ListCard
                title="Jen Kendall Kicked off American Airlines First Flight"
                imageIsRound={false}
              />
              <SM_ListCard
                title="Jen Kendall Kicked off American Airlines First Flight"
                imageIsRound={false}
              />
              <SM_ListCard
                title="Jen Kendall Kicked off American Airlines First Flight"
                imageIsRound={false}
              />
            </MiniSection>

            <Box border="1px" borderColor="gray.300">
              <AdCard />

              <MiniSection title="Culture" p={5}>
                <SM_ListCard
                  title="Jen Kendall Kicked off American Airlines First Flight"
                  imageIsRound={false}
                />
                <SM_ListCard
                  title="Jen Kendall Kicked off American Airlines First Flight"
                  imageIsRound={false}
                />
              </MiniSection>
            </Box>
          </GridItem>
        </Grid>

        <Grid templateColumns="1fr 1.9fr 1.1fr" mb={10}>
          <GridItem
            as="aside"
            h="fit-content"
            pos="sticky"
            top={{ md: "87.43px", lg: "60px" }}
          >
            <MiniSection
              title="Arts"
              p={5}
              border="1px"
              borderColor="gray.300"
              moreButton
            >
              <MD_StackCard
                imageProps={{ h: "60px" }}
                badge="arts"
                title="Fake engagement is only half the problem"
              />
              <MD_StackCard
                imageProps={{ h: "60px" }}
                badge="arts"
                title="Fake engagement is only half the problem"
              />
              <MD_StackCard
                imageProps={{ h: "60px" }}
                badge="arts"
                title="Fake engagement is only half the problem"
              />
            </MiniSection>
          </GridItem>

          <GridItem>
            <MiniSection title="Style" p={5}>
              <LG_StackCard badge="style" imageBadge revereHeader />

              <MD_ListCard
                badge="style"
                title="The Smoke Signal by Frederic Remington, long distance communication"
              />

              <MD_ListCard
                badge="style"
                title="The Smoke Signal by Frederic Remington, long distance communication"
              />

              <MD_ListCard
                badge="style"
                title="The Smoke Signal by Frederic Remington, long distance communication"
              />
            </MiniSection>
          </GridItem>

          <GridItem as="aside">
            <MiniSection
              title="Travel"
              p={5}
              mb={5}
              border="1px"
              borderColor="gray.300"
              moreButton
            >
              <SM_ListCard
                title="Jen Kendall Kicked off American Airlines First Flight"
                imageIsRound={false}
              />
              <SM_ListCard
                title="Jen Kendall Kicked off American Airlines First Flight"
                imageIsRound={false}
              />
            </MiniSection>

            <AdCard mb={5} />

            <MiniSection
              title="Culture"
              p={5}
              border="1px"
              borderColor="gray.300"
              moreButton
            >
              <SM_ListCard
                title="Jen Kendall Kicked off American Airlines First Flight"
                imageIsRound={false}
              />
              <SM_ListCard
                title="Jen Kendall Kicked off American Airlines First Flight"
                imageIsRound={false}
              />
              <SM_ListCard
                title="Jen Kendall Kicked off American Airlines First Flight"
                imageIsRound={false}
              />
            </MiniSection>
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  );
};

const LG_StackCard = ({ badge, imageBadge, revereHeader }) => {
  const renderHeader = () => (
    <Box mb={3}>
      {!imageBadge && <Badge text="news" />}

      <TitleText
        text={`Customer Engagement Marketing: A New Strategy for the Economy`}
      />

      <DateText text="Emilio Montes" />
    </Box>
  );

  return (
    <Box pb={5}>
      {!revereHeader && renderHeader()}

      <CardImage
        w="100%"
        h={{ md: "400px", xl: "500px" }}
        src="/img/news.jpg"
        badge={imageBadge && badge}
        wrapperProps={{ mb: 3 }}
      />

      {revereHeader && renderHeader()}

      <MoreText text="The main thing that you have to remember on this journey is just be nice to everyone and always smile. Refreshingly, what was expected of her was the..." />
    </Box>
  );
};

const MD_StackCard = ({ badge, title, imageProps }) => (
  <Box>
    <CardImage
      w="100%"
      h="100px"
      src="/img/news.jpg"
      badge={badge}
      {...imageProps}
    />

    <TitleText size="sm" text={title} my={2} />

    <DateText />
  </Box>
);

const MD_ListCard = ({ badge, title }) => (
  <Flex>
    <Box>
      <CardImage w="150px" h="100px" src="/img/news.jpg" badge={badge} />
    </Box>

    <Box borderTop="1px" borderColor="gray.300" p={2} ml={3}>
      <TitleText size="sm" text={title} />

      <DateText />
    </Box>
  </Flex>
);

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

const AdCard = ({ ...rest }) => (
  <Flex flexDir="column" alignItems="center" {...rest}>
    <Text textAlign="center" opacity=".7" fontSize="xs" mb={1}>
      - Advertisement -
    </Text>

    <CardImage boxSize={200} src="/img/shoes.jpg" />
  </Flex>
);

const CardImage = ({ wrapperProps, badge, w, h, src, ...rest }) => (
  <Box w={w} h={h} pos="relative" {...wrapperProps}>
    <Image w="100%" h="100%" src={src} {...rest} />
    {badge && (
      <Badge pos="absolute" bottom={0} left={0} zIndex={1} text={badge} />
    )}
  </Box>
);

const Badge = ({ text, ...rest }) => (
  <Text
    p={1}
    lineHeight={1}
    fontSize="xx-small"
    fontWeight={500}
    letterSpacing={1}
    bg="purple.800"
    color="white"
    textTransform="uppercase"
    w="fit-content"
    {...rest}
  >
    {text}
  </Text>
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

const MoreText = ({ text, size = "sm", ...rest }) => (
  <Text fontSize={size} {...rest}>
    {text}
  </Text>
);

const MiniSection = ({ title, children, moreButton, ...rest }) => {
  return (
    <Box {...rest}>
      <Stack spacing={4}>
        {title && (
          <Heading fontSize="lg" color="purple.800">
            {title}
          </Heading>
        )}
        {children}
      </Stack>

      {moreButton && (
        <Button
          rightIcon={<GoThreeBars />}
          size="sm"
          bg="black"
          color="white"
          rounded="sm"
          _hover={{ bg: "purple.800" }}
          w="fit-content"
          mt={8}
        >
          More from {title}
        </Button>
      )}
    </Box>
  );
};

export default HomePage;
