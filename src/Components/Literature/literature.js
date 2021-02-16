import React from "react";

import { LiteratureContainer } from "./Components/literatureContainer";
import { LiteratureInformation } from "./Components/literatureInformation";
import { LiteratureTitle } from "./Components/literatureTitle";

/**
 * Displays a single piece of literature.
 * @param {{authors: string, description: string, isbn: string, title: string}} literature
 */
export const Literature = ({
  literature: { authors, description, isbn, title },
}) => (
  <LiteratureContainer>
    <LiteratureTitle>{title}</LiteratureTitle>

    <LiteratureInformation>{authors}</LiteratureInformation>

    <LiteratureInformation>{isbn}</LiteratureInformation>

    <LiteratureInformation>{description}</LiteratureInformation>
  </LiteratureContainer>
);
