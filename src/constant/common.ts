export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID;

export const BASE_URL = 'https://www.depromeet.com';

export const NOTION_RECRUIT_PATH =
  'https://depromeet.notion.site/DEPROMEET-13th-f1e931cf073e43c4aeca44a4521b44be';

// NOTE: UTC 타임존에 맞추기 위해 9시간을 뺌
export const START_DATE = '2024-04-26T15:00:00.000Z'; // 04.27 00:00
export const END_DATE = '2024-05-04T14:59:59.000Z'; // 05.04 11:59:59

// export const START_DATE = '2024-04-19T06:00:00.000Z'; // test
// export const END_DATE = '2025-03-04T20:00:00.000Z'; // test

export const DEADLINE_DATE = '2024-05-14T14:59:59.000Z'; // NOTE: 마감일(?) 05.15
