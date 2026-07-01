"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, MapPin, Users, Phone, Mail, Globe } from "lucide-react";

interface StateAssociation {
  state: string;
  city: string;
  associationName: string;
  presidentName: string;
  memberCount: number;
  phone: string;
  email: string;
  website?: string;
}

interface IndiaMapProps {
  stateAssociations: StateAssociation[];
}

// SVG path data for Indian states (simplified)
const statePaths: Record<string, string> = {
  "Jammu and Kashmir": "M140,20 L160,15 L170,25 L165,40 L150,45 L140,35 Z",
  "Himachal Pradesh": "M155,45 L170,40 L175,55 L165,60 L155,55 Z",
  "Punjab": "M135,50 L155,48 L158,65 L140,70 L132,60 Z",
  "Haryana": "M140,68 L158,65 L162,80 L145,85 L138,78 Z",
  "Delhi": "M148,78 L152,76 L154,82 L150,84 Z",
  "Uttarakhand": "M165,55 L180,50 L185,70 L170,75 L165,65 Z",
  "Uttar Pradesh": "M155,80 L185,75 L190,110 L165,115 L150,100 Z",
  "Rajasthan": "M100,75 L135,70 L145,100 L130,120 L105,115 L95,95 Z",
  "Bihar": "M185,95 L205,90 L210,115 L195,120 L185,110 Z",
  "Jharkhand": "M175,115 L195,110 L200,130 L185,135 L175,125 Z",
  "West Bengal": "M200,105 L220,100 L225,140 L210,145 L200,130 Z",
  "Sikkim": "M215,85 L220,82 L222,90 L218,92 Z",
  "Assam": "M230,75 L260,70 L265,95 L250,100 L235,95 L230,85 Z",
  "Meghalaya": "M235,100 L250,95 L252,110 L240,115 Z",
  "Nagaland": "M260,80 L270,75 L272,90 L265,95 Z",
  "Odisha": "M185,135 L210,130 L215,155 L195,160 L185,150 Z",
  "Chhattisgarh": "M150,125 L175,120 L180,145 L160,150 L148,140 Z",
  "Madhya Pradesh": "M130,105 L155,100 L165,130 L150,145 L125,140 L120,120 Z",
  "Gujarat": "M80,110 L105,105 L115,140 L100,155 L85,145 L78,125 Z",
  "Maharashtra": "M105,145 L135,140 L145,175 L125,190 L105,180 L100,160 Z",
  "Goa": "M105,185 L110,183 L112,190 L108,192 Z",
  "Karnataka": "M115,180 L145,175 L150,210 L130,220 L115,210 Z",
  "Andhra Pradesh": "M145,165 L175,160 L180,200 L160,210 L145,195 Z",
  "Telangana": "M155,150 L180,145 L185,170 L160,175 L152,165 Z",
  "Tamil Nadu": "M135,210 L165,205 L170,245 L150,250 L135,235 Z",
  "Kerala": "M120,215 L135,212 L140,250 L125,255 L118,235 Z",
};

// State coordinates for label positioning (approximate center of each state)
const stateCoords: Record<string, { x: number; y: number }> = {
  "Jammu and Kashmir": { x: 155, y: 30 },
  "Himachal Pradesh": { x: 165, y: 50 },
  "Punjab": { x: 145, y: 58 },
  "Haryana": { x: 150, y: 75 },
  "Delhi": { x: 150, y: 80 },
  "Uttarakhand": { x: 175, y: 62 },
  "Uttar Pradesh": { x: 170, y: 95 },
  "Rajasthan": { x: 120, y: 95 },
  "Bihar": { x: 195, y: 105 },
  "Jharkhand": { x: 188, y: 122 },
  "West Bengal": { x: 212, y: 122 },
  "Sikkim": { x: 219, y: 87 },
  "Assam": { x: 248, y: 83 },
  "Meghalaya": { x: 243, y: 105 },
  "Nagaland": { x: 266, y: 83 },
  "Odisha": { x: 200, y: 145 },
  "Chhattisgarh": { x: 165, y: 135 },
  "Madhya Pradesh": { x: 142, y: 122 },
  "Gujarat": { x: 98, y: 130 },
  "Maharashtra": { x: 122, y: 165 },
  "Goa": { x: 108, y: 188 },
  "Karnataka": { x: 132, y: 200 },
  "Andhra Pradesh": { x: 162, y: 185 },
  "Telangana": { x: 168, y: 158 },
  "Tamil Nadu": { x: 152, y: 228 },
  "Kerala": { x: 130, y: 235 },
};

