// Utility function to scroll to an element with offset for fixed header
export const scrollToElement = (selector: string) => {
  const element = document.querySelector(selector);
  if (element) {
    const offset = 80; // Approximate height of the header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Function to scroll to top of page with offset
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};