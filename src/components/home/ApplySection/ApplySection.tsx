import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import CTAButton from '~/components/common/CTAButton';
import { RECRUIT_STATE } from '~/components/recruit/HeaderSection/HeaderSection';
import { END_DATE, NOTION_RECRUIT_PATH, START_DATE } from '~/constants/common';
import { APPLY_LINK } from '~/constants/common/depromeet';
import {
  defaultFadeInScaleVariants,
  defaultFadeInVariants,
  staggerHalf,
} from '~/constants/motions';
import { colors, mediaQuery } from '~/styles/constants';

export default function ApplySection() {
  const startDate = new Date(START_DATE);
  const endDate = new Date(END_DATE);

  const getCurrentState = () => {
    const current = new Date();

    if (startDate > current) return RECRUIT_STATE.PREVIOUS;
    if (endDate < current) return RECRUIT_STATE.FINISH;

    return RECRUIT_STATE.IN_PROGRESS;
  };

  const isInProgress = () => {
    return getCurrentState() === RECRUIT_STATE.IN_PROGRESS;
  };

  return (
    <motion.section
      css={sectionCss}
      variants={staggerHalf}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ amount: 0.6, once: true }}
    >
      <motion.span css={spanCss} variants={defaultFadeInVariants}>
        이제 여러분 차례예요!
      </motion.span>

      <motion.h2 css={headingCss} variants={defaultFadeInVariants}>
        디프만 12기 멤버가 되고싶다면
      </motion.h2>

      <motion.a
        href={APPLY_LINK}
        target="_blank"
        rel="noreferrer"
        variants={defaultFadeInScaleVariants}
      >
        <CTAButton
          disabled={!isInProgress()}
          onClick={() => {
            window.open(NOTION_RECRUIT_PATH);
          }}
        >
          {isInProgress() ? '지금 지원하기' : '모집 기간이 아닙니다.'}
        </CTAButton>
      </motion.a>
    </motion.section>
  );
}

const sectionCss = css`
  margin-top: 220px;
  margin-bottom: 120px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const spanCss = css`
  display: block;
  font-size: 2rem;
  line-height: 110%;
  color: ${colors.gray4};
  text-align: center;

  margin-bottom: 12px;

  ${mediaQuery('xs')} {
    font-size: 16px;
    line-height: 150%;

    margin-bottom: 8px;
  }
`;

const headingCss = css`
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 110%;
  color: ${colors.white};
  text-align: center;

  margin-bottom: 60px;

  ${mediaQuery('xs')} {
    font-size: 24px;
    line-height: 150%;

    margin-bottom: 30px;
  }
`;
