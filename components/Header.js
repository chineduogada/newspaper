import {
  Flex,
  HStack,
  Box,
  forwardRef,
  Text,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { TiWeatherCloudy } from "react-icons/ti";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiYoutubeFill,
  RiSearch2Line,
} from "react-icons/ri";
import dateFormat from "dateformat";
import Brand from "./Brand";
import { Link } from "./Link";
import { getNews } from "utils/http";
import { Fragment, useRef, useState } from "react";
import { Container } from "./Layout";
import { Loader } from "./Feedback";
import { MdClose } from "react-icons/md";

const Header = forwardRef(
  ({ setMobileDrawerIsOpen, breadcrumbPaths, ...rest }, ref) => {
    return (
      <Box as="header" mb={5} ref={ref} {...rest}>
        <Box d={{ base: "none", md: "block" }}>
          <Top />
          <Center />
          <Bottom />
        </Box>

        <MobileHeader setMobileDrawerIsOpen={setMobileDrawerIsOpen} />
      </Box>
    );
  }
);

export const SimpleHeader = ({ setMobileDrawerIsOpen, ...rest }) => {
  return (
    <Box as="header" {...rest}>
      <Box d={{ base: "none", md: "block" }}>
        <Bottom brand />
      </Box>

      <MobileHeader setMobileDrawerIsOpen={setMobileDrawerIsOpen} />
    </Box>
  );
};

