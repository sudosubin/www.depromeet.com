import Image from 'next/image';
import { css } from '@emotion/react';

import { SupportThumbnail } from '~/components/Supports/SupportThumbnail';
import { SUPPORTS } from '~/constant/supports';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

export const AboutSupportsSection = () => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');

  return (
    <div css={[layoutCss]}>
      <h1 css={introCss.headline}>후원사</h1>
      <p css={introCss.description}>
        디프만은 IT비영리단체로 후원을 통해
        {isMobileSize && <br />}더 많은 교육 기회에 도움을 받고 있습니다.
      </p>

      <ul css={supportContainerCss}>
        {SUPPORTS.map(support => (
          <SupportThumbnail key={support.title} {...support} />
        ))}
        <div css={imageContainerCss}>
          <Image src="/images/support/next.png" alt="what's next?" fill quality={100} />
        </div>
      </ul>

      <button css={supportButtonCss}>후원 문의하기</button>
    </div>
  );
};

const layoutCss = css`
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.black};
`;

const introCss = {
  headline: css`
    ${theme.typosV2.pretendard.bold32}
    line-height: 150%;
    color: ${theme.colors.white};

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.bold28}
      line-height: 150%;
    }
  `,
  description: css`
    ${theme.typosV2.pretendard.semibold20}
    line-height: 150%;
    margin-top: 42px;
    text-align: center;
    color: ${theme.colors.white};

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.semibold18}
    }
  `,
};

const supportContainerCss = css`
  margin-top: 88px;
  display: grid;
  width: 100%;
  max-width: 960px;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 12px;
  justify-items: center;
  justify-content: center;
  padding: 0 20px;

  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const imageContainerCss = css`
  position: relative;
  width: 100%;
  height: 208px;

  ${mediaQuery('mobile')} {
    max-width: 450px;
    padding: 18px;
    height: 180px;
  }
`;

const supportButtonCss = css`
  padding: 12px 38px;
  margin-top: 92px;
  border-radius: 50px;
  color: ${colors.grey['00']};
  background-color: ${colors.grey[500]};
  ${theme.typosV2.pretendard.semibold20}

  ${mediaQuery('mobile')} {
    padding: 16px 28px;
    margin-top: 62px;
    border-radius: 50px;
    ${theme.typosV2.pretendard.bold16}
  }
`;