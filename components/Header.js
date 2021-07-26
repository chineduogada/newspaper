import { Flex, HStack, Box, forwardRef, Text, Icon } from "@chakra-ui/react";
import { TiWeatherCloudy } from "react-icons/ti";
import { BiChevronDown } from "react-icons/bi";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiYoutubeFill,
  RiSearch2Line,
} from "react-icons/ri";
import dateFormat from "dateformat";
import Brand from "./Brand";
import { Link } from "./Link";
import Section from "./Section";
import { getNews } from "utils/http";
import { useState } from "react";

const Header = forwardRef(({ breadcrumbPaths, ...rest }, ref) => {
  return (
    <Box mb={5} ref={ref} {...rest}>
      <Top />

      <Center />

      <Bottom />
    </Box>
  );
});

export const SimpleHeader = ({ ...rest }) => {
  return (
    <Box {...rest}>
      <Bottom brand />
    </Box>
  );
};

const Top = () => (
  <Section
    d="flex"
    bg="black"
    justifyContent="space-between"
    fontSize="sm"
    color="white"
    py={2}
  >
    <HStack spacing={5}>
      <Link>Advertise</Link>
      <Link>About</Link>
      <Link>Events</Link>
      <Link>Write for Us</Link>
      <Link>In the Press</Link>
    </HStack>

    <Link>Sign in / Join</Link>
  </Section>
);

const Center = () => (
  <Section pt={5}>
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
  </Section>
);

const Bottom = ({ brand, ...rest }) => {
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

  return (
    <Section py={3} shadow="lg" shadow {...rest}>
      <nav>
        <Flex
          as="ul"
          justifyContent={brand ? "flex-start" : "center"}
          listStyleType="none"
        >
          {brand && <Brand mr={5} />}

          {data.map((item) => (
            <Flex
              as="li"
              key={item.text}
              alignItems="center"
              textTransform="uppercase"
              fontWeight={700}
              fontSize="sm"
              onMouseOver={handleItemMouseOver.bind(null, item.content)}
              // onMouseLeave={handleItemMouseLeave.bind(null, item.content)}
            >
              <Link href={item.href} d="block" p={3}>
                {item.text}
              </Link>

              {item.content && (
                <Icon fontSize="1.5rem">
                  <BiChevronDown />
                </Icon>
              )}
            </Flex>
          ))}
        </Flex>
      </nav>

      {currentContent && (
        <BottomDropdownContent
          content={currentContent}
          onMouseOver={handleItemMouseOver}
          onMouseLeave={handleItemMouseLeave}
        />
      )}
    </Section>
  );
};

const BottomDropdownContent = ({ content, onMouseOver, onMouseLeave }) => {
  const renderCards = () => (
    <Flex p={3}>
      <Box boxSize={20} border="1px"></Box>
      <Box boxSize={20} border="1px"></Box>
      <Box boxSize={20} border="1px"></Box>
      <Box boxSize={20} border="1px"></Box>
    </Flex>
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
