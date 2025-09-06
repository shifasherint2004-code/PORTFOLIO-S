document.addEventListener("DOMContentLoaded", function () {
  (function () {
    emailjs.init("ndEx8vLyGBhcU_qoG"); // Your EmailJS public key
  })();

  function validateForm(params) {
    if (!params.name || !params.email || !params.subject || !params.message) {
      alert("⚠️ Please fill out all fields before submitting.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(params.email)) {
      alert("⚠️ Please enter a valid email address.");
      return false;
    }
    return true;
  }

  function sendMail() {
    console.log("📨 sendMail() triggered");

    var params = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      subject: document.getElementById("subject").value.trim(),
      message: document.getElementById("message").value.trim(),
    };

    if (!validateForm(params)) return;

    const serviceID = "service_qlux1yu";
    const templateID = "template_2a6ory8";

    emailjs.send(serviceID, templateID, params)
      .then((res) => {
        console.log("✅ Email sent:", res);
        alert("✅ Your message was sent successfully!");
        document.getElementById("contactForm").reset();
      })
      .catch((err) => {
        console.error("❌ Error:", err);
        alert("❌ Something went wrong. Please try again later.");
      });
  }

  // Attach listener safely
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    sendMail();
  });
});