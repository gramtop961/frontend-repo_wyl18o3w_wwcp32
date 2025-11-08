import { useState } from "react";
import { Image, Send } from "lucide-react";

export default function Composer({ labels, onPost }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onPost({ id: Date.now(), text: trimmed, createdAt: new Date().toISOString(), author: "You" });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="border border-gray-200 rounded-xl p-3 bg-white shadow-sm">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={labels.placeholder}
        className="w-full resize-none h-24 outline-none text-gray-800 placeholder:text-gray-400"
      />
      <div className="flex items-center justify-between pt-2">
        <button type="button" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
          <Image className="w-4 h-4" /> {labels.addPhoto}
        </button>
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-md text-sm font-medium"
        >
          <Send className="w-4 h-4" /> {labels.post}
        </button>
      </div>
    </form>
  );
}
