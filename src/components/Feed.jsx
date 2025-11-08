import { MessageCircle, Heart } from "lucide-react";

function PostCard({ post, labels }) {
  return (
    <article className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      <header className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
          <div>
            <p className="text-sm font-medium text-gray-900">{post.author}</p>
            <p className="text-xs text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
          </div>
        </div>
      </header>
      <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">{post.text}</p>
      <footer className="mt-3 flex items-center gap-4 text-sm text-gray-600">
        <button className="inline-flex items-center gap-1 hover:text-gray-900">
          <Heart className="w-4 h-4" /> {labels.like}
        </button>
        <button className="inline-flex items-center gap-1 hover:text-gray-900">
          <MessageCircle className="w-4 h-4" /> {labels.comment}
        </button>
      </footer>
    </article>
  );
}

export default function Feed({ posts, labels }) {
  if (!posts.length) {
    return (
      <div className="text-center text-gray-500 py-12">{labels.empty}</div>
    );
  }
  return (
    <div className="grid gap-4">
      {posts.map((p) => (
        <PostCard key={p.id} post={p} labels={labels} />
      ))}
    </div>
  );
}
