import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import StarRating from "./StarRating";

const ClientReview = ({
  reviewId,
  clientImage,
  rating,
  reviewText,
  clientName,
  reviewDate,
  userId,
  productId, // Assuming productId is passed as a prop
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedReviewText, setUpdatedReviewText] = useState(reviewText);
  const [updatedRating, setUpdatedRating] = useState(rating);
  const { auth } = useAuth();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    // Create FormData and manually append each field
    const formData = new FormData();
    formData.append("id", reviewId);
    formData.append("productId", productId);
    formData.append("userId", auth.userId);
    formData.append("points", updatedRating);
    formData.append("comments", updatedReviewText);

    try {
      const response = await fetch(`${API_BASE_URL}/Review/Update`, {
        method: "POST",
        body: formData,
      });

      const reviewJson = await response.json();
      console.log(reviewJson);
      closeModal();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-start space-x-4 pb-4 mb-4 border-b border-gray-200 last:mb-0 last:pb-0 last:border-none">
      <img src={clientImage} alt="Client" className="w-10 h-10 rounded-full" />
      <div>
        <StarRating rating={rating} size={16} />
        <p className="text-sm mt-6">{reviewText}</p>
        <p className="text-xs font-semibold mt-4 mb-1">{clientName}</p>
        <p className="text-xs text-gray-500">{reviewDate}</p>
      </div>
      {auth?.userId === userId && (
        <div>
          <button onClick={openModal}>Update</button>
          <button>Delete</button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Update Review</h2>
            <form onSubmit={handleUpdateSubmit}>
              <textarea
                className="w-full border p-2 mb-4"
                rows="4"
                value={updatedReviewText}
                onChange={(e) => setUpdatedReviewText(e.target.value)}
                placeholder="Update your review"
              ></textarea>
              <input
                type="number"
                className="w-full border p-2 mb-4"
                value={updatedRating}
                onChange={(e) => setUpdatedRating(e.target.value)}
                placeholder="Update rating"
                min={1}
                max={5}
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 rounded"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientReview;
