export default function FeaturesSection() {
  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-600 mb-12 max-w-4xl">
          Legora streamlines everything from research to drafting and billing—so lawyers spend less time managing process, and more time delivering value.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Teal Card */}
          <div className="bg-teal-100 rounded-xl p-8 h-80 flex flex-col">
            <div className="flex-1 space-y-6">
              <div className="w-10 h-10 bg-teal-600 rounded-full"></div>
              <p className="text-sm text-teal-800 leading-relaxed">
                Document automation and template management for consistent legal workflows
              </p>
            </div>
          </div>

          {/* Blue Card */}
          <div className="bg-blue-100 rounded-xl p-8 h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <p className="text-sm text-blue-800">
                Client portal and case management
              </p>
            </div>
          </div>

          {/* White Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 h-80">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm text-gray-600 mb-3">Recent activity</h3>
                <div className="space-y-2">
                  <div className="text-xs text-gray-400">Case filing completed</div>
                  <div className="text-xs text-gray-400">Document review scheduled</div>
                  <div className="text-xs text-gray-400">Client meeting today</div>
                </div>
              </div>
              <div className="pt-6">
                <h3 className="text-sm text-gray-600 mb-3">Quick actions</h3>
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}