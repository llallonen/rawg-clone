import {
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CriticScore from "../components/CriticScore";
import DefinitionItem from "../components/DefinitionItem";
import ExpandableText from "../components/ExpandableText";
import GameDetails from "../components/GameDetails";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";
import { useGames } from "../hooks/useGames";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameDetails game={game} />
      <GameTrailer gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
