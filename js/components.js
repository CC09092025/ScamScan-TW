import {
  createIcons,
  Mail,
  Phone,
  Smartphone,
  CircleExclamationPoint,
  ChartNoAxesCombined,
  BookOpen,
  Info,
  Gamepad2,
  ShieldCheck,
  ShoppingCart,
  MessageSquareDot,
  Shield,
  Menu,
  Search,
  BriefcaseBusiness,
  QrCode,
} from "lucide";

const lucideIcons = {
  Mail,
  Gamepad2,
  BookOpen,
  Phone,
  Smartphone,
  ShieldCheck,
  CircleExclamationPoint,
  ChartNoAxesCombined,
  ShoppingCart,
  MessageSquareDot,
  Shield,
  Menu,
  Info,
  Search,
  BriefcaseBusiness,
  QrCode,
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
    document.dispatchEvent(new Event("headerLoaded"));
  }
}

loadComponent("#header", "/components/header.html");
loadComponent("#footer", "/components/footer.html");
