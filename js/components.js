async function loadComponent(selector, file) {
  const element = document.querySelector(selector);

  if (!element) return;

  const response = await fetch(file);

  if (!response.ok) {
    console.error(`Failed to load ${file}: ${response.status}`);
    return;
  }

  element.innerHTML = await response.text();

  if (selector === "#header") {
    document.dispatchEvent(new Event("headerLoaded"));
  }
}

loadComponent("#header", "/components/header.html");
loadComponent("#footer", "/components/footer.html");
