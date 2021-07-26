import { Box } from "@chakra-ui/react";
import Header, { SimpleHeader } from "./Header";
import Footer from "./Footer";
import { useInView } from "react-intersection-observer";
import usePageReady from "hooks/usePageReady";

const Layout = ({ children, footerProps }) => {
  const pageReady = usePageReady();

  const headerObserver = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    pageReady && (
      <>
        <Header ref={headerObserver.ref} />

        <Box as="main">
          {!headerObserver.inView && (
            <SimpleHeader
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
      </>
    )
  );
};

export const Container = ({ children, ...rest }) => (
  <Box mx="auto" maxW={1440} px={{ base: 4, md: 6 }} {...rest}>
    {children}
  </Box>
);

export default Layout;
