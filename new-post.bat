@echo off
chcp 65001 >nul
set /p title=عنوان مقاله را وارد کن: 
set /p cat=دسته (عقاید / اهل‌سنت / شیعه / عمومی / تصوف): 
set /p dt=تاریخ (Enter برای امروز): 
if "%dt%"=="" set dt=%date:~0,4%-%date:~5,2%-%date:~8,2%T12:00:00

set filename=%title: =-%.md
set filepath=src\content\blog\%filename%

(
echo ---
echo title: "%title%"
echo category: "%cat%"
echo date: %dt%
echo draft: false
echo ---
echo.
) > "%filepath%"

echo.
echo فایل ساخته شد: %filepath%
notepad "%filepath%"