const MobileHeader = ({ setMobileDrawerIsOpen, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const handleOpen = () => {
    setMobileDrawerIsOpen(true);
    setTimeout(onOpen, 150);
  };

  const handleClose = () => {
    setMobileDrawerIsOpen(false);
    onClose();
  };

  return (
    <Container
      d={{ base: "flex", md: "none" }}
      alignItems="center"
      justifyContent="space-between"
      shadow="md"
      py={2}
      {...rest}
    >
      <Brand />

      <HStack spacing={5}>
        <Icon fontSize="1.5rem">
          <BiSearch />
        </Icon>

        <Icon fontSize="1.5rem" ref={btnRef} onClick={handleOpen}>
          <GoThreeBars />
        </Icon>

        <Drawer
          isOpen={isOpen}
          placement="left"
          size="full"
          onClose={handleClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg="purple.800" color="white">
            <DrawerBody pos="relative" px={0} pl={5} pt={"3.5rem"}>
              <Icon
                fontSize="1.8rem"
                onClick={handleClose}
                pos="absolute"
                top={5}
                right={5}
              >
                <MdClose />
              </Icon>

              <Bottom onClose={onClose} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </Container>
  );
};

const Top = () => (
  <Box bg="black" fontSize="sm" color="white" py={2}>
    <Container d="flex" justifyContent="space-between">
      <HStack spacing={5}>
        <Link>Advertise</Link>
        <Link>About</Link>
        <Link>Events</Link>
        <Link>Write for Us</Link>
        <Link>In the Press</Link>
      </HStack>

      <Link>Sign in / Join</Link>
    </Container>
  </Box>
);

const Center = () => (
  <Box pt={5}>
    <Container>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="flex-end">
          <Icon fontSize="1.5rem">
            <TiWeatherCloudy />
          </Icon>

          <Text fontWeight={500} mx={1}>
            17.8
            <sup>&#x2103;</sup>
          </Text>

          <Text>Munich</Text>
        </Flex>

        <Box textAlign="center" lineHeight="1">
          <Brand size="5xl" />
          <Text>{dateFormat(Date.now(), "fullDate")}</Text>
        </Box>

        <HStack spacing={3}>
          <Link>
            <Icon fontSize="1.3rem">
              <RiFacebookFill />
            </Icon>
          </Link>

          <Link>
            <Icon fontSize="1.3rem">
              <RiTwitterFill />
            </Icon>
          </Link>

          <Link>
            <Icon fontSize="1.3rem">
              <RiYoutubeFill />
            </Icon>
          </Link>

          <Link>
            <Icon fontSize="1.3rem">
              <RiSearch2Line />
            </Icon>
          </Link>
        </HStack>
      </Flex>

      <Box borderBottom="1px" borderColor="gray.300" pt={5}></Box>
    </Container>
  </Box>
);

const Bottom = ({ brand, onClose, ...rest }) => {
  const data = [
    { text: "Home", href: "#" },
    {
      text: "News",
      href: "#",
      content: {
        list: [
          {
            text: "All",
            handleFetchResource: getNews,
          },
          {
            text: "Arts",
            handleFetchResource: getNews,
          },
          {
            text: "Culture",
            handleFetchResource: getNews,
          },
          {
            text: "Politics",
            handleFetchResource: getNews,
          },
          {
            text: "Style",
            handleFetchResource: getNews,
          },
        ],
      },
    },
    {
      text: "Business",
      href: "#",
      content: {
        handleFetchResource: getNews,
      },
    },
    { text: "Magazine", href: "#" },
    { text: "Sport", href: "#" },
    { text: "Art", href: "#" },
    { text: "Culture", href: "#" },
    { text: "Politics", href: "#" },
    { text: "Style", href: "#" },
    { text: "travel", href: "#" },
  ];

  const [currentContent, setCurrentContent] = useState(null);

  const handleItemClick = (content) => {
    setCurrentContent((prev) => (prev ? null : content));
  };
  const handleItemMouseOver = (content) => {
    if (content) {
      setCurrentContent(content);
    }
  };
  const handleItemMouseLeave = (content) => {
    if (content) {
      setCurrentContent(null);
    }
  };

  const renderItem = ({ item, drop = item.content, onMouseOver, onClick }) => (
    <Box w={{ base: "100%", md: "auto" }}>
      <Flex
        as="li"
        key={item.text}
        alignItems="center"
        textTransform="uppercase"
        fontWeight={700}
        fontSize="sm"
        onMouseOver={drop ? onMouseOver : () => {}}
        onClick={drop ? onClick : () => {}}
        w={{ base: "100%", md: "auto" }}
      >
        {drop ? (
          <Text py={{ base: 3, md: 2, lg: 3 }} px={{ base: 4, md: 2, lg: 3 }}>
            {item.text}
          </Text>
        ) : (
          <Link
            href={item.href}
            mute
            _hover={{ opacity: 0.6 }}
            _focus={{ outline: "none" }}
            display="block"
            width="100%"
            py={{ base: 3, md: 2, lg: 3 }}
            px={{ base: 4, md: 2, lg: 3 }}
            onClick={onClose}
          >
            {item.text}
          </Link>
        )}

        {drop && (
          <Icon fontSize="1.5rem">
            <BiChevronDown />
          </Icon>
        )}
      </Flex>

      {drop && currentContent && (
        <Flex flexDir="column" d={{ base: "flex", md: "none" }} pl={5}>
          {currentContent.list?.map((item) => (
            <Link
              key={item.text}
              href={item.href}
              d="block"
              p={3}
              w="100%"
              mute
              _hover={{ opacity: 0.6 }}
              _focus={{ outline: "none" }}
              onClick={onClose}
            >
              {item.text}
            </Link>
          ))}
        </Flex>
      )}
    </Box>
  );

  return (
    <Box py={2} shadow={{ md: "lg" }} {...rest}>
      <Container px={{ base: 0, md: 6 }} wider>
        <Flex
          flexDir={{ md: "column", lg: "row" }}
          alignItems={{ base: "stretch", md: "flex-start", lg: "center" }}
        >
          {brand && <Brand mr={5} mb={{ md: 3, lg: 0 }} w="140px" />}

          <Box as="nav" w="100%">
            <Flex
              flexDir={{ base: "column", md: "row" }}
              as="ul"
              justifyContent={brand ? "flex-start" : "center"}
              listStyleType="none"
              w={{ base: "100%", md: "auto" }}
            >
              {data.map((item) => (
                <Fragment key={item.text}>
                  <Box
                    d={{ base: "block", md: "none" }}
                    flex={{ base: 1, md: 0 }}
                  >
                    {renderItem({
                      item,
                      drop: item.content && !item.content.handleFetchResource,
                      onClick: handleItemClick.bind(null, item.content),
                    })}
                  </Box>
                  <Box d={{ base: "none", md: "block" }}>
                    {renderItem({
                      item,
                      onMouseOver: handleItemMouseOver.bind(null, item.content),
                    })}
                  </Box>
                </Fragment>
              ))}
            </Flex>
          </Box>
        </Flex>

        <Box d={{ base: "none", md: "block" }}>
          {currentContent && (
            <BottomDropdownContent
              content={currentContent}
              onMouseOver={handleItemMouseOver}
              onMouseLeave={handleItemMouseLeave}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};

const BottomDropdownContent = ({ content, onMouseOver, onMouseLeave }) => {
  const renderCards = () => (
    <Loader w="100%" h="103.98px" />

    // <Flex p={3}>
    //  <Box boxSize={20} border="1px"></Box>
    // <Box boxSize={20} border="1px"></Box>
    // <Box boxSize={20} border="1px"></Box>
    // <Box boxSize={20} border="1px"></Box>
    // </Flex>
  );

  return (
    <Flex
      onMouseOver={onMouseOver.bind(null, content)}
      onMouseLeave={onMouseLeave.bind(null, content)}
    >
      {content.list && (
        <Box
          w="100px"
          borderRight="1px"
          borderColor="gray.300"
          textAlign="right"
          p={3}
          fontSize="sm"
        >
          {content.list.map((item, index) => (
            <Link d="block" py={1} key={item.text} mute>
              <Text>{item.text}</Text>
            </Link>
          ))}
        </Box>
      )}

      {renderCards()}
    </Flex>
  );
};

export default Header;
