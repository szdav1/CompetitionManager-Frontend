@REM Gitter Version V.2.1.2
@echo off
cls
set version=Gitter V.2.1.2
echo  %version%
echo ================
set mode=%1

if not defined mode goto mnsel

if %mode%==rm goto rml

if %mode%==init goto initl

if %mode%==--up goto pushl

if %mode%==--ups goto pushsl

if %mode%==--dwn goto pulll

if %mode%==--dwn-ovr goto pullhardl

if %mode%==? goto helpl

if %mode%==help goto helpl

goto mnsel

:rml
set file=%2

if not defined file goto filendel

git rm --cached %file%

goto exitl

:initl
set origin=%2

if not defined origin goto originndel

git init
git remote add origin %origin%
type nul > .gitignore
echo .gradle >> .gitignore
echo .idea >> .gitignore
echo build >> .gitignore
git add .

:pushl
SET msg=%2
SET branch=%3

if not defined msg goto msgndel

if not defined branch goto branchndel

echo Perform push with specified parameters?
echo Branch: %branch%
echo Message: %msg%
set /p answ=(y/n)

if %answ%==n goto changel

echo Pushing to %branch%

git add .
git commit -m %msg%
git push origin %branch%
goto exitl

:pushsl
SET msg=%2
SET branch=%3

if not defined msg goto msgndel

if not defined branch goto branchndel

echo Pushing to %branch%

git add .
git commit -m %msg%
git push origin %branch%
goto exitl

:pulll
SET branch=%2

if not defined branch goto branchndel

echo Pulling from %branch%...

git add .
git commit -m "Committing before pulling."
git pull origin %branch%
goto exitl

:pullhardl
SET branch=%2

if not defined branch goto branchndel

echo Overriding from %branch%...

git fetch --all
git reset --hard origin/%branch%
goto exitl

:helpl
echo  Helper
echo ========
echo As first argument, define the mode:
echo --up: For uploading, pushing to a repository
echo --dwn: For downloading, pulling from a repository
echo --dwn-ovr: For downloading and overriding, fetching and hard resetting from a repository
echo ==========================================================================================
echo  Pushing
echo =========
echo When pushing, the second argument should be the commit message
echo The third argument in case of pushing should be the name of the branch where the push should be done
echo ====================================================================================================
echo  Pulling
echo =========
echo When pulling, the second argument should be the name of the branch from where the pull should be conducted
echo ==========================================================================================================
echo  Hard Pulling
echo ==============
echo When hard-pulling, the second argument should be the name of the branch from where the hard-pull should be conducted
echo ====================================================================================================================
echo  Examples
echo ==========
echo gitter --up "This is a commit message" branch
echo gitter --dwn branch
echo gitter --dwn-ovr branch

goto exitl

:msgndel
echo Commit message not specified.
echo Use "help" or "?" arguments for help.
goto exitl

:branchndel
echo Branch not specified.
echo Use "help" or "?" arguments for help.
goto exitl

:mnsel
echo Mode not specified. Use --up, --dwn or --dwn-ovr.
echo Use "help" or "?" arguments for help.
goto errexitl

:changel
set /p answ=Perform changes to parameters? (y/n)

if not defined answ goto changel

if %answ%==n goto exitl

set /p branch=Branch:
set /p msg=Message:

if not defined branch goto msgchangel

if not defined msg goto branchchangel

goto allchangel

:msgchangel
git add .
git commit -m %message%
git push origin %3
goto exitl

:branchchangel
git add .
git commit -m %2
git push origin %branch%
goto exitl

:allchangel
git add .
git commit -m %msg%
git push origin %branch%
goto exitl

:filendel
echo Please define the file you want to remove from the cache.
goto exitl

:originndel
echo Origin not defined.
goto exitl

:errexitl
set /p endp=Press any key to exit...
goto exitl

:exitl
echo(
echo %version% process finished.