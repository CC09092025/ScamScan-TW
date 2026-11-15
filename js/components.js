import {
  Apple,
  BookOpen,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CircleExclamationPoint,
  createIcons,
  Gamepad2,
  Grid2x2,
  Info,
  Lightbulb,
  Mail,
  Menu,
  MessageSquareDot,
  Phone,
  QrCode,
  Search,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Terminal,
  ThumbsUp,
  TriangleExclamationPoint,
} from "lucide";

const lucideIcons = {
  Apple,
  BookOpen,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CircleExclamationPoint,
  Gamepad2,
  Grid2x2,
  Info,
  Lightbulb,
  Mail,
  Menu,
  MessageSquareDot,
  Phone,
  QrCode,
  Search,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Terminal,
  ThumbsUp,
  TriangleExclamationPoint,
};

async function loadComponent(selector, file) {
  const element = document.querySelector(selector);

  if (!element) return;

  const response = await fetch(file);

  if (!response.ok) {
    console.error(`Failed to load ${file}: ${response.status}`);
    return;
  }

  element.innerHTML = await response.text();

  // Initialize Lucide icons
  createIcons({ icons: lucideIcons });

  if (selector === "#header") {
    setActiveNavLink(element);
    document.dispatchEvent(new Event("headerLoaded"));
  }
}

function setActiveNavLink(headerElement) {
  const currentPath = window.location.pathname.replace(/\/index\.html$/, "/");
  const navLinks = headerElement.querySelectorAll("nav a, ul a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("/")) return;

    const linkPath = href.replace(/\/index\.html$/, "/");
    const isHome = linkPath === "/";
    const isActive = isHome
      ? currentPath === "/"
      : currentPath === linkPath || currentPath.startsWith(linkPath);

    if (isActive) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

loadComponent("#header", "/components/header.html");
loadComponent("#footer", "/components/footer.html");
