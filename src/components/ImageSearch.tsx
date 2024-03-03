import { Box, Input, Button, Select, HStack, Text } from "@chakra-ui/react";

interface ImageSearchProps {
  search: string;
  setSearch: (value: string) => void;
  fetchGifs: (value: string, page?: number) => Promise<void>;
  setTitlePosition: (value: string) => void;
}

const ImageSearch: React.FC<ImageSearchProps> = ({
  search,
  setSearch,
  fetchGifs,
  setTitlePosition,
}) => {
  return (
    <Box>
      <HStack my={5}>
        <Input
          type="text"
          placeholder="Topic"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Button type="button" onClick={() => fetchGifs(search)}>
          Search
        </Button>
      </HStack>
      <Text>Choose to display image text options</Text>
      <Select
        placeholder="Select option"
        onChange={(e) => setTitlePosition(e.target.value)}
      >
        <option value="center-top">On top of image - center top</option>
        <option value="center-bottom">On top of image - center bottom</option>
        <option value="below">Below the image</option>
      </Select>
    </Box>
  );
};

export default ImageSearch;
