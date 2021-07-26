import { Box } from "@chakra-ui/react";
import Header, { SimpleHeader } from "./Header";
import Footer from "./Footer";
import { useInView } from "react-intersection-observer";
import usePageReady from "hooks/usePageReady";

const Layout = ({
  children,
  showHeaderCenter,
  breadcrumbPaths,
  footerProps,
}) => {
  const pageReady = usePageReady();

  const headerObserver = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    pageReady && (
      <Box mx="0 auto" maxW={1440}>
        <Header ref={headerObserver.ref} />

        <Box as="main">
          {!headerObserver.inView && (
            <SimpleHeader
              className={"header--inView"}
              w="100%"
              maxW={1440}
              bg={{ base: "white", md: "auto" }}
              borderBottom={{ base: "1px solid #ddd", md: "none" }}
              p={{ base: 2, md: 0 }}
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

export default Layout;
