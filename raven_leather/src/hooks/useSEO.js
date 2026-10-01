import { useEffect } from "react";

const SITE_NAME = "Raven Leather";
const SITE_ORIGIN = "https://ravenleather.pl";

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(path) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", `${SITE_ORIGIN}${path}`);
}

export default function useSEO({ title, description, path }) {
  useEffect(() => {
    document.title = title ? `${title} – ${SITE_NAME}` : SITE_NAME;
    if (description) setMeta("description", description);
    if (path) setCanonical(path);
  }, [title, description, path]);
}
