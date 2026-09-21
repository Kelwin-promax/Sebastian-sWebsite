#!/bin/bash

###############################################################################
# Sebastian - Instalador Automático para Linux/macOS
###############################################################################

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m'

REPO_URL="https://github.com/escort-inroad/Project-Sebas.git"
INSTALL_DIR="$HOME/Sebastian"

print_header() {
    echo -e "\n${BOLD}${BLUE}"
    echo "======================================================================"
    echo "  🤖 SEBASTIAN - Instalador Automático"
    echo "======================================================================"
    echo -e "${NC}\n"
}

check_python() {
    echo -e "${BLUE}📋 Verificando Python...${NC}"
    
    if command -v python3 &> /dev/null; then
        PYTHON_CMD="python3"
    elif command -v python &> /dev/null; then
        PYTHON_CMD="python"
    else
        echo -e "${RED}❌ Python não encontrado!${NC}"
        return 1
    fi
    
    VERSION=$($PYTHON_CMD --version 2>&1 | awk '{print $2}')
    echo -e "${GREEN}✅ Python ${VERSION}${NC}\n"
    return 0
}

clone_repository() {
    echo -e "${BLUE}📥 Baixando Sebastian...${NC}"
    
    if [ -d "$INSTALL_DIR" ]; then
        echo -e "${YELLOW}⚠️  Diretório $INSTALL_DIR já existe.${NC}\n"
        return 0
    fi
    
    if git clone "$REPO_URL" "$INSTALL_DIR" > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Sebastian baixado${NC}\n"
        return 0
    fi
    
    echo -e "${RED}❌ Erro ao clonar repositório${NC}\n"
    return 1
}

install_dependencies() {
    echo -e "${BLUE}📦 Instalando dependências...${NC}"
    
    if $PYTHON_CMD -m pip install -q -r "$INSTALL_DIR/requirements.txt" 2> /dev/null; then
        echo -e "${GREEN}✅ Dependências instaladas${NC}\n"
        return 0
    else
        echo -e "${YELLOW}⚠️  Erro ao instalar${NC}\n"
        return 1
    fi
}

setup_env() {
    echo -e "${BLUE}⚙️  Configurando .env...${NC}"
    
    ENV_FILE="$INSTALL_DIR/.env"
    ENV_EXAMPLE="$INSTALL_DIR/.env.example"
    
    if [ -f "$ENV_FILE" ]; then
        echo -e "${YELLOW}⚠️  .env já existe${NC}\n"
        return 0
    fi
    
    if [ -f "$ENV_EXAMPLE" ]; then
        cp "$ENV_EXAMPLE" "$ENV_FILE"
        sed -i "s|SEBASTIAN_ALLOWED_DIR=.*|SEBASTIAN_ALLOWED_DIR=$INSTALL_DIR|g" "$ENV_FILE"
    fi
    
    echo -e "${GREEN}✅ .env configurado${NC}\n"
    return 0
}

print_next_steps() {
    echo -e "\n${BOLD}${GREEN}"
    echo "======================================================================"
    echo "  ✅ INSTALAÇÃO CONCLUÍDA!"
    echo "======================================================================"
    echo -e "${NC}\n"
    
    echo -e "${BOLD}📍 Diretório: $INSTALL_DIR${NC}\n"
    
    echo -e "${BOLD}🚀 Para rodar:${NC}"
    echo -e "   ${BLUE}cd $INSTALL_DIR${NC}"
    echo -e "   ${BLUE}$PYTHON_CMD sebastian.py${NC}\n"
    
    echo -e "${BOLD}📚 Mais info:${NC}"
    echo -e "   ${BLUE}https://github.com/escort-inroad/Project-Sebas${NC}\n"
}

main() {
    print_header
    check_python || exit 1
    clone_repository || exit 1
    install_dependencies
    setup_env
    print_next_steps
}

main "$@"
