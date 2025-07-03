"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Share2,
  RotateCcw,
  HelpCircle,
  Users,
  Heart,
  Home,
  UserPlus,
  Sparkles,
  Eye,
  Globe,
} from "lucide-react";

type Category = "일반" | "연인" | "가족" | "친구";
type Language = "ko" | "en";

const QUESTIONS = {
  ko: {
    일반: [
      // LEVEL 1: 분위기 풀기 & 자기 탐색 (25문항)
      "요즘 당신의 하루를 한 단어로 표현하면?",
      "아침에 눈 뜨고 처음 하는 생각은 뭔가요?",
      "요즘 내가 자주 듣는 말은?",
      "어릴 적 꿈은 뭐였나요?",
      "요즘 내 마음을 가장 많이 차지하는 일은?",
      "지금 이 순간 가장 감사한 게 있다면?",
      "내가 좋아하는 공간은 어떤 곳인가요?",
      "내 성격의 장점 하나만 고른다면?",
      "내가 자주 쓰는 말버릇은?",
      "나를 웃게 하는 일은 어떤 건가요?",
      "내가 스트레스 받을 때 주로 하는 행동은?",
      "오늘 가장 기분 좋았던 순간은?",
      "최근에 알게 된 나의 새로운 모습은?",
      "어릴 적 나의 별명은? 그 이유는?",
      "어떤 음악이 요즘 나와 잘 어울리나요?",
      "내가 가장 좋아하는 계절과 그 이유는?",
      "어떤 상황에서 나는 평온함을 느끼나요?",
      "내가 지루함을 느끼는 순간은 언제인가요?",
      "나는 어떤 모습일 때 제일 나다워요?",
      "내가 자주 하는 상상은 어떤 것인가요?",
      "나만 알고 있는 나의 작은 습관은?",
      "나에게 휴식이란 어떤 의미인가요?",
      "최근에 가장 몰입했던 순간은?",
      "내가 요즘 배우고 싶은 것은?",
      "지금 이 대화에서 기대하는 것이 있다면?",

      // LEVEL 2: 경험 공유 & 삶의 이야기 (30문항)
      "내 인생에서 가장 기억에 남는 실패는?",
      "내 인생에서 가장 자랑스러운 순간은?",
      "지금의 내가 있기까지 가장 영향 준 사람은?",
      "최근 1년간 가장 큰 변화는 무엇이었나요?",
      "내가 선택을 후회한 적이 있다면 어떤 경험인가요?",
      "삶에서 가장 소중한 가치를 배운 경험은?",
      "가장 힘들었던 시기를 버틴 나만의 방법은?",
      "어릴 적 나에게 위로가 되었던 장소는?",
      "내가 겪은 가장 소중한 우정의 이야기",
      "지금 생각해도 웃긴, 나만의 흑역사는?",
      "예상치 못한 친절을 받은 경험은?",
      "가장 용기 냈던 순간은 언제였나요?",
      "감정이 북받쳐 울었던 마지막 기억은?",
      "내가 해봤던 특별한 여행은 어떤 거였나요?",
      "내가 내린 인생 최고의 결정은?",
      "나의 삶을 영화로 만든다면 어떤 장르일까요?",
      "나에게 '고향'이라고 부를 수 있는 곳은?",
      "내가 존경하는 인물과 그 이유는?",
      "가족에게 가장 고마웠던 순간은?",
      "어린 시절의 추억 중 아직도 선명한 장면은?",
      "내가 받은 최고의 생일 선물은?",
      "지금까지 내가 했던 일 중 가장 특별한 일은?",
      "나의 인생을 바꾼 책이나 영화가 있다면?",
      "후회하지 않는, 내 방식의 선택이 있다면?",
      "예상치 못한 깨달음을 얻은 순간은?",
      "내가 '진짜 어른이 되었다'고 느낀 순간은?",
      "나를 제일 많이 성장시킨 사람은 누구인가요?",
      "'이건 진짜 나다' 싶은 순간은 언제인가요?",
      "인생에서 마주한 가장 큰 전환점은?",
      "지금 이 대화를 나누고 있는 사람이 궁금한 점은?",

      // LEVEL 3: 감정, 가치관, 관계 탐색 (30문항)
      "나에게 '사랑'이란 무엇인가요?",
      "내가 가장 많이 하는 감정은 무엇인가요?",
      "최근 내가 마음을 닫았던 이유는?",
      "내가 두려워하는 관계의 형태는?",
      "가장 외로웠던 순간은 언제였나요?",
      "나는 어떤 말에 상처를 잘 받나요?",
      "갈등 상황에서 나는 어떤 태도를 취하나요?",
      "나는 누군가에게 어떤 사람으로 기억되고 싶나요?",
      "'나를 사랑한다'는 걸 어떻게 확인하나요?",
      "내가 연인 또는 친구에게 가장 바라는 건?",
      "내가 누군가에게 미안했던 기억은?",
      "타인에게 나를 오해받기 쉬운 점은?",
      "내가 누군가를 진심으로 이해했다고 느꼈던 순간은?",
      "지금 나와 가장 가까운 사람은 누구이고, 왜인가요?",
      "나는 어떤 말에 가장 힘이 나나요?",
      "누군가에게 해주고 싶지만 하지 못한 말이 있다면?",
      "내가 생각하는 좋은 관계의 핵심은 무엇인가요?",
      "나는 어떤 방식으로 사랑을 표현하나요?",
      "감정을 숨기지 않고 표현했던 경험이 있다면?",
      "상대방의 진심을 알아차릴 수 있었던 순간은?",
      "나는 어떤 사람이 되기 위해 노력하고 있나요?",
      "가까운 사람이 나를 어떻게 보고 있을 것 같나요?",
      "내가 가장 후회하는 관계는 어떤 것이었나요?",
      "내가 좋은 친구라고 느끼게 해주는 사람은?",
      "'용서'란 나에게 어떤 의미인가요?",
      "나의 감정은 어디서부터 시작되었다고 생각하나요?",
      "내가 진짜 사랑받는다고 느꼈던 순간은?",
      "관계에서 나를 지키기 위한 경계는?",
      "나는 진심이 통할 때 어떤 느낌이 드나요?",
      "이 대화를 통해 나누고 싶은 진짜 이야기는?",
    ],
    연인: [
      "우리가 처음 만났을 때 첫인상은 어땠나요?",
      "상대방의 어떤 점이 가장 매력적이라고 생각하나요?",
      "함께 가고 싶은 여행지가 있다면 어디인가요?",
      "상대방이 해줬으면 하는 작은 행동이 있나요?",
      "우리만의 특별한 추억 중 가장 소중한 것은?",
      "10년 후 우리는 어떤 모습일까요?",
      "상대방에게 가장 고마운 점은 무엇인가요?",
      "만약 하루 종일 함께 있다면 무엇을 하고 싶나요?",
      "상대방의 꿈을 어떻게 응원하고 싶나요?",
      "우리가 함께 도전해보고 싶은 것이 있나요?",
      "상대방과 함께 있을 때 가장 편안한 순간은 언제인가요?",
      "서로에게 배운 가장 중요한 것은 무엇인가요?",
      "우리 관계에서 가장 소중하게 지키고 싶은 것은?",
    ],
    가족: [
      "어린 시절 가장 기억에 남는 가족 여행은?",
      "가족 중에서 누구를 가장 닮고 싶나요? 이유는?",
      "부모님께 가장 감사한 점은 무엇인가요?",
      "형제자매와의 추억 중 가장 재미있었던 것은?",
      "가족만의 특별한 전통이나 규칙이 있나요?",
      "우리 가족의 장점은 무엇이라고 생각하나요?",
      "어렸을 때 부모님이 해주신 말씀 중 기억에 남는 것은?",
      "가족과 함께 만들고 싶은 새로운 추억이 있나요?",
      "우리 집에서 가장 좋아하는 공간은 어디인가요?",
      "가족 구성원 중 누구와 가장 비슷한 성격인가요?",
      "부모님의 젊은 시절 이야기 중 궁금한 것이 있나요?",
      "가족에게 전하고 싶은 메시지가 있다면?",
      "우리 가족이 함께 도전해보고 싶은 것이 있나요?",
    ],
    친구: [
      "친구들 사이에서 어떤 역할을 하는 편인가요?",
      "가장 오래된 친구와는 어떻게 만났나요?",
      "친구들과 함께 했던 가장 재미있는 일은?",
      "힘들 때 가장 먼저 생각나는 친구는 누구인가요?",
      "친구에게 받은 가장 좋은 조언은 무엇인가요?",
      "친구들과 함께 가고 싶은 여행지가 있나요?",
      "친구 관계에서 가장 중요하게 생각하는 것은?",
      "친구들에게 고마움을 어떻게 표현하나요?",
      "새로운 친구를 사귈 때 가장 먼저 보는 것은?",
      "친구들과의 추억 중 가장 웃겼던 순간은?",
      "멀리 있는 친구와는 어떻게 연락을 유지하나요?",
      "친구들과 함께 도전해보고 싶은 것이 있나요?",
      "좋은 친구의 조건은 무엇이라고 생각하나요?",
    ],
  },
  en: {
    일반: [
      // LEVEL 1: Ice-breaking & Self-exploration (25 questions)
      "If you had to describe your days lately in one word, what would it be?",
      "What's the first thought you have when you wake up in the morning?",
      "What do people often say to you these days?",
      "What was your childhood dream?",
      "What occupies your mind the most these days?",
      "What are you most grateful for at this moment?",
      "What kind of space do you like?",
      "If you had to choose one strength of your personality, what would it be?",
      "What verbal habit do you often use?",
      "What makes you laugh?",
      "What do you usually do when you're stressed?",
      "What was the happiest moment of today?",
      "What new aspect of yourself have you discovered recently?",
      "What was your childhood nickname? What was the reason?",
      "What music suits you well these days?",
      "What's your favorite season and why?",
      "In what situations do you feel peaceful?",
      "When do you feel bored?",
      "When do you feel most like yourself?",
      "What do you often imagine?",
      "What's a small habit that only you know about yourself?",
      "What does rest mean to you?",
      "What was the most immersive moment recently?",
      "What do you want to learn these days?",
      "What do you expect from this conversation, if anything?",

      // LEVEL 2: Experience sharing & Life stories (30 questions)
      "What's the most memorable failure in your life?",
      "What's the proudest moment of your life?",
      "Who has influenced you the most to become who you are today?",
      "What was the biggest change in the past year?",
      "If you've ever regretted a choice, what experience was it?",
      "What experience taught you the most precious value in life?",
      "What was your own way of getting through the hardest times?",
      "What place was comforting to you as a child?",
      "Tell me about the most precious friendship you've experienced",
      "What's your own embarrassing story that you still find funny?",
      "What experience of unexpected kindness have you received?",
      "When was the moment you showed the most courage?",
      "What's your last memory of crying with overwhelming emotions?",
      "What special trip have you taken?",
      "What was the best decision you've made in your life?",
      "If your life were made into a movie, what genre would it be?",
      "What place can you call 'home'?",
      "Who do you respect and why?",
      "When were you most grateful to your family?",
      "What childhood memory is still vivid?",
      "What was the best birthday present you've received?",
      "What's the most special thing you've done so far?",
      "Is there a book or movie that changed your life?",
      "What choice have you made your own way without regret?",
      "When did you gain unexpected insight?",
      "When did you feel like you 'really became an adult'?",
      "Who made you grow the most?",
      "When did you feel 'this is really me'?",
      "What was the biggest turning point in your life?",
      "What are you curious about the person you're having this conversation with?",

      // LEVEL 3: Emotions, values, relationship exploration (30 questions)
      "What is 'love' to you?",
      "What emotion do you experience most often?",
      "What was the recent reason you closed your heart?",
      "What form of relationship do you fear?",
      "When was your loneliest moment?",
      "What words do you get hurt by easily?",
      "What attitude do you take in conflict situations?",
      "How do you want to be remembered by someone?",
      "How do you confirm that 'you love yourself'?",
      "What do you want most from a lover or friend?",
      "What memory do you have of being sorry to someone?",
      "What aspect of you is easily misunderstood by others?",
      "When did you feel you truly understood someone?",
      "Who is closest to you right now and why?",
      "What words give you the most strength?",
      "Is there something you want to say to someone but haven't been able to?",
      "What do you think is the core of a good relationship?",
      "How do you express love?",
      "Have you ever expressed emotions without hiding them?",
      "When were you able to recognize someone's sincerity?",
      "What kind of person are you trying to become?",
      "How do you think people close to you see you?",
      "What relationship do you regret the most?",
      "Who makes you feel like a good friend?",
      "What does 'forgiveness' mean to you?",
      "Where do you think your emotions started from?",
      "When did you feel truly loved?",
      "What are your boundaries to protect yourself in relationships?",
      "How do you feel when your sincerity connects with others?",
      "What's the real story you want to share through this conversation?",
    ],
    연인: [
      "What was your first impression when we met?",
      "What do you find most attractive about your partner?",
      "Where would you like to travel together?",
      "Is there a small gesture you'd like your partner to do?",
      "What's our most precious shared memory?",
      "What do you think we'll be like in 10 years?",
      "What are you most grateful for about your partner?",
      "If we had a whole day together, what would you want to do?",
      "How would you like to support your partner's dreams?",
      "Is there something we should try together?",
      "When do you feel most comfortable with your partner?",
      "What's the most important thing you've learned from each other?",
      "What do you want to cherish most in our relationship?",
    ],
    가족: [
      "What's your most memorable family trip from childhood?",
      "Who in your family would you most like to be like? Why?",
      "What are you most grateful to your parents for?",
      "What's the most fun memory with your siblings?",
      "Does your family have any special traditions or rules?",
      "What do you think are your family's strengths?",
      "What do you remember your parents saying when you were young?",
      "What new memories would you like to create with your family?",
      "What's your favorite space in your home?",
      "Which family member do you have the most similar personality to?",
      "Is there anything you're curious about from your parents' youth?",
      "If you had a message for your family, what would it be?",
      "Is there something your family should try together?",
    ],
    친구: [
      "What role do you play among your friends?",
      "How did you meet your oldest friend?",
      "What's the most fun thing you've done with friends?",
      "Who's the first friend you think of when you're having a hard time?",
      "What's the best advice you've received from a friend?",
      "Where would you like to travel with your friends?",
      "What do you consider most important in friendships?",
      "How do you express gratitude to your friends?",
      "What do you look for first when making new friends?",
      "What's the funniest moment you've had with friends?",
      "How do you stay in touch with distant friends?",
      "Is there something you'd like to try with your friends?",
      "What do you think makes a good friend?",
    ],
  },
};

