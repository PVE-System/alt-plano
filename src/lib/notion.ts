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
}
