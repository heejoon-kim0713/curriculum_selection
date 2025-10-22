// --- 카카오 SDK 초기화 ---
// 1단계에서 복사한 JavaScript 키를 아래에 붙여넣으세요.
Kakao.init('f2632e2ee38bab065e09e7b2ba5bc473');

// --- 질문 목록 (7개 버전) ---
const questions = {
    it: [
        { text: "수학 문제처럼, 정해진 규칙에 따라 답을 딱! 찾아내는 걸 좋아하나요?", courses: ["java", "c"] },
        { text: "많은 사람들이 쓰는 어플을 내 손으로 직접 만들어보고 싶나요?", courses: ["java", "python"] },
        { text: "게임에서 우리 팀 기지를 지키거나, 상대방의 허점을 파고드는 전략을 짜는 걸 좋아하나요?", courses: ["security"] },
        { text: "용돈 기입장처럼 데이터를 깔끔하게 정리하고, 필요할 때 바로 꺼내 쓰는 걸 잘하나요?", courses: ["python", "dba"] },
        { text: "인기 게임이 출시됐을 때 서버가 터지지 않게 관리하는 역할에 관심이 있나요?", courses: ["aws"] },
        { text: "컴퓨터의 가장 깊은 속까지 원리를 파고드는 것에 흥미를 느끼나요?", courses: ["c"] },
        { text: "코딩을 하나도 몰라도, 내 아이디어를 멋진 앱으로 바로 만들어보고 싶나요?", courses: ["nocode"] }
    ],
    game: [
        { text: "그림으로만 보던 캐릭터를, 입체적인 인형(모델)으로 만들어보고 싶나요?", courses: ["modeling3d"] },
        { text: "내가 상상한 멋진 캐릭터와 환상적인 배경을 직접 그려서 게임의 얼굴로 만들고 싶나요?", courses: ["art"] },
        { text: "요즘 유행하는 모바일 게임이나 나만의 인디 게임을 만들어보고 싶나요?", courses: ["unity"] },
        { text: "영화처럼 그래픽이 엄청나게 좋은 PC 게임을 만들어보고 싶나요?", courses: ["unreal"] },
        { text: "게임을 만드는 것보다, 어떤 게임이 재미있을지 규칙이나 스토리를 짜는 게 더 좋으세요?", courses: ["planning"] },
        { text: "코드를 한 줄도 안 쓰고, 블록을 조립하듯 게임의 기능을 만들어보고 싶나요?", courses: ["unreal"] },
        { text: "게임을 만들 때 꼭 필요한 '그림 실력'의 기본기를 탄탄하게 다지고 싶나요?", courses: ["design"] }
    ],
    video: [
        { text: "밋밋한 글씨를 번쩍이게 하거나, 화면에 없던 번개를 '콰쾅!' 하고 나타나게 만들고 싶나요?", courses: ["aftereffect", "motion"] },
        { text: "흩어져 있는 영상 조각들을 모아 한 편의 감동적인 스토리로 만들고 싶나요?", courses: ["premiere", "youtube"] },
        { text: "내 머릿속의 한 장면을 현실에서 구현해보고 싶나요?", courses: ["vfx", "nuke"] },
        { text: "가전/스마트폰/화장품 등 CF 속 3D 모델링을 내 손으로 직접 만들고 싶나요?", courses:["maya_modeling"]},
        { text: "내가 만든 3D 작업물이 살아있는 것처럼 만들고 싶나요?", courses: ["maya_anim"] },
        { text: "나만의 채널을 만들어 세상과 소통하는 '유튜버'가 되고 싶나요?", courses: ["youtube"] },
        { text: "영상에 필요한 이미지 소스를 직접 그리거나 디자인해서 쓰고 싶나요?", courses: ["design"] }
    ]
};

