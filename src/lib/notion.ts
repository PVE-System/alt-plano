import { Client } from '@notionhq/client';

import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getBlogPosts(ano?: number) {
  const filters = [];

  if (ano) {
    filters.push({
      property: 'Data',
      date: {
        on_or_after: `${ano}-01-01`,
      },
    });
    filters.push({
      property: 'Data',
      date: {
        on_or_before: `${ano}-12-31`,
      },
    });
  }

  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: filters.length ? { and: filters } : undefined, // se não tem ano, não aplica filtro
    sorts: [
      {
        property: 'Data',
        direction: 'descending',
      },
    ],
  });

  return response.results;
}

export async function getPageContent(
  pageId: string,
): Promise<BlockObjectResponse[]> {
  let results: BlockObjectResponse[] = [];
  let cursor: string | undefined = undefined;

  do {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
    });

    results = results.concat(response.results as BlockObjectResponse[]);
    cursor = response.has_more ? response.next_cursor ?? undefined : undefined;
  } while (cursor);

  return results;
}

/* backup onde tudo funciona corretamente
import { Client } from '@notionhq/client';

import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getBlogPosts() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    sorts: [
      {
        property: 'Data',
        direction: 'descending',
      },
    ],
  });

  return response.results;
}

export async function getPageContent(
  pageId: string,
): Promise<BlockObjectResponse[]> {
  const response = await notion.blocks.children.list({
    block_id: pageId,
  });

  return response.results as BlockObjectResponse[];
} */
