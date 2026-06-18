export function scrollToSection(href: string): void {
  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);

  if (element) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const offsetPosition = elementRect - bodyRect - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  if (href === "#contact") {
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("trigger-contact-flip"));
    }, 100);
  } else if (href === "#about") {
    window.dispatchEvent(new CustomEvent("trigger-about-reset"));
  }
}
