#!/usr/bin/env python3
"""
Sebastian - Instalador Automático
Funciona em Windows, Linux e macOS
"""

import os
import sys
import subprocess
import platform
import shutil
from pathlib import Path


class Colors:
    """ANSI color codes para terminal"""
    GREEN = "\033[92m"
    BLUE = "\033[94m"
    YELLOW = "\033[93m"
    RED = "\033[91m"
    END = "\033[0m"
    BOLD = "\033[1m"


def print_header():
    """Exibe header do instalador"""
    print(f"\n{Colors.BOLD}{Colors.BLUE}")
    print("=" * 70)
    print("  🤖 SEBASTIAN - Instalador Automático")
    print("=" * 70)
    print(f"{Colors.END}\n")


def check_python():
    """Verifica versão do Python"""
    print(f"{Colors.BLUE}📋 Verificando Python...{Colors.END}")

    version = sys.version_info
    if version.major < 3 or (version.major == 3 and version.minor < 11):
        print(f"{Colors.RED}❌ Python 3.11+ é necessário. Você tem: {version.major}.{version.minor}{Colors.END}")
        return False

    print(f"{Colors.GREEN}✅ Python {version.major}.{version.minor}.{version.micro}{Colors.END}\n")
    return True


def check_git():
    """Verifica se Git está instalado"""
    print(f"{Colors.BLUE}📋 Verificando Git...{Colors.END}")

    if shutil.which("git") is None:
        print(f"{Colors.YELLOW}⚠️  Git não encontrado. Será feito download direto.{Colors.END}\n")
        return False

    print(f"{Colors.GREEN}✅ Git encontrado{Colors.END}\n")
    return True


def clone_repository(has_git):
    """Clona ou baixa o repositório"""
    print(f"{Colors.BLUE}📥 Baixando Sebastian...{Colors.END}")

    repo_url = "https://github.com/escort-inroad/Project-Sebas.git"
    install_dir = Path.home() / "Sebastian"

    # Se já existe, pular
    if install_dir.exists():
        print(f"{Colors.YELLOW}⚠️  Diretório {install_dir} já existe.{Colors.END}\n")
        return install_dir

    try:
        if has_git:
            subprocess.run(
                ["git", "clone", repo_url, str(install_dir)],
                check=True,
                capture_output=True
            )
        else:
            # Download via HTTP
            import urllib.request
            import zipfile
            import tempfile

            zip_url = f"{repo_url.replace('.git', '')}/archive/refs/heads/main.zip"

            with tempfile.TemporaryDirectory() as tmpdir:
                zip_path = Path(tmpdir) / "sebastian.zip"
                print(f"{Colors.BLUE}  Baixando {zip_url}...{Colors.END}")
                urllib.request.urlretrieve(zip_url, zip_path)

                with zipfile.ZipFile(zip_path, 'r') as zip_ref:
                    zip_ref.extractall(tmpdir)

                # Move para o destino
                extracted = Path(tmpdir) / "Project-Sebas-main"
                install_dir.mkdir(parents=True, exist_ok=True)
                shutil.copytree(str(extracted), str(install_dir), dirs_exist_ok=True)

        print(f"{Colors.GREEN}✅ Sebastian baixado em: {install_dir}{Colors.END}\n")
        return install_dir

    except Exception as e:
        print(f"{Colors.RED}❌ Erro ao baixar: {e}{Colors.END}\n")
        return None


def install_dependencies(project_dir):
    """Instala dependências Python"""
    print(f"{Colors.BLUE}📦 Instalando dependências...{Colors.END}")

    try:
        subprocess.run(
            [sys.executable, "-m", "pip", "install", "-r", "requirements.txt"],
            cwd=project_dir,
            check=True,
            capture_output=True
        )
        print(f"{Colors.GREEN}✅ Dependências instaladas{Colors.END}\n")
        return True
    except Exception as e:
        print(f"{Colors.RED}❌ Erro ao instalar dependências: {e}{Colors.END}\n")
        return False


