import "./App.css";
import { addTwo } from "../scripts/addTwo";
import { useState } from "react";
import {
  Text,
  Center,
  FormControl,
  Input,
  VStack,
  HStack,
  Button,
  Box,
} from "@chakra-ui/react";

function App() {
  const [firstAddend, setFirstAddend] = useState(0);
  const [secondAddend, setSecondAddend] = useState(0);
  const [sum, setSum] = useState(0);

  const handleFirstAddendChange = (e) => {
    setFirstAddend(e.target.value);
  };

  const handleSecondAddendChange = (e) => {
    setSecondAddend(e.target.value);
  };

  const handleSum = () => {
    setSum(addTwo(+firstAddend, +secondAddend));
  };

  return (
    <>
      <Box className="w-2/3 h-2/3 bg-green-400 rotate-45 absolute"></Box>
      <Box className="w-1/5 h-2/3 bg-orange-400 rotate-12 absolute"></Box>
      <Box className="w-1/4 h-screen bg-blue-600 absolute rotate-12 top-0 right-0"></Box>
      <Box className="w-1/6 h-1/3 bg-pink-500 absolute rotate-45 bottom-0 right-0"></Box>
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
          <Text className="font-black text-6xl">Sum: {sum || ""}</Text>
        </VStack>
      </Center>
    </>
  );
}

export default App;
