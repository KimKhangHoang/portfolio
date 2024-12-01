// Update the footer year dynamically
document.getElementById("year").textContent = new Date().getFullYear();

// Handle mailto link click with fallback mechanism
document
  .getElementById("email-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mailtoURL = `mailto:kimkhanghoang@gmail.com`;

    try {
      window.location.href = mailtoURL;

      // Show confirmation after a delay
      setTimeout(() => {
        const proceed = confirm(
          "It seems your email client did not open. Would you like to use the contact form instead?"
        );
        if (proceed) {
          document
            .getElementById("four")
            .scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    } catch (error) {
      // Show confirmation if there's an error
      const proceed = confirm(
        "It seems your email client did not open. Would you like to use the contact form instead?"
      );
      if (proceed) {
        document.getElementById("four").scrollIntoView({ behavior: "smooth" });
      }
    }
  });
