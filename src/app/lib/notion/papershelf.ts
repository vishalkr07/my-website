import { Client } from "@notionhq/client";
import {
  DatabaseObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { title } from "process";

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getData = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID_PAPERSHELF!!,
  });
  return toPaperShelf(response.results as any);
};

const toPaperShelf = (dbResult: PageObjectResponse[]): Papershelf[] => {
  return dbResult
    .map((result) => {
      const properties = result.properties;

      const title =
        (properties.Title as NotionTitleProperty).title[0]?.plain_text || "";
      const url = (properties.Link as NotionUrlProperty).url;
      return { title, url, category: "Programming" } as Papershelf;
    })
    .filter((item) => item.title != "");
};

interface PapershelfDb extends DatabaseObjectResponse {}

export interface Papershelf {
  title: string;
  url: string | null;
  category: string;
}

interface NotionTitleProperty {
  type: "title";
  title: { plain_text: string }[];
  id: string;
}

interface NotionUrlProperty {
  type: "url";
  url: string | null;
}