def setup_env(project_dir):
    """Configura arquivo .env"""
    print(f"{Colors.BLUE}⚙️  Configurando .env...{Colors.END}")

    env_file = project_dir / ".env"
    env_example = project_dir / ".env.example"

    if env_file.exists():
        print(f"{Colors.YELLOW}⚠️  .env já existe, pulando configuração{Colors.END}\n")
        return True

    try:
        if env_example.exists():
            shutil.copy(env_example, env_file)

        # Lê o conteúdo e atualiza
        env_content = env_file.read_text()

        # Atualiza configurações padrão
        env_content = env_content.replace(
            "SEBASTIAN_ALLOWED_DIR=",
            f"SEBASTIAN_ALLOWED_DIR={project_dir}"
        )

        env_file.write_text(env_content)
        print(f"{Colors.GREEN}✅ .env configurado{Colors.END}\n")
        return True

    except Exception as e:
        print(f"{Colors.RED}❌ Erro ao configurar .env: {e}{Colors.END}\n")
        return False


def print_next_steps(project_dir):
    """Mostra próximos passos"""
    print(f"\n{Colors.BOLD}{Colors.GREEN}")
    print("=" * 70)
    print("  ✅ INSTALAÇÃO CONCLUÍDA!")
    print("=" * 70)
    print(f"{Colors.END}\n")

    print(f"{Colors.BOLD}📍 Diretório de instalação:{Colors.END}")
    print(f"   {project_dir}\n")

    print(f"{Colors.BOLD}🚀 Próximos passos:{Colors.END}")
    print(f"\n1. Configure as APIs (se necessário):")
    print(f"   {Colors.BLUE}Edite: {project_dir}/.env{Colors.END}")
    print(f"   - TAVILY_API_KEY (para web search)")
    print(f"   - ANTHROPIC_API_KEY (para modo cloud)")
    print(f"   - OLLAMA_HOST (se usar Ollama local)")

    print(f"\n2. Execute Sebastian:")

    if platform.system() == "Windows":
        print(f"   {Colors.BLUE}cd {project_dir}{Colors.END}")
        print(f"   {Colors.BLUE}python sebastian.py{Colors.END}")
    else:
        print(f"   {Colors.BLUE}cd {project_dir}{Colors.END}")
        print(f"   {Colors.BLUE}python3 sebastian.py{Colors.END}")

    print(f"\n3. Digite em linguagem natural:")
    print(f"   {Colors.YELLOW}Você: o que tem na pasta de projetos?{Colors.END}")
    print(f"   {Colors.YELLOW}Você: procura 'TODO' nos arquivos{Colors.END}")

    print(f"\n{Colors.BOLD}📚 Mais informações:{Colors.END}")
    print(f"   {Colors.BLUE}https://github.com/escort-inroad/Project-Sebas{Colors.END}")
    print(f"   {Colors.BLUE}https://github.com/Kelwin-promax/Sebastian-sWebsite{Colors.END}\n")

    print(f"{Colors.BOLD}💡 Dicas:{Colors.END}")
    print(f"   - Digite 'sair' para encerrar")
    print(f"   - Instale Ollama para usar localmente (https://ollama.com)")
    print(f"   - Use --setup para reconfigurable a instalação\n")


def main():
    """Função principal"""
    print_header()

    # Verificações
    if not check_python():
        sys.exit(1)

    has_git = check_git()

    # Clone do repositório
    project_dir = clone_repository(has_git)
    if not project_dir:
        sys.exit(1)

    # Instala dependências
    if not install_dependencies(project_dir):
        print(f"{Colors.YELLOW}⚠️  Continue mesmo assim? (S/n){Colors.END}")
        if input().lower() not in ["", "s", "sim"]:
            sys.exit(1)

    # Configura .env
    setup_env(project_dir)

    # Mostra próximos passos
    print_next_steps(project_dir)

    # Pergunta se quer rodar agora
    print(f"{Colors.BOLD}Deseja rodar Sebastian agora? (S/n){Colors.END}")
    if input().lower() in ["", "s", "sim"]:
        try:
            if platform.system() == "Windows":
                subprocess.run([sys.executable, str(project_dir / "sebastian.py")])
            else:
                subprocess.run([sys.executable, str(project_dir / "sebastian.py")])
        except KeyboardInterrupt:
            print(f"\n{Colors.YELLOW}Até mais!{Colors.END}\n")
        except Exception as e:
            print(f"{Colors.RED}Erro ao executar: {e}{Colors.END}\n")


if __name__ == "__main__":
    main()
