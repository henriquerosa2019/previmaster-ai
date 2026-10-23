# ⚖️ PreviMaster AI - Software de Planejamento Previdenciário Computadorizado

> **A plataforma de inteligência atuarial e planejamento previdenciário para advogados, contadores e planejadores financeiros.**  
> Foco absoluto na **Matriz de Combinação de Descartes da EC 103/2019 (Art. 26, § 6º)** e auditoria automatizada do CNIS (Meu INSS).

---

## 🚀 Principais Funcionalidades (Padrão CJ & Previdenciarista)

1. **Matriz Combinatória de Descartes (EC 103/2019):**  
   Testa simultaneamente centenas de combinações de exclusão de meses inferiores (como MEI e salários mínimos) e encontra com precisão atuarial o **Ponto Ótimo Global** para maximizar a RMI.

2. **Auditoria com IA de Indicadores do CNIS (Padrão IntelPrev):**  
   Identifica automaticamente pendências críticas: `PRPPS` (regime público sem CTC), `PSC-MEN-SM-EC103` (salário abaixo do mínimo com valor exato de complementação), `IREC-LC123`/`IREC-MEI` (5% ou 11%), `IREC-INDPEND` e concomitâncias com teto.

3. **Simulador em Lote de Todas as Regras de Aposentadoria:**  
   Calcula requisitos de idade, tempo e carência da Aposentadoria por Idade Urbana (65 anos) e de todas as regras de transição da EC 103/2019 (Pedágio 100%, Pedágio 50%, Pontos e Idade Mínima Progressiva).

4. **Estudo de Viabilidade Financeira do MEI (ROI & Payback):**  
   Comprova matematicamente se vale a pena complementar as guias do MEI (DARF 1910) ou se a estratégia mais lucrativa é o descarte, evitando desperdício financeiro de milhares de reais em tributos.

5. **Dossiê Jurídico & Modelo de Petição Administrativa:**  
   Roteiro passo a passo com fundamentação na IN 128/2022 e texto pronto para copiar e colar na petição de aposentadoria ao INSS.

6. **Parecer Técnico em PDF:**  
   Emissão com um clique de relatório formatado para entrega direta ao cliente ou juntada nos autos do processo.

---

## 🌐 Como Publicar no Vercel

### Opção 1: Via GitHub (Recomendada)
1. Crie um novo repositório no seu GitHub (ex: `previmaster-ai`).
2. Faça o push dos arquivos desta pasta:
   ```bash
   git init
   git add .
   git commit -m "feat: Initial commit of PreviMaster AI SaaS"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/previmaster-ai.git
   git push -u origin main
   ```
3. Acesse [vercel.com/new](https://vercel.com/new), selecione o repositório `previmaster-ai` e clique em **Deploy**.
4. Em menos de 1 minuto, seu software estará no ar com domínio seguro (ex: `https://previmaster-ai.vercel.app`)!

### Opção 2: Via Vercel CLI
1. Abra o terminal nesta pasta (`previmaster-app`).
2. Execute:
   ```bash
   npx vercel
   ```
3. Siga as instruções na tela para fazer login e publicar instantaneamente!

---

## 💼 Modelo de Monetização (Como Vender)
- **Plano Avulso:** R$ 49,90 por análise de CNIS.
- **Plano Escritório:** R$ 97,00/mês para análises ilimitadas.
- **Plano Pro:** R$ 197,00/mês com inteligência artificial completa e consultoria.
