import { Box } from "@chakra-ui/react";
import Header, { SimpleHeader } from "./Header";
import Footer from "./Footer";
import { useInView } from "react-intersection-observer";
import usePageReady from "hooks/usePageReady";
import { useState } from "react";

const Layout = ({ children, footerProps }) => {
  const pageReady = usePageReady();

  const headerObserver = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [mobileDrawerIsOpen, setMobileDrawerIsOpen] = useState(false);

  return (
    pageReady && (
      <Box
      // className={`layout ${
      //   mobileDrawerIsOpen ? "layout--shrink" : "layout--scale"
      // }`}
      >
        <Header
          ref={headerObserver.ref}
          setMobileDrawerIsOpen={setMobileDrawerIsOpen}
        />

        <Box as="main">
          {!headerObserver.inView && (
            <SimpleHeader
              setMobileDrawerIsOpen={setMobileDrawerIsOpen}
              className={"header--inView"}
              w="100%"
              bg={{ base: "white", md: "auto" }}
              borderBottom={{ base: "1px solid #ddd", md: "none" }}
              left={{ base: 0, md: "auto" }}
            />
          )}

          {children}
        </Box>

        <Footer {...footerProps} />
      </Box>
    )
  );
};

export const Container = ({ children, wider, ...rest }) => (
  <Box
    mx="auto"
    maxW={wider ? 1600 : 1440}
    px={{ base: 3, sm: 4, md: 2, lg: 6 }}
    {...rest}
  >
    {children}
  </Box>
);

export default Layout;
