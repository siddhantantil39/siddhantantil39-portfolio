"use client";

import { useEffect, useRef } from "react";
import styles from "./BlogPostContent.module.css";

type BlogPostContentProps = {
  html: string;
};

const copyText = async (text: string) => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
};

export default function BlogPostContent({ html }: BlogPostContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;

    if (!content) return;

    const codeBlocks = Array.from(content.querySelectorAll<HTMLPreElement>("pre"));

    codeBlocks.forEach((block) => {
      if (block.querySelector("button")) return;

      const button = document.createElement("button");
      button.type = "button";
      button.className = styles.copyButton;
      button.textContent = "Copy";

      button.addEventListener("click", async () => {
        const code = block.querySelector("code")?.textContent ?? "";

        try {
          await copyText(code);
          button.textContent = "Copied";
        } catch {
          button.textContent = "Failed";
        }

        window.setTimeout(() => {
          button.textContent = "Copy";
        }, 1600);
      });

      block.appendChild(button);
    });
  }, [html]);

  return (
    <div
      ref={contentRef}
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
