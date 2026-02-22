# incardna.com 도메인 연결 가이드

## 📋 현재 상태

- **Git Repository**: https://github.com/mcjack85/-_-.git
- **도메인**: incardna.com
- **CNAME 파일**: 생성 완료 ✅

## 🚀 배포 방법

### 방법 1: GitHub Pages (권장)

#### 1단계: GitHub에 코드 푸시

```bash
cd /home/user/webapp
git push origin main
```

#### 2단계: GitHub Pages 설정

1. GitHub 저장소로 이동: https://github.com/mcjack85/-_-
2. **Settings** → **Pages** 클릭
3. **Source** 섹션에서:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
   - **Save** 클릭

#### 3단계: 도메인 DNS 설정

incardna.com의 DNS 관리 패널에서 다음 레코드를 추가하세요:

**A 레코드 (GitHub Pages IP):**
```
Type: A
Name: @
Value: 185.199.108.153
```

**추가 A 레코드:**
```
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME 레코드 (www):**
```
Type: CNAME
Name: www
Value: mcjack85.github.io
```

#### 4단계: GitHub에서 커스텀 도메인 설정

1. GitHub 저장소 **Settings** → **Pages**
2. **Custom domain** 필드에 `incardna.com` 입력
3. **Save** 클릭
4. **Enforce HTTPS** 체크박스 활성화 (DNS 전파 후)

#### 5단계: DNS 전파 확인

DNS 전파는 최대 24-48시간 소요될 수 있습니다.
확인 사이트: https://dnschecker.org

---

### 방법 2: Vercel (빠른 배포)

#### 1단계: Vercel 계정 연결

1. https://vercel.com 방문
2. GitHub 계정으로 로그인
3. **New Project** 클릭
4. `mcjack85/-_-` 저장소 선택

#### 2단계: 프로젝트 설정

- **Framework Preset**: Other (정적 HTML)
- **Build Command**: 비워두기
- **Output Directory**: `.` (루트)
- **Deploy** 클릭

#### 3단계: 커스텀 도메인 추가

1. Vercel 프로젝트 **Settings** → **Domains**
2. `incardna.com` 입력 후 **Add**
3. 제공된 DNS 레코드를 도메인 DNS 관리 패널에 추가

---

### 방법 3: Netlify

#### 1단계: Netlify 배포

1. https://netlify.com 방문
2. GitHub 계정으로 로그인
3. **New site from Git** 클릭
4. GitHub 저장소 연결
5. 빌드 설정:
   - **Build command**: 비워두기
   - **Publish directory**: `.`

#### 2단계: 커스텀 도메인 설정

1. Site settings → **Domain management**
2. **Add custom domain** → `incardna.com` 입력
3. DNS 레코드 설정 (Netlify가 제공하는 정보 참고)

---

## 🔧 로컬 테스트

배포 전 로컬에서 테스트:

```bash
cd /home/user/webapp
python3 -m http.server 8000
```

브라우저에서 http://localhost:8000 접속

---

## 📝 체크리스트

- [ ] GitHub에 최신 코드 푸시
- [ ] GitHub Pages 설정 완료
- [ ] DNS A 레코드 추가 (4개)
- [ ] DNS CNAME 레코드 추가 (www)
- [ ] GitHub Custom domain 설정
- [ ] HTTPS 활성화
- [ ] DNS 전파 확인 (24-48시간)
- [ ] incardna.com 접속 테스트
- [ ] www.incardna.com 접속 테스트

---

## 🌐 예상 결과

배포 완료 후:
- **메인 사이트**: https://incardna.com
- **WWW**: https://www.incardna.com
- **관리자 페이지**: https://incardna.com/admin.html

---

## ⚠️ 문제 해결

### DNS가 전파되지 않는 경우
- DNS 레코드 설정 재확인
- 24-48시간 대기
- `nslookup incardna.com` 명령으로 확인

### HTTPS 인증서 오류
- GitHub Pages에서 "Enforce HTTPS" 체크
- DNS 전파 완료 후 다시 시도
- 최대 24시간 소요

### 페이지가 표시되지 않는 경우
- GitHub Pages 설정에서 Branch가 `main`인지 확인
- CNAME 파일이 저장소 루트에 있는지 확인
- 브라우저 캐시 삭제 후 재시도

---

## 📞 지원

문제가 발생하면:
1. GitHub Pages 공식 문서: https://docs.github.com/pages
2. DNS 체크: https://dnschecker.org
3. 저장소 이슈: https://github.com/mcjack85/-_-/issues

---

**마지막 업데이트**: 2024-02-22
**도메인**: incardna.com
**저장소**: https://github.com/mcjack85/-_-.git
