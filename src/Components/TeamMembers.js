import {
  Box,
  Divider,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Heading,
  StackDivider,
  Image,
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

const TestimonialCard = (props) => {
  return (
    <Card shadow={"2xl"} borderRadius={"5%"} px={"30px"} maxW={{ lg: "50vw" }}>
      <CardBody>
        <Stack spacing="4" alignItems={"center"}>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Name :
            </Heading>
            <Text pt="2" fontSize="sm">
              {props.name}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Email:
            </Heading>
            <Text pt="2" fontSize="sm">
              {props.email}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Role:
            </Heading>
            <Text pt="2" fontSize="sm">
              {props.role}
            </Text>
          </Box>

          <Select
            placeholder="Select sub-admin role"
            textAlign={"center"}
            maxW={"300px"}
          >
            <option value="option1">Backend Engineer</option>
            <option value="option2">Front Engineer</option>
            <option value="option3">Full Stack Developer 3</option>
          </Select>
          <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="blue" variant="solid" width="300px">
              Submit
            </Button>
          </Stack>
          <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="red" variant="solid" width="300px">
              Delete
            </Button>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};

const TeamMembers = () => {
  const member = [
    {
      key: 1,
      name: "Kartik Singh",
      email: "kartik@gmail.com",
      role: "Backend-Developer",
    },
    {
      key: 2,
      name: "Shivam  Ruhil",
      email: "Ruhil@gmail.com",
      role: "Backend-Developer",
    },
    {
      key: 3,
      name: "Lakshya Singh",
      email: "lak@gmail.com",
      role: "Backend-Developer",
    },
    {
      key: 4,
      name: "Raj Singh",
      email: "raj@gmail.com",
      role: "Backend-Developer",
    },
    {
      key: 5,
      name: "Rohit Singh",
      email: "rohit@gmail.com",
      role: "Backend-Developer",
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
          <TestimonialCard
            key={index}
            name={el.name}
            role={el.role}
            email={el.email}
          />
        ))}
      </Box>
    </>
  );
};

export default TeamMembers;
