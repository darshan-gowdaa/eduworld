import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Mail, Info, X, ArrowLeft, AlertTriangle, AlertCircle, Info as InfoIcon } from 'lucide-react';

// Priority level component
const PriorityDisplay = ({ urgency }) => {
    const baseClasses = "px-3 py-1 text-xs font-semibold rounded-full inline-flex items-center gap-x-1.5";
    switch (urgency) {
        case 'urgent':
            return (
                <span className={`${baseClasses} bg-red-200 text-red-900 border border-red-300`}>
                    <AlertTriangle />
                    Urgent
                </span>
            );
        case 'high':
            return (
                <span className={`${baseClasses} bg-red-100 text-red-800`}>
                    <AlertTriangle />
                    High
                </span>
            );
        case 'medium':
            return (
                <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>
                    <AlertCircle />
                    Medium
                </span>
            );
        case 'low':
            return (
                <span className={`${baseClasses} bg-green-100 text-green-800`}>
                    <InfoIcon />
                    Low
                </span>
            );
        default:
            return (
                <span className={`${baseClasses} bg-gray-100 text-gray-800`}>
                    <InfoIcon />
                    Normal
                </span>
            );
    }
};

const FacultyEnquiries = () => {
    const navigate = useNavigate();
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedEnquiry, setSelectedEnquiry] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchEnquiries = async () => {
            setLoading(true);
            setError('');
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:5000/api/enquiries', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                
                const backendData = res.data || [];
                const processedBackendData = backendData.map(enq => ({
                    ...enq,
                    urgency: enq.urgency || 'normal'
                }));
                setEnquiries(processedBackendData);
            } catch (err) {
                setEnquiries([]);
                setError('Failed to load enquiries. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchEnquiries();
    }, []);

    const handleViewDetails = (enq) => {
        setSelectedEnquiry(enq);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setTimeout(() => setSelectedEnquiry(null), 300);
    };

    const formatDateTime = (isoString) => {
        if (!isoString) return 'N/A';
        return new Date(isoString).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <button
                            onClick={() => navigate('/faculty/dashboard')}
                            className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-200 hover:shadow-md border border-gray-200"
                        >
                            <ArrowLeft className="text-sm" />
                            <span className="text-sm font-medium">Back to Dashboard</span>
                        </button>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800">Student Enquiries</h1>
                    <p className="text-gray-500 mt-1">View and respond to all student questions and requests.</p>
                </header>

                {loading && <div className="text-center p-10 text-blue-600 font-semibold">Loading enquiries...</div>}
                {error && <div className="text-center p-10 bg-red-100 text-red-600 rounded-lg">{error}</div>}

                {!loading && !error && (
                    <div className="bg-white rounded-xl shadow-md ring-1 ring-gray-200 overflow-auto">
                        <table className="min-w-[768px] w-full table-fixed divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase w-1/5">Student</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase w-1/4">Message</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase w-1/5">Received At</th>
                                    <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase w-1/6">Priority</th>
                                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {enquiries.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="text-center py-12 text-gray-500">
                                            <Mail className="mx-auto text-4xl text-gray-300" />
                                            <p className="mt-2 text-lg">No enquiries found.</p>
                                        </td>
                                    </tr>
                                ) : (
                                    enquiries.map((enq) => (
                                        <tr key={enq.id || enq._id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 align-top">
                                                <div className="font-medium text-gray-900 truncate">{enq.name}</div>
                                                <div className="text-sm text-gray-500 truncate">{enq.email}</div>
                                            </td>
                                            <td className="px-6 py-4 align-top">
                                                <div className="text-sm text-gray-800 truncate max-w-xs" title={enq.message}>{enq.message}</div>
                                                <div className="text-xs text-gray-400 mt-1">Course: {enq.course}</div>
                                            </td>
                                            <td className="px-6 py-4 align-top text-sm text-gray-600">
                                                {formatDateTime(enq.createdAt)}
                                            </td>
                                            <td className="px-6 py-4 align-top text-center">
                                                <PriorityDisplay urgency={enq.urgency || 'normal'} />
                                            </td>
                                            <td className="px-6 py-4 align-top text-right">
                                                <button
                                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg"
                                                    onClick={() => handleViewDetails(enq)}
                                                >
                                                    <Info className="text-blue-600" />
                                                    Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Modal */}
            {showModal && selectedEnquiry && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full m-4 transition-transform transform scale-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 sm:p-8">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Enquiry from {selectedEnquiry.name}</h2>
                                    <p className="text-sm text-gray-500">Regarding: {selectedEnquiry.course}</p>
                                </div>
                                <button
                                    className="text-gray-400 hover:text-gray-600 p-1"
                                    onClick={closeModal}
                                    aria-label="Close"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                            <p className="text-xs text-gray-400 border-b pb-4 mb-4">Received: {formatDateTime(selectedEnquiry.createdAt)}</p>

                            <div className="space-y-4">
                                <h3 className="font-semibold text-gray-800">Message:</h3>
                                <p className="bg-gray-50 p-4 rounded-lg text-gray-800 whitespace-pre-wrap">{selectedEnquiry.message}</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 px-6 py-4 rounded-b-xl flex justify-between items-center">
                            <div className="text-sm">
                                <div className="font-medium text-gray-800">{selectedEnquiry.name}</div>
                                <a href={`mailto:${selectedEnquiry.email}`} className="text-blue-600 hover:underline">{selectedEnquiry.email}</a>
                            </div>
                            <div className="flex gap-x-3">
                                <button
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                                <a
                                    href={`mailto:${selectedEnquiry.email}`}
                                    className="inline-flex items-center gap-x-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                                >
                                    <Mail className="w-4 h-4" />
                                    Reply
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FacultyEnquiries;
