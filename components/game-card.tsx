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

type Category = "일반" | "커플" | "가족" | "친구";
type Language = "ko" | "en";

const QUESTIONS = {
  ko: {
    일반: [
      "가장 기억에 남는 여행지는 어디인가요? 그곳에서 무엇을 했나요?",
      "어렸을 때 꿈꾸던 직업은 무엇이었나요? 지금도 관심이 있나요?",
      "만약 하루만 투명인간이 될 수 있다면 무엇을 하고 싶나요?",
      "인생에서 가장 중요하게 생각하는 가치는 무엇인가요?",
      "만약 과거로 돌아갈 수 있다면 언제로 가고 싶나요?",
      "좋아하는 음식을 하나만 평생 먹어야 한다면 무엇을 선택하겠나요?",
      "스트레스를 받을 때 어떻게 풀어내나요?",
      "가장 자랑스러운 성취는 무엇인가요?",
      "10년 후 자신의 모습을 어떻게 상상하나요?",
      "세상에서 하루만 모든 것이 가능하다면 무엇을 하고 싶나요?",
      "가장 행복했던 순간은 언제였나요?",
      "만약 타임머신이 있다면 미래와 과거 중 어디로 가고 싶나요?",
      "인생의 버킷리스트 1순위는 무엇인가요?",
    ],
    커플: [
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
      "What's the most memorable trip you've taken? What did you do there?",
      "What did you dream of becoming when you were young? Are you still interested in it?",
      "If you could be invisible for just one day, what would you do?",
      "What value do you consider most important in life?",
      "If you could go back to the past, when would you want to go?",
      "If you had to eat only one food for the rest of your life, what would you choose?",
      "How do you cope with stress?",
      "What's your proudest achievement?",
      "How do you imagine yourself in 10 years?",
      "If anything were possible for just one day, what would you do?",
      "When was your happiest moment?",
      "If you had a time machine, would you go to the future or the past?",
      "What's your #1 bucket list item?",
    ],
    커플: [
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
      description: "인생의 깊은 통찰",
      mysticalText: "당신의 내면을 탐구하는 카드",
    },
    커플: {
      icon: Heart,
      color: "from-rose-500 to-red-600",
      description: "사랑의 연결고리",
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
    커플: {
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
    커플: "커플",
    가족: "가족",
    친구: "친구",
  },
  en: {
    일반: "General",
    커플: "Couple",
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
    cardTitle: "운명의 질문",
    cardSubtitle: "카드를 뒤집어보세요",
    question: "질문",
    share: "공유",
    nextCard: "다음 운명의 카드",
    newJourney: "새로운 여정 시작",
    gameDescription:
      "✨ 운명이 준비한 질문들을 통해 새로운 통찰을 발견해보세요 ✨",
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
