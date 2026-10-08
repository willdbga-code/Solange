/**
 * Interatividade e Navegação Brutalista
 * Proposta Comercial: William Del Barrio para Solange do Feital
 * Contato: (12) 98813-0316
 */

// Alternar entre os painéis dos 2 Dias de Ensaio
function setStage(stageId) {
  const tabs = document.querySelectorAll('.stage-btn-b');
  tabs.forEach(tab => tab.classList.remove('active'));

  const panels = document.querySelectorAll('.stage-panel-wrap');
  panels.forEach(panel => panel.classList.remove('active'));

  if (stageId === 's1') {
    tabs[0].classList.add('active');
    const p1 = document.getElementById('panel-s1');
    if (p1) p1.classList.add('active');
  } else if (stageId === 's2') {
    tabs[1].classList.add('active');
    const p2 = document.getElementById('panel-s2');
    if (p2) p2.classList.add('active');
  }
}

// Simulador interativo de pagamento com WhatsApp do William Del Barrio
function choosePayment(optionIndex, element) {
  const boxes = document.querySelectorAll('.opt-box');
  boxes.forEach(box => box.classList.remove('active'));
  element.classList.add('active');

  const btn = document.getElementById('btn-whatsapp-william');
  let msg = '';

  if (optionIndex === 1) {
    msg = "Ol%C3%A1%20William!%20Recebi%20e%20analisei%20a%20proposta%20do%20ensaio%20estrat%C3%A9gico%20da%20Solange%20do%20Feital%20(10x%20de%20R$%2090,00%20sem%20juros).%20Gostaria%20de%20aprovar%20e%20agendar%20as%20datas!";
  } else if (optionIndex === 2) {
    msg = "Ol%C3%A1%20William!%20Desejo%20aprovar%20o%20ensaio%20estrat%C3%A9gico%20da%20Solange%20do%20Feital%20%C3%A0%20vista%20no%20PIX%20(R$%20900,00).%20Como%20procedemos%20com%20o%20agendamento?";
  } else {
    msg = "Ol%C3%A1%20William!%20Gostaria%20de%20aprovar%20o%20ensaio%20da%20Solange%20do%20Feital%20em%202x%20de%20R$%20450,00%20(sinal%20+%20entrega).%20Vamos%20alinhar%20as%20datas?";
  }

  if (btn) {
    btn.href = `https://wa.me/5512988130316?text=${msg}`;
  }
}

// Suporte a Smooth Scroll
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const el = document.querySelector(targetId);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
