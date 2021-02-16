import { useEffect, useState } from "react";
import Papa from "papaparse";

import { handleCSVParseData } from "./helpers";

/**
 * Custom hook to handle literature state.
 *
 * @param {string} csvPath path to CSV file within /data folder.
 * @param {string} search Search value for either isbn or author email.
 *
 * @returns {[{authors: string, description: string, isbn: string, title: string}]} Literature state.
 */
export const useCSVLiterature = (csvPath, search) => {
  const [csvLiterature, setCsvLiterature] = useState();

  useEffect(() => {
    Papa.parse(`http://localhost:9000/${csvPath}`, {
      download: true,
      header: true,

      complete: (results) => {
        const parsedBooks = handleCSVParseData(results.data, search);

        setCsvLiterature(parsedBooks);
      },
    });
  }, [search]);

  return csvLiterature;
};
