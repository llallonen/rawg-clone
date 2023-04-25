import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box height='100%' borderRadius={3} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
