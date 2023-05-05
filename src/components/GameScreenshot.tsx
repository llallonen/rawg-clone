import { SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreeshots";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  const dataIn = data?.results;
  return dataIn ? (
    <SimpleGrid columns={{base: 2, md: 3}} spacing={3} marginTop={5}>
      {dataIn.map((screenshot) => (
        <img src={screenshot.image} key={screenshot.id}></img>
      ))}
    </SimpleGrid>
  ) : null;
};

export default GameScreenshot;
