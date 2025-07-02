// app/notes/page.jsx

export const dynamic = "force-dynamic"; // ⛔ disable caching for API fetch

async function getNotes() {
  const res = await fetch(`http://localhost:3000/api/notes`);
  if (!res.ok) throw new Error("Failed to fetch notes");
  return res.json();
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">📝 All Notes</h1>
      <ul className="space-y-4">
        {notes.map((note) => (
          <li
            key={note._id}
            className="border p-4 rounded bg-white shadow hover:bg-gray-50 transition"
          >
            <p className="text-gray-800">{note.paragraph}</p>
            <span className="text-xs text-gray-400">
              {new Date(note.createdAt).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
