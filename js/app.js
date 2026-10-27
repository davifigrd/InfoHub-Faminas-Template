/**
 * Aplicação Principal - Página Setorial FAMINAS
 * Extensão Universitária • Engenharia de Software • ADS
 */

import { initModalController } from './modal-controller.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa o gerenciador de modais institucionais (Sobre, Termos, Privacidade)
  initModalController();

  // Botão "Copiar WhatsApp do Suporte"
  const btnCopiarWhatsapp = document.getElementById('btn-copiar-whatsapp');
  const textoCopiarWhatsapp = document.getElementById('texto-copiar-whatsapp');
  const whatsappNumero = '+55 32 3729-7501';

  if (btnCopiarWhatsapp) {
    btnCopiarWhatsapp.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(whatsappNumero);
        } else {
          const textarea = document.createElement('textarea');
          textarea.value = whatsappNumero;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }

        if (textoCopiarWhatsapp) {
          const textoOriginal = textoCopiarWhatsapp.textContent;
          textoCopiarWhatsapp.textContent = '✓ Copiado!';
          btnCopiarWhatsapp.setAttribute('aria-label', 'Número do WhatsApp copiado');

          setTimeout(() => {
            textoCopiarWhatsapp.textContent = textoOriginal;
            btnCopiarWhatsapp.setAttribute('aria-label', 'Copiar número do WhatsApp do suporte');
          }, 2000);
        }
      } catch (error) {
        console.error('[InfoHub Setorial] Erro ao copiar WhatsApp:', error);
      }
    });
  }

  console.log('[InfoHub Setorial] Página de Recuperação de Acesso Institucional inicializada com sucesso.');
});
