@echo off
REM Sebastian - Instalador Interativo
REM Script para iniciar setup do Sebastian

setlocal enabledelayedexpansion

REM Verifica se Python está instalado
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo ==================================================================
    echo  ERRO: Python nao foi encontrado!
    echo ==================================================================
    echo.
    echo Por favor, instale Python 3.9+ de: https://www.python.org
    echo.
    echo Certifique-se de marcar "Add Python to PATH" durante instalacao.
    echo.
    pause
    exit /b 1
)

REM Exibe banner
echo.
echo ==================================================================
echo  SEBASTIAN SETUP INTERATIVO
echo ==================================================================
echo.

REM Executa setup
python sebastian.py --setup

if %errorlevel% neq 0 (
    echo.
    echo Setup falhou. Pressione ENTER para sair.
    pause
    exit /b 1
)

echo.
echo ==================================================================
echo  SETUP CONCLUIDO COM SUCESSO!
echo ==================================================================
echo.
echo Execute: python sebastian.py
echo.
pause
