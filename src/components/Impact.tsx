import React, { useState } from 'react';
import { Users, Calendar, ExternalLink, ChevronDown, ChevronUp, Trophy } from 'lucide-react';
import { volunteerExperiences } from '../data';

interface VolunteerModalProps {
  experience: typeof volunteerExperiences[0];
  onClose: () => void;
}

function VolunteerModal({ experience, onClose }: VolunteerModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-slate-900 rounded-xl max-w-3xl w-full overflow-hidden border border-slate-800/50"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={experience.image} 
            alt={experience.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-white mb-2">{experience.title}</h3>
          <p className="text-blue-400 text-sm mb-4">{experience.organization}</p>
          <p className="text-slate-300 mb-6 leading-relaxed">{experience.description}</p>
          <div className="flex items-center gap-2 text-slate-500">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{experience.period}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Impact() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<typeof volunteerExperiences[0] | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50" id="impact">
      <div className="max-w-2xl mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          Impact & Volunteering
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          Creating positive change through technology and community engagement.
        </p>
      </div>

      <div className="space-y-4">
        {volunteerExperiences.map((experience, index) => (
          <div 
            key={index}
            className="bg-slate-900/50 rounded-lg border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300"
          >
            {/* Header - Always Visible */}
            <button
              onClick={() => toggleExpand(index)}
              className="w-full px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {experience.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <span className="text-blue-400">{experience.organization}</span>
                    <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/20 text-blue-400">
                      Volunteer
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.period}</span>
                </div>
                {expandedId === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </button>

            {/* Expanded Content */}
            {expandedId === index && (
              <div className="px-6 py-5 border-t border-slate-800/50">
                <div className="pl-16">
                  {/* Image */}
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                    <img 
                      src={experience.image} 
                      alt={experience.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 to-transparent" />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedExperience(experience);
                      }}
                      className="absolute bottom-4 right-4 px-4 py-2 bg-blue-500/90 hover:bg-blue-500 text-white text-sm rounded-lg transition-colors flex items-center gap-2"
                    >
                      View Details
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-blue-400" />
                      Impact Highlights
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        Mentored 20+ students in programming fundamentals
                      </li>
                      <li className="flex items-center gap-2 text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        Increased student engagement by 40%
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedExperience && (
        <VolunteerModal 
          experience={selectedExperience} 
          onClose={() => setSelectedExperience(null)} 
        />
      )}
    </section>
  );
}