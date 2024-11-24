import { useState } from 'react';
import { css, Theme } from '@emotion/react';

import { FAQList } from '~/components/FAQ/FAQList';
import { FAQ_GROUP, FAQGroupType, FAQS } from '~/constant/faq';
import { mediaQuery } from '~/styles/media';

export function FAQ() {
  const [activeTab, setActiveTab] = useState<FAQGroupType>('지원 자격');

  const onClickTab = (target: FAQGroupType) => {
    setActiveTab(target);
  };

  const isActive = (target: FAQGroupType) => activeTab === target;

  return (
    <section css={layoutCss}>
      <h1>자주 묻는 질문</h1>

      <ul css={tabLayoutCss}>
        {FAQ_GROUP.map(label => (
          <li key={label} onClick={() => onClickTab(label)}>
            <div css={tabWrapperCss}>
              <div css={theme => tabContainerCss(theme, isActive(label))}>
                <button
                  role="tab"
                  aria-selected={isActive(label)}
                  css={theme => tabCss(theme, isActive(label))}
                >
                  {label}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div css={listCss}>
        {activeTab === '지원 자격' && <FAQList label="지원 자격" FAQList={지원자격질문들} />}
        {activeTab === '면접 관련' && <FAQList label="면접 관련" FAQList={면접질문들} />}
        {activeTab === '활동 관련' && <FAQList label="활동 관련" FAQList={활동질문들} />}
      </div>
    </section>
  );
}

const 지원자격질문들 = FAQS.filter(x => x.group === '지원 자격');

const 면접질문들 = FAQS.filter(x => x.group === '면접 관련');

const 활동질문들 = FAQS.filter(x => x.group === '활동 관련');

const layoutCss = (theme: Theme) => css`
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.lightGray};

  h1 {
    ${theme.typosV2.pretendard.bold32}
  }
`;

const tabLayoutCss = css`
  display: flex;
  > li:first-of-type {
    padding-left: 0px;
  }

  ${mediaQuery('tablet')} {
    justify-content: center;
  }
`;

const tabWrapperCss = css`
  padding: 16px 24px;
`;

const tabContainerCss = (theme: Theme, isActive: boolean) => css`
  padding-bottom: 5px;
  border-bottom: ${isActive ? '3px' : '0'} solid ${theme.colors.grey['900']};
`;

const tabCss = (theme: Theme, isActive: boolean) => css`
  ${theme.typosV2.pretendard.semibold16}
  color: ${isActive ? theme.colors.grey['900'] : theme.colors.gray};
  cursor: pointer;
`;

const listCss = css`
  padding: 0 16px;
  width: 100%;
  max-width: 944px;
`;
