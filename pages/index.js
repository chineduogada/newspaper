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
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr .9fr 1.1fr",
            lg: "1fr 1fr 1fr 1fr",
          }}
          columnGap={{ md: 5 }}
          rowGap={10}
          mb={10}
        >
          <GridItem colSpan={{ base: 1, md: 2 }}>
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
      </Container>

      <Container
        as="section"
        wider
        d="flex"
        flexDir={{ base: "column", md: "row" }}
        alignItems="stretch"
        mb={10}
      >
        <Box bg="gray.100" p={{ base: 2, lg: 5 }} flex={1}>
          <Heading
            fontSize={{ base: "xl", md: "lg", lg: "md" }}
            color="purple.800"
            mb={{ base: 5, md: 10, lg: 5 }}
          >
            New Podcast
          </Heading>

          <Flex justifyContent="space-between">
            <Box mr={2}>
              <TitleText
                fontSize={{ base: "md", md: "sm" }}
                text="Mark Steinberg Reads Donald Trump’s Mean Tweets on Kimmel"
              />

              <DateText my={1} />
            </Box>

            <Image
              rounded="full"
              boxSize="60px"
              src="/img/shoes.jpg"
              d={{ md: "none", lg: "block" }}
            />
          </Flex>
        </Box>

        <Box
          bg="gray.100"
          p={{ base: 2, lg: 5 }}
          my={{ base: 5, md: 0 }}
          mx={{ base: 0, md: 1, lg: 5 }}
          flex={1}
        >
          <Heading
            fontSize={{ base: "xl", md: "lg", lg: "md" }}
            color="purple.800"
            mb={5}
          >
            Subscribe to our newsletter
          </Heading>

          <MoreText
            text="To be updated with all the latest news, offers and special announcements."
            fontStyle="italic"
            size={{ base: "md", md: "xs" }}
            mb={4}
          />

          <Flex flexDir={{ base: "column", lg: "row" }} as="form">
            <Input
              rounded="none"
              placeholder="Your email address"
              size={{ base: "md", md: "sm", lg: "xs" }}
              h="40px"
              px={5}
              bg="white"
              color="black"
            />
            <Box h="40px">
              <Button
                bg="purple.800"
                color="white"
                rounded="none"
                size={{ base: "md", md: "sm", lg: "xs" }}
                w={{ base: "100%", lg: "auto" }}
                h="40px"
                px={5}
                _hover={{ opacity: 0.8 }}
              >
                SUBSCRIBE
              </Button>
            </Box>
          </Flex>
        </Box>

        <Box bg="gray.100" p={{ base: 2, lg: 5 }} flex={1}>
          <Heading
            fontSize={{ base: "xl", md: "lg", lg: "md" }}
            color="purple.800"
            mb={{ base: 5, md: 10, lg: 5 }}
          >
            Stay Connected
          </Heading>

          <HStack spacing={{ base: 1, lg: 5 }} color="white">
            <Link mute flex={{ base: 1, md: 0, lg: 1 }}>
              <Box
                w={{ base: "100%", md: "84px", lg: "100%" }}
                transition=".15s"
                _hover={{ bg: "black" }}
                textAlign="center"
                bg="facebook.300"
                p={2}
              >
                <Icon fontSize="1.5rem">
                  <TiSocialFacebook />
                </Icon>

                <Text fontWeight="bold">16,000</Text>
                <Text fontSize={{ base: "md", md: "sm", lg: "xs" }}>Fans</Text>
              </Box>
            </Link>
            <Link mute flex={{ base: 1, md: 0, lg: 1 }}>
              <Box
                w={{ base: "100%", md: "84px", lg: "100%" }}
                transition=".15s"
                _hover={{ bg: "black" }}
                textAlign="center"
                bg="twitter.400"
                p={2}
              >
                <Icon fontSize="1.5rem">
                  <TiSocialTwitter />
                </Icon>

                <Text fontWeight="bold">16,000</Text>
                <Text fontSize={{ base: "md", md: "sm", lg: "xs" }}>
                  Followers
                </Text>
              </Box>
            </Link>
            <Link mute flex={{ base: 1, md: 0, lg: 1 }}>
              <Box
                w={{ base: "100%", md: "84px", lg: "100%" }}
                transition=".15s"
                _hover={{ bg: "black" }}
                textAlign="center"
                bg="red.500"
                p={2}
              >
                <Icon fontSize="1.5rem">
                  <TiMediaPlay />
                </Icon>

                <Text fontWeight="bold">16,000</Text>
                <Text
                  fontSize={{ base: "md", md: "sm" }}
                  d={{ base: "block", lg: "none" }}
                >
                  Subs
                </Text>
                <Text fontSize="xs" d={{ base: "none", lg: "block" }}>
                  Subscribers
                </Text>
              </Box>
            </Link>
          </HStack>
        </Box>
      </Container>

      <Container as="section">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1fr 1.9fr 1fr",
            xl: ".8fr 2fr 1.1fr",
          }}
          columnGap={{ md: 5 }}
          rowGap={10}
          mb={10}
        >
          <GridItem
            as="aside"
            h="fit-content"
            pos="sticky"
            top={{ md: "87.43px", lg: "60px" }}
          >
            <MiniSection
              title="Magazine"
              p={{ md: 5 }}
              border="1px"
              borderColor={{ base: "transparent", md: "gray.100" }}
              moreButton
            >
              <SM_ListCard
                title="Jen Kendall Kicked off American Airlines First Flight"
                noImage
                borderBottom="1px"
                borderColor="gray.100"
                pb={2}
              />
              <SM_ListCard
                title="Jen Kendall Kicked off American Airlines First Flight"
                noImage
                borderBottom="1px"
                borderColor="gray.100"
                pb={2}
              />
              <SM_ListCard
                title="Jen Kendall Kicked off American Airlines First Flight"
                noImage
                borderBottom="1px"
                borderColor="gray.100"
                pb={2}
              />
              <SM_ListCard
                title="Jen Kendall Kicked off American Airlines First Flight"
                noImage
                borderBottom="1px"
                borderColor="gray.100"
                pb={2}
              />
            </MiniSection>
          </GridItem>

          <GridItem>
            <MiniSection title="Politics" titleProps={{ mb: 6 }} p={{ md: 5 }}>
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
              p={{ md: 5 }}
              mb={{ base: 10, md: 5 }}
              border="1px"
              borderColor={{ base: "transparent", md: "gray.100" }}
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

            <Box border="1px" borderColor="gray.100">
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
      </Container>

      <Container as="section" wider pos="relative">
        <Box
          bg="purple.800"
          pos="absolute"
          top={0}
          left={0}
          w="100%"
          h={{ base: 223, md: 130, lg: 200 }}
        ></Box>

        <Container pos="relative" zIndex={1} px={0}>
          <Box color="white" pt={{ base: 4, lg: 10 }}>
            <Heading
              fontSize={{ base: "3xl", lg: "5xl" }}
              mb={{ base: 1, xl: 3 }}
            >
              Must Read
            </Heading>
            <Text>
              Everything you need to know about the re-reboot of your favourite
              childhood flick.
            </Text>
          </Box>

          <Grid
            templateColumns={{
              base: "1fr",
              md: "1.35fr 1.65fr",
              xl: "1.25fr 1.75fr",
            }}
            columnGap={{ base: 2, md: 3, lg: 5 }}
            rowGap={{ base: 5, xl: 10 }}
            mb={10}
            mt={{ base: 7, lg: 0 }}
          >
            <GridItem>
              <LG_StackCard
                badge="style"
                imageBadge
                revereHeader
                moreText={false}
                mt={{ lg: 8, xl: 5 }}
              />
            </GridItem>

            <GridItem mb={{ base: 5, md: 0 }}>
              <Grid
                transform={{ lg: "translateY(85px)", xl: "translateY(90px)" }}
                templateColumns="1fr 1fr"
                gap={{ base: 3, lg: 5 }}
              >
                <MD_StackCard
                  imageProps={{
                    h: { base: "112px", md: "85px", lg: "120px", xl: "173px" },
                  }}
                  badge="business"
                  title="Fake engagement is only half the problem"
                />
                <MD_StackCard
                  imageProps={{
                    h: { base: "112px", md: "85px", lg: "120px", xl: "173px" },
                  }}
                  badge="business"
                  title="Fake engagement is only half the problem"
                />
                <MD_StackCard
                  imageProps={{
                    h: { base: "112px", md: "85px", lg: "120px", xl: "173px" },
                  }}
                  badge="business"
                  title="Fake engagement is only half the problem"
                />
                <MD_StackCard
                  imageProps={{
                    h: { base: "112px", md: "85px", lg: "120px", xl: "173px" },
                  }}
                  badge="business"
                  title="Fake engagement is only half the problem"
                />
              </Grid>
            </GridItem>

            <GridItem colSpan={{ md: 2 }}>
              <Container
                maxW={1200}
                border="1px"
                borderColor="gray.100"
                p={3}
                mb={{ base: 5 }}
              >
                <Container maxW={768} p={0}>
                  <AdCard imageProps={{ w: "100%", h: "120px" }} />
                </Container>
              </Container>
            </GridItem>
          </Grid>
        </Container>
      </Container>

      <Container as="section">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1fr 1.9fr 1.1fr",
            lg: ".9fr 2fr 1.1fr",
            xl: ".8fr 1.9fr 1.3fr",
          }}
          columnGap={{ md: 2, lg: 5 }}
          rowGap={10}
          mb={10}
        >
          <GridItem
            as="aside"
            h="fit-content"
            pos="sticky"
            top={{ md: "87.43px", lg: "60px" }}
          >
            <MiniSection
              title="Arts"
              p={{ md: 5 }}
              border="1px"
              borderColor={{ base: "transparent", md: "gray.100" }}
              moreButton
            >
              <MD_StackCard
                imageProps={{ h: { base: "144px", md: "60px", lg: "110px" } }}
                badge="arts"
                title="Fake engagement is only half the problem"
              />
              <MD_StackCard
                imageProps={{ h: { base: "144px", md: "60px", lg: "110px" } }}
                badge="arts"
                title="Fake engagement is only half the problem"
              />
              <MD_StackCard
                imageProps={{ h: { base: "144px", md: "60px", lg: "110px" } }}
                badge="arts"
                title="Fake engagement is only half the problem"
              />
            </MiniSection>
          </GridItem>

          <GridItem>
            <MiniSection title="Style" p={{ md: 5 }}>
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
              p={{ md: 5 }}
              mb={{ base: 10, md: 5 }}
              border="1px"
              borderColor={{ base: "transparent", md: "gray.100" }}
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

            <AdCard mb={{ base: 10, md: 5 }} />

            <MiniSection
              title="Culture"
              p={5}
              border="1px"
              borderColor="gray.100"
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

