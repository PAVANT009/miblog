"use client";
import { useState } from "react";
import { useSubmitNote } from "../hooks/useSubmitNote";

export default function NoteForm() {
  const [text, setText] = useState("");
  const { submitNote, loading, error } = useSubmitNote();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await submitNote(text);
    if (res?.insertedId) {
      alert("Note submitted!");
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        className="w-full p-2 border rounded"
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your paragraph here..."
      />
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Note"}
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
}
