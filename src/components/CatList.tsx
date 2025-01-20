import { memo } from "react";
import Cat, { type CatType } from "./Cat/Cat";
import { GridContainer } from "./GridContainer";

interface CatListProps {
  cats: CatType[];
  loading?: boolean;
  error?: string;
}

const CatList = memo(({ cats }: CatListProps) => {
  return (
    <GridContainer>
      {cats.map((cat: CatType) => (
        <Cat key={cat.id} cat={cat} />
      ))}
    </GridContainer>
  );
});

export default CatList;
