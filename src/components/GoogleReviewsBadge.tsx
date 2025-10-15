import { Star } from "lucide-react";

const GoogleReviewsBadge = () => {
  return (
    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <div className="text-white">
        <div className="text-lg font-bold">4.9/5</div>
        <div className="text-xs opacity-90">127 avis Google</div>
      </div>
    </div>
  );
};

export default GoogleReviewsBadge;
