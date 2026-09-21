#!/bin/bash

# Sebastian - Instalador Interativo
# Script para iniciar setup do Sebastian em Linux/Mac

set -e

# Verifica se Python está instalado
if ! command -v python3 &> /dev/null; then
    echo ""
    echo "======================================================================"
    echo "  ERRO: Python 3 não foi encontrado!"
    echo "======================================================================"
    echo ""
    echo "Por favor, instale Python 3.9+ usando:"
    echo ""
    echo "  macOS:  brew install python3"
    echo "  Ubuntu: sudo apt-get install python3 python3-pip"
    echo "  Fedora: sudo dnf install python3 python3-pip"
    echo ""
    exit 1
fi

# Exibe banner
echo ""
echo "======================================================================"
echo "  SEBASTIAN SETUP INTERATIVO"
echo "======================================================================"
echo ""

# Executa setup
python3 sebastian.py --setup

if [ $? -ne 0 ]; then
    echo ""
    echo "Setup falhou. Pressione ENTER para sair."
    read
    exit 1
fi

echo ""
echo "======================================================================"
echo "  SETUP CONCLUÍDO COM SUCESSO!"
echo "======================================================================"
echo ""
echo "Execute: python3 sebastian.py"
echo ""
