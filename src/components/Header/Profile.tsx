
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import React from "react";


export function Profile() {
  return (
    <Flex align="center"> 

          <Box mr="4" textAlign="right">
            <Text>nome</Text>
            <Text color="gray.300" fontSize="small" >
              nome@nome.com
            </Text>
          </Box>

          <Avatar size="md" name="nome" />

        </Flex>
  )
}