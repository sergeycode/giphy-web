import { HStack, Button } from "@chakra-ui/react";

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  currentPage: number;
  totalPages: number;
}

export default function Navigation({
  onPrev,
  onNext,
  currentPage,
  totalPages,
}: NavigationProps) {
  return (
    <HStack spacing={5} mt={10}>
      <Button onClick={onPrev} isDisabled={currentPage <= 1}>
        Previous
      </Button>
      <Button onClick={onNext} isDisabled={currentPage >= totalPages}>
        Next
      </Button>
    </HStack>
  );
}
