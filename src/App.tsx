import * as React from "react";
import { ChakraProvider, Container, theme } from "@chakra-ui/react";
import ImageSearch from "./components/ImageSearch";
import ListImages from "./components/ListImages";
import Navigation from "./components/Navigation";

import { Gif } from "./types/Gif";

export const App = () => {
  const [gifs, setGifs] = React.useState<Gif[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const [titlePosition, setTitlePosition] =
    React.useState<string>("center-top");
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(0);

  const fetchGifs = async (value: string, page: number = 1) => {
    const response = await fetch(
      `https://api.giphy.com/v1/stickers/search?q=${value}&limit=3&offset=${
        (page - 1) * 3
      }&rating=g&api_key=1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq`
    );
    const data = await response.json();
    setGifs(data.data);
    setTotalPages(Math.ceil(data.pagination.total_count / 3)); // Assuming 3 items per page
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      fetchGifs(search, currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      fetchGifs(search, currentPage + 1);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Container mt="100px">
        <ImageSearch
          search={search}
          setSearch={setSearch}
          fetchGifs={fetchGifs}
          setTitlePosition={setTitlePosition}
        />
        <ListImages search={search} gifs={gifs} titlePosition={titlePosition} />
        {gifs.length > 0 && (
          <Navigation
            onPrev={handlePrev}
            onNext={handleNext}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </Container>
    </ChakraProvider>
  );
};
