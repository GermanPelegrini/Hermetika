import { useEffect, useState } from "react";
import { appConfig } from "@hermetika/config";
import type { BootstrapSummary } from "@hermetika/types";

const fallbackApiUrl = "http://localhost:4000";
const apiUrl = import.meta.env.VITE_API_URL ?? fallbackApiUrl;

export default function App() {
  const [bootstrap, setBootstrap] = useState<BootstrapSummary | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${apiUrl}/api/bootstrap`, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Unexpected API status ${response.status}`);
        }

        return (await response.json()) as BootstrapSummary;
      })
      .then((data) => setBootstrap(data))
      .catch((reason: unknown) => {
        if ((reason as Error).name === "AbortError") {
          return;
        }

        setError("The local API is not reachable yet. Start it with npm run dev:api.");
      });

    return () => controller.abort();
  }, []);

  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">Hermetika development workspace</p>
        <h1>{appConfig.name}</h1>
        <p className="tagline">{appConfig.tagline}</p>
      </section>

      <section className="panel-grid">
        <article className="card">
          <h2>Business dashboard</h2>
          <p>
            Local panel scaffold for affiliated businesses to register purchases,
            configure loyalty programs, and review customer progress.
          </p>
          <ul>
            {appConfig.webNavigation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h2>Bootstrap status</h2>
          {bootstrap ? (
            <ul>
              <li>App: {bootstrap.appName}</li>
              <li>Roles: {bootstrap.roles.join(", ")}</li>
              <li>Purchase methods: {bootstrap.purchaseMethods.join(", ")}</li>
              <li>Modules: {bootstrap.modules.join(", ")}</li>
            </ul>
          ) : (
            <p>{error ?? "Waiting for local API bootstrap payload..."}</p>
          )}
        </article>

        <article className="card">
          <h2>Core business rules</h2>
          <ul>
            {appConfig.businessRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
