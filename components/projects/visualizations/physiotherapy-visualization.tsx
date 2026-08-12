'use client';

import { Activity, CheckCircle } from 'lucide-react';

interface Props {
  activeStage: number;
}

export function PhysiotherapyVisualization({ activeStage }: Props) {
  // Landmarks definition for simplified posture skeleton representation
  // 33 MediaPipe Keypoints concept: Head, Shoulders, Elbows, Wrists, Hips, Knees, Ankles
  const points = [
    { id: 0, x: 50, y: 15, label: 'Nose/Head' },
    { id: 11, x: 38, y: 32, label: 'L-Shoulder' },
    { id: 12, x: 62, y: 32, label: 'R-Shoulder' },
    { id: 13, x: 28, y: 48, label: 'L-Elbow' },
    { id: 14, x: 72, y: 48, label: 'R-Elbow' },
    { id: 15, x: 20, y: 64, label: 'L-Wrist' },
    { id: 16, x: 80, y: 64, label: 'R-Wrist' },
    { id: 23, x: 42, y: 62, label: 'L-Hip' },
    { id: 24, x: 58, y: 62, label: 'R-Hip' },
    { id: 25, x: 40, y: 80, label: 'L-Knee' },
    { id: 26, x: 60, y: 80, label: 'R-Knee' },
    { id: 27, x: 38, y: 94, label: 'L-Ankle' },
    { id: 28, x: 62, y: 94, label: 'R-Ankle' },
  ];

  // Connections between keypoints (edges)
  const connections = [
    [11, 12], // Shoulder line
    [11, 13], // Left upper arm
    [13, 15], // Left forearm
    [12, 14], // Right upper arm
    [14, 16], // Right forearm
    [11, 23], // Left torso
    [12, 24], // Right torso
    [23, 24], // Hip line
    [23, 25], // Left thigh
    [25, 27], // Left shin
    [24, 26], // Right thigh
    [26, 28], // Right shin
  ];

  return (
    <div className="w-full rounded-xl bg-[#09090b]/90 border border-white/10 p-4 relative overflow-hidden font-mono text-xs select-none">
      {/* Visual System Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <div className="flex items-center gap-2 text-sky-400 font-bold">
          <Activity className="w-4 h-4" />
          <span>REAL-TIME MOTION GEOMETRY TELEMETRY</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>30 FPS OPENCV STREAM</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Skeleton Keypoint Diagram */}
        <div className="md:col-span-6 flex justify-center items-center relative py-2">
          <svg
            viewBox="0 0 100 110"
            className="w-48 h-48 drop-shadow-[0_0_15px_rgba(56,189,248,0.2)]"
          >
            {/* Draw Bone Edges */}
            {connections.map(([startId, endId], idx) => {
              const p1 = points.find((p) => p.id === startId);
              const p2 = points.find((p) => p.id === endId);
              if (!p1 || !p2) return null;

              const isHighlighted =
                activeStage >= 3 || (activeStage === 1 && (startId === 11 || startId === 12));

              return (
                <line
                  key={idx}
                  x1={p1.x}
                  y1={p1.y}
                  x2={p2.x}
                  y2={p2.y}
                  stroke={isHighlighted ? '#38bdf8' : '#3f3f46'}
                  strokeWidth={isHighlighted ? '1.5' : '1'}
                  strokeDasharray={activeStage === 0 ? '2,2' : 'none'}
                />
              );
            })}

            {/* Joint Trigonometry Vector Angle Arc */}
            {activeStage >= 3 && (
              <g>
                <path
                  d="M 28 48 L 38 32 L 20 64 Z"
                  fill="rgba(56,189,248,0.15)"
                  stroke="#38bdf8"
                  strokeWidth="0.5"
                  strokeDasharray="1,1"
                />
                <text x="14" y="42" fill="#38bdf8" fontSize="4" fontWeight="bold">
                  JOINT ANGLE
                </text>
              </g>
            )}

            {/* Draw Landmark Nodes */}
            {points.map((pt) => {
              const isActive = activeStage >= 2;
              const isJointFocus =
                activeStage >= 3 && (pt.id === 11 || pt.id === 13 || pt.id === 15);

              return (
                <g key={pt.id}>
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isJointFocus ? '3.5' : '2'}
                    fill={isJointFocus ? '#38bdf8' : isActive ? '#60a5fa' : '#52525b'}
                    className="transition-all duration-300"
                  />
                  {isJointFocus && (
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="5"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="0.5"
                      className="animate-ping opacity-75"
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Live Stage Status Dashboard */}
        <div className="md:col-span-6 space-y-2.5 bg-white/[0.02] p-3 rounded-lg border border-white/5">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-zinc-400">STAGE STATE:</span>
            <span className="text-sky-300 font-bold uppercase">
              {activeStage === 0 && '01. Camera Buffer Ingestion'}
              {activeStage === 1 && '02. MediaPipe 33 Landmark Inference'}
              {activeStage === 2 && '03. Frame Scaling & Rescaling'}
              {activeStage === 3 && '04. Vector Trigonometry arctan2'}
              {activeStage === 4 && '05. Posture Threshold Evaluation'}
              {activeStage === 5 && '06. Real-time Overlay & CSV Logger'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="p-2 rounded bg-white/[0.03] border border-white/5">
              <span className="text-zinc-500 block">KEYPOINTS</span>
              <span className="text-white font-bold">33 MediaPipe Landmarks</span>
            </div>
            <div className="p-2 rounded bg-white/[0.03] border border-white/5">
              <span className="text-zinc-500 block">VIDEO STREAM</span>
              <span className="text-emerald-400 font-bold">30 FPS OpenCV Stream</span>
            </div>
            <div className="p-2 rounded bg-white/[0.03] border border-white/5">
              <span className="text-zinc-500 block">VECTOR TRIG</span>
              <span className="text-sky-300 font-bold">NumPy arctan2</span>
            </div>
            <div className="p-2 rounded bg-white/[0.03] border border-white/5">
              <span className="text-zinc-500 block">EVALUATION</span>
              <span className="text-emerald-400 font-bold">Posture Bounds</span>
            </div>
          </div>

          <div className="text-[10px] text-zinc-400 pt-1 border-t border-white/5 flex items-center justify-between">
            <span>Form Boundary Evaluation: Heuristic Threshold Check</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-emerald-400" />
              ACCURATE POSE TRACKING
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
