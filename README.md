# 🐂 PecusNet Vision - Frontend

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=flat&logo=docker&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)

> **Monitoramento Inteligente de Biometria Bovina** > Dashboard analítico para visualização de dados de predição de peso, planejamento de abate e análise morfológica de rebanhos.

---

## 📸 Visão Geral

O **PecusNet Vision** é a interface de visualização do ecossistema PecusNet. Ele consome dados processados por modelos de Machine Learning (SVR/CatBoost) para entregar insights acionáveis ao pecuarista.

### ✨ Funcionalidades Principais
* **📊 Analytics em Tempo Real:** Visualização de KPIs como Total de Animais, Peso Médio e Receita Estimada.
* **🌓 Dark/Light Mode Automático:** Interface adaptativa que respeita a preferência do sistema ou controle manual, com ajuste inteligente de contraste nos gráficos.
* **📈 Gráficos Interativos:**
    * *Dispersão:* Correlação entre Biometria (Tórax) e Peso Real.
    * *Barras:* Previsão de maturação e ponto de abate.
    * *Radar:* Avaliação zootécnica e conformidade morfológica (comparativo com "Boi Ideal").
* **🐳 Dockerizado:** Ambiente de desenvolvimento e produção padronizado via containers.

---

## 🛠️ Tecnologias Utilizadas

* **Core:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Visualização de Dados:** [Chart.js](https://www.chartjs.org/) + [React-Chartjs-2](https://react-chartjs-2.js.org/)
* **Ícones:** [Lucide React](https://lucide.dev/)
* **Infraestrutura:** Docker & Nginx (Alpine Linux)

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
* [Docker](https://www.docker.com/) instalado.
* [Git](https://git-scm.com/) instalado.

### Passo a Passo (Modo Container - Recomendado)

Este projeto foi configurado para rodar isoladamente sem necessidade de instalar Node.js na sua máquina local.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/PECUS-ARGUS-AI/PECUS-FRONT.git
    cd PECUS-FRONT
    ```

2.  **Inicie a aplicação:**
    Utilize o plugin Compose V2 (recomendado):
    ```bash
    docker compose up --build
    ```
    *Se você usa uma versão antiga do Docker, use `docker-compose up --build`.*

3.  **Acesse o Dashboard:**
    Abra seu navegador e acesse:
    > **http://localhost:3002

---

## 📂 Estrutura de Pastas

```text
pecusnet-frontend/
├── 🐳 Dockerfile            # Configuração da imagem de produção/dev
├── 🐙 docker-compose.yml    # Orquestração do serviço
├── ⚙️ nginx.conf            # Servidor web para o build final
├── 📦 package.json          # Dependências do projeto
├── 🎨 tailwind.config.js    # Configuração de tema e cores PecusNet
├── ⚡ vite.config.js        # Configuração do bundler
└── 📁 src/
    ├── 📁 components/
    │   ├── Dashboard.jsx    # Componente Principal (Lógica dos Gráficos)
    │   └── MetricCard.jsx   # Cards de KPI Reutilizáveis
    ├── App.jsx              # Ponto de entrada da aplicação
    ├── main.jsx             # Renderização do React DOM
    └── index.css            # Importação do Tailwind
