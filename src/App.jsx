import Header from './components/Header';
import Overview from './components/Overview';
import Modules from './components/Modules';
import ImplementationGuide from './components/ImplementationGuide';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Header />
      <main>
        <Overview />
        <Modules />
        <ImplementationGuide />
      </main>
      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} ShahidChat MVP Guide</p>
          <p>
            Built with Next.js patterns, Firebase services, and a pragmatic approach to ship fast.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
