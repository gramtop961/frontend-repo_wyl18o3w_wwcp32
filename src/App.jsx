import { useMemo, useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Composer from "./components/Composer";
import Feed from "./components/Feed";

const translations = {
  en: {
    title: "SpiceShare",
    feed: "Feed",
    compose: "Compose",
    profile: "Profile",
    placeholder: "Share a recipe, tip, or ingredient swap...",
    addPhoto: "Add photo",
    post: "Post",
    like: "Like",
    comment: "Comment",
    empty: "No posts yet. Be the first to share your favorite dish!",
  },
  hi: {
    title: "स्पाइसशेयर",
    feed: "फ़ीड",
    compose: "लिखें",
    profile: "प्रोफ़ाइल",
    placeholder: "कोई रेसिपी, टिप या सामग्री सुझाव साझा करें...",
    addPhoto: "फ़ोटो जोड़ें",
    post: "पोस्ट",
    like: "पसंद",
    comment: "टिप्पणी",
    empty: "अभी कोई पोस्ट नहीं है। अपनी पसंदीदा डिश साझा करें!",
  },
  kn: {
    title: "ಸ್ಪೈಸ್ ಶೇರ್",
    feed: "ಫೀಡ್",
    compose: "ಬರೆಯಿರಿ",
    profile: "ಪ್ರೊಫೈಲ್",
    placeholder: "ಒಂದು ರೆಸಿಪಿ, ಟಿಪ್ ಅಥವಾ ಪದಾರ್ಥ ಸಲಹೆ ಹಂಚಿಕೊಳ್ಳಿ...",
    addPhoto: "ಫೋಟೋ ಸೇರಿಸಿ",
    post: "ಪೋಸ್ಟ್",
    like: "ಇಷ್ಟ",
    comment: "ಕಾಮೆಂಟ್",
    empty: "ಇನ್ನೂ ಯಾವುದೇ ಪೋಸ್ಟ್ ಇಲ್ಲ. ನಿಮ್ಮ ಇಷ್ಟದ ಡಿಶ್ ಹಂಚಿಕೊಳ್ಳಿ!",
  },
};

export default function App() {
  const [lang, setLang] = useState("en");
  const [tab, setTab] = useState("feed");
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Asha",
      text:
        "Masala dosa batter ratio: 3 parts rice to 1 part urad dal. Ferment overnight for that perfect tang!",
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      author: "Rahul",
      text:
        "Quick paneer tikka: marinate in hung curd + tandoori masala + lemon, air-fry for 10 minutes.",
      createdAt: new Date().toISOString(),
    },
  ]);

  const t = useMemo(() => translations[lang], [lang]);

  const handlePost = (post) => {
    setPosts((prev) => [post, ...prev]);
    setTab("feed");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-rose-50">
      <Header title={t.title} currentLang={lang} onChangeLang={setLang} />

      <main className="max-w-2xl mx-auto px-4 pt-4 pb-24 grid gap-4">
        {tab === "compose" && (
          <Composer labels={t} onPost={handlePost} />
        )}
        {tab === "feed" && <Feed posts={posts} labels={t} />}
        {tab === "profile" && (
          <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-lime-500 mb-3" />
            <h2 className="text-xl font-semibold text-gray-800">Foodie</h2>
            <p className="text-gray-600 text-sm">{t.title} — multi-language recipe sharing made simple.</p>
          </section>
        )}
      </main>

      <Tabs current={tab} onChange={setTab} labels={t} />
    </div>
  );
}