// --- ★★★ 결과 데이터에 상담 URL 추가! ★★★ ---
const resultsData = {
    // IT
    java: { title: "논리적인 백엔드 개발자", description: "당신은 복잡한 문제도 논리적으로 차근차근 해결하는 것을 즐기는군요! 안정적이고 수요 많은 자바 개발자로서의 재능이 보입니다.", course: "자바 개발자 과정 (국기)", consultUrl: "https://khedu.co.kr/question/online.kh?location=h" },
    security: { title: "시스템을 지키는 보안 전문가", description: "남들이 보지 못하는 허점을 찾아내고, 방어 전략을 세우는 당신! 정보보안 엔지니어의 자질을 갖추셨네요.", course: "보안 엔지니어 과정 (국기)", consultUrl: "https://khedu.co.kr/question/online.kh?location=h" },
    python: { title: "데이터를 다루는 효율적인 해결사", description: "데이터를 분석하고 반복적인 일을 자동화하는 것에 흥미를 느끼는군요. 쉽고 강력한 파이썬이 당신에게 날개를 달아줄 거예요.", course: "파이썬 금융 솔루션 (KDT)", consultUrl: "https://khedu.co.kr/question/online.kh?location=h" },
    aws: { title: "안정적인 인프라 아키텍트", description: "거대한 서비스가 안정적으로 돌아가게 만드는 '보이지 않는 손'의 역할에 매력을 느끼는군요. 클라우드 전문가는 미래 IT의 핵심입니다.", course: "AWS 클라우드 (KDT)", consultUrl: "https://khedu.co.kr/question/online.kh?location=h" },
    c: { title: "컴퓨터의 근본을 탐구하는 개발자", description: "겉모습보다 컴퓨터의 깊은 원리를 이해하고 싶어 하는 당신! C언어는 당신을 진짜 실력자로 만들어 줄 튼튼한 기초가 될 것입니다.", course: "C언어 (KDC)", consultUrl: "https://khedu.co.kr/question/online.kh?location=h" },
    dba: { title: "데이터를 지키는 데이터베이스 관리자", description: "정보를 체계적으로 정리하고 안전하게 지키는 것에 책임감을 느끼는군요. 기업의 핵심 자산인 데이터를 다루는 DBA가 되어보세요.", course: "DBA (KDC)", consultUrl: "https://khedu.co.kr/question/online.kh?location=h" },
    nocode: { title: "아이디어를 빠르게 구현하는 기획자", description: "복잡한 코딩보다 번뜩이는 아이디어를 빠르게 현실로 만드는 것을 즐기는 당신! 노코드 툴은 당신의 가장 강력한 무기가 될 거예요.", course: "노코드/버블 (일반)", consultUrl: "https://khedu.co.kr/question/online.kh?location=h" },
    // 게임
    modeling3d: { title: "생명을 불어넣는 3D 모델러", description: "평면의 그림을 입체적인 현실로 만드는 것에 큰 매력을 느끼는군요! 당신의 손에서 멋진 게임 캐릭터와 배경이 탄생할 거예요.", course: "게임 3D 모델링", consultUrl: "https://www.atentsgame.com/counsel.do" },
    art: { title: "게임의 비주얼을 책임지는 원화가", description: "당신의 머릿속에 있는 환상적인 세계와 캐릭터를 그림으로 표현하고 싶어 하는군요. 게임의 첫인상을 결정하는 매력적인 아티스트가 될 수 있어요.", course: "게임 원화", consultUrl: "https://www.atentsgame.com/counsel.do" },
    unity: { title: "상상력을 빠르게 실현하는 유니티 개발자", description: "아이디어만 있다면 어떤 게임이든 빠르게 만들어보고 싶어 하는 당신! 유니티 엔진으로 당신의 상상력을 마음껏 펼쳐보세요.", course: "유니티", consultUrl: "https://www.atentsgame.com/counsel.do" },
    unreal: { title: "최고의 그래픽을 구현하는 언리얼 개발자", description: "영화처럼 화려하고 사실적인 그래픽에 대한 로망이 있군요! 언리얼 엔진은 당신의 꿈을 현실로 만들어 줄 강력한 도구입니다.", course: "언리얼", consultUrl: "https://www.atentsgame.com/counsel.do" },
    planning: { title: "재미의 본질을 설계하는 게임 기획자", description: "게임을 직접 만드는 것보다 '어떻게 만들어야 재미있을까?'를 고민하는 것을 즐기는군요. 당신은 프로젝트를 이끄는 리더의 자질을 갖췄습니다.", course: "게임기획", consultUrl: "https://www.atentsgame.com/counsel.do" },
    // 영상
    aftereffect: { title: "시선을 사로잡는 모션그래픽 디자이너", description: "정적인 이미지에 움직임을 불어넣어 사람들의 시선을 사로잡는 것에 희열을 느끼는군요. 당신의 감각이 담긴 영상은 모두를 놀라게 할 거예요.", course: "애프터이펙트", consultUrl: "https://www.kh-fx.com/counsel.do" },
    premiere: { title: "스토리텔링의 마술사, 영상 편집자", description: "흩어져 있는 영상 조각들을 모아 하나의 감동적인 스토리로 만드는 재능이 있군요. 당신의 손끝에서 영상의 리듬과 호흡이 결정됩니다.", course: "프리미어 프로", consultUrl: "https://www.kh-fx.com/counsel.do" },
    vfx: { title: "현실과 상상의 경계를 허무는 그래픽 아티스트", description: "현실에선 불가능한 장면을 스크린 속에 구현해내는 일에 매력을 느끼는군요. 당신은 영상에 마법을 더하는 기술자입니다.", course: "포스트 프로덕션 디자이너", consultUrl: "https://www.kh-fx.com/counsel.do" },
    maya_modeling: { title: "정교한 3D 세계를 창조하는 3D 모션그래퍼", description: "정교하고 사실적인 3D 모델을 만드는 것에 흥미를 느끼는군요. 광고/방송 속 배경이 당신의 손에서 태어납니다.", course: "3D 모션그래픽", consultUrl: "hhttps://www.kh-fx.com/counsel.do" },
    maya_anim: { title: "3D 모델에 영혼을 불어넣는 모션그래퍼", description: "멈춰있는 모델에 움직임을 주어 살아있는 캐릭터로 만드는 일에 큰 기쁨을 느끼는군요. 당신은 관객을 웃고 울게 만들 수 있습니다.", course: "3D 모션그래픽", consultUrl: "https://www.kh-fx.com/counsel.do" },
    youtube: { title: "세상과 소통하는 모션그래픽 디자이너", description: "나만의 콘텐츠로 세상과 소통하고, 사람들에게 영향력을 주는 것에 매력을 느끼는군요. 지금 바로 모션그래퍼에 도전해보세요!", course: "2D/3D 모션그래픽", consultUrl: "https://www.kh-fx.com/counsel.do" },
    design: { title: "모든 디자인의 기초, 비주얼 디자이너", description: "그림을 그리거나 무언가를 시각적으로 꾸미는 것에 기본적인 재능과 흥미가 있군요! 디자인은 게임과 영상 모든 분야의 가장 중요한 기초가 됩니다.", course: "공통디자인(포토샵/일러스트)", consultUrl: "https://www.kh-fx.com/counsel.do" },
    motion: { title: "움직임에 감각을 더하는 모션그래픽 전문가", description: "화려한 효과와 감각적인 3D 디자인을 결합하여 사람들의 시선을 사로잡는 영상을 만들고 싶어 하는군요. 당신은 트렌드를 이끄는 아티스트가 될 수 있습니다.", course: "모션그래픽 취업보장반", consultUrl: "https://www.kh-fx.com/counsel.do" }
};

