import { Code2, Database, Server, Smartphone, Zap } from "lucide-react";

export default function ImplementationGuide() {
  return (
    <section id="guide" className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Smartphone className="h-5 w-5 text-indigo-600" />
              <h3 className="font-semibold text-slate-900">Navigation & Layout</h3>
            </div>
            <p className="text-slate-700 text-sm">
              Use a bottom tab bar: Feed, Chats, Add, Notifications, Profile. Keep a top AppBar for context.
              Ensure responsive behavior for web with adaptive layouts and bottom-sheet modals on mobile.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Server className="h-5 w-5 text-indigo-600" />
              <h3 className="font-semibold text-slate-900">Auth Flow (Firebase OTP)</h3>
            </div>
            <pre className="bg-slate-900 text-slate-50 text-xs p-4 rounded-xl overflow-auto"><code>{`// Firebase client setup
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const auth = getAuth(app);

export async function sendOtp(phone) {
  const verifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
    size: 'invisible',
  });
  const confirmation = await signInWithPhoneNumber(auth, phone, verifier);
  return confirmation; // call confirmation.confirm(code)
}`}</code></pre>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Database className="h-5 w-5 text-indigo-600" />
              <h3 className="font-semibold text-slate-900">Data Model (PostgreSQL + Firebase)</h3>
            </div>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>users(id, phone, display_name, photo_url, bio, created_at)</li>
              <li>chats(id, type, created_at)</li>
              <li>chat_members(chat_id, user_id, role)</li>
              <li>messages(id, chat_id, sender_id, type, content, media_url, created_at, read_by[])</li>
              <li>posts(id, author_id, caption, media_url, created_at)</li>
              <li>likes(id, post_id, user_id, created_at)</li>
              <li>comments(id, post_id, user_id, text, created_at)</li>
              <li>stories(id, author_id, media_url, expires_at)</li>
              <li>followers(follower_id, following_id, created_at)</li>
              <li>notifications(id, user_id, type, ref_id, payload, created_at, read)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="h-5 w-5 text-indigo-600" />
              <h3 className="font-semibold text-slate-900">Realtime Chat (Firebase Realtime DB)</h3>
            </div>
            <pre className="bg-slate-900 text-slate-50 text-xs p-4 rounded-xl overflow-auto"><code>{`import { getDatabase, ref, onChildAdded, push, set } from 'firebase/database';

const db = getDatabase(app);

export function subscribeMessages(chatId, cb) {
  const messagesRef = ref(db, 'chats/' + chatId + '/messages');
  return onChildAdded(messagesRef, (snap) => cb({ id: snap.key, ...snap.val() }));
}

export async function sendMessage(chatId, message) {
  const msgRef = push(ref(db, 'chats/' + chatId + '/messages'));
  await set(msgRef, { ...message, created_at: Date.now() });
}`}</code></pre>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h4 className="font-semibold text-slate-900 mb-2">Performance Tips</h4>
            <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
              <li>Image resizing and lazy loading for feeds and stories.</li>
              <li>Pagination and infinite scroll using cursor-based queries.</li>
              <li>Cache user profiles locally; debounce writes.</li>
              <li>Use optimistic UI for likes and read receipts.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h4 className="font-semibold text-slate-900 mb-2">Challenges</h4>
            <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
              <li>Coordinating Firebase realtime with relational data in Postgres.</li>
              <li>Ensuring OTP reliability and preventing abuse with reCAPTCHA.</li>
              <li>Media moderation, quotas, and storage lifecycle policies.</li>
              <li>Push notification delivery differences across platforms.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h4 className="font-semibold text-slate-900 mb-2">Deployment</h4>
            <p className="text-sm text-slate-700">
              Use CI to build and ship web and native targets. Configure environment variables for Firebase and Postgres.
              Validate Apple/Android push entitlements. Run smoke tests on auth, chat, and uploads before release.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
