# ✅ incardna.com 도메인 등록 완료 안내

## 🎉 GitHub 푸시 완료!

코드가 성공적으로 GitHub에 푸시되었습니다!
- **저장소**: https://github.com/mcjack85/-_-
- **CNAME 파일**: ✅ 생성 완료 (incardna.com)

---

## 📋 다음 단계: incardna.com 도메인 연결

### 1️⃣ GitHub Pages 활성화 (필수)

1. GitHub 저장소 방문: https://github.com/mcjack85/-_-/settings/pages

2. **Source** 섹션에서:
   - **Branch**: `main` 선택
   - **Folder**: `/ (root)` 선택
   - **Save** 버튼 클릭

3. 몇 분 후 다음 메시지가 표시됩니다:
   ```
   Your site is published at https://mcjack85.github.io/-_-/
   ```

---

### 2️⃣ 도메인 DNS 설정 (필수)

incardna.com의 DNS 관리 패널 (도메인 등록업체)에서 다음 설정을 추가하세요:

#### A 레코드 추가 (4개 모두 추가):
```
Type: A
Name: @
TTL: 3600

값 (4개 모두 추가):
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

#### CNAME 레코드 추가:
```
Type: CNAME
Name: www
Value: mcjack85.github.io
TTL: 3600
```

**DNS 설정 예시 (일반적인 형태):**

| 타입 | 호스트/이름 | 값/주소 | TTL |
|------|------------|---------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |
| CNAME | www | mcjack85.github.io | 3600 |

---

### 3️⃣ GitHub에서 커스텀 도메인 설정

1. https://github.com/mcjack85/-_-/settings/pages 다시 방문

2. **Custom domain** 섹션에서:
   - `incardna.com` 입력
   - **Save** 버튼 클릭

3. DNS 확인 완료 후 (24-48시간 소요 가능):
   - ✅ **Enforce HTTPS** 체크박스 활성화

---

### 4️⃣ DNS 전파 확인

DNS 전파 상태를 확인하세요:
- https://dnschecker.org/#A/incardna.com
- 전 세계적으로 ✅ 표시가 나타나면 완료

**예상 소요 시간:**
- 빠른 경우: 10분 ~ 1시간
- 일반적: 2 ~ 6시간
- 최대: 24 ~ 48시간

---

## 🌐 배포 완료 후 접속 URL

설정이 완료되면 다음 URL에서 웹사이트에 접속할 수 있습니다:

✅ **메인 사이트**: https://incardna.com
✅ **WWW**: https://www.incardna.com
✅ **관리자 페이지**: https://incardna.com/admin.html

---

## 📊 현재 페이지 구성

### 메인 랜딩페이지 (index.html)
- ✅ Hero 섹션 (보라색 그라데이션 배경)
- ✅ 수익 하이라이트 (500만원+, 70%+, 100만원+)
- ✅ 혜택 섹션 (6가지)
- ✅ 프로세스 (4단계)
- ✅ 타겟 고객 (6가지 유형)
- ✅ 성공 스토리
- ✅ 신청 폼
- ✅ Footer

### 관리자 페이지 (admin.html)
- ✅ 통계 대시보드
- ✅ 신청자 검색/필터링
- ✅ 상태 관리
- ✅ CSV 내보내기

---

## 🔍 배포 상태 체크리스트

진행 상황을 체크하세요:

- [ ] GitHub Pages 활성화 완료
- [ ] DNS A 레코드 4개 추가
- [ ] DNS CNAME 레코드 (www) 추가
- [ ] GitHub Custom domain 설정
- [ ] DNS 전파 완료 확인
- [ ] https://incardna.com 접속 테스트
- [ ] https://www.incardna.com 접속 테스트
- [ ] HTTPS 인증서 활성화 확인
- [ ] 관리자 페이지 접속 테스트

---

## ⚠️ 문제 해결

### "Page not found" 오류가 나는 경우
- GitHub Pages가 활성화되었는지 확인
- 브랜치가 `main`으로 설정되었는지 확인
- 몇 분 기다린 후 다시 시도

### DNS가 연결되지 않는 경우
- DNS 레코드 설정을 다시 확인
- 24-48시간 대기
- `nslookup incardna.com` 명령으로 확인

### HTTPS 인증서 오류
- DNS 전파 완료 후 자동 생성 (최대 24시간)
- "Enforce HTTPS" 체크박스 활성화
- 브라우저 캐시 삭제 후 재시도

---

## 📞 추가 지원

더 자세한 정보는 다음 문서를 참고하세요:
- `DEPLOYMENT.md` - 상세 배포 가이드
- `README.md` - 프로젝트 문서

---

## 🎯 요약

1. ✅ **GitHub 푸시 완료** - 코드가 업로드되었습니다
2. ⏳ **GitHub Pages 활성화** - Settings → Pages에서 설정
3. ⏳ **DNS 설정** - A 레코드 4개 + CNAME 레코드 추가
4. ⏳ **커스텀 도메인 연결** - GitHub Pages에서 incardna.com 입력
5. ⏳ **DNS 전파 대기** - 24-48시간 소요 가능

**예상 완료 시간**: DNS 설정 후 1-2일 이내

---

**생성일**: 2024-02-22
**저장소**: https://github.com/mcjack85/-_-
**도메인**: incardna.com
