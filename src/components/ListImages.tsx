import { Grid, Image, Box } from "@chakra-ui/react";
import { Gif } from "../types/Gif";

export default function ListImages({
  search,
  gifs,
  titlePosition,
}: {
  search: string;
  gifs: Gif[];
  titlePosition: string;
}) {
  return (
    <Grid
      gridTemplateColumns={{
        md: "repeat(3, 1fr)",
      }}
      gap={3}
      mt={6}
    >
      {gifs.map((gif) => (
        <Box
          position="relative"
          key={gif.id}
          borderWidth={1}
          borderColor="purple.500"
        >
          <Image src={gif.images.original.url} alt={gif.title} />
          <Box
            position={titlePosition === "below" ? "static" : "absolute"}
            top={titlePosition === "center-top" ? "0" : "100%"}
            bg="purple.500"
            color="white"
            textAlign="center"
            width="100%"
            textTransform="capitalize"
          >
            {search}: {gif.title}
          </Box>
        </Box>
      ))}
    </Grid>
  );
}
