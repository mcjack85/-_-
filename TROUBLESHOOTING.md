# ⚠️ incardna.com 관리자 페이지 문제 해결

## 현재 상황

**증상**: https://incardna.com/admin.html 접속 시 페이지가 표시되지 않음

**원인 분석**:
1. ❌ GitHub Pages가 아직 활성화되지 않음
2. ⚠️ incardna.com에 다른 프로젝트(Vite 기반)가 이미 배포되어 있음

---

## 🔍 확인 사항

### 1. GitHub Pages 상태 확인

현재 상태: **활성화 안됨**
- https://mcjack85.github.io/-_-/ → "Site not found" 표시

**필요한 조치**: GitHub Pages 활성화

### 2. incardna.com 연결 상태

현재: 다른 웹사이트가 연결되어 있음
- Vite 프레임워크 기반 프로젝트
- readdy.ai 관련 프로젝트로 보임

**필요한 조치**: DNS 설정 확인 및 변경

---

## ✅ 해결 방법

### 단계 1: GitHub Pages 활성화 (필수)

1. GitHub 설정 페이지 방문:
   👉 https://github.com/mcjack85/-_-/settings/pages

2. **Source** 섹션:
   - **Branch**: `main` 선택
   - **Folder**: `/ (root)` 선택
   - **Save** 클릭

3. 5-10분 정도 기다린 후 다음 URL 확인:
   - https://mcjack85.github.io/-_-/
   - https://mcjack85.github.io/-_-/admin.html

### 단계 2: incardna.com 도메인 설정 확인

**현재 incardna.com이 어디에 연결되어 있나요?**

다음 중 하나를 선택하세요:

#### 옵션 A: incardna.com을 새 프로젝트로 완전히 변경하려는 경우

1. 현재 연결된 프로젝트의 설정을 제거:
   - 기존 프로젝트의 GitHub/호스팅 설정에서 incardna.com 연결 해제
   
2. DNS 설정 확인:
   - incardna.com 도메인 관리 패널 접속
   - A 레코드가 다음으로 설정되어 있는지 확인:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - CNAME 레코드 확인:
     ```
     www → mcjack85.github.io
     ```

3. GitHub Pages에서 커스텀 도메인 설정:
   - https://github.com/mcjack85/-_-/settings/pages
   - **Custom domain**: `incardna.com` 입력
   - **Save** 클릭

#### 옵션 B: 다른 도메인 사용

새로운 도메인이나 서브도메인 사용:
- 예: `recruit.incardna.com`
- 예: 다른 도메인 구매

---

## 🧪 현재 작동하는 테스트 URL

GitHub Pages가 활성화되기 전까지 샌드박스 환경에서 테스트 가능:

✅ **메인 페이지**: 
https://8000-iyz8hv5ckfndo0miux6cs-5185f4aa.sandbox.novita.ai/index.html

✅ **관리자 페이지**: 
https://8000-iyz8hv5ckfndo0miux6cs-5185f4aa.sandbox.novita.ai/admin.html

---

## 📋 체크리스트

완료된 항목에 ✅ 표시하세요:

- [ ] GitHub Pages 활성화 완료
- [ ] https://mcjack85.github.io/-_-/ 접속 확인
- [ ] https://mcjack85.github.io/-_-/admin.html 접속 확인
- [ ] incardna.com 기존 프로젝트 연결 해제 (필요한 경우)
- [ ] incardna.com DNS 설정 확인
- [ ] GitHub Custom domain에 incardna.com 입력
- [ ] DNS 전파 대기 (1-48시간)
- [ ] https://incardna.com 접속 확인
- [ ] https://incardna.com/admin.html 접속 확인

---

## 🔧 문제 해결

### Q: GitHub Pages를 활성화했는데도 "Site not found"가 나옵니다

**A**: 
- 5-10분 정도 기다려보세요
- 브라우저 캐시를 삭제하고 다시 시도하세요
- GitHub Actions 탭에서 배포 상태를 확인하세요

### Q: incardna.com에 계속 다른 사이트가 나옵니다

**A**: 
- DNS 전파에는 최대 48시간이 걸릴 수 있습니다
- 현재 연결된 프로젝트에서 incardna.com 연결을 해제했는지 확인하세요
- DNS 설정이 올바른지 다시 확인하세요

### Q: admin.html만 안 나오고 index.html은 나옵니다

**A**:
- admin.html이 GitHub에 커밋되었는지 확인: `git ls-files | grep admin`
- admin-styles.css, admin-script.js도 함께 커밋되었는지 확인
- 브라우저 개발자 도구(F12)에서 네트워크 탭 확인

---

## 📞 다음 단계

1. **즉시**: GitHub Pages 활성화
2. **확인**: https://mcjack85.github.io/-_-/admin.html 접속 테스트
3. **결정**: incardna.com을 새 프로젝트로 사용할지, 다른 도메인을 사용할지 결정
4. **설정**: 선택한 방법에 따라 DNS 및 GitHub 설정

---

**작성일**: 2024-02-22
**상태**: GitHub Pages 활성화 대기 중
