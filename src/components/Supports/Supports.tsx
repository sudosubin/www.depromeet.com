import { css, Theme } from '@emotion/react';

import { SupportThumbnail } from '~/components/Supports/SupportThumbnail';
import { SUPPORTS } from '~/constant/supports';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

import { SectionTitleV2 } from '../SectionTitleV2';

export function Supports() {
  return (
    <div css={[layoutCss]}>
      <div css={titleContainerCss}>
        <SectionTitleV2 css={titleContainerCss}>
          <span css={spanCss}>15TH</span>
          <span css={titleCss}>후원사</span>
        </SectionTitleV2>
        <p css={subTitleCss}>디프만 후원사는 지속해서 추가 예정입니다.</p>
      </div>
      <ul css={supportContainerCss}>
        {SUPPORTS.map(support => (
          <SupportThumbnail key={support.title} {...support} />
        ))}
      </ul>
    </div>
  );
}

const layoutCss = css`
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  background-color: white;

  ${mediaQuery('mobile')} {
    padding: 0;
    background-color: ${theme.colors.lightGray};
  }
`;

const supportContainerCss = css`
  display: grid;
  width: 100%;
  max-width: 960px;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 12px;

  ${mediaQuery('tablet')} {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 32px;
  }

  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 16px;
  }
`;

const titleContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const spanCss = (theme: Theme) => css`
  ${theme.typos.bebas.regular24}
`;

const titleCss = (theme: Theme) => css`
  ${theme.typos.notosans.semibold20}
`;

const subTitleCss = (theme: Theme) => css`
  ${theme.typos.notosans.semibold16}
  color: #555;
`;
