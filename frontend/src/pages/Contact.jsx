import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  // helper til at encode form-data som Netlify forventer
  const encode = (data) =>
    new URLSearchParams(data).toString();

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          "bot-field": form["bot-field"]?.value || "",
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        }),
      });
      navigate("/success"); // SPA-route (vores React-side)
    } catch (err) {
      alert("Noget gik galt. Prøv igen senere.");
      console.error(err);
    }
  }

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Kontakt</h1>
      <p className="text-neutral-700 mb-6">
        Skriv en besked herunder – den sendes via Netlify Forms.
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="grid gap-4 border rounded-xl p-4 bg-white dark:bg-neutral-900"
      >
        {/* krævet for Netlify Forms */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <label className="grid gap-1">
          <span className="text-sm text-neutral-600 dark:text-neutral-300">Navn</span>
          <input
            type="text"
            name="name"
            required
            className="px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-sm text-neutral-600 dark:text-neutral-300">Email</span>
          <input
            type="email"
            name="email"
            required
            className="px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-sm text-neutral-600 dark:text-neutral-300">Besked</span>
          <textarea
            name="message"
            rows="5"
            required
            className="px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800"
          />
        </label>

        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </section>
  );
}
