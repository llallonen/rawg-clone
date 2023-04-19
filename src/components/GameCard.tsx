import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/imageUrl";
import CriticScore from "./CriticScore";
import PlatformIcons from "./PlatformIcon";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card max-width='300px' borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIcons>
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
