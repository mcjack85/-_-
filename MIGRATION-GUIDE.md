# 🚀 incardna.com 완전 교체 가이드 (옵션 A)

## 📋 진행 순서

기존 사이트를 제거하고 새 보험설계사 모집 페이지로 교체합니다.

---

## 1️⃣ GitHub Pages 활성화 (최우선!)

### 작업:
👉 **지금 바로 실행**: https://github.com/mcjack85/-_-/settings/pages

### 설정 방법:
1. **Source** 섹션:
   - **Branch**: `main` 선택
   - **Folder**: `/ (root)` 선택
   - **Save** 클릭

2. 페이지 새로고침 후 다음 메시지 확인:
   ```
   Your site is live at https://mcjack85.github.io/-_-/
   ```

3. 5-10분 후 테스트:
   - ✅ https://mcjack85.github.io/-_-/
   - ✅ https://mcjack85.github.io/-_-/admin.html

**예상 소요 시간**: 5-10분

---

## 2️⃣ 기존 프로젝트에서 incardna.com 연결 해제

현재 incardna.com에 연결된 프로젝트(Vite 기반)를 찾아서 연결을 해제해야 합니다.

### 방법 A: GitHub에서 연결된 프로젝트 찾기

1. GitHub 계정의 모든 저장소 확인:
   - https://github.com/mcjack85?tab=repositories

2. 각 저장소의 Settings → Pages 확인:
   - Custom domain에 `incardna.com`이 설정된 저장소 찾기

3. 해당 저장소에서:
   - Custom domain 필드를 **비우기** (삭제)
   - **Save** 클릭

### 방법 B: CNAME 파일로 찾기

1. 모든 저장소에서 CNAME 파일 검색
2. CNAME 파일에 `incardna.com`이 있는 저장소 찾기
3. 해당 CNAME 파일 삭제하고 커밋

### 방법 C: Vercel/Netlify 등 다른 호스팅 사용 중인 경우

**Vercel**:
- https://vercel.com/dashboard
- 프로젝트 선택 → Settings → Domains
- incardna.com 찾아서 Remove

**Netlify**:
- https://app.netlify.com/
- 사이트 선택 → Domain settings
- incardna.com 찾아서 Remove

**Cloudflare Pages**:
- https://dash.cloudflare.com/
- Pages → 프로젝트 → Custom domains
- incardna.com 제거

---

## 3️⃣ DNS 설정 확인 및 변경

### incardna.com DNS 관리 패널 접속

도메인을 구매한 곳 (가비아, 호스팅KR, 고대디, Cloudflare 등)에서:

### 기존 레코드 확인:

현재 어디로 연결되어 있는지 확인:
```bash
# 명령어로 확인 (참고용)
nslookup incardna.com
```

### 새 레코드로 변경:

**기존 A 레코드 모두 삭제하고 다음으로 교체:**

| 타입 | 호스트/이름 | 값/주소 | TTL |
|------|------------|---------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

**CNAME 레코드 확인/수정:**

| 타입 | 호스트/이름 | 값/주소 | TTL |
|------|------------|---------|-----|
| CNAME | www | mcjack85.github.io | 3600 |

### DNS 설정 스크린샷 예시:

**가비아 예시:**
```
레코드 타입: A
호스트: @
값: 185.199.108.153
TTL: 3600초
```

**Cloudflare 예시:**
```
Type: A
Name: @
IPv4 address: 185.199.108.153
Proxy status: DNS only (회색 구름)
TTL: Auto
```

---

## 4️⃣ GitHub Pages에 커스텀 도메인 설정

### 작업:
👉 https://github.com/mcjack85/-_-/settings/pages

### 설정:
1. **Custom domain** 필드에 `incardna.com` 입력
2. **Save** 클릭
3. DNS 확인 과정 대기 (몇 분 소요)
4. 확인 완료 후:
   - ✅ **Enforce HTTPS** 체크박스 활성화

---

## 5️⃣ DNS 전파 확인

### DNS 전파 상태 확인:

**온라인 도구:**
- https://dnschecker.org/#A/incardna.com
- 전 세계 주요 지역에서 ✅ 표시 확인

**명령줄 확인:**
```bash
# A 레코드 확인
nslookup incardna.com

# 결과 예시 (정상):
# Address: 185.199.108.153
# Address: 185.199.109.153
# Address: 185.199.110.153
# Address: 185.199.111.153
```

### 예상 소요 시간:
- **빠른 경우**: 10분 ~ 1시간
- **일반적**: 2 ~ 6시간
- **최대**: 24 ~ 48시간

---

## 6️⃣ 최종 테스트

DNS 전파가 완료되면 다음 URL에서 테스트:

### 접속 테스트:
- ✅ https://incardna.com → 메인 랜딩페이지
- ✅ https://www.incardna.com → 메인 랜딩페이지
- ✅ https://incardna.com/admin.html → 관리자 페이지

### 확인 사항:
1. 보라색 그라데이션 배경의 Hero 섹션이 표시되는가?
2. "DNA 유전자 검사 솔루션으로" 제목이 표시되는가?
3. 신청 폼이 정상 작동하는가?
4. 관리자 페이지 접속이 되는가?
5. HTTPS (자물쇠 아이콘)가 표시되는가?

