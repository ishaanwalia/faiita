export const dynamic = "force-static";

export default function AdminPage() {
  const stats = [
    { label: "State Associations", value: 26, color: "bg-blue-500" },
    { label: "News Articles", value: 6, color: "bg-green-500" },
    { label: "Events", value: 5, color: "bg-purple-500" },
    { label: "Office Bearers", value: 4, color: "bg-orange-500" },
    { label: "GB Members", value: 26, color: "bg-red-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#1e3a5f] mb-8">FAIITA Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg shadow p-6">
              <div className={`h-2 w-12 rounded-full ${stat.color} mb-4`} />
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-[#1e3a5f] mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-3">
            <a href="/news" className="px-4 py-2 bg-[#1e3a5f] text-white rounded-md text-sm hover:bg-[#152d4a] transition-colors">
              Manage News
            </a>
            <a href="/events" className="px-4 py-2 bg-[#2d8a4e] text-white rounded-md text-sm hover:bg-[#236b3d] transition-colors">
              Manage Events
            </a>
            <a href="/state-associations" className="px-4 py-2 bg-gray-600 text-white rounded-md text-sm hover:bg-gray-700 transition-colors">
              View States
            </a>
            <a href="/about" className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700 transition-colors">
              View Leadership
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}