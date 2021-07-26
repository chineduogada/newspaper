import { Box, Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import Layout, { Container } from "components/Layout";

const HomePage = () => {
  return (
    <Layout>
      {/* First Section */}
      <Container as="section">
        <Grid templateColumns="1fr 1fr 1fr 1fr" columnGap={5}>
          <GridItem colSpan={2}>
            <Box border="1px" minH="400px"></Box>
          </GridItem>

          <GridItem>
            <MiniSection>
              <Box border="1px" minH="150px"></Box>
              <Box border="1px" minH="150px"></Box>
              <Box border="1px" minH="150px"></Box>
            </MiniSection>
          </GridItem>

          <GridItem>
            <Stack spacing={5}>
              <MiniSection title="Editor Picks">
                <Box border="1px" minH="70px"></Box>
              </MiniSection>

              <Box border="1px" minH="200px"></Box>

              <MiniSection title="Business">
                <Box border="1px" minH="70px"></Box>
                <Box border="1px" minH="70px"></Box>
                <Box border="1px" minH="70px"></Box>
              </MiniSection>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  );
};

const MiniSection = ({ title, children, ...rest }) => {
  return (
    <Stack border="1px" spacing={4} {...rest}>
      {title && (
        <Heading fontSize="lg" color="purple.800">
          {title}
        </Heading>
      )}
      {children}
    </Stack>
  );
};

export default HomePage;
