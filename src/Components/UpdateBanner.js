import {
  Box,
  Divider,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  ButtonGroup,
  Heading,
  StackDivider,
  Image,
  Input,
  Button,
  UnorderedList,
  ListItem,
  Tab,
  Stack,
  Select,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import overview from "../Images/overview.png";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AdminPanel from "./AdminPanel";

const TestimonialCard = (props) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={props.url}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.name}</Heading>
          <Input placeholder="Enter Url" />
          <Button variant="solid" colorScheme="blue">
            Update Banner
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

const UpdateBanner = () => {
  const member = [
    {
      key: 1,
      name: "About Page Banner",
      url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      key: 2,
      name: "Home Page Banner",
      url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      key: 3,
      name: "Package Page Banner",
      url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
  ];
  return (
    <>
      {/* <Box> */}
      <Box
        mb="20px"
        display="flex"
        flexDir={"column"}
        justifyContent="center"
        alignItems={"center"}
        gap="10vw"
      >
        {member.map((el, index) => (
          <TestimonialCard key={index} name={el.name} url={el.url} />
        ))}
      </Box>
    </>
  );
};

export default UpdateBanner;
