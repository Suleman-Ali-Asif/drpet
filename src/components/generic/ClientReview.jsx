import React from 'react';
import { StarRating } from '../../components';

const ClientReview = ({ clientImage, rating, reviewText, clientName, reviewDate }) => {
    return (
        <div className="flex items-start space-x-4 pb-4 mb-4 border-b border-gray-200 last:mb-0 last:pb-0 last:border-none">
            <img src={clientImage} alt="Client" className="w-10 h-10 rounded-full" />
            <div>
                <StarRating rating={rating} size={16} />
                <p className="text-sm mt-6">{reviewText}</p>
                <p className="text-xs font-semibold mt-4 mb-1">{clientName}</p>
                <p className="text-xs text-gray-500">{reviewDate}</p>
            </div>
        </div>
    );
};

export default ClientReview;