# 100 Questions Card Game

물리적인 보드게임 카드 경험을 모방한 반응형 Next.js 14 앱입니다. TypeScript, shadcn/ui, Tailwind CSS를 사용하여 구축되었습니다.

## 기능

- 🎴 **카드 뒤집기 애니메이션**: 실제 카드를 뒤집는 듯한 3D 애니메이션
- 🎯 **랜덤 질문**: 중복 없이 질문이 랜덤하게 나타남
- 📊 **진행률 표시**: 몇 개의 질문을 완료했는지 추적
- 📱 **반응형 디자인**: 데스크톱과 모바일에서 완벽하게 작동
- 📋 **공유 기능**: 질문을 클립보드에 복사
- 🔄 **게임 리셋**: 모든 질문 완료 후 다시 시작 가능

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 프로젝트 구조

```
randomCard/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── progress.tsx
│   └── game-card.tsx
├── lib/
│   └── utils.ts
└── package.json
```

## 게임 방법

1. 화면 중앙의 카드를 클릭하세요
2. 카드가 뒤집히면서 흥미로운 질문이 나타납니다
3. "다음 카드" 버튼을 클릭해서 새로운 질문을 확인하세요
4. 모든 질문을 완료하면 "다시 시작" 버튼으로 게임을 재시작할 수 있습니다

## 사용자 정의

질문을 추가하거나 수정하려면 `components/game-card.tsx` 파일의 `QUESTIONS` 배열을 편집하세요. 