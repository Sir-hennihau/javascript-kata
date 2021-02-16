/**
 * Filters empty elements out and sorts data alphabetically by title property received from CSV sheets.
 *
 * @param {[{authors: string, description: string, isbn: string, title: string}]} csvData Data from CSV sheet
 * @param {string} search Search value for either isbn or author email.

 * @returns {[{authors: string, description: string, isbn: string, title: string}]} Filtered and sorted CSV data.
 */

export const handleCSVParseData = (csvData, search) => {
  if (!Array.isArray(csvData)) {
    return;
  }

  const filteredData = csvData.filter((csvEntry) => {
    if (!csvEntry.title) {
      return;
    }

    if (
      search &&
      !csvEntry.authors.includes(search) &&
      !csvEntry.isbn.includes(search)
    ) {
      return;
    }

    return csvEntry;
  });

  return filteredData.sort((a, b) => a.title.localeCompare(b.title));
};
