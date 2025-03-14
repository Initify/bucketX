import Window from './components/window/page';
import Sidebar from './components/sidebar/page';
export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-gray-900">
      <Sidebar />
      <Window />
    </div>
  );
}
