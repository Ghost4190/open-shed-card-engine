@echo off
setlocal
pushd "%~dp0" || exit /b 1
where node.exe >nul 2>nul
if errorlevel 1 (
  echo Node is unavailable. Ask your trainer for the prepared Node 22.14.0 runtime.
  popd
  pause
  exit /b 1
)
node.exe run-session-3.mjs
set "session_result=%errorlevel%"
popd
pause
exit /b %session_result%
