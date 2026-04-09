import React, { useState } from 'react';
import { X, Star, Upload, Send } from 'lucide-react';
import { submitTestimonial } from '../api/api/testimonialApi';
import { uploadToCloudinary } from '../utils/cloudinaryUpload';
import toast from 'react-hot-toast';

const TestimonialFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    message: '',
    rating: 5,
  });
  const [mediaFile, setMediaFile] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');
    const isAudio = file.type.startsWith('audio/');
    
    if (!isImage && !isVideo && !isAudio) {
      toast.error('Please upload an image, video, or audio file');
      return;
    }

    const maxSize = isImage ? 5 * 1024 * 1024 : 50 * 1024 * 1024; // 5MB for images, 50MB for video/audio
    
    if (file.size > maxSize) {
      toast.error(`File size too large. Max ${isImage ? '5MB' : '50MB'} allowed.`);
      return;
    }

    setMediaFile(file);

    // Generate preview
    const reader = new FileReader();
    reader.onloadend = () => setMediaPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.role || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setSubmitting(true);
    try {
      let mediaUrl = '';
      let mediaType = 'text';

      // Upload media if selected
      if (mediaFile) {
        setUploading(true);
        mediaUrl = await uploadToCloudinary(mediaFile);
        setUploading(false);
        
        // Detect media type
        if (mediaFile.type.startsWith('image/')) mediaType = 'image';
        else if (mediaFile.type.startsWith('video/')) mediaType = 'video';
        else if (mediaFile.type.startsWith('audio/')) mediaType = 'audio';
      }

      const payload = {
        name: formData.name,
        role: formData.role,
        message: formData.message,
        text: formData.message,
        rating: parseInt(formData.rating),
        mediaUrl: mediaUrl,
        type: mediaType,
        category: 'IGCSE', // Default category
      };

      await submitTestimonial(payload);
      toast.success('Thank you! Your testimonial has been submitted for review.');
      
      // Reset form
      setFormData({ name: '', role: '', message: '', rating: 5 });
      setMediaFile(null);
      setMediaPreview(null);
      onClose();
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to submit testimonial. Please try again.');
    } finally {
      setSubmitting(false);
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={24} className="text-gray-600" />
        </button>

        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Share Your Success Story
          </h2>
          <p className="text-gray-600">
            We'd love to hear about your experience with A Star Classes!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Role Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Role <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="e.g., IGCSE Student, Parent, AS Level Student"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Testimonial <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              placeholder="Share your experience with A Star Classes..."
              required
            />
          </div>

          {/* Rating Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Rating
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                  className="focus:outline-none"
                >
                  <Star
                    size={32}
                    className={star <= formData.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                  />
                </button>
              ))}
              <span className="ml-2 text-gray-600 font-semibold">{formData.rating}/5</span>
            </div>
          </div>

          {/* Media Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Upload Photo/Video/Audio (Optional)
            </label>
            <div className="flex items-center gap-3">
              {mediaPreview && (
                <div className="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-300">
                  {mediaFile?.type.startsWith('image/') ? (
                    <img src={mediaPreview} alt="Preview" className="w-full h-full object-cover" />
                  ) : mediaFile?.type.startsWith('video/') ? (
                    <video src={mediaPreview} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-blue-50 flex items-center justify-center">
                      <Upload size={24} className="text-blue-600" />
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => { setMediaFile(null); setMediaPreview(null); }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
              <label className="flex-1 cursor-pointer">
                <div className="flex flex-col items-center justify-center gap-2 px-4 py-8 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-100 transition-all">
                  <Upload size={32} className="text-gray-400" />
                  <span className="text-sm text-gray-600 font-medium">
                    {uploading ? 'Uploading...' : 'Click to upload media'}
                  </span>
                  <span className="text-xs text-gray-400">Image, Video, or Audio</span>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*,video/*,audio/*"
                  onChange={handleMediaChange}
                  disabled={uploading}
                />
              </label>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting || uploading}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting || uploading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  {uploading ? 'Uploading...' : 'Submitting...'}
                </>
              ) : (
                <>
                  <Send size={18} />
                  Submit Testimonial
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Your testimonial will be reviewed by our team before being published.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialFormModal;
