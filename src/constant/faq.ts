export type FAQGroupType = '지원 자격' | '면접 관련' | '활동 관련';

export type FAQType = {
  group: FAQGroupType;
  question: string;
  answer: string;
};

export const FAQ_GROUP: FAQGroupType[] = ['지원 자격', '면접 관련', '활동 관련'];

export const FAQS: FAQType[] = [
  {
    group: '지원 자격',
    question: '지원 가능한 나이가 어떻게 되나요?',
    answer: '디프만은 20세 이상부터 지원 가능합니다.',
  },
  {
    group: '지원 자격',
    question: '관련 경험이 없어도 지원 가능한가요?',
    answer:
      '관련 직무 경험이 없어도 지원 가능하지만, UI/UX Designer 직군은 지원 시 포트폴리오 제출이 필수입니다.',
  },
  {
    group: '지원 자격',
    question: '실력이 뛰어나야만 참여할 수 있나요?',
    answer:
      '디프만은 직무 경험과 실력보다 적극적인 태도, 책임감, 커뮤니케이션 능력 등에 더 큰 비중을 두고 지원자를 모집하고 있어요. 서비스를 런칭하고 팀과 협업할 수 있다면 충분해요.',
  },
  {
    group: '지원 자격',
    question: '외국 거주자도 지원할 수 있나요?',
    answer: '디프만 16기는 온/오프라인으로 진행되므로 국내 거주자에 한해 지원 가능합니다.',
  },
  {
    group: '지원 자격',
    question: '직군간 중복지원이 가능한가요?',
    answer:
      '직군간 중복 지원은 불가능합니다. 중복 지원자의 경우 지원 내역 모두 무효처리되니 하나의 직군에 지원해주세요.',
  },
  {
    group: '지원 자격',
    question: '지원 결과는 언제 어디서 확인 가능한가요?',
    answer: '12월 9일 서류 지원 마감 후, 12월 16일 중으로 결과 메일을 발송할 예정입니다.',
  },
  {
    group: '면접 관련',
    question: '인터뷰는 언제 진행되나요?',
    answer: '12월 21일 (토) ~ 12월 22일 (일) 이틀간 10시부터 17시까지 진행될 예정입니다.',
  },
  {
    group: '면접 관련',
    question: '인터뷰는 어디서, 어떻게 진행되나요?',
    answer:
      '디프만 16기 운영진과 지원자 다대다 온라인 인터뷰로 진행되며 자세한 사항은 서류 합격자에게 안내될 예정입니다.',
  },
  {
    group: '면접 관련',
    question: '인터뷰는 얼마나 걸릴까요?',
    answer: '한 타임당 약 30분 정도 진행될 예정입니다.',
  },
  {
    group: '면접 관련',
    question: '인터뷰 일정을 조정하고 싶은데, 가능할까요?',
    answer:
      '인터뷰 일정은 조정이 불가합니다. 서류 확인 시 일정을 반드시 확인하신 뒤 가능한 시간대를 적어주세요.',
  },
  {
    group: '면접 관련',
    question: '인터뷰 관련한 세부 내용들은 어디서 볼 수 있나요?',
    answer: '서류 합격자에 한해 지원서에 기재한 이메일로 자세한 안내사항을 발송할 예정입니다.',
  },
  {
    group: '면접 관련',
    question: '최종 결과는 언제 받아볼 수 있나요?',
    answer: '인터뷰 내용을 꼼꼼히 확인한 후, 12월 28일에 순차적으로 발송될 예정입니다.',
  },
  {
    group: '활동 관련',
    question: '디프만 16기 정규 세션은 어떻게 진행되나요?',
    answer:
      '디프만은 매주 토요일 오후 2시부터 5시까지 정규 세션을 가집니다. 총 16주간 온라인과 오프라인을 병행하여 만날 예정이에요. 정규 세션외에도 팀원들과 함께 작업하는 시간이 필요하니 반드시 참여 가능한 일정을 확인하고 지원해주세요.',
  },
  {
    group: '활동 관련',
    question: '활동 기간은 어떻게 되나요?',
    answer:
      '디프만 16기는 1월 4일 토요일 OT를 시작으로 16주 동안 진행될 예정입니다. (4월 19일 종료)',
  },
  {
    group: '활동 관련',
    question: '디프만 16기의 팀 구성이 궁금해요',
    answer:
      '디프만은 총 6개의 팀으로 나뉘어 디자이너, 개발자들이 함께 하나의 서비스를 위해 협업합니다. 팀은 제출하신 서류와 역량을 토대로 16기 운영진이 구성할 예정입니다.',
  },
  {
    group: '활동 관련',
    question: '정규 세션에서 어떤 활동을 하나요?',
    answer:
      '팀별 작업 외에도 멤버들 간의 교류와 네트워킹을 위해 다양한 세션을 기획하고 있어요. 자세한 내용은 홈페이지 상단 About 페이지를 참고해주세요.',
  },
  {
    group: '활동 관련',
    question: '활동비가 있나요?',
    answer:
      '디프만은 비영리 IT 커뮤니티로 16기 운영에 필요한 비용 조달 및 활동 지원을 위해 최종 합격 멤버에 한해 활동비를 걷습니다.',
  },
  {
    group: '활동 관련',
    question: '활동비는 얼마인가요?',
    answer: '활동비는 회비와 보증금으로 이루어져 있으며 아직 논의중에 있습니다.',
  },
];
