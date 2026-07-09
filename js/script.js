/* =========================================================
   MUÑECO DE AÑO VIEJO — Kit ritual de fin de año
   Interacción: voltear las tres cartas (deseo / dejar ir / agradecer)
   ========================================================= */

document.querySelectorAll('.flip-card').forEach(card => {
  // Alterna la clase que dispara la rotación 3D vía CSS (.is-flipped)
  const toggle = () => {
    card.classList.toggle('is-flipped');

    // FIX: se agrega aria-pressed para que lectores de pantalla anuncien
    // si la carta está "leída" (volteada) o no. El original tenía
    // role="button" pero nunca comunicaba el estado, lo cual es
    // inconsistente con el patrón ARIA de un botón de alternancia (toggle).
    const isFlipped = card.classList.contains('is-flipped');
    card.setAttribute('aria-pressed', String(isFlipped));
  };

  card.addEventListener('click', toggle);

  // Soporte de teclado: Enter y Space activan la carta igual que un botón real
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // evita que Space haga scroll de la página
      toggle();
    }
  });
});
