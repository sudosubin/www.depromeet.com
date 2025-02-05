import { Link } from '~/components/Thumbnail/Thumbnail';

export interface Blog {
  title: string;
  date: string;
  img: string;
  link: BlogLink;
}

export interface BlogLink extends Omit<Link, 'type'> {
  type: 'Medium';
}

export const BLOG_LIST: Blog[] = [
  {
    title: '디프만 카페 지도를 소개합니다! (feat. 개발자, 디자이너를 위한 작업하기 좋은 카페 추천)',
    date: '24.09.01',
    img: '/images/16th/blog/medium/16th_cafe.svg',
    link: {
      type: 'Medium',
      href: 'https://medium.com/depromeet/%EB%94%94%ED%94%84%EB%A7%8C-%EC%B9%B4%ED%8E%98-%EC%A7%80%EB%8F%84%EB%A5%BC-%EC%86%8C%EA%B0%9C%ED%95%A9%EB%8B%88%EB%8B%A4-feat-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%EB%A5%BC-%EC%9C%84%ED%95%9C-%EC%9E%91%EC%97%85%ED%95%98%EA%B8%B0-%EC%A2%8B%EC%9D%80-%EC%B9%B4%ED%8E%98-%EC%B6%94%EC%B2%9C-54ed224fc134',
    },
  },
  {
    title: '인프콘 부스 준비에 진심인 동아리가 있다?',
    date: '24.08.01',
    img: '/images/16th/blog/medium/16th_infcon.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EC%9D%B8%ED%94%84%EC%BD%98-%EB%B6%80%EC%8A%A4-%EC%A4%80%EB%B9%84%EC%97%90-%EC%A7%84%EC%8B%AC%EC%9D%B8-%EB%8F%99%EC%95%84%EB%A6%AC%EA%B0%80-%EC%9E%88%EB%8B%A4-e4440097d9f9',
    },
  },
  {
    title: '디프만 15기 아이디어 공유 세션',
    date: '24.07.14',
    img: '/images/16th/blog/medium/16th_idea.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%94%94%ED%94%84%EB%A7%8C-15%EA%B8%B0-%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4-%EA%B3%B5%EC%9C%A0-%EC%84%B8%EC%85%98-f6e8de17b93d',
    },
  },
  {
    title: '디프만 15기 OT 후기',
    date: '24.06.29',
    img: '/images/16th/blog/medium/16th_ot.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%94%94%ED%94%84%EB%A7%8C-15%EA%B8%B0-ot-%ED%9B%84%EA%B8%B0-01480c66a6b0',
    },
  },
  {
    title: '[Interview] 토스뱅크 디자이너가 말해주는 ‘UT',
    date: '24.06.26',
    img: '/images/16th/blog/medium/16th_toss_designer.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/interview-%ED%86%A0%EC%8A%A4%EB%B1%85%ED%81%AC-%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%EA%B0%80-%EB%A7%90%ED%95%B4%EC%A3%BC%EB%8A%94-ut-15c59d39335a',
    },
  },
  // ㅇㅕ기부터 수정해야함
  {
    title: '디프만 15기를 시작합니다!',
    date: '24.06.03',
    img: '/images/16th/blog/medium/16th_start15th.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%94%94%ED%94%84%EB%A7%8C-15%EA%B8%B0%EB%A5%BC-%EC%8B%9C%EC%9E%91%ED%95%A9%EB%8B%88%EB%8B%A4-5e2d53ddef96',
    },
  },
  {
    title: '[Interview] 디프만은 어떻게 공부할까?(feat. 인프런)',
    date: '24.05.31',
    img: '/images/16th/blog/medium/16th_inflearn_study.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/interview-%EB%94%94%ED%94%84%EB%A7%8C%EC%9D%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%EA%B3%B5%EB%B6%80%ED%95%A0%EA%B9%8C-feat-%EC%9D%B8%ED%94%84%EB%9F%B0-9b1c235e9e7f',
    },
  },
  {
    title: '[Interview] 가족 일상 공유 서비스, 삐삐를 개발한 ‘오잉’팀',
    date: '24.04.28',
    img: '/images/16th/blog/medium/16th_product.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/interview-%EA%B0%80%EC%A1%B1-%EC%9D%BC%EC%83%81-%EA%B3%B5%EC%9C%A0-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%82%90%EC%82%90%EB%A5%BC-%EA%B0%9C%EB%B0%9C%ED%95%9C-%EC%98%A4%EC%9E%89%ED%8C%80-694e875973c5',
    },
  },
  {
    title: '디프만 14기 최종발표, 성공적인 마무리',
    date: '24.03.03',
    img: '/images/16th/blog/medium/16th_last.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%94%94%ED%94%84%EB%A7%8C-14%EA%B8%B0-%EC%B5%9C%EC%A2%85%EB%B0%9C%ED%91%9C-%EC%84%B1%EA%B3%B5%EC%A0%81%EC%9D%B8-%EB%A7%88%EB%AC%B4%EB%A6%AC-dc3aa57c01b7',
    },
  },
  {
    title: '14주만에 런칭 성공률 100%를 달성한 비결, 런칭데이!',
    date: '24.02.17',
    img: '/images/16th/blog/medium/16th_lunching.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/14%EC%A3%BC%EB%A7%8C%EC%97%90-%EB%9F%B0%EC%B9%AD-%EC%84%B1%EA%B3%B5%EB%A5%A0-100-%EB%A5%BC-%EB%8B%AC%EC%84%B1%ED%95%9C-%EB%B9%84%EA%B2%B0-%EB%9F%B0%EC%B9%AD%EB%8D%B0%EC%9D%B4-d6fc5bf6f2d8',
    },
  },
  {
    title: 'UT 설계부터 개선 과정까지, 디프만 14기의 중간 발표',
    date: '24.01.13',
    img: '/images/16th/blog/medium/16th_ut.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/ut-%EC%84%A4%EA%B3%84%EB%B6%80%ED%84%B0-%EA%B0%9C%EC%84%A0-%EA%B3%BC%EC%A0%95%EA%B9%8C%EC%A7%80-%EB%94%94%ED%94%84%EB%A7%8C-14%EA%B8%B0%EC%9D%98-%EC%A4%91%EA%B0%84-%EB%B0%9C%ED%91%9C-3429d0be8762',
    },
  },
  {
    title: '디프만 14기 팀원들과 친해지는 게더링 & 네트워킹데이',
    date: '23.12.11',
    img: '/images/16th/blog/medium/16th_networking.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%94%94%ED%94%84%EB%A7%8C-14%EA%B8%B0-%ED%8C%80%EC%9B%90%EB%93%A4%EA%B3%BC-%EC%B9%9C%ED%95%B4%EC%A7%80%EB%8A%94-%EA%B2%8C%EB%8D%94%EB%A7%81-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%82%B9%EB%8D%B0%EC%9D%B4-7de218bff76f',
    },
  },
];
