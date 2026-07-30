document.addEventListener("DOMContentLoaded", () => {
  // Inicialização dos Ícones Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Atualização dinâmica do ano no rodapé
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // LÓGICA DO SIMULADOR TRIBUTÁRIO (SIMULADOR.HTML)
  const simForm = document.getElementById("tax-simulator-form");
  if (simForm) {
    simForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const revenue = parseFloat(document.getElementById("monthly-revenue").value);
      const model = document.getElementById("business-model").value;

      let currentRate = 0.06; // 6% padrão inicial do Simples Anexo III com Fator R
      if (model === "presumido") {
        currentRate = 0.145; // Média de ~14.5%
      } else if (model === "hospitalar") {
        currentRate = 0.092; // Média de ~9.2%
      }

      // Alíquota do IVA da reforma (estimada em ~26.5% com 60% de desconto na Saúde = ~10.6%)
      const futureRate = 0.106;

      const currentTax = revenue * currentRate;
      const futureTax = revenue * futureRate;
      const diffPercent = (((futureTax - currentTax) / currentTax) * 100).toFixed(1);

      // Exibição dos dados
      document.getElementById("res-current").textContent = currentTax.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
      document.getElementById("res-future").textContent = futureTax.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

      const diffElement = document.getElementById("res-diff");
      if (futureTax > currentTax) {
        diffElement.textContent = `+${diffPercent}% de variação estimada`;
        diffElement.style.color = "#d9534f";
      } else {
        diffElement.textContent = `${diffPercent}% de variação estimada`;
        diffElement.style.color = "#5cb85c";
      }

      document.getElementById("sim-result").style.display = "block";

      // MONTAGEM DO LINK DO WHATSAPP COM OS DADOS DIGITADOS DA SIMULAÇÃO
      const phone = "5544999709549";
      const text = encodeURIComponent(`Olá, Hari! Fiz a simulação de imposto no site. Faturamento mensal: ${revenue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}. Gostaria de agendar uma consultoria.`);

      const whatsappBtn = document.getElementById("btn-whatsapp-deep");
      if (whatsappBtn) {
        whatsappBtn.href = `https://wa.me/${phone}?text=${text}`;
      }
    });
  }
});