function SupportPage() {
  return (
    <div className="p-14 max-h-full">
      <h2 className="text-xl pb-5">
        My Support Tickets
      </h2>

      <div className="bg-white border-gray-500 border-2 shadow p-6 overflow-scroll">
        <h3 className="text-xl mb-6">Choose Department</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card Component */}
          {[
            {
              title: "General Support",
              description:
                "Got a quick question or a general query? Our General Support team is ready to assist you. Submit your issue with any short queries you may have. Your satisfaction is our priority.",
              status: "Online",
              statusColor: "text-green-600",
              time: "Sun - Sat, Available all",
              email: "enquiry@ocsgroup.com",
            },
            {
              title: "Sales & Billing Support",
              description:
                "Need assistance with sale & billing related queries? Our Sales & Billing team is here to help. Lodge issue an we’ll provide the information you need to make decision about our service. Your satisfaction is our goal.",
              status: "Offline",
              statusColor: "text-red-500",
              time: "Sun - Sat, 10:30 AM to 06:00 PM",
              email: "sales@ocsgroup.com",
            },
            {
              title: "Technical Support",
              description:
                "When technical issues arise, our Technical Support Department steps in. We’re 24/7 to ensure your service runs smoothly and securely.",
              status: "Online",
              statusColor: "text-green-600",
              time: "Sun - Sat, Available all",
              email: "support@ocsgroup.com",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden flex flex-col justify-between "
            >
              {/* Heading */}
              <div className="bg-primary text-white text-center py-2 font-bold text-lg">
                {card.title}
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <p className="text-gray-700 mb-4 flex-20 pb-20 text-center px-10 pt-10">{card.description}</p>
                {/* Push button to bottom */}
                <div className="mt-auto w-full flex justify-center  pb-20">
                  <button className="bg-primary text-white px-4 py-2 rounded-full">
                    Lodge Issue
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t px-4 py-3 text-sm text-gray-600 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className={`${card.statusColor} font-semibold`}>
                    {card.status}
                  </span>
                  <span>{card.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SupportPage;
