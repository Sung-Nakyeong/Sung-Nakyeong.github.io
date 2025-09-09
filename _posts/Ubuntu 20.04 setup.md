--- 
layout: single title: "WSL2 환경 구성 (Windows 11)" 
date: 2025-09-09 
categories: [WSL2, Ubuntu20.04] 
tags: [WSL2, Windows11, PowerShell, Ubuntu, 개발환경] 
toc: true 
toc_sticky: true 
author_profile: true 
---

이제부터는 **Ubuntu 20.04 셸** 안에서 진행한다.

### 1) Ubuntu 실행하기
Ubuntu를 실행하는 방법은 두 가지 중 하나를 고르면 된다.

1. 시작 메뉴에서 **“Ubuntu 20.04”** 아이콘을 더블클릭  
2. **Windows PowerShell / Windows Terminal** 에서 아래처럼 입력
   ```powershell
   wsl
   ```
   - 처음 실행하면 **사용자 계정 이름과 비밀번호**를 만들게 된다. (비밀번호는 타이핑해도 화면에 표시되지 않지만 그래도 잘 입력된다)

### 2) 시스템 패키지 목록 최신화 & 업그레이드

  패키지 목록을 새로고침하고 보안/버그 수정까지 한번에 반영한다.

```bash
sudo apt update && sudo apt -y upgrade
```
- 최초 한번은 비밀번호를 입력하는 화면이 뜨고 이후 명령창을 재부팅하기 전에는 다시 입력하지 않아도 된다.

### 3) 필수 패키지 설치

  PX4/ROS2 개발에 꼭 필요한 **빌드 도구 + 유틸리티** 들을 한 번에 깔아둔다.

  ```bash
sudo apt install -y \
  git wget curl gnupg lsb-release \
  software-properties-common \
  build-essential cmake unzip
```
