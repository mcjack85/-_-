# ✅ incardna.com 교체 작업 - 빠른 체크리스트

옵션 A: 기존 사이트를 완전히 새 보험설계사 모집 페이지로 교체

---

## 🚀 1단계: GitHub Pages 활성화 (5-10분)

### 바로 실행하기:
👉 https://github.com/mcjack85/-_-/settings/pages

### 설정:
```
Branch: main
Folder: / (root)
[Save 클릭]
```

### 확인:
- [ ] 5-10분 후 https://mcjack85.github.io/-_-/ 접속
- [ ] https://mcjack85.github.io/-_-/admin.html 접속

---

## 🔍 2단계: 기존 프로젝트 연결 해제 (5-10분)

### GitHub 저장소에서 찾기:
1. https://github.com/mcjack85?tab=repositories
2. 각 저장소 → Settings → Pages 확인
3. Custom domain에 `incardna.com` 있으면 **삭제**

### 또는 다른 호스팅 확인:
- [ ] Vercel (https://vercel.com/dashboard)
- [ ] Netlify (https://app.netlify.com/)
- [ ] Cloudflare Pages
- [ ] 기타 호스팅 서비스

### 작업:
- [ ] incardna.com 연결 해제 완료

---

## 🌐 3단계: DNS 설정 변경 (5-10분)

### incardna.com 도메인 관리 패널 접속

### 기존 A 레코드 모두 삭제 후 다음 추가:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### CNAME 레코드 확인/수정:
```
www → mcjack85.github.io
```

### 작업:
- [ ] A 레코드 4개 추가 완료
- [ ] CNAME 레코드 확인 완료
- [ ] 변경사항 저장 완료

---

## 🔗 4단계: GitHub 커스텀 도메인 설정 (2분)

### 바로 실행하기:
👉 https://github.com/mcjack85/-_-/settings/pages

### 설정:
```
Custom domain: incardna.com
[Save 클릭]
```

### 나중에 활성화 (DNS 전파 후):
```
☑ Enforce HTTPS
```

### 작업:
- [ ] incardna.com 입력 완료
- [ ] DNS 확인 대기 중

---

## ⏳ 5단계: DNS 전파 대기 (1-48시간)

### 확인 도구:
- https://dnschecker.org/#A/incardna.com

### 기다리는 동안:
- [ ] 커피 한 잔 ☕
- [ ] 다른 작업 진행
- [ ] 주기적으로 확인

### 예상 시간:
- 빠른 경우: 10분 ~ 1시간
- 일반적: 2 ~ 6시간  
- 최대: 24 ~ 48시간

---

## ✅ 6단계: 최종 테스트

### 접속 테스트:
- [ ] https://incardna.com
- [ ] https://www.incardna.com
- [ ] https://incardna.com/admin.html

### 확인 사항:
- [ ] 보라색 그라데이션 배경 표시
- [ ] "DNA 유전자 검사 솔루션으로" 제목 표시
- [ ] 신청 폼 작동
- [ ] 관리자 페이지 작동
- [ ] HTTPS (자물쇠) 표시

---

## 🎯 현재 진행 상황

### 완료된 작업:
- ✅ 코드 GitHub 업로드 완료
- ✅ CNAME 파일 생성 완료
- ✅ 모든 파일 커밋 완료

### 남은 작업:
- ⏳ GitHub Pages 활성화
- ⏳ 기존 연결 해제
- ⏳ DNS 설정 변경
- ⏳ DNS 전파 대기

---

## 📞 도움말

### 상세 가이드:
- **MIGRATION-GUIDE.md** - 완전한 마이그레이션 가이드
- **TROUBLESHOOTING.md** - 문제 해결 가이드
- **SETUP-GUIDE.md** - 초기 설정 가이드

### 지금 확인:
👉 https://github.com/mcjack85/-_-

---

## 🚨 긴급 문제 발생 시

### "Site not found" 표시:
- 5-10분 더 기다리기
- GitHub Actions 탭 확인
- 브라우저 캐시 삭제

### 기존 사이트 계속 표시:
- 기존 연결 해제 재확인
- DNS 캐시 삭제
- 시크릿 모드에서 접속

### HTTPS 오류:
- DNS 전파 완료 대기
- Enforce HTTPS 체크 해제 후 재체크
- 최대 24시간 대기

---

**시작 시간**: [현재 시각 기록]
**예상 완료**: 1-48시간 후
**저장소**: https://github.com/mcjack85/-_-
**도메인**: incardna.com

🎉 **첫 단계부터 시작하세요!**
