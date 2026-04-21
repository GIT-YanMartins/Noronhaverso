const resetId = 'global-reset-style';

if (typeof document !== 'undefined' && !document.getElementById(resetId)) {
  const style = document.createElement('style');
  style.id = resetId;
  style.textContent = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  `;
  document.head.appendChild(style);
}