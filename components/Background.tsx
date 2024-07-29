import "../src/App.css";
import { Box } from "@chakra-ui/react";

export default function Background() {
  return (
    <>
      <Box className="w-2/3 h-2/3 bg-green-400 rotate-45 absolute"></Box>
      <Box className="w-1/5 h-2/3 bg-orange-400 rotate-12 absolute"></Box>
      <Box className="w-1/4 h-screen bg-blue-600 absolute rotate-12 top-0 right-0"></Box>
      <Box className="w-1/6 h-1/3 bg-pink-500 absolute rotate-45 bottom-0 right-0"></Box>
    </>
  );
}
