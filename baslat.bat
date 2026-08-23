@echo off
chcp 65001 >nul
title KodForge Baslatici
echo.
echo   ========================================
echo    KodForge uygulamasi baslatiliyor...
echo   ========================================
echo.
echo   Bu bir WEB uygulamasidir (HTML + CSS + JS).
echo   Flutter ya da npm gerekmez; tarayicida acilir.
echo.
start "" "web\index.html"
echo   Tarayiciniz acildi. Bu pencereyi kapatabilirsiniz.
timeout /t 4 >nul