const LG_StackCard = ({
  badge,
  imageBadge,
  revereHeader,
  moreText = true,
  ...rest
}) => {
  const renderHeader = () => (
    <Box mb={3}>
      {!imageBadge && <Badge text="news" />}

      <TitleText
        text={`Customer Engagement Marketing: A New Strategy for the Economy`}
        size={{ base: "2xl", xl: "4xl" }}
      />

      <DateText text="Emilio Montes" />
    </Box>
  );

  return (
    <Box pb={5} mb={{ base: 5, md: 0 }} {...rest}>
      {!revereHeader && renderHeader()}

      <CardImage
        w="100%"
        h={{
          base: "230px",
          sm: "300px",
          md: "260px",
          lg: "400px",
          xl: "500px",
        }}
        src="/img/news.jpg"
        badge={imageBadge && badge}
        wrapperProps={{ mb: 3 }}
      />

      {revereHeader && renderHeader()}

      {moreText && (
        <MoreText text="The main thing that you have to remember on this journey is just be nice to everyone and always smile. Refreshingly, what was expected of her was the..." />
      )}
    </Box>
  );
};

const MD_StackCard = ({ badge, title, imageProps }) => (
  <Box mb={{ base: 5, md: 0 }}>
    <CardImage
      w="100%"
      h={{ base: "150px", md: "73.19px", lg: "100px" }}
      src="/img/news.jpg"
      badge={badge}
      {...imageProps}
    />

    <TitleText size={{ base: "lg", md: "sm" }} text={title} my={2} />

    <DateText />
  </Box>
);

