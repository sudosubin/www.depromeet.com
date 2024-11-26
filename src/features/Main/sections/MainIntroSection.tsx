import Image from 'next/image';
import { css } from '@emotion/react';

import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

/**
 * * Main 페이지 Intro + 지원 버튼 section
 */
export const MainIntroSection = () => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');
  // FIXME: 추후 링크 상수화 진행
  const handleClick = () => window.open('https://bit.ly/3YJgDmR');

  return (
    /** FIXME: 디자이너분들께 공유드리기, 사진 깨짐 현상 존재
     * 추가로 보완해야할 부분 추가
     * */
    <section css={containerCss}>
      <article css={articleCss}>
        <Image
          width={!isMobileSize ? 1920 : 438}
          height={!isMobileSize ? 1080 : 445}
          src={'/images/16th/intro/depromeet.gif'}
          id="depromeet"
          alt="디퍼 모집 이미지"
          priority
        />
        <Image
          src={!isMobileSize ? '/images/16th/intro/title.svg' : '/images/16th/intro/title_m.svg'}
          width={!isMobileSize ? 772 : 296}
          height={!isMobileSize ? 230 : 88}
          id={'title'}
          alt={'디프만 메인 '}
        />
        <button css={buttonCss} onClick={handleClick}>
          16기 모집 알림 신청
        </button>
      </article>
    </section>
  );
};

const containerCss = () => css`
  width: 100dvw;
  height: 100dvh;
  padding-top: 61px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
`;

const articleCss = () => css`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  #depromeet,
  #title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #depromeet {
    width: 100dvw;
    height: 100dvh;
    object-fit: cover;
  }

  #title {
    top: 20%;
  }
`;

const buttonCss = () => css`
  ${theme.typosV2.pretendard.bold24}
  background: white;
  position: relative;
  margin: auto auto 80px;
  width: fit-content;
  height: auto;
  border-radius: 97px;

  display: flex;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;

  ${mediaQuery('mobile')} {
    ${theme.typosV2.pretendard.bold18}
    padding: 16px 32px;
  }
`;