// --- 설문 로직 ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let scores = {};
let lastResultKey = '';

const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const progressBar = document.getElementById('progress');
const consultLink = document.querySelector('.consult-link'); // 상담 버튼의 링크(a 태그)를 찾음

function startSurvey(category) {
    currentQuestions = questions[category];
    currentQuestionIndex = 0;
    scores = {};
    lastResultKey = '';
    
    currentQuestions.forEach(q => {
        q.courses.forEach(course => {
            scores[course] = 0;
        });
    });

    startScreen.classList.remove('active');
    questionScreen.classList.add('active');
    showQuestion();
}

function showQuestion() {
    const progressPercent = (currentQuestionIndex / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    questionText.innerText = currentQuestions[currentQuestionIndex].text;
}

function answer(choice) {
    if (choice === 'yes') {
        const relatedCourses = currentQuestions[currentQuestionIndex].courses;
        relatedCourses.forEach(course => {
            if (scores.hasOwnProperty(course)) {
                scores[course]++;
            }
        });
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// --- ★★★ 결과 보여주는 함수 수정! ★★★ ---
function showResult() {
    questionScreen.classList.remove('active');
    resultScreen.classList.add('active');

    let maxScore = 0;
    let resultKey = '';

    for (const course in scores) {
        if (scores[course] > maxScore) {
            maxScore = scores[course];
            resultKey = course;
        }
    }

    lastResultKey = resultKey;

    if (maxScore === 0) {
        document.getElementById('result-title').innerText = "아직 당신의 흥미를 발견하지 못했어요!";
        document.getElementById('result-description').innerText = "괜찮아요! 학원에 오셔서 상담사와 함께 당신의 진짜 재능을 찾아보는 건 어떨까요?";
        document.getElementById('result-courses').innerText = "추천 과정: 전문가와 1:1 상담하기";
        consultLink.href = "https://khacademy.co.kr/common/consulting.kh?location=h&acq=quick_inquiry_new"; // 결과가 없을 때 연결할 기본 상담 URL
    } else {
        const result = resultsData[resultKey];
        document.getElementById('result-title').innerText = result.title;
        document.getElementById('result-description').innerText = result.description;
        document.getElementById('result-courses').innerText = `추천 과정: ${result.course}`;
        consultLink.href = result.consultUrl; // 결과에 맞는 특정 상담 URL로 링크를 변경!
    }
}

function restart() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}

// --- 공유 기능 함수들 ---
function shareToKakao() {
    if (!lastResultKey) {
        alert('테스트 결과가 없습니다.');
        return;
    }

    const result = resultsData[lastResultKey];
    
    Kakao.Share.sendCustom({
        templateId: 123118, // 1단계에서 복사한 '템플릿 ID'를 여기에 숫자만 입력하세요.
        templateArgs: {
            'title': result.title,
            'description': result.description
        }
    });
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('링크가 복사되었어요! 친구에게 공유해보세요.');
    }).catch(err => {
        alert('링크 복사에 실패했어요. 다시 시도해주세요.');
    });
}
