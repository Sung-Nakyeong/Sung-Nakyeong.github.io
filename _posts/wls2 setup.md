---
layout: single
title: "WSL2 환경 구성 (Windows 11)"
date: 2025-09-09
categories: [devlog, windows]
tags: [WSL2, Windows11, PowerShell, Ubuntu, 개발환경]
toc: true
toc_sticky: true
author_profile: true
---

PX4 - GAZEBO - ROS2 를 연동한 드론 시뮬레이션을 실행하기 위해서는 기본적으로 **리눅스** 환경이 구성되어야한다.
지금 사용하는 운영체제는 **Window 11 Home** 버전으로 WSL2 환경을 구성하면 윈도우 체제에서도 리눅스 환경을 사용할 수있다.

WSL2 환경을 구성하는 것은 매우 쉽지만 향후 다른 프로그램들과의 연동성을 위해서는 반드시 **Ubuntu 20.04** 환경을 구성하는 것이 중요하다.
 * 버전의 호환성이 드론 연구에서는 가장 중요한 이슈라고 본다.

지금부터는 Powershell 명령창을 이용하여 WSL2 Ubuntu 20.04 버전 환경을 구성하는 방법이다.

## 1) 준비물 점검
- **Windows 11** (최근 업데이트 적용 권장)
- **관리자 권한 PowerShell** (시작 메뉴 → `PowerShell` → 우클릭 **관리자 권한으로 실행**)
- 재부팅 한 번은 각오하기!

## 2) WSL/가상화 기능 활성화
```powershell
# (관리자 권한 PowerShell) WSL2 한 줄 설치
wsl --install -d Ubuntu-20.04

# WSL2를 기본으로
wsl --set-default-version 2
```


---
