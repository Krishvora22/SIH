import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Phone } from "lucide-react";
import { getAuthToken } from "@/lib/api";

interface Patient {
  id: string;
  fullName: string;
  phone: string;
  user: { email: string };
}

const DoctorPanel = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = getAuthToken();
        const res = await fetch("/api/patients", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to fetch patients");
        const data = await res.json();
        setPatients(data.patients || []);
      } catch (e: any) {
        setError(e.message || "Error loading patients");
      } finally {
        setLoading(false);
      }
    };
    fetchPatients();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-4">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Doctor Panel</h1>
        <Button onClick={() => navigate("/home")}>Home</Button>
      </header>
      <main>
        {loading ? (
          <p>Loading patients...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patients.map((patient) => (
              <Card key={patient.id} className="cursor-pointer hover:shadow-lg" onClick={() => setSelectedPatient(patient)}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-orange-500" />
                    <span>{patient.fullName}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Phone: {patient.phone}</p>
                  <p className="text-gray-700">Email: {patient.user.email}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        {/* Patient Details Modal */}
        {selectedPatient && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-lg relative">
              <button className="absolute top-2 right-2 text-gray-500" onClick={() => setSelectedPatient(null)}>&times;</button>
              <h2 className="text-xl font-bold mb-4">Patient Details</h2>
              <p><strong>Name:</strong> {selectedPatient.fullName}</p>
              <p><strong>Phone:</strong> {selectedPatient.phone}</p>
              <p><strong>Email:</strong> {selectedPatient.user.email}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DoctorPanel;
