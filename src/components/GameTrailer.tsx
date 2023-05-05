import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;
  const dataIn = data?.results[0];

  return dataIn ? (
    <video src={dataIn?.data[480]} poster={dataIn?.preview} controls />
  ) : null;
};

export default GameTrailer;