---

## 📋 완료 체크리스트

진행하면서 하나씩 체크하세요:

### Phase 1: GitHub Pages 설정
- [ ] GitHub Pages 활성화 완료
- [ ] https://mcjack85.github.io/-_-/ 접속 확인
- [ ] https://mcjack85.github.io/-_-/admin.html 접속 확인

### Phase 2: 기존 연결 해제
- [ ] 기존 프로젝트에서 incardna.com 연결 해제
- [ ] 기존 CNAME 파일 제거 (다른 저장소)
- [ ] 다른 호스팅 서비스에서 도메인 제거 (해당시)

### Phase 3: DNS 설정
- [ ] DNS 관리 패널 접속
- [ ] 기존 A 레코드 모두 삭제
- [ ] 새 A 레코드 4개 추가 (GitHub Pages)
- [ ] CNAME 레코드 확인/수정 (www)
- [ ] DNS 변경사항 저장

### Phase 4: GitHub 커스텀 도메인
- [ ] GitHub Pages에 incardna.com 입력
- [ ] DNS 확인 완료 대기
- [ ] Enforce HTTPS 활성화

### Phase 5: 테스트
- [ ] DNS 전파 확인 (dnschecker.org)
- [ ] https://incardna.com 접속 테스트
- [ ] https://www.incardna.com 접속 테스트
- [ ] https://incardna.com/admin.html 접속 테스트
- [ ] HTTPS 인증서 확인
- [ ] 모바일에서 테스트
- [ ] 신청 폼 테스트

---

## ⚠️ 주의사항

### 기존 사이트 백업:
- 기존 incardna.com의 Vite 프로젝트를 완전히 교체합니다
- 필요하다면 기존 사이트의 코드를 백업하세요

### DNS 전파 중 예상되는 현상:
- 일부 지역/사용자는 기존 사이트가 보일 수 있음
- 일부 지역/사용자는 새 사이트가 보일 수 있음
- 이는 정상이며, 완전 전파까지 기다리면 해결됨

### HTTPS 인증서:
- DNS 전파 완료 후 자동으로 발급됨 (최대 24시간)
- "Enforce HTTPS"는 인증서 발급 후 활성화 가능

---

## 🔧 문제 해결

### Q: GitHub Pages를 활성화했는데 여전히 "Site not found"가 나옵니다

**A**: 
1. 5-10분 더 기다려보세요
2. GitHub Actions 탭 확인: https://github.com/mcjack85/-_-/actions
3. 빌드/배포 작업이 완료되었는지 확인
4. 브라우저 캐시 삭제 후 재시도

### Q: incardna.com에 계속 기존 사이트가 나옵니다

**A**:
1. 기존 프로젝트에서 incardna.com 연결을 해제했는지 재확인
2. DNS 캐시를 삭제하고 재시도:
   - Windows: `ipconfig /flushdns`
   - Mac: `sudo dscacheutil -flushcache`
3. 시크릿/프라이빗 모드에서 접속해보기
4. 다른 네트워크(모바일 데이터)에서 접속해보기

### Q: DNS 전파가 너무 오래 걸립니다

**A**:
1. dnschecker.org에서 전파 상황 확인
2. 일부 지역만 전파되어도 정상 (시간이 지나면 모두 전파됨)
3. TTL 값이 높으면 더 오래 걸릴 수 있음
4. 48시간까지는 정상 범위

### Q: HTTPS 인증서 오류가 납니다

**A**:
1. DNS 전파가 완전히 완료되었는지 확인
2. GitHub Pages에서 "Enforce HTTPS" 체크 해제 후 다시 체크
3. 최대 24시간 대기
4. 여전히 문제가 있으면 GitHub Pages 설정에서 도메인을 제거했다가 다시 추가

---

## 📞 다음 단계

1. **지금 바로**: GitHub Pages 활성화
2. **확인**: mcjack85.github.io/-_-/ 접속 테스트
3. **찾기**: incardna.com이 연결된 기존 프로젝트 찾아서 연결 해제
4. **변경**: DNS 설정을 GitHub Pages로 변경
5. **대기**: DNS 전파 완료
6. **테스트**: incardna.com 접속 확인

---

## 🎯 예상 타임라인

| 단계 | 소요 시간 | 시작 시점 |
|------|-----------|----------|
| GitHub Pages 활성화 | 5-10분 | 지금 즉시 |
| 기존 연결 해제 | 5-10분 | GitHub Pages 확인 후 |
| DNS 설정 변경 | 5-10분 | 연결 해제 후 |
| DNS 전파 | 1-48시간 | DNS 변경 후 |
| HTTPS 인증서 | 자동 (최대 24시간) | DNS 전파 후 |

**최소 시간**: 1-2시간  
**일반적**: 6-12시간  
**최대**: 48-72시간

---

**시작일**: 2024-02-22  
**예상 완료**: 2024-02-23 ~ 2024-02-24  
**저장소**: https://github.com/mcjack85/-_-  
**도메인**: incardna.com