export function IndiaMap({ stateAssociations }: IndiaMapProps) {
  const [selectedState, setSelectedState] = useState<StateAssociation | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const getStateData = (stateName: string): StateAssociation | undefined => {
    return stateAssociations.find((s) => s.state === stateName);
  };

  const isActiveState = (stateName: string): boolean => {
    return stateAssociations.some((s) => s.state === stateName);
  };

  return (
    <div className="relative">
      {/* Map Container */}
      <div className="relative bg-[#0A2540] rounded-2xl p-6 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#FF9933] rounded-full blur-[128px]" />
        </div>

        <div className="relative">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-2">
              FAIITA State Network
            </h3>
            <p className="text-white/60 text-sm">
              Click on a state to view association details
            </p>
          </div>

          {/* SVG Map */}
          <svg
            viewBox="0 0 300 280"
            className="w-full max-w-2xl mx-auto"
            style={{ filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.3))" }}
          >
            {/* Background */}
            <rect width="300" height="280" fill="transparent" />

            {/* State Paths */}
            {Object.entries(statePaths).map(([stateName, path]) => {
              const active = isActiveState(stateName);
              const isHovered = hoveredState === stateName;
              const isSelected = selectedState?.state === stateName;

              return (
                <g key={stateName}>
                  <path
                    d={path}
                    fill={
                      isSelected
                        ? "#FF9933"
                        : isHovered
                        ? "#FF9933"
                        : active
                        ? "#1e3a5f"
                        : "#2a3f5f"
                    }
                    stroke={isHovered || isSelected ? "#FF9933" : "#3a4f7f"}
                    strokeWidth={isHovered || isSelected ? 2 : 1}
                    className="transition-all duration-300 cursor-pointer"
                    style={{
                      filter: isHovered || isSelected
                        ? "drop-shadow(0 0 8px rgba(255,153,51,0.5))"
                        : "none",
                    }}
                    onMouseEnter={() => setHoveredState(stateName)}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => {
                      const data = getStateData(stateName);
                      if (data) setSelectedState(data);
                    }}
                  />
                </g>
              );
            })}

            {/* State Labels */}
            {Object.entries(stateCoords).map(([stateName, coords]) => {
              const active = isActiveState(stateName);
              if (!active) return null;

              return (
                <text
                  key={`label-${stateName}`}
                  x={coords.x}
                  y={coords.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="5"
                  fontWeight="600"
                  className="pointer-events-none select-none"
                  style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
                >
                  {stateName.length > 12
                    ? stateName.slice(0, 10) + "..."
                    : stateName}
                </text>
              );
            })}

            {/* Active State Dots */}
            {stateAssociations.map((assoc) => {
              const coords = stateCoords[assoc.state];
              if (!coords) return null;
              return (
                <circle
                  key={`dot-${assoc.state}`}
                  cx={coords.x}
                  cy={coords.y - 8}
                  r="2.5"
                  fill="#FF9933"
                  className="pointer-events-none"
                >
                  <animate
                    attributeName="r"
                    values="2.5;3.5;2.5"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}
          </svg>

          {/* Legend */}
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-[#1e3a5f] border border-[#3a4f7f]" />
              <span className="text-white/70">Active Member</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-[#2a3f5f] border border-[#3a4f7f]" />
              <span className="text-white/70">Non-Member</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-[#FF9933]" />
              <span className="text-white/70">Selected</span>
            </div>
          </div>
        </div>
      </div>

      {/* State Detail Modal */}
      {selectedState && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <Card className="w-full max-w-md border-0 shadow-2xl animate-in fade-in zoom-in duration-200">
            <CardContent className="p-0">
              {/* Header */}
              <div className="bg-[#0A2540] p-6 rounded-t-xl relative">
                <button
                  onClick={() => setSelectedState(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FF9933] flex items-center justify-center text-white font-bold text-lg">
                    {selectedState.state.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {selectedState.state}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {selectedState.associationName}
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-[#FF9933]/10 text-[#FF9933] border-0">
                    <Users className="w-3 h-3 mr-1" />
                    {selectedState.memberCount.toLocaleString()} Members
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#0A2540]">Location</p>
                      <p className="text-sm text-gray-500">{selectedState.city}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#0A2540]">President</p>
                      <p className="text-sm text-gray-500">{selectedState.presidentName}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#0A2540]">Phone</p>
                      <a
                        href={`tel:${selectedState.phone.replace(/\s/g, "")}`}
                        className="text-sm text-[#FF9933] hover:underline"
                      >
                        {selectedState.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#0A2540]">Email</p>
                      <a
                        href={`mailto:${selectedState.email}`}
                        className="text-sm text-[#FF9933] hover:underline"
                      >
                        {selectedState.email}
                      </a>
                    </div>
                  </div>

                  {selectedState.website && (
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                        <Globe className="w-4 h-4 text-gray-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#0A2540]">Website</p>
                        <a
                          href={selectedState.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#FF9933] hover:underline"
                        >
                          {selectedState.website}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
