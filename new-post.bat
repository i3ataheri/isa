@echo off
chcp 65001 >nul 2>&1
echo.
echo ====== ايجاد مقاله جديد ======
echo.
set /p "title=عنوان: "
set /p "cat=دسته: "
if "%title%"=="" goto err
if "%cat%"=="" goto err

set dt=%date:~0,4%-%date:~5,2%-%date:~8,2%T12:00:00
set "filepath=src\content\blog\%title%.md"

(
echo ---
echo title: "%title%"
echo category: "%cat%"
echo date: %dt%
echo draft: false
echo ---
echo.
) > "%filepath%" 2>&1

if not exist "%filepath%" goto err
echo.
echo ^> فایل ساخته شد: %filepath%
start notepad "%filepath%"
echo.
pause
goto end

:err
echo.
echo [!] خطا! دوباره تلاش کن.
pause
:end
