import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  Star, 
  MapPin, 
  Clock,
  Search,
  Filter,
  User,
  Stethoscope
} from "lucide-react";
import { getDoctors } from "@/lib/api";

const DoctorsList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("all");
  const [doctors, setDoctors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [specializations, setSpecializations] = useState<string[]>(["all"]);

  useEffect(() => {
    setLoading(true);
    getDoctors()
      .then(res => {
        setDoctors(res.doctors);
        // Collect unique specializations from doctor categories
        const specs = new Set<string>();
        res.doctors.forEach((doc: any) => {
          if (doc.categories && doc.categories.length > 0) {
            doc.categories.forEach((cat: any) => specs.add(cat.category.name));
          }
        });
        setSpecializations(["all", ...Array.from(specs)]);
        setLoading(false);
      })
      .catch(e => {
        setError(e.message || "Failed to load doctors");
        setLoading(false);
      });
  }, []);

  const [selectedDoctor, setSelectedDoctor] = useState<any | null>(null);

  const filteredDoctors = doctors.filter((doctor: any) => {
    const name = doctor.fullName || doctor.name || "";
    const specialization = doctor.categories && doctor.categories.length > 0
      ? doctor.categories.map((cat: any) => cat.category.name).join(", ")
      : "";
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization = selectedSpecialization === "all" ||
      (doctor.categories && doctor.categories.some((cat: any) => cat.category.name === selectedSpecialization));
    return matchesSearch && matchesSpecialization;
  });

  const handleCallDoctor = (doctor: any) => {
    // In a real app, this would initiate a call
    console.log(`Calling ${doctor.name} at ${doctor.phone}`);
    // Simulate call initiation
    alert(`Calling ${doctor.name}...`);
  };

  const handleMessageDoctor = (doctor: any) => {
    // In a real app, this would open a chat interface
    console.log(`Messaging ${doctor.name}`);
    alert(`Opening chat with ${doctor.name}...`);
  };

  // Placeholder for availability (backend can be extended to provide this)
  const getAvailabilityColor = (availability: string) => {
    if (!availability) return "text-gray-500";
    if (availability.includes("Available Now")) return "text-green-500";
    if (availability.includes("Available in")) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => navigate('/home')} 
              variant="outline" 
              size="icon"
              className="bg-white border-gray-300 hover:bg-gray-50"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Available Doctors</h1>
              <p className="text-sm text-gray-600">Find and connect with healthcare professionals</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        {/* Search and Filter */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search doctors by name or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 rounded-xl"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-3 py-2"
              >
                {specializations.map(spec => (
                  <option key={spec} value={spec}>
                    {spec === "all" ? "All Specializations" : spec}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count & Loading/Error */}
        <div className="mb-6">
          {loading ? (
            <p className="text-gray-600">Loading doctors...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <p className="text-gray-600">
              Found {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
              {selectedSpecialization !== "all" && ` in ${selectedSpecialization}`}
            </p>
          )}
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor: any) => {
            const name = doctor.fullName || doctor.name || "";
            const specialization = doctor.categories && doctor.categories.length > 0
              ? doctor.categories.map((cat: any) => cat.category.name).join(", ")
              : "";
            return (
              <Card key={doctor.id} className="bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 cursor-pointer" onClick={() => setSelectedDoctor(doctor)}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                      {doctor.profileImage ? (
                        <img 
                          src={doctor.profileImage} 
                          alt={name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      ) : (
                        <User className="w-8 h-8 text-orange-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-gray-900">{name}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Stethoscope className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-600">{specialization}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Experience */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-900">{doctor.experience ?? '-'}</span>
                    </div>
                    <span className="text-sm text-gray-600">{doctor.degree ?? ''}</span>
                  </div>
                  {/* Location (not in schema, placeholder) */}
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-700">{doctor.phone}</span>
                  </div>
                  {/* Availability (placeholder) */}
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className={`text-sm font-medium ${getAvailabilityColor('')}`}>Available</span>
                  </div>
                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      onClick={e => { e.stopPropagation(); handleCallDoctor(doctor); }}
                      className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center space-x-2 rounded-xl"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </Button>
                    <Button
                      onClick={e => { e.stopPropagation(); handleMessageDoctor(doctor); }}
                      variant="outline"
                      className="border-orange-500 bg-white hover:bg-orange-50 text-orange-500 flex items-center justify-center space-x-2 rounded-xl"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Message</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        {/* Doctor Details Modal */}
        {selectedDoctor && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-lg relative">
              <button className="absolute top-2 right-2 text-gray-500" onClick={() => setSelectedDoctor(null)}>&times;</button>
              <h2 className="text-xl font-bold mb-4">Doctor Details</h2>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  {selectedDoctor.profileImage ? (
                    <img src={selectedDoctor.profileImage} alt={selectedDoctor.fullName || selectedDoctor.name} className="w-16 h-16 rounded-full object-cover" />
                  ) : (
                    <User className="w-8 h-8 text-orange-500" />
                  )}
                </div>
                <div>
                  <div className="text-lg font-bold">{selectedDoctor.fullName || selectedDoctor.name}</div>
                  <div className="text-sm text-gray-600">{selectedDoctor.degree}</div>
                  <div className="text-sm text-gray-600">Experience: {selectedDoctor.experience} years</div>
                </div>
              </div>
              <div className="mb-2"><strong>Specializations:</strong> {selectedDoctor.categories && selectedDoctor.categories.length > 0 ? selectedDoctor.categories.map((cat: any) => cat.category.name).join(", ") : '-'}</div>
              <div className="mb-2"><strong>Description:</strong> {selectedDoctor.description}</div>
              <div className="mb-2"><strong>Phone:</strong> {selectedDoctor.phone}</div>
            </div>
          </div>
        )}
        </div>

        {/* Empty State */}
        {filteredDoctors.length === 0 && (
          <Card className="bg-white border-gray-200">
            <CardContent className="p-12 text-center">
              <Stethoscope className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Doctors Found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or check back later.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedSpecialization("all");
                }}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Emergency Section */}
        <Card className="bg-red-50 border-red-200 mt-8">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Emergency?</h3>
                <p className="text-sm text-gray-600">Need immediate medical attention?</p>
              </div>
            </div>
            <Button
              onClick={() => navigate('/emergency')}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Send Emergency Alert
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DoctorsList;