const MD_ListCard = ({ badge, title }) => (
  <Flex mb={{ base: 5, md: 0 }}>
    <Box>
      <CardImage
        w={{ base: "100px", md: "127px", lg: "168px", xl: "280px" }}
        h={{ base: "70px", md: "76px", lg: "100px", xl: "170px" }}
        src="/img/news.jpg"
        badge={badge}
      />
    </Box>

    <Box
      borderTop="1px"
      borderColor="gray.100"
      p={{ base: 1, lg: 2 }}
      ml={{ base: 2, md: 1, lg: 3 }}
    >
      <TitleText
        size={{ base: "sm", xl: "lg" }}
        mb={{ base: 1, xl: 2 }}
        text={title}
      />

      <DateText mb={{ xl: 5 }} />

      <MoreText
        d={{ base: "none", xl: "block" }}
        text="The main thing that you have to remember on this journey is just be nice to everyone and always smile. Refreshingly, what was expected of her was the..."
      />
    </Box>
  </Flex>
);

const SM_ListCard = ({ title, imageIsRound = "full", noImage, ...rest }) => (
  <Flex {...rest}>
    <Box mr={{ base: 2, md: 5 }}>
      <TitleText
        size={{ base: "lg", md: "xs", lg: "sm" }}
        text={title}
        mb={1}
      />

      <DateText d={{ md: "none", lg: "block" }} />
    </Box>

    {!noImage && (
      <CardImage
        wrapperProps={{
          flexShrink: 0,
        }}
        boxSize={{ base: "64px", md: 45, lg: 50, xl: 78 }}
        src="/img/news.jpg"
        rounded={imageIsRound}
      />
    )}
  </Flex>
);

