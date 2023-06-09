import { Card, CardBody, Heading, HStack, Image, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../Interfaces";
import getCroppedImageUrl from "../services/imageUrl";
import CriticScore from "./CriticScore";
import PlatformIcons from "./PlatformIcon";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const bg = useColorModeValue('gray.100', 'gray.600')

  return (
    <Card bg={bg}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIcons>
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
