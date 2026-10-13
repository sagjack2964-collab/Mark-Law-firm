import React, { useState } from 'react';
import { Star, CheckCircle, ThumbsUp, Share2, ExternalLink, PenLine, Check } from 'lucide-react';
import { GOOGLE_REVIEWS, RATING_BREAKDOWN, FIRM_PROFILE } from '../data/lawFirmData';
import { ReviewItem } from '../types';

export const ReviewsSection: React.FC = () => {
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<number | null>(null);
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState('');
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(GOOGLE_REVIEWS);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  const filteredReviews = selectedRatingFilter
    ? reviewsList.filter((r) => r.rating === selectedRatingFilter)
    : reviewsList;

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor || !newReviewText) return;

    const newReview: ReviewItem = {
      id: `review-${Date.now()}`,
      author: newReviewAuthor,
      rating: newReviewRating,
      timeAgo: 'Just now',
      text: newReviewText,
      verified: true,
      matterCategory: 'Client Feedback'
    };

    setReviewsList([newReview, ...reviewsList]);
    setIsWriteReviewOpen(false);
    setNewReviewAuthor('');
    setNewReviewText('');
  };

  const toggleLike = (id: string) => {
    setLikedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShare = (review: ReviewItem) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`"${review.text}" — ${review.author}`);
      setCopiedId(review.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Law Office of Mark Bronstein 321 Walnut St Newton MA 02460'
  )}`;

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#f4f7f4] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs sm:text-sm font-heading font-semibold tracking-widest text-[#c59b27] uppercase mb-1">
              REVIEWS & RATINGS
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#153422] tracking-tight leading-tight">
              VERIFIED CLIENT EXPERIENCES
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Real reviews from clients who turned to Attorney Mark Bronstein when stakes were high.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsWriteReviewOpen(true)}
              className="px-4 py-2.5 bg-[#c59b27] hover:bg-[#b58c1d] text-slate-950 font-heading font-bold text-sm tracking-wider uppercase rounded-xs transition-colors cursor-pointer"
            >
              Write a Review
            </button>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 border border-slate-300 hover:border-slate-800 text-slate-700 font-heading font-bold text-sm tracking-wider uppercase rounded-xs transition-colors flex items-center gap-1.5"
            >
              <span>Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Rating Breakdown Header Card */}
        <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-7 mb-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Score */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-8">
              <div className="font-heading font-bold text-6xl text-[#153422] leading-none">
                {FIRM_PROFILE.rating}
              </div>
              <div className="flex items-center gap-1 my-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-[#c59b27] text-[#c59b27]"
                  />
                ))}
              </div>
              <div className="text-xs text-slate-600 font-medium">
                {reviewsList.length} verified reviews on Google Maps
              </div>
              <span className="text-[11px] text-slate-500 mt-1">Lawyer in Newton, Massachusetts</span>
            </div>

            {/* Bars */}
            <div className="md:col-span-5 space-y-1.5">
              <div className="font-heading font-bold text-xs text-slate-900 uppercase tracking-wider mb-1.5">
                Review Breakdown
              </div>
              {RATING_BREAKDOWN.map((row) => (
                <button
                  key={row.stars}
                  onClick={() =>
                    setSelectedRatingFilter(selectedRatingFilter === row.stars ? null : row.stars)
                  }
                  className="w-full flex items-center gap-2.5 text-xs py-0.5 group cursor-pointer text-left"
                >
                  <span className="w-3 text-right font-medium">{row.stars}</span>
                  <Star className="w-3 h-3 fill-[#c59b27] text-[#c59b27] shrink-0" />
                  <div className="flex-1 h-2 bg-slate-200 rounded-xs overflow-hidden">
                    <div
                      className="h-full bg-[#c59b27] transition-all duration-300"
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                  <span className="w-5 text-right text-slate-500 text-[11px]">
                    {row.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Note */}
            <div className="md:col-span-3 bg-[#e9f0ea] p-4 rounded-sm border border-slate-200 text-xs space-y-1 text-slate-700">
              <span className="font-heading font-bold text-sm text-[#153422] block">Local Reputation</span>
              <p className="leading-relaxed text-[11px]">
                Clients in Newton and Greater Boston highlight Attorney Bronstein's patience, clarity, and dedication.
              </p>
              {selectedRatingFilter && (
                <button
                  onClick={() => setSelectedRatingFilter(null)}
                  className="text-[#153422] underline font-bold text-[11px] cursor-pointer block pt-1"
                >
                  Show all {reviewsList.length} reviews
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-slate-200 rounded-sm p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#153422] tracking-tight">
                      {review.author}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                      {review.badge && (
                        <span className="text-[#c59b27] font-bold">{review.badge}</span>
                      )}
                      {review.badge && <span aria-hidden="true">·</span>}
                      {review.reviewCount && <span>{review.reviewCount}</span>}
                      {review.photoCount && <span aria-hidden="true">·</span>}
                      {review.photoCount && <span>{review.photoCount}</span>}
                      <span aria-hidden="true">·</span>
                      <span>{review.timeAgo}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3.5 h-3.5 ${
                          star <= review.rating
                            ? 'fill-[#c59b27] text-[#c59b27]'
                            : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mt-2 font-normal">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold text-[11px]">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  Google Verified
                </span>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleLike(review.id)}
                    className={`flex items-center gap-1 hover:text-slate-900 transition-colors cursor-pointer text-[11px] ${
                      likedReviews[review.id] ? 'text-[#c59b27] font-bold' : ''
                    }`}
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>{likedReviews[review.id] ? 'Liked' : 'Like'}</span>
                  </button>

                  <button
                    onClick={() => handleShare(review)}
                    className="flex items-center gap-1 hover:text-slate-900 transition-colors cursor-pointer text-[11px]"
                  >
                    {copiedId === review.id ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3 h-3" />
                        <span>Share</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Write Review */}
        {isWriteReviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white border border-slate-200 rounded-sm p-6 max-w-md w-full shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-heading font-bold text-xl text-[#153422]">
                  Write a Review for Mark Bronstein
                </h3>
                <button
                  onClick={() => setIsWriteReviewOpen(false)}
                  className="text-slate-400 hover:text-slate-700 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleReviewSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={newReviewAuthor}
                    onChange={(e) => setNewReviewAuthor(e.target.value)}
                    placeholder="e.g. Randy F."
                    className="w-full px-3 py-2 border border-slate-300 rounded-sm focus:outline-none focus:border-[#153422]"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Rating</label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReviewRating(star)}
                        className="p-0.5 cursor-pointer focus:outline-none"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            star <= newReviewRating
                              ? 'fill-[#c59b27] text-[#c59b27]'
                              : 'text-slate-200'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-slate-700 font-semibold ml-2">{newReviewRating} Stars</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Your Review</label>
                  <textarea
                    required
                    rows={4}
                    value={newReviewText}
                    onChange={(e) => setNewReviewText(e.target.value)}
                    placeholder="Describe how Attorney Mark Bronstein assisted you..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-sm focus:outline-none focus:border-[#153422]"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsWriteReviewOpen(false)}
                    className="px-3 py-2 border border-slate-300 text-slate-700 rounded-sm font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#153422] text-white rounded-sm font-heading font-bold uppercase tracking-wider hover:bg-[#1e4a31]"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
