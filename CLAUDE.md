# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install     # 의존성 설치
pnpm dev         # 개발 서버 실행 (Vite)
pnpm build       # 프로덕션 빌드 (tsc + vite build)
pnpm lint        # ESLint 실행
pnpm preview     # 빌드 결과 미리보기
```

## Architecture

**Feature-Sliced Design (FSD)** 아키텍처를 사용합니다.

### 레이어 계층

```
app > pages > features > entities > shared
```

- 상위 레이어는 하위 레이어 import 가능
- 하위 레이어는 상위 레이어 import 불가
- 같은 레이어의 slice 간 import 금지

### 레이어별 구조

| 레이어 | 역할 | Segments |
|--------|------|----------|
| `app/` | 엔트리포인트, 라우터, MSW 설정 | 커스텀 허용 |
| `pages/` | 페이지 UI 컴포넌트 | ui |
| `features/` | pages 간 공유 UI (선택적) | ui, model, api, lib, config |
| `entities/` | 데이터 원형 및 서버 호출 | api, model, config |
| `shared/` | 전역 공유 리소스 | lib, ui, config, type, store |

### Entities 구조 패턴

```
entities/[entity]/
├── api/
│   ├── [entity].api.ts      # API 호출 함수
│   ├── [entity].handlers.ts # MSW 핸들러
│   └── index.ts
├── config/
│   ├── [entity]-endpoint.ts # API 엔드포인트 정의
│   ├── [entity].fixtures.ts # Mock 데이터
│   └── index.ts
├── model/
│   ├── [entity].dto.ts      # 타입 정의
│   ├── [entity].queries.ts  # TanStack Query factory
│   ├── [entity].mutations.ts # useMutation hooks
│   └── index.ts
└── index.ts                 # Public API (re-export)
```

## Key Patterns

### API 호출

```typescript
// entities/[entity]/api/[entity].api.ts
import { publicApi } from "@/shared/lib";
import { entityApiEndPoint } from "../config";

export const getEntityList = async () => {
  const response = await publicApi.get(entityApiEndPoint.getList());
  return response.data;
};
```

### Query Factory

```typescript
// entities/[entity]/model/[entity].queries.ts
import { queryOptions, infiniteQueryOptions } from "@tanstack/react-query";

export const entityQueries = {
  all: () => ["entity"] as const,
  lists: () => [...entityQueries.all(), "list"] as const,
  list: (params?) => queryOptions({
    queryKey: [...entityQueries.lists(), params],
    queryFn: () => getEntityList(params),
  }),
  infiniteList: (params?) => infiniteQueryOptions({
    queryKey: [...entityQueries.lists(), "infinite", params],
    queryFn: ({ pageParam }) => getEntityList({ ...params, page: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pageInfo.last ? undefined : lastPage.pageInfo.currentPage + 1,
  }),
};
```

### SVG 컴포넌트

`?react` suffix로 SVG를 React 컴포넌트로 import:

```typescript
import Logo from "@/assets/logo.svg?react";
<Logo fill="currentColor" />
```

### 스타일링

- **Tailwind CSS 4** + **SCSS Modules** 혼용
- `classnames/bind`로 SCSS 모듈 바인딩
- shadcn/ui 컴포넌트는 `class-variance-authority` (CVA) 사용
- `cn()` 유틸로 클래스 병합 (`@/shared/lib`)

```typescript
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

<div className={cx("navbar", "navbar__top")} />
```

## Conventions

- **함수**: Arrow Function 사용
- **컴포넌트**: `export const ComponentName = () => {}`
- **Hook**: `use` 접두사 + camelCase
- **타입**: 객체는 `interface`, Union/Intersection은 `type`
- **폴더/파일명**: `hyphen-case`
- **상수**: `UPPER_SNAKE_CASE`