const AdCard = ({ imageProps, ...rest }) => (
  <Flex flexDir="column" alignItems="center" {...rest}>
    <Text
      textAlign="center"
      opacity=".7"
      fontSize={{ base: "sm", md: "xs" }}
      mb={1}
    >
      - Advertisement -
    </Text>

    <CardImage
      w={{ base: 280, sm: 300, md: 166, lg: 200, xl: 300 }}
      h={{ base: 280, sm: 300, md: 166, lg: 200, xl: 300 }}
      src="/img/shoes.jpg"
      {...imageProps}
    />
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
    whiteSpace="nowrap"
    wordBreak="keep-all"
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

const DateText = ({
  date = Date.now(),
  text,
  size = { base: "sm", md: "xs" },
  ...rest
}) => (
  <Text fontStyle="italic" fontSize={size} {...rest}>
    {text}
    {text && " - "}
    {dateFormat(date, "fullDate")}
  </Text>
);

const MoreText = ({ text, size = "sm", ...rest }) => (
  <Text fontWeight={{ xl: "bold" }} fontSize={size} {...rest}>
    {text}
  </Text>
);

const MiniSection = ({ title, titleProps, children, moreButton, ...rest }) => {
  return (
    <Box {...rest}>
      <Stack spacing={{ base: 4, xl: 6 }}>
        {title && (
          <Heading
            fontSize={{ base: "xl", md: "lg" }}
            color="purple.800"
            {...titleProps}
          >
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
