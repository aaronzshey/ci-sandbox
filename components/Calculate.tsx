import "../src/App.css";
import { addTwo } from "../scripts/addTwo";
import { useState, ChangeEvent } from "react";

import {
  Text,
  Center,
  FormControl,
  Input,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";

export default function Calculate() {
  const [firstAddend, setFirstAddend] = useState(0);
  const [secondAddend, setSecondAddend] = useState(0);
  const [sum, setSum] = useState(0);

  const handleFirstAddendChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstAddend(+e.target.value);
  };

  const handleSecondAddendChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSecondAddend(+e.target.value);
  };

  const handleSum = () => {
    setSum(addTwo(firstAddend, secondAddend));
  };
  return (
    <Center className="w-screen h-screen absolute z-10">
      <VStack>
        <FormControl className="border-1 border-white border-solid p-4">
          <HStack>
            <VStack>
              <Input
                className="p-4 m-4 font-black"
                placeholder="1"
                onChange={handleFirstAddendChange}
              />
              <Input
                className="p-4 m-4 font-black"
                placeholder="2"
                onChange={handleSecondAddendChange}
              />
            </VStack>
            <Button
              className="p-10 text-white font-black text-3xl bg-black"
              onClick={handleSum}
            >
              +
            </Button>
          </HStack>
        </FormControl>
        <Text className="font-black text-6xl">Sum:</Text>
      </VStack>
    </Center>
  );
}