const CATEGORY_CONFIG = {
  ko: {
    일반: {
      icon: Users,
      color: "from-purple-600 to-pink-600",
      description: "생각 공유",
      mysticalText: "당신의 내면을 탐구하는 카드",
    },
    연인: {
      icon: Heart,
      color: "from-rose-500 to-red-600",
      description: "서로의 마음을 더 가까이",
      mysticalText: "두 마음을 이어주는 카드",
    },
    가족: {
      icon: Home,
      color: "from-amber-500 to-orange-600",
      description: "따뜻한 유대감",
      mysticalText: "가족의 소중함을 일깨우는 카드",
    },
    친구: {
      icon: UserPlus,
      color: "from-emerald-500 to-teal-600",
      description: "우정의 깊이",
      mysticalText: "진정한 친구를 발견하는 카드",
    },
  },
  en: {
    일반: {
      icon: Users,
      color: "from-purple-600 to-pink-600",
      description: "Deep Life Insights",
      mysticalText: "Cards to explore your inner self",
    },
    연인: {
      icon: Heart,
      color: "from-rose-500 to-red-600",
      description: "Love Connection",
      mysticalText: "Cards that connect two hearts",
    },
    가족: {
      icon: Home,
      color: "from-amber-500 to-orange-600",
      description: "Warm Bonds",
      mysticalText: "Cards that remind us of family's value",
    },
    친구: {
      icon: UserPlus,
      color: "from-emerald-500 to-teal-600",
      description: "Depth of Friendship",
      mysticalText: "Cards to discover true friendship",
    },
  },
};

