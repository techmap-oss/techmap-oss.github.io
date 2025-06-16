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
        if (pcImg) pcImg.src = 'img/index_02_01.jpg';
        if (mbImg) mbImg.src = 'img/index_02_02.jpg';
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
        "menu.type": "기여 유형",
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
        "member.user.desc": "누구나 회원 가입 등 별도의 절차 없이 '자동차 테크맵 프로젝트'의 <a href=\"license\" class=\"text-link\">라이선스 정책</a>에 따라 오픈소스 정보 및 콘텐츠를 자유롭게 활용할 수 있습니다.",
        "member.member.title": "회원 [Member]",
        "member.member.desc": "'자동차 테크맵 프로젝트'에 참여하려면 멤버로 가입해야 하며, <a href=\"https://forms.gle/av7jWKRr2uP46xAY8\" class=\"text-link\">가입 신청서(개인/기업)</a> 제출 후 운영위원회의 승인을 통해 등록됩니다.",
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
        "faq.section.join.desc.1": "자동차 테크맵 프로젝트에 참여하려면 멤버로 가입해야 하며, <a href=\"https://forms.gle/av7jWKRr2uP46xAY8\" class=\"text-link\">가입 신청서(개인/기업)</a> 제출 후 운영위원회의 승인을 통해 등록됩니다.",
        "faq.section.join.desc.2": "궁금한 사항은 <a href=\"mailto:techmap@oss.kr\" class=\"text-link\">이메일 문의</a> 또는 <a href=\"organization\" class=\"text-link\">조직 및 멤버</a> 구성 안내를 참고해주시기 바랍니다.",

        "faq.section.contribute.title": "기여 방법",
        "faq.section.contribute.desc.1": "자동차 테크맵 프로젝트는 참여와 협력을 바탕으로 함께 만들어가는 오픈소스 프로젝트입니다.",
        "faq.section.contribute.desc.2": "오픈소스에 관심 있는 누구나 참여 가능하며, 오픈소스 공개, 문서 기여, 피드백 제공, 개발, 테스트 등 다양한 방식으로 참여할 수 있습니다.",
        "faq.section.contribute.desc.3": "참여 방법은 <a href=\"contribute\" class=\"text-link\">기여하기</a> 페이지를 참고하여 회원 가입 후 활동하실 수 있습니다.",

        "faq.section.use.title": "활용 방법",
        "faq.section.use.desc.1": "자동차 분야의 각 기술별 오픈소스 정보를 열람하고 싶으시면 <a href=\"https://www.techmap.kr/techmap\" class=\"text-link\">자동차 테크맵</a> 페이지를 통해 관련 정보를 확인하실 수 있으며, 컴포넌트 검색 및 기술분류별 활용도순, 관련도순 등으로 조회 가능합니다.",
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
        "contribute_use.intro": `컨트리뷰션 (Contribution: 기여)은 오픈소스 프로젝트에 자발적으로 참여하고 가치있는 작업을 수행하는 모든 활동을 의미합니다. <br>
        기여활동은 단순한 코드 작성에 국한되지 않고, <strong> 문서화, 데이터 정리, 제안, 리뷰, 커뮤니티 운영 </strong> 등 다양한 형태로 이루어집니다.<br>
        자동차 테크맵 프로젝트 역시 다양한 컨트리뷰션 활동을 통해 데이터를 발전시키고자 하는 목적이 있습니다. <br>
        이 가이드는 프로젝트에 기여자(Contributor)로서 참여하는 방법을 설명합니다.
        .`,

        "contribute_use.benefit.title": `<a href="contribute_01.html" class="title">기여 혜택</a>`,
        "contribute_use.benefit.desc": `<a href="contribute_01.html">자동차 테크맵 기여자에게 제공되는 혜택을 설명합니다</a>`,

        "contribute_use.prepare.title": `<a href="contribute_02.html" class="title">기여 준비`,
        "contribute_use.prepare.desc": `<a herf="contribute_02.html">기여에 앞서 기본 준비사항을 소개합니다.</a>`,

        "contribute_use.type.title": `<a href="contribute_03.html" class="title">기여 유형`,
        "contribute_use.type.desc": `<a herf="contribute_03.html">오픈소스SW 프로젝트 기여는 물론 기존 데이터 정보 수정 및 추가, 실제 적용사례, 기술 가이드 등 문서/번역, 오타 수정, 기능 제안 등 다양한 방법의 기여가 있습니다.</a>`,

        "contribute_use.policy.title": `<a href="contribute_04.html" class="title">기여 정책`,
        "contribute_use.policy.desc": `<a herf="contribute_04.html">자동차 테크맵 프로젝트에 기여하기 위한 기본 정책을 설명합니다.</a>`,

        "contribute_use.contact.title": "문의하기",
        "contribute_use.contact.desc": `기여하기에 문의사항이 있을 경우, <strong>Contact Us : <a href="mailto:techmap@oss.kr">techmap@oss.kr</a></strong> 를 통해 문의하시기 바랍니다.`,

        // 기여 혜택
        "contribute_benefit.company.subtitle": "자동차 테크맵 기여자에게 다음과 같은 혜택을 제공합니다.",
        "contribute_benefit.company.title.1": "1. 주요 기여자 리스트(자동차 테크맵 사이트 메인화면)에 등록",
        "contribute_benefit.company.desc.1": "자동차 테크맵 웹사이트의 메인 페이지에 ‘주요 기여자’로 이름 또는 소속이 공개되어 소개됩니다. 프로젝트에 특별히 기여하거나 영향력 있는 활동을 한 분들을 대상으로 하며, 사이트 방문자들이 쉽게 확인할 수 있도록 메인 화면에 배치됩니다.",

        "contribute_benefit.company.title.2": "2. 자동차 테크맵 프로젝트에서 진행하는 세미나, 밋업 등의 우선 참여 기회 제공",
        "contribute_benefit.company.desc.2": "자동차 테크맵 프로젝트에서 주최하는 세미나, 밋업 등 각종 오프라인/온라인 행사에 대해 일반 참가자보다 먼저 신청하거나 우선적으로 참여할 수 있는 기회가 제공됩니다. 이를 통해 기술 교류, 네트워킹, 최신 정보 공유 등의 혜택을 남들보다 빠르게 누릴 수 있습니다.",
        "contribute_benefit.company.title.3": "3. 관련 산업체나 연구 기관과의 네트워킹 연계 등 제공(예정)",
        "contribute_benefit.company.desc.3": "자동차 테크맵 프로젝트를 통해 관련 산업체나 연구 기관과의 연결 기회를 제공할 예정입니다. 기여자 분들께는 자동차, 모빌리티, 소프트웨어 등 관련 분야의 기업이나 연구기관과 교류하거나 협력할 수 있도록 네트워킹 연계 지원이 추진될 예정입니다.",

        // 기여 준비
        "contribute.oss.prepare": "기여 준비",
        "contribute.oss.prepare.desc": "자동차 테크맵에 기여에 앞서 기본 준비사항은 다음과 같습니다.",
        "contribute.prepare.1.title": "1. 자동차 테크맵 프로젝트에 기여하기 위해서는 자동차 테크맵 프로젝트에 가입하여야 합니다. <br> <br> 가입 신청서에는 프로젝트 활동을 위한 조건이 명시되어있으므로, 반드시 숙지한 후 활동하여야 합니다.",
        "contribute.prepare.2.title": "2. 자동차 테크맵 프로젝트에 기여하기 위해서는 기여 유형, 기여 정책 등의 내용을 반드시 숙지한 후 기여 활동을 진행하여야 합니다.",
        "contribute.prepare.3.title": "3. 데이터 기여의 경우, 개인 또는 기업의 자산에 대한 저작권을 확인후 저작권 동의 절차를 거쳐 기여를 진행합니다. ",


        // 기여 유형
        "contribute.type.doc.title": " 기업 내부 오픈소스 프로젝트 등록(기여)",
        "contribute.type.doc.1": "기업 내부에 활용중이거나 개발중인 오픈소스SW에 대한 정보를 자동차 테크맵을 통해 공개하고 관련 내용을 소개한다.",

        "contribute.type.test.title": " 기존 오픈소스 데이터 정보 수정 및 추가 등록",
        "contribute.type.test.1": "테크맵에 수록된 오픈소스 프로젝트 정보(설명, 라이선스, 분류 등)를 보완하거나 새로운 오픈소스 정보를 추가한다.",

        "contribute.type.design.title": " 문서 기여",
        "contribute.type.design.1": "자동차 테크맵에 수록된 오픈소스 프로젝트의 실제 적용 사례, 활용 방안, 기술 가이드 등 정리하여 사용자들이 해당 기술을 보다 쉽게 이해하고 활용할 수 있도록 제공한다.",

        "contribute.type.code.title": " 버그 리포트",
        "contribute.type.code.1": "자동차 테크맵에 대한 오타 수정, 잘못된 정보, UI 오류, 기능 오류, 기능 제안 등 버그 리포트를 제출한다.",

        "contribute.type.marketing.title": " 번역 기여",
        "contribute.type.marketing.1": "자동차 테크맵의 사이트 및 기술 정보에 대한 사용성 확대 및 편의성을 위해 다양한 언어로의 번역한다.",


        "contribute.type.intro": "자동차 테크맵 프로젝트에 다음과 같이 다양한 방식으로 기여할 수 있습니다.",

        // 기여 정책
        "contribute.oss.policy": "우리 프로젝트는 협력과 참여를 바탕으로 성장합니다. <br> 자동차 테크맵 프로젝트에 기여하기 위한 기본 정책을 설명합니다.",

        "contribute.policy.1.title": "1. 기여 유형",
        "contribute.policy.1.desc": "자동차 테크맵 프로젝트에 다양한 방식으로 기여할 수 있습니다.",
        "contribute.policy.list.1": "기업 내부 오픈소스 프로젝트 등록(기여)",
        "contribute.policy.list.2": "기존 오픈소스 데이터 정보 수정 및 추가 등록",
        "contribute.policy.list.3": "자동차 테크맵 실제 적용 사례, 활용 방안, 기술 가이드 등 문서 기여",
        "contribute.policy.list.4": "오타 수정, 기능 제안 등 버그 리포트",
        "contribute.policy.list.5": "사이트 및 기술 정보 등 번역 기여",
        "contribute.policy.2.desc": "기여 유형에 대한 자세한 설명은 기여 유형 페이지에서 확인하세요",

        "contribute.check.1.title": "2. 기여 전 체크리스트",
        "contribute.check.1.desc": "프로젝트에 기여 신청하기 전에 반드시 아래 체크리스트를 확인하여 제출하려는 기여 내용이 아래 기준을 충족하는지 점검해주세요!",
        "contribute.check.list.1": "기여 내용이 자동차·모빌리티 분야에 적절한가요?",
        "contribute.check.list.2": "등록 또는 수정하려는 내용이 중복 정보는 아닌가요?",
        "contribute.check.list.3": "기여 내용이 저작권을 침해하지 않나요? (명시적으로 저작권자의 허가 없이 사용된 자료가 포함되어서는 안 됩니다.)",
        "contribute.check.list.4": "기여 내용을 오픈소스로 제공이 가능한가요?",
        "contribute.check.list.5": "데이터는 ODC-By 1.0, 문서는 CC-BY-2.0 허용 라이선스 하에 사용 가능한가요?",
        "contribute.check.list.6": "데이터 기여의 경우, 데이터 포맷 구조(오픈소스 컴포넌트 명, 버전, 라이선스, 다운로드 저장소 주소 등)를 준수하고 있나요?",

        "contribute.cla.1.title": "3. 기여 동의 및 저작권 정책 (간편 CLA)",
        "contribute.cla.1.desc": "기여자는 다음 사항에 동의한 것으로 간주됩니다.",
        "contribute.cla.list.1": "기여물의 유형에 따라 자동차 테크맵이 제공하는 라이선스로 적용되는 것을 동의합니다.\n- 데이터: ODC-By 1.0 license\n- 문서: CC-BY 2.0 license",
        "contribute.cla.list.2": "기여자는 제공한 기여물이 전부 또는 일부가 본인이 직접 작성한 것이며, 해당 오픈소스 라이선스 하에 제출할 권리를 보유하고 있음을 인증합니다.",
        "contribute.cla.list.3": "기여자는 본 프로젝트에 기여물이 공개된다는 점을 이해하며, 프로젝트에서 자유롭게 사용할 수 있도록 비독점적 사용 허락을 부여합니다.",
        "contribute.cla.list.4": "기여자는 저작권을 유지하되, 기여물은 있는 그대로(As-Is) 제공되며, 책임이나 보증이 없음을 확인합니다.",
        "contribute.cla.2.desc": "⚠️ 기여 신청 시 반드시 아래 사항을 유의해 주세요.",
        "contribute.cla.notice.1": "타인의 저작물을 무단으로 등록하여 제출하면 안 됩니다.",
        "contribute.cla.notice.2": "명확한 출처와 라이선스를 확인한 뒤 제출해 주세요.",

        "contribute.participate.1.title": "4. 기여 참여 방법",
        "contribute.participate.1.desc": "프로젝트에 기여하고 싶으신 경우, techmap@oss.kr 로 메일을 보내주세요. 내부 검토를 거쳐 반영 여부를 결정하고 개별적으로 안내드립니다."


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
        "menu.prepare": "Contribution Preparation",
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
        "member.user.desc": "Anyone can freely use the open source information and content in accordance with the <a href=\"license\" class=\"text-link\">license policy</a> of the Mobility Techmap Project without separate registration.",
        "member.member.title": "Member",
        "member.member.desc": "To participate in the Mobility Techmap Project, you must join as a member by submitting a <a href=\"https://forms.gle/av7jWKRr2uP46xAY8\" class=\"text-link\">membership application (individual/corporate)</a> and receiving approval from the Steering Committee.",
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
        "faq.section.join.desc.1": "To participate, submit a <a href=\"https://forms.gle/av7jWKRr2uP46xAY8\" class=\"text-link\">membership application (individual or corporate)</a> and receive approval from the Steering Committee.",
        "faq.section.join.desc.2": "If you have questions, please <a href=\"mailto:techmap@oss.kr\" class=\"text-link\">email us</a> or refer to the <a href=\"organization\" class=\"text-link\">Organization & Members</a> page.",

        "faq.section.contribute.title": "How to Contribute",
        "faq.section.contribute.desc.1": "This is an open source project built on collaboration and participation.",
        "faq.section.contribute.desc.2": "Anyone interested in open source can contribute via publishing, documentation, feedback, development, testing, and more.",
        "faq.section.contribute.desc.3": "See the <a href=\"contribute\" class=\"text-link\">Contribute</a> page to learn how to join and start participating.",

        "faq.section.use.title": "How to Use",
        "faq.section.use.desc.1": "To browse open source information by Mobility technology, visit the <a href=\"https://www.techmap.kr/techmap\" class=\"text-link\">Mobility Techmap</a> page. You can search components by relevance or usage.",
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
        Before contributing, we recommend referring to the <a href="https://www.oss.kr/oss_guide/show/7feb1eb9-ec4f-4140-a34c-e2bd141400a8" class="text-link">"NIPA Open Source Governance Guide for Companies"</a> as useful preliminary material.`,

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
        "contribute_benefit.company.subtitle": "Mobility Techmap contributors are offered the following benefits",

        "contribute_benefit.company.title.1": "1. Inclusion in the list of key contributors on the main page of the Mobility Techmap website",
        "contribute_benefit.company.desc.1": "Key contributors will be highlighted on the main page of the Mobility Techmap website. This public recognition serves to acknowledge your efforts and promote your involvement in the project.",

        "contribute_benefit.company.title.2": "2. Priority access to seminars, meetups, and other events hosted by the Mobility Techmap project",
        "contribute_benefit.company.desc.2": "Contributors will receive priority invitations to various online and offline events such as seminars and meetups hosted by the Mobility Techmap project. These opportunities allow you to network, exchange technical insights, and stay up to date on the latest developments.",

        "contribute_benefit.company.title.3": "3. Opportunities for networking with related industries and research institutions (planned)",
        "contribute_benefit.company.desc.3": "We are planning to offer contributors the opportunity to connect with companies, startups, and research institutions in the automotive and mobility sectors. These connections aim to support collaboration and further innovation in the ecosystem.",


        "contribute_benefit.source": "Source: 2025 Open Source Software Governance Guide for Companies",

        // 기여 준비
        "contribute.oss.prepare.desc": "The following are the basic preparations required before contributing to the Mobility Techmap.",

        "contribute.prepare.1.title": "1. To contribute to the Mobility Techmap project, you must first join the project. The application form includes the terms and conditions for participation, which must be fully understood and accepted before taking part in any activities.",
        "contribute.prepare.1.desc": "",

        "contribute.prepare.2.title": "2. Before contributing to the Mobility Techmap project, you are required to carefully review and understand the types of contributions, contribution policies, and other relevant guidelines.",

        "contribute.prepare.3.title": "3. For data contributions, contributors must verify the copyright status of any personal or corporate assets and complete the necessary copyright consent procedures prior to submission.",


        // 기여 유형
        "contribute.type.intro": "You can contribute to the Mobility Techmap project in a variety of ways, including the following:",

        "contribute.type.doc.title": "Registering Internal Open Source Projects from Your Organization",
        "contribute.type.doc.1": "Share information about open source software that is currently in use or under development within your organization through the Mobility Techmap and introduce related details to the public.",

        "contribute.type.test.title": "Editing or Adding Information to Existing Open Source Data",
        "contribute.type.test.1": "Enhance the descriptions, licenses, categories, and other details of existing open source projects listed in the Techmap, or contribute new open source entries.",

        "contribute.type.design.title": "Documentation Contributions",
        "contribute.type.design.1": "Provide case studies, usage scenarios, technical guides, and other documentation related to open source projects listed on the Mobility Techmap, so that users can better understand and apply the technologies.",

        "contribute.type.code.title": "Bug Reports",
        "contribute.type.code.1": "Submit reports to fix typos, incorrect information, UI issues, feature errors, or suggest improvements related to the Mobility Techmap.",

        "contribute.type.marketing.title": "Translation Contributions",
        "contribute.type.marketing.1": "Help expand accessibility and usability by translating the website and technical information of the Mobility Techmap into various languages.",

        "contribute.type.intro": "You can contribute to the Mobility Techmap project in a variety of ways, including the following",

        // 기여 정책

        "contribute.oss.policy": "Our project grows through collaboration and participation. This section outlines the core policies for contributing to the Mobility Techmap project.",

        "contribute.policy.1.title": "1. Types of Contributions",
        "contribute.policy.1.desc": "You can contribute to the Mobility Techmap project in various ways:",
        "contribute.policy.list.1": "Registering internal open-source projects from within your organization",
        "contribute.policy.list.2": "Editing or adding to existing open-source data",
        "contribute.policy.list.3": "Providing documentation such as real-world applications, usage cases, and technical guides related to Mobility Techmap",
        "contribute.policy.list.4": "Submitting bug reports for typos, UI/feature issues, or suggestions",
        "contribute.policy.list.5": "Translating the website and technical content into different languages",
        "contribute.policy.2.desc": "For more details, please visit the Contribution Types page.",

        "contribute.check.1.title": "2. Pre-Contribution Checklist",
        "contribute.check.1.desc": "Before submitting a contribution to the project, please make sure your content meets the following requirements:",
        "contribute.check.list.1": "Is your contribution relevant to the automotive or mobility domain?",
        "contribute.check.list.2": "Is the content you are registering or modifying not already listed or duplicated?",
        "contribute.check.list.3": "Does the content not violate copyright? (Any material used without explicit permission from the copyright holder is not allowed.)",
        "contribute.check.list.4": "Can your contribution be shared as open source?",
        "contribute.check.list.5": "Is the data licensed under ODC-By 1.0, and the documentation under CC-BY 2.0 or compatible open licenses?",
        "contribute.check.list.6": "For data contributions, does your submission follow the required data format structure? (e.g., component name, version, license, download repository URL, etc.)",

        "contribute.cla.1.title": "3. Contribution Agreement & Copyright Policy (Simple CLA)",
        "contribute.cla.1.desc": "By contributing, you are considered to agree to the following:",
        "contribute.cla.list.1": "You agree that your contributions will be provided under the licenses used by the Mobility Techmap:\n- DATA: ODC-By 1.0 license\n- Documents: CC-BY 2.0 license",
        "contribute.cla.list.2": "You certify that all or part of your contribution was written by you, and that you have the right to submit it under the open-source license stated in the file.",
        "contribute.cla.list.3": "You acknowledge that your contribution will be made publicly available by this project, and you grant a non-exclusive license allowing the project to freely use the content.",
        "contribute.cla.list.4": "You retain the copyright of your contribution, but it is provided as-is, with no warranty or liability.",
        "contribute.cla.2.desc": "⚠️ Notes When Submitting a Contribution",
        "contribute.cla.notice.1": "Do not submit content that includes someone else's copyrighted material without permission.",
        "contribute.cla.notice.2": "Make sure the source and license of your content are clearly identified before submission.",

        "contribute.participate.1.title": "4. How to Participate as a Contributor",
        "contribute.participate.1.desc": "To participate in the project as a contributor, please send an email to techmap@oss.kr. Your request will be reviewed internally, and a decision will be made regarding its acceptance."

    }

};
