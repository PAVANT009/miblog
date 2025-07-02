"use client";
import { useState } from "react";

export function useSubmitNote() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitNote = async (paragraph, from, toArray) => {
    setLoading(true);
    setError(null);
  
    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paragraph, from, to: toArray }),
      });
  
      if (!res.ok) throw new Error("Failed to save note");
  
      const emailRes = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paragraph, from, to: toArray }),
      });
  
      if (!emailRes.ok) throw new Error("Failed to send email");
  
      return await res.json();
    } catch (err) {
      setError(err.message || "Something went wrong");
      return null;
    } finally {
      setLoading(false);
    }
  }
  

  return { submitNote, loading, error };
}
