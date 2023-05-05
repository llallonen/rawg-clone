import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const max = 300;

  if (!children) return null;
  if (children.length <= max) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, max);

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        marginLeft={1}
        colorScheme='blue'
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
