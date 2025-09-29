import { useEffect, useState } from "react";
import { getAuthToken } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Consultation {
  id: string;
  scheduledTime: string;
  status: string;
  notes?: string;
  prescription?: string;
  patient: {
    fullName: string;
    phone: string;
    user: { email: string };
  };
}

const TelemedicineQueue = () => {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedConsult, setSelectedConsult] = useState<Consultation | null>(null);

  useEffect(() => {
    const fetchQueue = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = getAuthToken();
        const res = await fetch("/api/consultations", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to fetch queue");
        const data = await res.json();
        setConsultations(data.consultations || []);
      } catch (e: any) {
        setError(e.message || "Error loading queue");
      } finally {
        setLoading(false);
      }
    };
    fetchQueue();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-4">
      <h1 className="text-2xl font-bold mb-6">Telemedicine Queue</h1>
      {loading ? (
        <p>Loading queue...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : consultations.length === 0 ? (
        <p>No scheduled consultations.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {consultations.map((c) => (
            <Card key={c.id} className="cursor-pointer hover:shadow-lg" onClick={() => setSelectedConsult(c)}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>{c.patient.fullName}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Phone: {c.patient.phone}</p>
                <p className="text-gray-700">Email: {c.patient.user.email}</p>
                <p className="text-gray-700">Scheduled: {new Date(c.scheduledTime).toLocaleString()}</p>
                <p className="text-gray-700">Status: {c.status}</p>
                <Button className="mt-2" onClick={e => { e.stopPropagation(); setSelectedConsult(c); }}>Join Consultation</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      {/* Virtual Consultation Room Modal */}
      {selectedConsult && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-lg relative">
            <button className="absolute top-2 right-2 text-gray-500" onClick={() => setSelectedConsult(null)}>&times;</button>
            <h2 className="text-xl font-bold mb-4">Virtual Consultation Room</h2>
            <div className="mb-2"><strong>Patient:</strong> {selectedConsult.patient.fullName}</div>
            <div className="mb-2"><strong>Phone:</strong> {selectedConsult.patient.phone}</div>
            <div className="mb-2"><strong>Email:</strong> {selectedConsult.patient.user.email}</div>
            <div className="mb-2"><strong>Scheduled:</strong> {new Date(selectedConsult.scheduledTime).toLocaleString()}</div>
            <div className="mb-2"><strong>Status:</strong> {selectedConsult.status}</div>
            {/* Placeholder for video call */}
            <div className="mb-4 bg-gray-100 rounded p-4 text-center">[Video Call Placeholder]</div>
            <div className="mb-2"><strong>Notes:</strong> {selectedConsult.notes || '-'}</div>
            <div className="mb-2"><strong>Prescription:</strong> {selectedConsult.prescription || '-'}</div>
            {/* Add form for notes/prescription here if needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default TelemedicineQueue;