const CATEGORY_NAMES = {
  ko: {
    일반: "일반",
    연인: "연인",
    가족: "가족",
    친구: "친구",
  },
  en: {
    일반: "General",
    연인: "Couple",
    가족: "Family",
    친구: "Friends",
  },
};

const TEXTS = {
  ko: {
    title: "DEEP TALK CARD",
    subtitle: "이야기 나누고 싶은\n주제를 선택하세요",
    preparing: "카드를 준비하고 있습니다...",
    changeCategory: "다른 카드 선택",
    completed: "완료",
    cardTitle: "질문",
    cardSubtitle: "카드를 뒤집어보세요",
    question: "질문",
    share: "공유",
    nextCard: "다음 카드",
    newJourney: "새로운 여정 시작",
    gameDescription: "✨ 카드속 질문들을 통해 새로운 이야기를 나눠보세요 ✨",
    allComplete: "모든 질문을 완료했습니다! 🎉",
    shareMessage: "Deep Talk Card 게임:",
    shareSuccess: "질문이 클립보드에 복사되었습니다!",
    hoverTip: "✨ 카드 위에 마우스를 올려 신비로운 메시지를 확인하세요 ✨",
  },
  en: {
    title: "DEEP TALK CARD",
    subtitle: "Choose a topic\nyou'd like to discuss",
    preparing: "Preparing your cards...",
    changeCategory: "Choose Different Cards",
    completed: "completed",
    cardTitle: "Fortune Question",
    cardSubtitle: "Flip the card",
    question: "Question",
    share: "Share",
    nextCard: "Next Fortune Card",
    newJourney: "Start New Journey",
    gameDescription:
      "✨ Discover new insights through questions prepared by fate ✨",
    allComplete: "All questions completed! 🎉",
    shareMessage: "Deep Talk Card Game:",
    shareSuccess: "Question copied to clipboard!",
    hoverTip: "✨ Hover over cards to see mystical messages ✨",
  },
};

