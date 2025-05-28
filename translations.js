// 다국어 변경
function switchLanguage(lang) {

    localStorage.setItem('selectedLanguage', lang); // 언어 설정 저장

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const value = translations[lang]?.[key];
        if (value) el.innerHTML = value;
    });

    const koreanBtn = document.querySelector('.korean');
    const englishBtn = document.querySelector('.english');

    if (lang === 'ko') {
        koreanBtn.classList.add('on');
        englishBtn.classList.remove('on');
    } else {
        koreanBtn.classList.remove('on');
        englishBtn.classList.add('on');
    }
    // 이미지 교체
    const pcImg = document.getElementById('img-overview-pc');
    const mbImg = document.getElementById('img-overview-mb');


    if (lang === 'en') {
        if (pcImg) pcImg.src = 'img/index_02_01_en.jpg';
        if (mbImg) mbImg.src = 'img/index_02_02_en.jpg';
    } else {
        if (pcImg) pcImg.src = 'img/index_02_01_ko.jpg';
        if (mbImg) mbImg.src = 'img/index_02_02_ko.jpg';
    }

}

// 페이지 로드시 이전 언어 설정 적용
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'ko';
    switchLanguage(savedLang);
});

const translations = {
    ko: {
        "ex": "예",

        "menu.about": "소개",
        "menu.techmap": "자동차 테크맵",
        "menu.contribute": "기여하기",
        "section.overview.title": "개요",
        "menu.use": "활용하기",
        "menu.api": "Open-API",
        "menu.data": "데이터 신청",
        "menu.news": "주요소식",
        "menu.member": "조직 및 멤버",
        "menu.license": "라이선스 정책",
        "menu.benefit": "기여 혜택",
        "menu.prepare": "기여 준비",
        "menu.type": "기여 종류",
        "menu.policy": "기여 정책",
        "menu.signup": "회원가입",
        "hero.slogan": '<img src="img/index_01_tit1.png" alt="Mobility TechMap"/><br class="only_mb"/>오픈소스로 그리는 <strong>새로운 길</strong>',
        "category.powertrain": "파워트레인",
        "category.chassis": "샤시",
        "category.electric": "전장시스템",
        "category.body": "차체 및 의장",
        "category.smart_factory": "스마트 팩토리",
        "category.fuel": "연료",
        "category.autonomous": "자율주행",
        "category.connected": "커넥티드카",
        "description.techmap": `
                    <strong class="blue">자동차 테크맵</strong>은 자동차 분야 
                    <br class="only_mb" />오픈소스 기술 정보를 서로 공유하여 
                    <br />
                    <strong>
                        모빌리티 공급망내 모든기업들이 
                        <br class="only_mb" />함께 활용하고 기여하며 성장하는 
                        <br class="only_mb" />에코 시스템
                    </strong> 입니다
                    `,
        "section.projects.desc": "프로젝트",
        "section.projects.title": "주요 오픈소스 프로젝트",
        "project.description.1": "차량 내 하드웨어에서 직접 실행되는 운영체제 및 오픈소스 플랫폼",
        "project.description.2": "자율주행차 개발을 위한 오픈소스 자율주행 소프트웨어 스택 프로젝트",
        "project.description.3": "IoT 및 임베디드 시스템을 위한 <br /> 경량 실시간 운영체제(RTOS) <br />오픈소스 프로젝트",
        "project.description.4": "임베디드 리눅스 배포판을 <br />맞춤 제작하기 위한 <br />오픈소스 빌드 시스템",
        "project.description.5": "다양한 임베디드 환경에서 사용되는 오픈소스 리눅스 운영체제",
        "project.description.6": "커넥티드 차량 소프트웨어의 상호운용성 향상을 위한<br />오픈소스 연합 프로젝트",

        // 소개
        "overview.title": "소개",
        "overview.section.name": "명칭",
        "overview.section.name.value": "자동차 테크맵 프로젝트 (Mobility Techmap Project)",
        "overview.section.purpose": "목적",
        "overview.section.purpose.value": "자동차 분야의 오픈소스 정보를 서로 공유하고 활용하여 함께 성장해 나가는 모빌리티 오픈소스 생태계 구축을 목적으로 합니다.",
        "overview.section.history": "연혁",
        "overview.section.year": "년",
        "label.month.01": "01월",
        "label.month.05": "05월",
        "label.month.06": "06월",
        "label.month.11": "11월",
        "label.month.12": "12월",
        "overview.timeline.2025.06": "자동차 테크맵 설명회 개최",
        "overview.timeline.2025.05": "자동차 테크맵 홈페이지 공개",
        "overview.timeline.2024.12": "오픈소스SW 페스티벌 기조강연 발표 및 보도자료",
        "overview.timeline.2024.11": "글로벌 OEM 및 부품사 오픈소스 정보 수집 및 정리",
        "overview.timeline.2024.06": "현대자동차그룹 오픈소스 테크맵 작업 관련 워크샵",
        "overview.timeline.2024.01": "자동차 분야 오픈소스 테크맵 추진계획 협의",
        "overview.timeline.2023.11": "정보통신산업진흥원-현대자동차그룹, 자동차 제조업 분야 오픈소스SW 활용 지원 및 생태계 구축을 위한 업무협약 체결",

        // 조직 및 멤버

        "member.section.title": "회원",
        "member.user.title": "사용자 [User]",
        "member.user.desc": "누구나 회원 가입 등 별도의 절차 없이 '자동차 테크맵 프로젝트'의 <a href=\"#\" class=\"text-link\">라이선스 정책</a>에 따라 오픈소스 정보 및 콘텐츠를 자유롭게 활용할 수 있습니다.",
        "member.member.title": "회원 [Member]",
        "member.member.desc": "'자동차 테크맵 프로젝트'에 참여하려면 멤버로 가입해야 하며, <a href=\"#\" class=\"text-link\">가입 신청서(개인/기업)</a> 제출 후 운영위원회의 승인을 통해 등록됩니다.",
        "member.board.title": "보드 회원사 [Board Member]",
        "member.board.desc": "프로젝트에 지속적인 기여를 한 기업 회원은 운영위원회의 승인을 거쳐 보드 회원사로 임명될 수 있습니다.",
        "member.sponsor.title": "후원사 [Sponsor]",
        "member.sponsor.desc": "프로젝트 운영, 관련 서비스 개발 및 확산 등을 지원한 기업 또는 기관은 후원사로 인정됩니다.",

        "committee.section.title": "운영위원회",
        "committee.structure.title": "구성",
        "committee.structure.desc": "운영위원회는 보드 회원사로 구성되며, 1년 단위로 활동 실적에 따라 재구성 됩니다.",
        "committee.role.title": "역할",
        "committee.role.desc.1": "프로젝트의 정책 수립, 일정 관리 등 주요 의사 결정을 수행합니다.",
        "committee.role.desc.2": "회원, 보드 회원사, 후원사에 대한 가입 및 등록 신청을 심사하고 승인합니다.",
        "committee.role.desc.3": "거버넌스 정책 및 관련 문서를 작성하고 개정합니다.",

        "secretariat.section.title": "운영사무국",
        "secretariat.desc.1": "운영사무국은 정보통신산업진흥원이 구성한 조직(오픈업)이 담당합니다.",
        "secretariat.desc.2": "자동차 테크맵 프로젝트의 원활한 운영을 실무적으로 지원합니다.",

        "board.section.title": "보드 회원사",
        "sponsor.section.title": "후원사",

        // 라이선스 정책


        "license.breadcrumb": "라이선스 정책",
        "license.title": "라이선스 정책",
        "license.description": "모빌리티 테크맵 프로젝트에서 제공하는 배포물의 형태에 따른 라이선스 소개입니다.",

        "license.section.distribution": "배포 라이선스",
        "license.distribution.data": "오픈소스 정보 데이터 : ODC-By 1.0 라이선스 (Open Data Commons Attribution License v1.0)",
        "license.distribution.api": "API 소스코드 : Apache 2.0 라이선스",
        "license.distribution.content": "오픈소스 정보 데이터와 소스코드를 제외한 콘텐츠 : CC-BY-2.0 라이선스",

        "license.section.traffic": "⚠️ 과도한 트래픽에 관한 제한",
        "license.traffic.warning": "WARNING",
        "license.traffic.desc.1": "자동차 테크맵 프로젝트에서 제공하는 정보는 위 라이선스에 따라 누구나 자유롭게 사용할 수 있습니다.",
        "license.traffic.desc.2": "다만, 사용자에 의해 서버에 과도한 트래픽이 발생하는 경우에는 서비스가 중단될 수 있으며, 사전 고지 없이 특정 IP의 접속을 제한할 수 있습니다.",

        "license.section.disclaimer": "보증 부인",
        "license.disclaimer.1": "자동차 테크맵 프로젝트는 고지 검증을 통해 최대한 정확한 정보를 제공하고자 노력합니다. 그럼에도 불구하고 정확하지 않은 정보가 포함되어 있을 수 있습니다.",
        "license.disclaimer.2": "자동차 테크맵 프로젝트의 제공되는 정보는 법적 분쟁의 근거로 사용할 수 없습니다.",
        "license.disclaimer.3": "자동차 테크맵 프로젝트 정보의 사용으로 인해 발생한 그 어떠한 유형의 손해에 대해서도 책임지지 않습니다.",


        // FAQ


        "faq.title": "FAQ",
        "faq.section.terms.title": "사용 조건",
        "faq.section.terms.desc": "자동차 테크맵 프로젝트는 오픈소스로 제공되며, 관련 라이선스를 준수하는 조건 하에 누구나 무료로 사용할 수 있습니다.",

        "faq.section.license.title": "라이선스 정책",
        "faq.section.license.desc.1": "자동차 테크맵 사이트에서 제공되는 오픈소스 정보 데이터(ODC-By 1.0), API 소스코드(Apache 2.0), 오픈소스 정보 데이터와 소스코드를 제외한 콘텐츠(CC-BY-2.0)는 각각의 라이선스 조건에 따라 사용 가능합니다.",
        "faq.section.license.desc.2": "자세한 내용은 <a href=\"/license\" class=\"text-link\">라이선스 정책</a>을 참고해주시기 바랍니다.",

        "faq.section.member.title": "회원 정책",
        "faq.section.member.desc.1": "자동차 테크맵 프로젝트는 일반 사용자, 회원, 보드 회원사, 후원사로 구성되며, 보드 회원사로 구성된 운영위원회에서 주요 의사 결정 및 커뮤니티 운영 정책을 수립하고, 신규 가입 및 등록 신청을 심사하고 승인합니다.",
        "faq.section.member.desc.2": "자세한 내용은 <a href=\"/organization\" class=\"text-link\">조직 및 멤버</a> 페이지를 참고해주시기 바랍니다.",

        "faq.section.join.title": "가입 방법",
        "faq.section.join.desc.1": "자동차 테크맵 프로젝트에 참여하려면 멤버로 가입해야 하며, <a href=\"organization\" class=\"text-link\">가입 신청서(개인/기업)</a> 제출 후 운영위원회의 승인을 통해 등록됩니다.",
        "faq.section.join.desc.2": "궁금한 사항은 <a href=\"mailto:techmap@oss.kr\" class=\"text-link\">이메일 문의</a> 또는 <a href=\"organization\" class=\"text-link\">조직 및 멤버</a> 구성 안내를 참고해주시기 바랍니다.",

        "faq.section.contribute.title": "기여 방법",
        "faq.section.contribute.desc.1": "자동차 테크맵 프로젝트는 참여와 협력을 바탕으로 함께 만들어가는 오픈소스 프로젝트입니다.",
        "faq.section.contribute.desc.2": "오픈소스에 관심 있는 누구나 참여 가능하며, 오픈소스 공개, 문서 기여, 피드백 제공, 개발, 테스트 등 다양한 방식으로 참여할 수 있습니다.",
        "faq.section.contribute.desc.3": "참여 방법은 <a href=\"contribute\" class=\"text-link\">기여하기</a> 페이지를 참고하여 회원 가입 후 활동하실 수 있습니다.",

        "faq.section.use.title": "활용 방법",
        "faq.section.use.desc.1": "자동차 분야의 각 기술별 오픈소스 정보를 열람하고 싶으시면 <a href=\"techmap\" class=\"text-link\">자동차 테크맵</a> 페이지를 통해 관련 정보를 확인하실 수 있으며, 컴포넌트 검색 및 기술분류별 활용도순, 관련도순 등으로 조회 가능합니다.",
        "faq.section.use.desc.2": "또한 전체 데이터를 이용하고 싶으시면 <a href=\"api\" class=\"text-link\">Open-API</a>를 활용하실 수 있으며, 연구목적의 상세 데이터는 <a href=\"use/data\" class=\"text-link\">데이터 신청하기</a> 기능을 통해 신청 가능합니다.",

        "faq.section.api.title": "Open-API 사용법",
        "faq.section.api.desc.1": "자동차 테크맵 Open-API는 자동차 분야에서 활용되는 다양한 오픈소스 정보를 수집하고 정리하여 기업 및 연구기관에서 자료를 편리하게 활용할 수 있도록 공개한 인터페이스입니다.",
        "faq.section.api.desc.2": "자세한 내용은 <a href=\"api\" class=\"text-link\">Open-API</a> 페이지를 참고해주시기 바랍니다.",

        "faq.section.contact.title": "문의하기",
        "faq.section.contact.desc.1": "사이트 이용 중 문제가 발생하거나 문의사항이 있을 경우, 홈페이지 하단의 <strong>Contact Us : <a href=\"mailto:techmap@oss.kr\" class=\"text-link\">techmap@oss.kr</a></strong> 를 통해 연락하실 수 있습니다.",
        "faq.section.contact.desc.2": "더 자세한 정보나 특정 기능에 대한 안내가 필요하시면, 추가로 <strong><a href=\"mailto:techmap@oss.kr\" class=\"text-link\">문의</a></strong>해주시기 바랍니다.",


        // API 활용

        "use.api.breadcrumb": "Open-API",
        "use.api.title": "Open-API",
        "use.api.limitation.title": "Open-API 사용 제한",
        "use.api.limitation.desc": "자동차 테크맵 프로젝트의 사용자 API는 다음과 같은 사용 제한이 있습니다. <br> 한 시간당 최대 5,000번 이상의 API 호출 시, 'Too Many Requests' 예외가 발생합니다.",

        "use.api.component.title": "컴포넌트 조회",
        "use.api.component.desc": "등록된 컴포넌트 정보를 조회할 수 있는 API입니다.",

        "openapi.title": "자동차 테크맵 Open-API",
        "openapi.description": "자동차 테크맵 Open-API는 자동차 분야에서 활용되는 다양한 오픈소스 정보를 수집하고 정리하여 <br>민간 기업 및 연구기관에서 자료를 편리하게 활용할 수 있도록 공개한 인터페이스 입니다. <br>사용자는 이를 활용하여 소프트웨어 개발 및 연구 등에 활용할 수 있습니다.",

        "openapi.target.title": "Open-API 사용대상",
        "openapi.target.description": "자동차 테크맵 자료 활용을 원하는 모든 사용자",

        "openapi.key.title": "Open-API Key 발급",
        "openapi.key.description": "자동차 테크맵 Open-API 서비스를 이용하시려면 <a href=\"https://www.techmap.kr/use/api\" class=\"text-link\">자동차 테크맵 Open-API Key 발급 페이지</a>에서 키 발급을 받으셔야 합니다.<br>신청 후 <strong>관리자 승인</strong>이 완료되면, 입력하신 이메일로 키가 발송됩니다.",

        "use.api.query.title": "Query 파라미터",

        "use.api.query.param.componentName": "컴포넌트명",
        "use.api.query.param.licenseName": "라이선스명",
        "use.api.query.param.security": "보안취약점 <br> - None, Low, Medium, High, Critical",
        "use.api.query.param.equalFlag": "검색결과 대상을 지정할 때 사용합니다.<br> - 'Y': 정확 일치 <br> - 'N': 포함 검색(기본값)",
        "use.api.query.param.page": "시작 page 숫자(필수값) <br> - 기본값: 0",
        "use.api.query.param.size": "페이지당 결과 수(필수값) <br> - 기본값: 10",
        "use.api.query.param.sort": "정렬 기준 항목(필수값) <br> - componentName / licenseName",
        "use.api.query.param.direction": "정렬 방향 <br> - ASC: 오름차순 (기본값) / DESC: 내림차순",

        "use.api.query.th.param": "파라미터",
        "use.api.query.th.desc": "설명",
        "use.api.query.th.type": "타입",
        "use.api.query.th.required": "필수여부",
        "use.api.query.th.example": "예시",
        "button.copy": "복사",
        "button.edit": "편집",
        "use.api.response.th.depth1": "Depth 1",
        "use.api.response.th.depth2": "Depth 2",
        "use.api.response.th.depth3": "Depth 3",
        "use.api.response.th.depth4": "Depth 4",
        "use.api.response.th.type": "타입",
        "use.api.response.th.desc": "설명",
        "use.api.response.th.note": "비고",

        "use.api.example.title": "사용 예제",
        "use.api.header.title": "응답 Header",
        "use.api.body.title": "응답 Body",
        "use.api.response.title": "응답 필드 설명",

        // 응답 필드 설명
        "use.api.response.code": "응답 상태 코드",
        "use.api.response.components": "컴포넌트 목록",
        "use.api.response.component_name": "컴포넌트 이름",
        "use.api.response.description": "컴포넌트 설명",
        "use.api.response.versions": "버전 리스트",
        "use.api.response.version": "버전명",
        "use.api.response.homepage": "홈페이지 URL",
        "use.api.response.security_vuln": "보안 취약점 수준",
        "use.api.response.licenses": "해당 버전의 라이선스 리스트",
        "use.api.response.license_name": "라이선스 이름",
        "use.api.response.license_risk": "라이선스 위험도",
        "use.api.response.equalFlag": "정확 일치 여부",
        "use.api.response.page": "페이지 번호",
        "use.api.response.size": "페이지당 결과 수",
        "use.api.response.sort": "정렬 기준 필드",
        "use.api.response.direction": "정렬 방향",

        // 데이터 신청
        "data.request.breadcrumb": "데이터 신청",
        "data.request.title": "데이터 신청",
        "data.request.description": "자동차 테크맵 중 연구&개발 목적의 상세데이터는 정보통신산업진흥원을 통해 제공되고 있습니다. <br>아래 페이지로 이동 후 신청해 주시기 바랍니다.",
        "data.request.button": "데이터 신청",

        // 기여하기
        "contribute_use.title": "자동차 테크맵 프로젝트에 기여하기",
        "contribute_use.intro": `자동차 테크맵 프로젝트는 자사의 오픈소스 정보를 공유하거나 <br> 기존 자동차 테크맵 프로젝트의 잘못된 정보를 찾았다면
        언제든지 프로젝트에 참여하고 기여할 수 있습니다.<br>
        기여하기에 앞서 알아두면 좋은 기여하기 사전 지식을 <a href="#" class="text-link">"NIPA 기업 오픈소스SW 거버넌스 가이드"</a>를 참고하여 안내합니다.`,

        "contribute_use.benefit.title": "기여 혜택",
        "contribute_use.benefit.desc": "기업과 개발자가 기여하기를 통해 얻을 수 있는 이점에 대해 설명합니다.",

        "contribute_use.prepare.title": "기여 준비",
        "contribute_use.prepare.desc": "기여에 앞서 기본 준비사항을 소개합니다.",

        "contribute_use.type.title": "기여 종류",
        "contribute_use.type.desc": "개발자들의 소스코드 기여는 물론 문서/번역, 테스트, 디자인, 마케팅, 이벤트 등 다양한 방법의 기여가 있습니다.",

        "contribute_use.policy.title": "기여 정책",
        "contribute_use.policy.desc": "자동차 테크맵 프로젝트에 기여하기 위한 기본 정책을 설명합니다.",

        "contribute_use.contact.title": "문의하기",
        "contribute_use.contact.desc": `기여하기에 문의사항이 있을 경우, <strong>Contact Us : <a href="mailto:techmap@oss.kr">techmap@oss.kr</a></strong> 를 통해 문의하시기 바랍니다.`,

        // 기여 혜택
        "contribute_benefit.company.subtitle": "기업에서 얻는 이점",
        "contribute_benefit.company.desc":
            "기업이 오픈소스에 기여하는 목적과 이익은 무엇인가? 기업은 왜 구성원의 오픈소스 기여 활동을 장려해야 하나? 기업의 비즈니스 관점에서도 오픈소스에 기여해야 하는 이유는 다음과 같다.",
        "contribute_benefit.company.title.1": "1. 유지 관리 비용을 절감할 수 있다",
        "contribute_benefit.company.desc.1": "기업은 오픈소스를 사용하여 제품을 만들면서 버그를 수정하거나 새로운 기능을 추가한다. 그런데 이를 다시 오픈소스 프로젝트로 기여하지 않는다면 어떻게 될까? 오픈소스 프로젝트는 중요한 보안 패치 등 새로운 버전을 계속해서 릴리즈할 텐데, 그때마다 기업은 새로운 버전을 적용하기 전에 자체적으로 수정한 사항을 다시 새로운 버전에 반영한 후, 기능은 이상 없이 동작하는지, 성능에는 영향이 없는지 매번 테스트해야 하는 노력이 필요하다. 이러한 수고가 반복된다면 이에 투입해야 하는 인력과 시간 등의 관리 비용은 악몽과도 같이 크게 증가할 것이다. 만약 수정 사항을 오픈소스 프로젝트에 기여했다면 향후 새로운 버전이 릴리즈될 때 수정 사항이 이미 포함되어 있기 때문에 추가로 유지 관리해야 할 필요가 없게 된다. 따라서 오픈소스를 사용하는 기업은 기여의 중요성을 개발자들에게 교육해야 한다. 물론, 오픈소스 프로젝트에 기여하는 것은 적지 않은 수고와 시간이 들어갈 수 있다. 개발자들은 타이트한 개발 일정 때문에 패치를 만들어도 당장 제품에만 적용하려고 하지, 이를 오픈소스 프로젝트에 기여하지 않으려고 할 수 있다. 그러나 패치를 기여하지 않으면 신규 버전의 오픈소스가 새롭게 릴리즈될 때마다 개발자는 자기가 만든 패치를 재적용해야 한다는 점을 재차 강조하는 바이다. 이러한 작업이 반복될수록 더 많은 시간과 노력을 쏟는 악순환이 된다.",
        "contribute_benefit.company.title.2": "2. 오픈소스 프로젝트의 방향에 영향을 미칠 수 있다",
        "contribute_benefit.company.desc.2": "기업이 제품 개발에 중요하게 사용하는 오픈소스 프로젝트에서 기업에 꼭 필요한 기능을 추가해주기를 바라는가? 그렇다면 그 오픈소스 프로젝트에 바라는 기능을 제안하고, 경우에 따라서는 일부분을 직접 개발하고 기여하는 등, 활발히 활동할 것을 권한다. 기업에서 이렇게 기여한 이후에는 여러 사람의 참여를 통해 해당 기능을 안정화하고 고도화하여 결과적으로는 기업이 원하는 방향으로 성장하게 된다.",
        "contribute_benefit.company.title.3": "3. 우수한 개발자를 고용할 수 있다",
        "contribute_benefit.company.desc.3": "우수한 오픈소스 개발자를 찾을 수 있는 가장 좋은 장소는 바로 오픈소스 커뮤니티이다. 오픈소스에 적극적으로 기여하는 기업은 오픈소스 커뮤니티에서 좋은 평판을 쌓게 된다. 오픈소스 커뮤니티의 우수한 개발자는 오픈소스에 적극적으로 기여하는 기업이 어디인지 알고 있고, 그런 기업에서 일하고 싶어 한다. 오픈소스 기여 활동을 전혀 하지 않는 기업이 우수한 오픈소스 개발자를 채용하기는 쉽지 않다.",

        "contribute_benefit.developer.subtitle": "개발자가 얻는 이점",
        "contribute_benefit.developer.title.1": "1. 공공의 이익에 기여할 수 있다",
        "contribute_benefit.developer.title.2": "2. 실력을 키울 수 있다",
        "contribute_benefit.developer.title.3": "3. 오픈소스를 깊은 수준에서 이해하고 기술을 습득할 수 있다",
        "contribute_benefit.developer.title.4": "4. 협업을 배울 수 있다",
        "contribute_benefit.developer.title.5": "5. 새로운 사람을 만날 수 있다",
        "contribute_benefit.developer.title.6": "6. 평판과 경력을 키울 수 있다",
        "contribute_benefit.developer.title.7": "7. 리더쉽을 배울 수 있다",

        "contribute_benefit.developer.desc.1": "사용 중인 오픈소스의 버그를 직접 수정하거나 새로운 기능을 추가하면 소프트웨어가 개선될 뿐만 아니라 이 소프트웨어를 사용하는 모두에게 이익을 제공하게 된다. 작은 기여로 글로벌 커뮤니티에 공헌하는 것이다.",
        "contribute_benefit.developer.desc.2": "오픈소스에 기여하는 활동을 통해 새로운 기술을 배울 수 있다. 그뿐만 아니라 반복적인 연습과 훈련을 통해 역량을 향상할 수 있다. 버전 관리, Unit Test, Integration Test, CI/CD 등은 오픈소스 프로젝트 개발에서 탄생하여 지금은 거의 모든 소프트웨어 개발 시 사용되고 있는 개발방법론이다. 이들을 오픈소스 프로젝트에서 배울 수 있다. 더구나, 오픈소스 프로젝트는 회사 업무와는 달리 오픈소스 프로젝트에서는 초보자의 실수에 비교적 관대하여 본인의 의지만 확고하다면 기술 역량을 향상할 수 있는 최고의 공간이다. 오픈소스 프로젝트에서는 코딩뿐만 아니라 UI, 그래픽 디자인, 문서 작성 등의 실무를 배울 수 있다.",
        "contribute_benefit.developer.desc.3": "단순히 오픈소스를 사용하는 수준을 넘어 오픈소스 기여를 위해 이슈를 이해하고, 문제를 해결하게 되면 보다 더 깊은 수준으로 오픈소스 기술을 습득하게 된다. 이러한 활동은 오픈소스의 향후 변경 사항을 쉽게 식별하여 유연하게 대응할 수 있게 하며, 오픈소스 활용을 더 확장해나갈 수도 있다.",
        "contribute_benefit.developer.desc.4": "오픈소스 커뮤니티는 전 세계의 다양한 지역, 다른 시간대의 사람들이 모여 있는 공간이다. 이러한 제약 가운데 공통 과제를 수행하기 위해서는 고도의 협업 능력이 필요하다. 오픈소스 프로젝트에서는 분업, 위험관리를 고려한 진정한 협업이 이뤄진다. 이와 더불어 협업을 가능하게 하는 여러 도구에도 익숙해질 수 있다. 이슈 트래커, 버전 관리 시스템, 메일링리스트와 같은 도구가 대표적이다.",
        "contribute_benefit.developer.desc.5": "오픈소스에는 커뮤니티가 있다. 공통 관심사가 있는 사람들이 참여하고 만남으로써 관계를 만들어 갈 수 있다. 어떤 사람을 만나느냐가 경력의 방향에 큰 영향을 미칠 수 있다. 신뢰할 수 있는 관계가 되고 나면 서로 새로운 업무나 직장으로 이끌어줄 수 있다. 오픈소스 커뮤니티에서는 항상 전문적으로 협업하면서 서로 업무 스타일과 인성을 깊이 있게 파악할 수 있어서 가능한 일이다. 이처럼 오픈소스 프로젝트에 기여하면서 형성된 관계야말로 왜 기여해야 하는지를 설명하는 분명한 답변 중 하나이다.",
        "contribute_benefit.developer.desc.6": "오픈소스 작업은 모두에게 공개된다. 오픈소스에서 수행한 작업은 어디에서나 누구에게든 보여줄 수 있으며, 이는 개인의 평판을 높이는 데 큰 도움이 된다.",
        "contribute_benefit.developer.desc.7": "오픈소스에서는 팀 구성, 갈등 해결 및 우선순위 조정과 같은 리더십과 관리 기술을 배울 수 있다. 오픈소스 프로젝트에서 공동 작업을 하려면 누군가에게 업무 수행 방식을 설명해야 하고, 다른 사람들에게 도움을 요청해야 할 일이 있다. 이렇게 배우고 가르치는 일을 통해 리더쉽을 경험하고, 성취감을 맛보게 된다.",


        "contribute_benefit.source": "출처 : 2025년 기업 오픈소스SW 거버넌스 가이드",

        // 기여 준비
        "contribute.oss.prepare": "오픈소스SW 기여 준비",

        "contribute.prepare.1.title": "1. 오픈소스SW 프로젝트의 문서를 숙지하라",
        "contribute.prepare.1.desc": "오픈소스SW 프로젝트마다 기여자에게 요구하는 절차가 다르다.",
        "contribute.prepare.1.list.1": "코딩 스타일, language, formatting, bug/ticket 관리, 릴리즈 시기 등에 대해 다양한 가이드라인을 갖고 있다.",
        "contribute.prepare.1.list.2": "어떤 프로젝트는 CLA(Contributor License Agreement)를 요구하는 반면, 어떤 프로젝트는 DCO(Developer Certificate of Origin)를 요구한다.",
        "contribute.prepare.1.list.3": "Patch를 받는 방식도 대부분 Github의 Pull Request지만, 일부는 메일링 리스트를 사용하기도 한다.",
        "contribute.prepare.1.footer": "따라서 기여하고자 하는 프로젝트의 프로세스를 이해하기 위해 해당 프로젝트의 CONTRIBUTING 또는 README 파일을 확인하자. 예를 들어, Kubernetes는 기여자를 위한 자세한 가이드를 제공하며, 요구사항을 잘 준수할수록 기여가 수락될 가능성이 높아진다.",

        "contribute.prepare.2.title": "2. CLA / DCO 서명은 주의하라",
        "contribute.prepare.2.desc.1": "일부 오픈소스SW 프로젝트는 CLA나 DCO에 서명할 것을 요구한다. 이 문서들은 기여자가 기여하려는 저작물의 저작권을 보유하고 있음을 보장해야 한다고 명시한다.",
        "contribute.prepare.2.desc.2": "기업 구성원이라면 저작권은 일반적으로 기업에 귀속되므로, 서명 전 반드시 회사의 정책을 확인하거나 법무, OSPO에 문의해야 한다. 요즘은 대부분의 프로젝트가 서면 대신 bot 기반 클릭 서명을 제공하므로 더욱 주의가 필요하다.",

        "contribute.prepare.3.title": "3. 기여 코드를 점검하라",
        "contribute.prepare.3.list.1": "기여할 권리가 있는 코드인가? 본인이 작성하지 않은 코드가 포함되어 있다면 기여 권리를 반드시 확인할 것.",
        "contribute.prepare.3.list.2": "민감하거나 기업의 독점 정보가 포함되어 있는 코드는 기여하지 말 것.",
        "contribute.prepare.3.list.3": "특허가 포함된 코드인지 확인하고, 해당 오픈소스 라이선스와 기업의 정책이 충돌하지 않는지 사전 검토할 것.",
        "contribute.prepare.3.list.4": "모호한 부분은 OSPO, 법무 조직, 또는 상사에게 문의할 것.",

        "contribute.prepare.4.title": "4. 기업 내부 승인을 받아라",
        "contribute.prepare.4.desc.1": "기업의 오픈소스SW 정책이 요구하는 내부 승인 절차를 반드시 따르자. 오픈소스는 저작권 기반이므로 기여 전에도 저작권 관련 절차가 필요하다.",
        "contribute.prepare.4.desc.2": "정책이 없을 경우에는 조직 내 의사결정권자에게 기여 의사를 전달하고 승인받아야 한다. 이는 개발자가 안정적으로 기여에 집중할 수 있는 환경을 만드는 중요한 과정이다.",

        // 기여 종류
        "contribute.oss.type": "오픈소스SW 기여 종류",
        "contribute.type.doc.title": "문서 작성 / 번역",
        "contribute.type.doc.1": "프로젝트 문서, 튜토리얼을 작성한다.",
        "contribute.type.doc.2": "프로젝트의 뉴스레터를 작성하거나 메일링 리스트의 중요 사항을 요약한다.",
        "contribute.type.doc.3": "프로젝트 문서를 자국어로 번역한다.",

        "contribute.type.test.title": "테스트 / 이슈 생성",
        "contribute.type.test.1": "소프트웨어가 정상적으로 동작하는지 테스트한다.",
        "contribute.type.test.2": "문서에 기재된 대로 빌드 / 설치되는지 테스트한다.",
        "contribute.type.test.3": "문서, API가 일관성 있게 작성되었는지 확인한다.",

        "contribute.type.design.title": "디자인",
        "contribute.type.design.1": "프로젝트 웹사이트의 레이아웃, 메뉴 등을 개선한다.",
        "contribute.type.design.2": "프로젝트가 일관성 있는 디자인을 가질 수 있도록 스타일 가이드를 만든다.",
        "contribute.type.design.3": "새로운 로고 또는 티셔츠를 만드는 데 기여한다.",

        "contribute.type.code.title": "코드 작성",
        "contribute.type.code.1": "해결할 수 있는 오픈된 이슈를 찾는다.",
        "contribute.type.code.2": "새로운 기능을 추가한다.",
        "contribute.type.code.3": "자동화를 위한 도구와 테스팅을 개선한다.",

        "contribute.type.marketing.title": "마케팅",
        "contribute.type.marketing.1": "SNS, 세미나 발표 등 다양한 방법으로 프로젝트의 목적과 효용성을 홍보한다.",

        "contribute.type.event.title": "이벤트 행사",
        "contribute.type.event.1": "프로젝트의 콘퍼런스, 워크숍, 밋업 등 다양한 모임을 기획하고 주관한다.",


        "contribute.type.intro": "오픈소스SW 프로젝트는 주로 소프트웨어 개발자들이 오픈소스SW의 소스 코드를 수정하여 버그를 고치거나, 기능 개선 등 소스 코드 작성을 통해 프로젝트에 기여한다. 그러나 개발자들만 오픈소스SW 프로젝트에 기여할 수 있는 것은 아니다. 오픈소스SW 프로젝트는 다음과 같이 문서화, 디자인 등 다양한 유형의 기여를 필요로 한다.",

        // 기여 정책
        "contribute.oss.policy": "오픈소스SW 기여 정책",
        "contribute.policy.intro": "자동차 테크맵 프로젝트는 여러분의 참여와 공유를 존중하고 프로젝트 협업을 통한 성장을 지향합니다. 하지만 기여하는 기업/개발자의 지식재산 보호와 저작권 침해를 방지하기 위한 몇가지 규칙을 정합니다.",

        "contribute.policy.doc.1": "기여할 권리가 있는 코드(정보)만 기여하라. 즉, 직접 작성한 코드(정보)를 기여한다.",
        "contribute.policy.doc.2": "민감한 정보, 특허 등 기업의 지식재산 노출이 우려되는 코드, 문서, 정보는 기여하지 마라.",
        "contribute.policy.doc.3": "가능한 프로젝트의 기여 프로세스 (CONTRIBUTING.md) 에서 요구하는 바를 준수한다.",
        "contribute.policy.doc.4": "수준 이하의 코드(정보)는 기여하지 마라. 이는 기업의 평판에도 영향을 미칠 수 있다.",
        "contribute.policy.doc.5": "이외 어느 것이라도 무언가 바람직하지 않아 보이는 상황이 있다면 주저하지 말고 문의한다."

    },
    en: {
        "ex": "ex",

        "menu.about": "About",
        "menu.techmap": "Mobility Techmap",
        "section.overview.title": "Overview",
        "menu.contribute": "Contribute",
        "menu.use": "Utilization",
        "menu.api": "Open-API",
        "menu.data": "Data Request",
        "menu.news": "News",
        "menu.member": "Organization & Members",
        "menu.license": "License Policy",
        "menu.benefit": "Contribution Benefits",
        "menu.prepare": "Contribution Guide",
        "menu.type": "Contribution Types",
        "menu.policy": "Contribution Policy",
        "menu.signup": "Sign Up",
        "hero.slogan": '<img src="img/index_01_tit1.png" alt="Mobility TechMap"/><br class="only_mb"/>A New Path Drawn with <strong>Open Source</strong>',
        "category.powertrain": "Powertrain",
        "category.chassis": "Chassis",
        "category.electric": "Electrical System",
        "category.body": "Body & Trim",
        "category.smart_factory": "Smart Factory",
        "category.fuel": "Fuel",
        "category.autonomous": "Autonomous Driving",
        "category.connected": "Connected Car",
        "description.techmap": `
                    <strong class="blue">Mobility Techmap</strong> is an open-source initiative in the Mobility field, 
                    <br class="only_mb" />designed to share technical information 
                    <br />
                    <strong>
                        and help all players in the mobility supply chain 
                        <br class="only_mb" />collaborate, contribute, and grow together 
                        <br class="only_mb" />as an open ecosystem
                    </strong>.
                    `, "section.projects.title": "Major Open Source Projects",
        "section.projects.desc": "Project",
        "section.projects.title": "Major Open Source Projects",
        "project.description.1": "Operating systems and open-source platforms running directly on in-vehicle hardware",
        "project.description.2": "Open-source autonomous driving software stack projects for developing self-driving cars",
        "project.description.3": "Lightweight real-time operating system (RTOS) open-source projects for IoT and embedded systems",
        "project.description.4": "Open-source build systems for customizing embedded Linux distributions",
        "project.description.5": "Open-source Linux operating systems used across various embedded environments",
        "project.description.6": "Open-source consortium projects to enhance interoperability in connected vehicle software",

        //소개

        "overview.title": "Overview",
        "overview.section.name": "Name",
        "overview.section.name.value": "Mobility Techmap Project",
        "overview.section.purpose": "Purpose",
        "overview.section.purpose.value": "To build an open-source mobility ecosystem where information on Mobility open source is shared, utilized, and developed collaboratively.",
        "overview.section.history": " History",
        "overview.section.year": "",
        "label.month.01": "Jan",
        "label.month.05": "May",
        "label.month.06": "Jun",
        "label.month.11": "Nov",
        "label.month.12": "Dec",
        "overview.timeline.2025.06": "Mobility Techmap Introduction Session Held",
        "overview.timeline.2025.05": "Mobility Techmap Website Launched",
        "overview.timeline.2024.12": "Keynote Presentation at Open Source SW Festival and Press Release",
        "overview.timeline.2024.11": "Collected and Organized Open Source Info from Global OEMs and Suppliers",
        "overview.timeline.2024.06": "Workshop on Open Source Techmap by Hyundai Motor Group",
        "overview.timeline.2024.01": "Discussion on Plan to Promote Mobility Open Source Techmap",
        "overview.timeline.2023.11": "MOU Signed Between NIPA and Hyundai Motor Group for Open Source SW Support in Mobility Manufacturing",

        // 조직 및 멤버

        "member.section.title": "Participation",
        "member.user.title": "User",
        "member.user.desc": "Anyone can freely use the open source information and content in accordance with the <a href=\"#\" class=\"text-link\">license policy</a> of the Mobility Techmap Project without separate registration.",
        "member.member.title": "Member",
        "member.member.desc": "To participate in the Mobility Techmap Project, you must join as a member by submitting a <a href=\"#\" class=\"text-link\">membership application (individual/corporate)</a> and receiving approval from the Steering Committee.",
        "member.board.title": "Board Member",
        "member.board.desc": "Corporate members who continuously contribute to the project may be appointed as board members upon approval by the Steering Committee.",
        "member.sponsor.title": "Sponsor",
        "member.sponsor.desc": "Companies or institutions that support project operations, service development, or outreach efforts are recognized as sponsors.",

        "committee.section.title": "Steering Committee",
        "committee.structure.title": "Structure",
        "committee.structure.desc": "The Steering Committee is composed of board members and is restructured annually based on performance.",
        "committee.role.title": "Roles",
        "committee.role.desc.1": "Establishes project policies, manages schedules, and makes key decisions.",
        "committee.role.desc.2": "Reviews and approves membership and sponsor applications.",
        "committee.role.desc.3": "Drafts and revises governance policies and related documents.",

        "secretariat.section.title": "Secretariat",
        "secretariat.desc.1": "The Secretariat is managed by OpenUP, a team organized by NIPA (National IT Industry Promotion Agency).",
        "secretariat.desc.2": "It provides operational support for the Mobility Techmap Project.",

        "board.section.title": "Board Members",
        "sponsor.section.title": "Sponsors",

        // 라이선스 정책

        "license.breadcrumb": "License Policy",
        "license.title": "License Policy",
        "license.description": "This is an overview of the licenses applied to the types of distributions provided by the Mobility Techmap Project.",

        "license.section.distribution": "Distribution Licenses",
        "license.distribution.data": "Open Source Information Data: ODC-By 1.0 License (Open Data Commons Attribution License v1.0)",
        "license.distribution.api": "API Source Code: Apache 2.0 License",
        "license.distribution.content": "Content excluding the open source data and source code: CC-BY-2.0 License",

        "license.section.traffic": "⚠️ Traffic Restriction Notice",
        "license.traffic.warning": "WARNING",
        "license.traffic.desc.1": "The information provided by the Mobility Techmap Project may be freely used under the above licenses.",
        "license.traffic.desc.2": "However, in the event of excessive traffic caused by users, the service may be suspended and access from certain IPs may be restricted without prior notice.",

        "license.section.disclaimer": "Disclaimer",
        "license.disclaimer.1": "The Mobility Techmap Project strives to provide accurate information through verified sources. Nevertheless, some information may be inaccurate.",
        "license.disclaimer.2": "The information provided may not be used as a basis for legal claims.",
        "license.disclaimer.3": "We are not responsible for any damages arising from the use of information provided by the project.",

        // FAQ
        "faq.title": "FAQ",
        "faq.section.terms.title": "Usage Terms",
        "faq.section.terms.desc": "The Mobility Techmap Project is provided as open source and can be used freely by anyone in compliance with the relevant licenses.",

        "faq.section.license.title": "License Policy",
        "faq.section.license.desc.1": "Open source data (ODC-By 1.0), API source code (Apache 2.0), and other content (CC-BY-2.0) on the Mobility Techmap site are each subject to their respective licenses.",
        "faq.section.license.desc.2": "For more details, please refer to the <a href=\"license\" class=\"text-link\">License Policy</a>.",

        "faq.section.member.title": "Membership Policy",
        "faq.section.member.desc.1": "The project consists of users, members, board members, and sponsors. The Steering Committee, composed of board members, makes key decisions and approves new registrations.",
        "faq.section.member.desc.2": "For details, please see the <a href=\"organization\" class=\"text-link\">Organization & Members</a> page.",

        "faq.section.join.title": "How to Join",
        "faq.section.join.desc.1": "To participate, submit a <a href=\"organization\" class=\"text-link\">membership application (individual or corporate)</a> and receive approval from the Steering Committee.",
        "faq.section.join.desc.2": "If you have questions, please <a href=\"mailto:techmap@oss.kr\" class=\"text-link\">email us</a> or refer to the <a href=\"organization\" class=\"text-link\">Organization & Members</a> page.",

        "faq.section.contribute.title": "How to Contribute",
        "faq.section.contribute.desc.1": "This is an open source project built on collaboration and participation.",
        "faq.section.contribute.desc.2": "Anyone interested in open source can contribute via publishing, documentation, feedback, development, testing, and more.",
        "faq.section.contribute.desc.3": "See the <a href=\"contribute\" class=\"text-link\">Contribute</a> page to learn how to join and start participating.",

        "faq.section.use.title": "How to Use",
        "faq.section.use.desc.1": "To browse open source information by Mobility technology, visit the <a href=\"techmap\" class=\"text-link\">Mobility Techmap</a> page. You can search components by relevance or usage.",
        "faq.section.use.desc.2": "To access full datasets, use the <a href=\"api\" class=\"text-link\">Open API</a>. For detailed research data, use the <a href=\"use/data\" class=\"text-link\">Data Request</a> function.",

        "faq.section.api.title": "Open API Guide",
        "faq.section.api.desc.1": "The Open API provides access to organized open source information for use by companies and researchers.",
        "faq.section.api.desc.2": "Please refer to the <a href=\"api\" class=\"text-link\">Open API</a> page for more information.",

        "faq.section.contact.title": "Contact Us",
        "faq.section.contact.desc.1": "If you have any problems or inquiries, you can contact us at the bottom of the site via <strong>Contact Us : <a href=\"mailto:techmap@oss.kr\" class=\"text-link\">techmap@oss.kr</a></strong>.",
        "faq.section.contact.desc.2": "For more detailed information or guidance, please <strong><a href=\"mailto:techmap@oss.kr\" class=\"text-link\">contact us</a></strong>.",

        // API  활용
        "use.api.breadcrumb": "Open-API",
        "use.api.title": "Open-API",
        "use.api.limitation.title": "API Rate Limitation",
        "use.api.limitation.desc": "The Mobility Techmap API has a usage limit. <br> If you exceed 5,000 requests per hour, a 'Too Many Requests' exception will occur.",

        "use.api.component.title": "Component Lookup",
        "use.api.component.desc": "This API retrieves information on registered components.",

        "use.api.query.title": "Query Parameters",
        "openapi.title": "Mobility TechMap Open-API",
        "openapi.description": "The Mobility TechMap Open-API collects and organizes various open-source software information used in the Mobility field,<br>and provides an open interface so that private companies and research institutions can easily use the data.<br>Users can utilize this API for software development, research, and more.",

        "openapi.target.title": "Open-API Target Users",
        "openapi.target.description": "Anyone who wants to utilize Mobility TechMap resources",

        "openapi.key.title": "Open-API Key Issuance",
        "openapi.key.description": "To use the Mobility TechMap Open-API service, you must request a key on the <a href=\"https://www.techmap.kr/use/api\" class=\"text-link\">Mobility TechMap Open-API Key Issuance Page</a>.<br>Once approved by an administrator, the key will be sent to your registered email address.",

        "use.api.query.param.componentName": "Component name",
        "use.api.query.param.licenseName": "License name",
        "use.api.query.param.security": "Security vulnerability <br> - None, Low, Medium, High, Critical",
        "use.api.query.param.equalFlag": "Used to define the match type for search results.<br> - 'Y': Exact match<br> - 'N': Partial match (default)",
        "use.api.query.param.page": "Page index (required) <br> - default: 0",
        "use.api.query.param.size": "Number of results per page (required) <br> - default: 10",
        "use.api.query.param.sort": "Sort by (required) <br> - componentName / licenseName",
        "use.api.query.param.direction": "Sort direction <br> - ASC (default) / DESC",

        "use.api.query.th.param": "Parameter",
        "use.api.query.th.desc": "Description",
        "use.api.query.th.type": "Type",
        "use.api.query.th.required": "Required",
        "use.api.query.th.example": "Example",
        "button.copy": "Copy",
        "button.edit": "Edit",
        "use.api.response.th.depth1": "Depth 1",
        "use.api.response.th.depth2": "Depth 2",
        "use.api.response.th.depth3": "Depth 3",
        "use.api.response.th.depth4": "Depth 4",
        "use.api.response.th.type": "Type",
        "use.api.response.th.desc": "Description",
        "use.api.response.th.note": "Note",

        "use.api.example.title": "Usage Example",
        "use.api.header.title": "Response Header",
        "use.api.body.title": "Response Body",
        "use.api.response.title": "Response Field Description",

        // 응답 필드 설명
        "use.api.response.code": "Response status code",
        "use.api.response.components": "Component list",
        "use.api.response.component_name": "Component name",
        "use.api.response.description": "Component description",
        "use.api.response.versions": "Version list",
        "use.api.response.version": "Version",
        "use.api.response.homepage": "Homepage URL",
        "use.api.response.security_vuln": "Security vulnerability level",
        "use.api.response.licenses": "License list for this version",
        "use.api.response.license_name": "License name",
        "use.api.response.license_risk": "License risk level",
        "use.api.response.equalFlag": "Exact match flag",
        "use.api.response.page": "Page number",
        "use.api.response.size": "Results per page",
        "use.api.response.sort": "Sort field",
        "use.api.response.direction": "Sort direction",

        // 데이터 신청
        "data.request.breadcrumb": "Data Request",
        "data.request.title": "Data Request",
        "data.request.description": "Detailed data for R&D purposes within the Mobility Techmap is provided through <br> the National IT Industry Promotion Agency (NIPA).<br>Please go to the page below to apply.",
        "data.request.button": "Request Data",

        // 기여 하기

        "contribute_use.title": "Contributing to the Mobility Techmap Project",
        "contribute_use.intro": `You can participate and contribute to the project at any time by sharing your company’s open source information or identifying errors in the existing Mobility Techmap.<br>
        Before contributing, we recommend referring to the <a href="#" class="text-link">"NIPA Open Source Governance Guide for Companies"</a> as useful preliminary material.`,

        "contribute_use.benefit.title": "Benefits of Contribution",
        "contribute_use.benefit.desc": "Describes the advantages companies and developers can gain through contributing.",

        "contribute_use.prepare.title": "Before You Contribute",
        "contribute_use.prepare.desc": "Introduces the basic preparations needed before contributing.",

        "contribute_use.type.title": "Types of Contribution",
        "contribute_use.type.desc": "Contributions include not only source code but also documentation, translation, testing, design, marketing, and event participation.",

        "contribute_use.policy.title": "Contribution Policy",
        "contribute_use.policy.desc": "Explains the basic policies for contributing to the Mobility Techmap Project.",

        "contribute_use.contact.title": "Contact",
        "contribute_use.contact.desc": `If you have any questions about contributing, please contact us at <strong>Contact Us : <a href="mailto:techmap@oss.kr">techmap@oss.kr</a></strong>.`,

        // 기여 혜택
        "contribute_benefit.company.subtitle": "Benefits for Companies",
        "contribute_benefit.company.desc":
            "Why do companies contribute to open source? Why should organizations encourage their members to participate? From a business perspective, here’s why companies should contribute to open source.",
        "contribute_benefit.company.title.1": "1. Reduce maintenance costs",
        "contribute_benefit.company.desc.1": "Companies often use open source software to build their products while fixing bugs or adding new features. But what happens if they don’t contribute those changes back to the original project?\n\nOpen source projects continue to release new versions, including critical security patches. Every time a new version is released, companies must manually reapply their custom changes, verify that everything works as expected, and test for regressions or performance issues. This repetitive process dramatically increases maintenance overhead and resource costs.\n\nIf companies instead contributed their changes upstream, those modifications would be included in future releases — eliminating the need to manage and reapply patches each time.\n\nTherefore, organizations using open source should actively educate their developers about the value of contribution. While contributing upstream requires time and effort, especial_",
        "contribute_benefit.company.title.2": "2. Influence the direction of open source projects",
        "contribute_benefit.company.desc.2": "Does your company rely on an open source project for product development and hope that specific features are added? If so, you’re encouraged to propose those features to the project—and in some cases, actively develop and contribute them yourself. Once your contributions are accepted, the community can help stabilize and enhance the features, ultimately allowing the project to evolve in a direction aligned with your business needs.",
        "contribute_benefit.company.title.3": "3. Attract top-tier developers",
        "contribute_benefit.company.desc.3": "The best place to find top open source developers is within the open source community itself. Companies that actively contribute to open source projects gain a strong reputation in the community. Skilled developers in the open source world are aware of which companies contribute meaningfully—and they often prefer to work for those organizations. In contrast, companies that never engage in open source will find it difficult to attract such talent.",


        "contribute_benefit.developer.subtitle": "Benefits for Developers",
        "contribute_benefit.developer.title.1": "1. Contribute to the public good",
        "contribute_benefit.developer.title.2": "2. Improve technical skills",
        "contribute_benefit.developer.title.3": "3. Gain deep understanding and mastery of open source",
        "contribute_benefit.developer.title.4": "4. Learn collaboration",
        "contribute_benefit.developer.title.5": "5. Meet new people",
        "contribute_benefit.developer.title.6": "6. Build reputation and career",
        "contribute_benefit.developer.title.7": "7. Develop leadership skills",

        "contribute_benefit.developer.desc.1": "By fixing bugs or adding features to the open source software you use, you not only improve the software itself but also benefit everyone else using it. Even small contributions are meaningful acts of giving back to the global community.",
        "contribute_benefit.developer.desc.2": "Contributing to open source allows you to learn new technologies and improve your skills through repetition and hands-on experience. Many modern development practices like version control, unit testing, integration testing, and CI/CD originated from open source. These skills can be honed by actively participating in projects. Unlike corporate settings, open source communities are often more tolerant of mistakes, making them an ideal environment for beginners to grow. Beyond coding, you can also gain practical experience in areas like UI, graphic design, and documentation.",
        "contribute_benefit.developer.desc.3": "Going beyond mere usage, contributing to open source by understanding issues and solving problems helps you gain a deeper technical understanding. These experiences make it easier to adapt to future changes and expand how you use open source in other projects.",
        "contribute_benefit.developer.desc.4": "Open source communities bring together people from around the world, often working across time zones. Collaborating effectively in this environment requires strong teamwork skills. Projects rely on thoughtful division of labor and risk management. Through this, contributors also become familiar with essential collaboration tools like issue trackers, version control systems, and mailing lists.",
        "contribute_benefit.developer.desc.5": "Open source communities are filled with people who share common interests. Through participation, contributors naturally form relationships that can influence the direction of their careers. Trusted relationships often lead to new job opportunities or collaborative ventures. Since open source work involves close professional collaboration, people get to know each other's work styles and personalities deeply. These meaningful connections are one of the most compelling reasons to contribute to open source.",
        "contribute_benefit.developer.desc.6": "Open source work is public and transparent. The contributions you make are visible to anyone, anywhere—helping you build your reputation and credibility as a developer.",
        "contribute_benefit.developer.desc.7": "In open source, you can learn leadership and management skills like team building, conflict resolution, and prioritization. Working collaboratively often requires explaining your approach to others or asking for support. Through this process of teaching and learning, contributors develop leadership qualities and gain a strong sense of accomplishment.",


        "contribute_benefit.source": "Source: 2025 Open Source Software Governance Guide for Companies",

        // 기여 준비
        "contribute.oss.prepare": "Preparing to Contribute to Open Source",

        "contribute.prepare.1.title": "1. Read the documentation of the OSS project",
        "contribute.prepare.1.desc": "Each open source software project has different contribution procedures.",
        "contribute.prepare.1.list.1": "They may have various guidelines on coding style, language, formatting, bug/ticket management, and release cycles.",
        "contribute.prepare.1.list.2": "Some projects require a CLA (Contributor License Agreement), while others require a DCO (Developer Certificate of Origin).",
        "contribute.prepare.1.list.3": "Most projects accept patches via GitHub Pull Requests, but some still use mailing lists.",
        "contribute.prepare.1.footer": "Therefore, to understand the contribution process, check the CONTRIBUTING or README file of the project. For example, Kubernetes provides a detailed guide for contributors, and complying with these requirements increases the likelihood of your contribution being accepted.",

        "contribute.prepare.2.title": "2. Be cautious when signing CLA / DCO",
        "contribute.prepare.2.desc.1": "Some OSS projects require you to sign a CLA or DCO, which state that you own the copyright to the contributions you submit.",
        "contribute.prepare.2.desc.2": "If you are an employee, your company may own the copyright. So, you must check your company’s policy or consult legal/OSPO before signing. Today, many projects use bot-based click-signing instead of paper, which requires extra caution.",

        "contribute.prepare.3.title": "3. Review your contribution code",
        "contribute.prepare.3.list.1": "Do you have the right to contribute the code? If the code includes work you didn’t write, ensure you have the rights to contribute it.",
        "contribute.prepare.3.list.2": "Do not contribute sensitive or proprietary information.",
        "contribute.prepare.3.list.3": "Check if the code includes patented technology, and verify that it does not conflict with the OSS license or your company’s policy.",
        "contribute.prepare.3.list.4": "If in doubt, consult your OSPO, legal team, or manager.",

        "contribute.prepare.4.title": "4. Get internal company approval",
        "contribute.prepare.4.desc.1": "Follow your company’s OSS policy and obtain the required internal approval. OSS is based on copyright law, so proper approval is essential even before contribution.",
        "contribute.prepare.4.desc.2": "If there’s no policy, notify a decision maker in your organization and get their approval. This helps create a safe environment for contributors to focus on OSS work.",

        // 기여 종류
        "contribute.oss.type": "Types of Open Source Contributions",
        "contribute.type.doc.title": "Documentation / Translation",
        "contribute.type.doc.1": "Write project documentation and tutorials.",
        "contribute.type.doc.2": "Create newsletters or summarize key points from the mailing list.",
        "contribute.type.doc.3": "Translate project documents into your native language.",

        "contribute.type.test.title": "Testing / Issue Reporting",
        "contribute.type.test.1": "Test whether the software functions properly.",
        "contribute.type.test.2": "Verify that it builds/installs as described in the documentation.",
        "contribute.type.test.3": "Check for consistency in documentation and APIs.",

        "contribute.type.design.title": "Design",
        "contribute.type.design.1": "Improve layout and menus of the project website.",
        "contribute.type.design.2": "Create a style guide to maintain visual consistency.",
        "contribute.type.design.3": "Contribute to new logo or T-shirt design.",

        "contribute.type.code.title": "Code Contributions",
        "contribute.type.code.1": "Find and resolve open issues.",
        "contribute.type.code.2": "Add new features.",
        "contribute.type.code.3": "Enhance tools and testing for automation.",

        "contribute.type.marketing.title": "Marketing",
        "contribute.type.marketing.1": "Promote the project's value through social media, talks, and more.",

        "contribute.type.event.title": "Events & Conferences",
        "contribute.type.event.1": "Plan and organize conferences, workshops, and meetups for the project.",

        "contribute.type.intro": "Open source software (OSS) projects are often contributed to by software developers who fix bugs or improve features by modifying the source code. However, developers are not the only ones who can contribute. OSS projects also need contributions in documentation, design, and other areas as shown below.",

        // 기여 정책

        "contribute.oss.policy": "Open Source Contribution Policy",
        "contribute.policy.intro": "The Mobility TechMap project values your participation and collaboration, and aims for growth through open cooperation. However, to protect the intellectual property of contributing companies/developers and to prevent copyright infringement, we establish a few guidelines.",

        "contribute.policy.doc.1": "Only contribute code or content that you have the rights to. In other words, contribute what you have written yourself.",
        "contribute.policy.doc.2": "Do not contribute sensitive information, patents, or materials that could expose a company's intellectual property.",
        "contribute.policy.doc.3": "Follow the project's contribution process (e.g., CONTRIBUTING.md) as much as possible.",
        "contribute.policy.doc.4": "Do not contribute low-quality code or content. It could negatively impact your organization’s reputation.",
        "contribute.policy.doc.5": "If anything feels unclear or questionable, don’t hesitate to ask."

    }
};
