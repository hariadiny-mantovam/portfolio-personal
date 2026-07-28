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
});