// 자동 언어 감지 함수
const detectLanguage = (): Language => {
  if (typeof window !== "undefined") {
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith("ko") ? "ko" : "en";
  }
  return "en";
};

export default function GameCard() {
  const [language, setLanguage] = useState<Language>("ko");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [usedQuestions, setUsedQuestions] = useState<Set<number>>(new Set());
  const [gameComplete, setGameComplete] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<Category | null>(null);
  const [isSelecting, setIsSelecting] = useState(false);

  // 컴포넌트 마운트 시 자동 언어 감지
  useEffect(() => {
    const detectedLang = detectLanguage();
    setLanguage(detectedLang);
  }, []);

  // 현재 선택된 카테고리의 질문들 가져오기
  const getCurrentQuestions = () => {
    if (!selectedCategory) return [];
    return QUESTIONS[language][selectedCategory];
  };

  // 랜덤 질문 선택
  const getRandomQuestion = () => {
    const currentQuestions = getCurrentQuestions();
    const availableQuestions = currentQuestions.filter(
      (_, index) => !usedQuestions.has(index)
    );

    if (availableQuestions.length === 0) {
      setGameComplete(true);
      return TEXTS[language].allComplete;
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const selectedQuestion = availableQuestions[randomIndex];
    const originalIndex = currentQuestions.indexOf(selectedQuestion);

    setUsedQuestions((prev) => new Set([...prev, originalIndex]));
    return selectedQuestion;
  };

  // 언어 변경
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    // 언어 변경 시 게임 상태 리셋
    setSelectedCategory(null);
    setUsedQuestions(new Set());
    setIsFlipped(false);
    setCurrentQuestion("");
    setGameComplete(false);
  };

  // 카테고리 선택 (애니메이션 포함)
  const handleCategorySelect = (category: Category) => {
    setIsSelecting(true);

    setTimeout(() => {
      setSelectedCategory(category);
      setUsedQuestions(new Set());
      setIsFlipped(false);
      setCurrentQuestion("");
      setGameComplete(false);
      setIsSelecting(false);
    }, 800);
  };

  // 카드 뒤집기
  const handleCardClick = () => {
    if (!isFlipped && !gameComplete && selectedCategory) {
      setCurrentQuestion(getRandomQuestion());
      setIsFlipped(true);
    }
  };

  // 다음 카드
  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentQuestion("");
  };

  // 게임 리셋
  const handleReset = () => {
    setUsedQuestions(new Set());
    setIsFlipped(false);
    setCurrentQuestion("");
    setGameComplete(false);
  };

  // 공유 기능
  const handleShare = async () => {
    if (currentQuestion && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(
          `${TEXTS[language].shareMessage} ${currentQuestion}`
        );
        alert(TEXTS[language].shareSuccess);
      } catch (err) {
        console.error("클립보드 복사 실패:", err);
      }
    }
  };

  const currentQuestions = getCurrentQuestions();
  const progress =
    currentQuestions.length > 0
      ? (usedQuestions.size / currentQuestions.length) * 100
      : 0;
  const currentTexts = TEXTS[language];
  const currentCategoryConfig = CATEGORY_CONFIG[language];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 flex flex-col items-center justify-center relative overflow-hidden'>
      {/* 마법같은 배경 효과 */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-4 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse'></div>
        <div className='absolute -bottom-8 -left-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000'></div>
        <div className='absolute top-1/3 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000'></div>
      </div>

      {/* 언어 선택 토글 */}
      <div className='absolute top-6 right-6 z-50'>
        <div className='flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full p-2 border border-purple-500/30'>
          <Globe size={16} className='text-purple-300' />
          <Button
            variant={language === "ko" ? "default" : "ghost"}
            size='sm'
            onClick={() => handleLanguageChange("ko")}
            className={`text-xs px-3 py-1 h-auto ${
              language === "ko"
                ? "bg-purple-600 text-white"
                : "text-purple-300 hover:text-white hover:bg-purple-800/50"
            }`}
          >
            한국어
          </Button>
          <Button
            variant={language === "en" ? "default" : "ghost"}
            size='sm'
            onClick={() => handleLanguageChange("en")}
            className={`text-xs px-3 py-1 h-auto ${
              language === "en"
                ? "bg-purple-600 text-white"
                : "text-purple-300 hover:text-white hover:bg-purple-800/50"
            }`}
          >
            English
          </Button>
        </div>
      </div>

      <div className='w-full max-w-lg space-y-8 relative z-10'>
        {/* 로딩 오버레이 */}
        {isSelecting && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='text-center text-white'>
              <Sparkles size={48} className='mx-auto mb-4 animate-spin' />
              <p className='text-lg font-medium'>{currentTexts.preparing}</p>
            </div>
          </div>
        )}

        {/* 카테고리 선택 - 신비로운 카드 선택 */}
        {!selectedCategory && (
          <div className='text-center space-y-8'>
            {/* AI 가이드 헤더 */}
            <div className='space-y-4'>
              <div className='flex items-center justify-center mb-6'>
                <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                  {currentTexts.title}
                </h1>
              </div>

              <div className='bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30'>
                <p className='text-purple-200 text-lg leading-relaxed whitespace-pre-line'>
                  {currentTexts.subtitle}
                </p>
              </div>
            </div>

            {/* 신비로운 카드 덱 */}
            <div className='grid grid-cols-2 gap-6 perspective-1000'>
              {(Object.keys(QUESTIONS[language]) as Category[]).map(
                (category, index) => {
                  const config = currentCategoryConfig[category];
                  const Icon = config.icon;
                  const isHovered = hoveredCard === category;

                  return (
                    <div
                      key={category}
                      className={`relative transform transition-all duration-500 cursor-pointer
                      ${
                        isHovered
                          ? "scale-105 -translate-y-4 z-10"
                          : "hover:scale-102"
                      }
                      ${isSelecting ? "pointer-events-none" : ""}
                    `}
                      onMouseEnter={() => setHoveredCard(category)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onClick={() => handleCategorySelect(category)}
                      style={{
                        animationDelay: `${index * 150}ms`,
                      }}
                    >
                      {/* 카드 글로우 효과 */}
                      {isHovered && (
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${config.color} rounded-2xl blur-lg opacity-50 scale-110`}
                        ></div>
                      )}

                      {/* 메인 카드 */}
                      <div
                        className={`
                      relative h-40 bg-gradient-to-br ${
                        config.color
                      } rounded-2xl
                      shadow-2xl border border-white/20 backdrop-blur-sm
                      flex flex-col items-center justify-center text-white
                      transform transition-all duration-300
                      ${isHovered ? "shadow-purple-500/50" : ""}
                    `}
                      >
                        {/* 카드 상단 장식 */}
                        <div className='absolute top-3 left-3'>
                          <Sparkles size={16} className='text-white/60' />
                        </div>
                        <div className='absolute top-3 right-3'>
                          <Sparkles size={16} className='text-white/60' />
                        </div>

                        {/* 메인 아이콘 */}
                        <Icon size={36} className='mb-3 drop-shadow-lg' />

                        {/* 카테고리 이름 */}
                        <h3 className='text-xl font-bold mb-1'>
                          {CATEGORY_NAMES[language][category]}
                        </h3>

                        {/* 하단 장식 */}
                        <div className='absolute bottom-3 left-1/2 transform -translate-x-1/2'>
                          <div className='w-6 h-0.5 bg-white/40 rounded'></div>
                        </div>
                      </div>

                      {/* 호버 시 추가 정보 */}
                      {isHovered && (
                        <div
                          className='absolute -bottom-16 left-1/2 transform -translate-x-1/2 
                                    bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 
                                    border border-purple-500/30 whitespace-nowrap z-20'
                        >
                          <p className='text-purple-200 text-sm font-medium'>
                            {config.mysticalText}
                          </p>
                          <div
                            className='absolute -top-1 left-1/2 transform -translate-x-1/2 
                                      w-2 h-2 bg-black/80 rotate-45 border-l border-t border-purple-500/30'
                          ></div>
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>

            {/* 하단 안내 텍스트 */}
            <div className='text-center text-purple-300/80 text-sm'>
              <p>{currentTexts.hoverTip}</p>
            </div>
          </div>
        )}

        {/* 게임 화면 */}
        {selectedCategory && (
          <>
            {/* 카테고리 표시 및 뒤로가기 */}
            <div className='flex items-center justify-between'>
              <Button
                onClick={() => setSelectedCategory(null)}
                variant='ghost'
                className='text-purple-200 hover:text-white hover:bg-purple-800/30'
              >
                ← {currentTexts.changeCategory}
              </Button>
              <div className='flex items-center gap-2 text-sm text-purple-200 bg-black/30 px-3 py-1 rounded-full border border-purple-500/30'>
                {React.createElement(
                  currentCategoryConfig[selectedCategory].icon,
                  {
                    size: 16,
                  }
                )}
                <span>
                  {currentCategoryConfig[selectedCategory].description}
                </span>
              </div>
            </div>

            {/* 진행률 표시 */}
            <div className='text-center space-y-2'>
              <p className='text-sm text-purple-200'>
                {usedQuestions.size}/{currentQuestions.length}{" "}
                {currentTexts.completed}
              </p>
              <Progress
                value={progress}
                className='w-full bg-purple-900/50 border border-purple-500/30'
              />
            </div>

            {/* 게임 카드 */}
            <div className='flex justify-center'>
              <div
                className={`flip-card w-80 h-96 cursor-pointer ${
                  isFlipped ? "flipped" : ""
                }`}
                onClick={handleCardClick}
              >
                <div className='flip-card-inner'>
                  {/* 카드 앞면 */}
                  <div
                    className={`flip-card-front bg-gradient-to-br ${currentCategoryConfig[selectedCategory].color} shadow-2xl border-2 border-white/20 flex items-center justify-center hover:shadow-3xl transition-all duration-300 hover:scale-105`}
                  >
                    <div className='text-center text-white'>
                      <HelpCircle
                        size={48}
                        className='mx-auto mb-4 opacity-80'
                      />
                      <h2 className='text-2xl font-bold mb-2'>
                        {currentTexts.cardTitle}
                      </h2>
                      <p className='text-lg opacity-90'>
                        {currentTexts.cardSubtitle}
                      </p>
                      <div className='mt-4 text-sm opacity-75'>
                        {currentTexts.question} {usedQuestions.size + 1}
                      </div>
                      <Sparkles
                        size={20}
                        className='mx-auto mt-4 animate-pulse'
                      />
                    </div>
                  </div>

                  {/* 카드 뒷면 */}
                  <div className='flip-card-back bg-gradient-to-br from-white to-purple-50 shadow-2xl border-2 border-purple-200 p-6 flex items-center justify-center'>
                    <div className='text-center'>
                      <div className='text-gray-800 text-lg leading-relaxed font-medium'>
                        {currentQuestion}
                      </div>
                      {currentQuestion && !gameComplete && (
                        <div className='mt-6 flex justify-center gap-2'>
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleShare();
                            }}
                            variant='outline'
                            size='sm'
                            className='flex items-center gap-1 border-purple-300 text-purple-700 hover:bg-purple-50'
                          >
                            <Share2 size={16} />
                            {currentTexts.share}
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 컨트롤 버튼들 */}
            <div className='flex justify-center gap-4'>
              {isFlipped && !gameComplete && (
                <Button
                  onClick={handleNextCard}
                  className={`bg-gradient-to-r ${currentCategoryConfig[selectedCategory].color} hover:scale-105 transition-transform`}
                  size='lg'
                >
                  {currentTexts.nextCard}
                </Button>
              )}

              {gameComplete && (
                <Button
                  onClick={handleReset}
                  className='bg-gradient-to-r from-green-600 to-emerald-600 hover:scale-105 transition-transform'
                  size='lg'
                >
                  <RotateCcw size={20} className='mr-2' />
                  {currentTexts.newJourney}
                </Button>
              )}
            </div>

            {/* 게임 설명 */}
            <div className='text-center text-sm text-purple-200/80 max-w-sm mx-auto bg-black/20 p-4 rounded-lg border border-purple-500/20'>
              <p>{currentTexts.gameDescription}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
