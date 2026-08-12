'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Activity, Info, RotateCcw, ShieldCheck, Code2 } from 'lucide-react';
import { THEME_TOKENS } from '@/data/theme-tokens';

// Standard 33 MediaPipe Pose Landmark Topology definitions
export interface LandmarkData {
  id: number;
  name: string;
  category: 'head' | 'upper_body' | 'hands' | 'lower_body' | 'feet';
  x: number;
  y: number;
  z: number;
}

export const MEDIAPIPE_33_LANDMARKS: LandmarkData[] = [
  // Head & Face (0-10)
  { id: 0, name: 'NOSE', category: 'head', x: 0.0, y: 1.65, z: 0.1 },
  { id: 1, name: 'LEFT EYE INNER', category: 'head', x: -0.05, y: 1.7, z: 0.08 },
  { id: 2, name: 'LEFT EYE', category: 'head', x: -0.08, y: 1.7, z: 0.07 },
  { id: 3, name: 'LEFT EYE OUTER', category: 'head', x: -0.11, y: 1.7, z: 0.06 },
  { id: 4, name: 'RIGHT EYE INNER', category: 'head', x: 0.05, y: 1.7, z: 0.08 },
  { id: 5, name: 'RIGHT EYE', category: 'head', x: 0.08, y: 1.7, z: 0.07 },
  { id: 6, name: 'RIGHT EYE OUTER', category: 'head', x: 0.11, y: 1.7, z: 0.06 },
  { id: 7, name: 'LEFT EAR', category: 'head', x: -0.16, y: 1.68, z: -0.02 },
  { id: 8, name: 'RIGHT EAR', category: 'head', x: 0.16, y: 1.68, z: -0.02 },
  { id: 9, name: 'MOUTH LEFT', category: 'head', x: -0.06, y: 1.58, z: 0.09 },
  { id: 10, name: 'MOUTH RIGHT', category: 'head', x: 0.06, y: 1.58, z: 0.09 },

  // Upper Body (11-16)
  { id: 11, name: 'LEFT SHOULDER', category: 'upper_body', x: -0.42, y: 1.35, z: 0.0 },
  { id: 12, name: 'RIGHT SHOULDER', category: 'upper_body', x: 0.42, y: 1.35, z: 0.0 },
  { id: 13, name: 'LEFT ELBOW', category: 'upper_body', x: -0.65, y: 0.95, z: 0.12 },
  { id: 14, name: 'RIGHT ELBOW', category: 'upper_body', x: 0.65, y: 0.95, z: 0.12 },
  { id: 15, name: 'LEFT WRIST', category: 'upper_body', x: -0.78, y: 0.58, z: 0.22 },
  { id: 16, name: 'RIGHT WRIST', category: 'upper_body', x: 0.78, y: 0.58, z: 0.22 },

  // Hands (17-22)
  { id: 17, name: 'LEFT PINKY', category: 'hands', x: -0.84, y: 0.52, z: 0.24 },
  { id: 18, name: 'RIGHT PINKY', category: 'hands', x: 0.84, y: 0.52, z: 0.24 },
  { id: 19, name: 'LEFT INDEX', category: 'hands', x: -0.82, y: 0.5, z: 0.25 },
  { id: 20, name: 'RIGHT INDEX', category: 'hands', x: 0.82, y: 0.5, z: 0.25 },
  { id: 21, name: 'LEFT THUMB', category: 'hands', x: -0.75, y: 0.53, z: 0.22 },
  { id: 22, name: 'RIGHT THUMB', category: 'hands', x: 0.75, y: 0.53, z: 0.22 },

  // Hips & Legs (23-28)
  { id: 23, name: 'LEFT HIP', category: 'lower_body', x: -0.22, y: 0.78, z: 0.0 },
  { id: 24, name: 'RIGHT HIP', category: 'lower_body', x: 0.22, y: 0.78, z: 0.0 },
  { id: 25, name: 'LEFT KNEE', category: 'lower_body', x: -0.28, y: 0.32, z: 0.15 },
  { id: 26, name: 'RIGHT KNEE', category: 'lower_body', x: 0.28, y: 0.32, z: 0.15 },
  { id: 27, name: 'LEFT ANKLE', category: 'lower_body', x: -0.26, y: -0.15, z: 0.0 },
  { id: 28, name: 'RIGHT ANKLE', category: 'lower_body', x: 0.26, y: -0.15, z: 0.0 },

  // Feet (29-32)
  { id: 29, name: 'LEFT HEEL', category: 'feet', x: -0.26, y: -0.18, z: -0.08 },
  { id: 30, name: 'RIGHT HEEL', category: 'feet', x: 0.26, y: -0.18, z: -0.08 },
  { id: 31, name: 'LEFT FOOT INDEX', category: 'feet', x: -0.28, y: -0.22, z: 0.18 },
  { id: 32, name: 'RIGHT FOOT INDEX', category: 'feet', x: 0.28, y: -0.22, z: 0.18 },
];

// Verified 35 Skeletal Connections (Edges) in standard MediaPipe Pose
export const MEDIAPIPE_35_CONNECTIONS: [number, number][] = [
  // Face Contour (9)
  [0, 1], [1, 2], [2, 3], [3, 7],
  [0, 4], [4, 5], [5, 6], [6, 8],
  [9, 10],
  // Upper Body & Arms (16)
  [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19],
  [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20],
  [11, 23], [12, 24], [23, 24],
  // Legs & Feet (10)
  [23, 25], [24, 26], [25, 27], [26, 28],
  [27, 29], [28, 30], [29, 31], [30, 32], [27, 31], [28, 32]
];

// Example Joint Chains for Angle Trigonometry Demonstration
export interface JointChain {
  id: string;
  name: string;
  a: number; // Point A (e.g. Shoulder)
  b: number; // Point B (e.g. Elbow - Vertex)
  c: number; // Point C (e.g. Wrist)
}

export const JOINT_CHAINS: JointChain[] = [
  { id: 'left_arm', name: 'LEFT ARM (Shoulder-Elbow-Wrist)', a: 11, b: 13, c: 15 },
  { id: 'right_arm', name: 'RIGHT ARM (Shoulder-Elbow-Wrist)', a: 12, b: 14, c: 16 },
  { id: 'left_leg', name: 'LEFT LEG (Hip-Knee-Ankle)', a: 23, b: 25, c: 27 },
  { id: 'right_leg', name: 'RIGHT LEG (Hip-Knee-Ankle)', a: 24, b: 26, c: 28 },
];

export function Physiotherapy3DLandmarkExplorer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedLandmarkId, setSelectedLandmarkId] = useState<number>(13); // Default Left Elbow
  const [selectedChainId, setSelectedChainId] = useState<string>('left_arm');

  const selectedLandmark = MEDIAPIPE_33_LANDMARKS.find((lm) => lm.id === selectedLandmarkId) || MEDIAPIPE_33_LANDMARKS[13];
  const selectedChain = JOINT_CHAINS.find((c) => c.id === selectedChainId) || JOINT_CHAINS[0];

  // Connected joints list for active selected landmark
  const connectedJointIds = MEDIAPIPE_35_CONNECTIONS
    .filter(([start, end]) => start === selectedLandmarkId || end === selectedLandmarkId)
    .map(([start, end]) => (start === selectedLandmarkId ? end : start));

  const connectedJointNames = connectedJointIds
    .map((id) => MEDIAPIPE_33_LANDMARKS.find((lm) => lm.id === id)?.name)
    .filter(Boolean);

  // Authoritative 2D math.atan2 angle calculation (matching utils.py)
  const calculateAtan2Angle = () => {
    const ptA = MEDIAPIPE_33_LANDMARKS.find((lm) => lm.id === selectedChain.a);
    const ptB = MEDIAPIPE_33_LANDMARKS.find((lm) => lm.id === selectedChain.b);
    const ptC = MEDIAPIPE_33_LANDMARKS.find((lm) => lm.id === selectedChain.c);
    if (!ptA || !ptB || !ptC) return '0.0';

    const radians = Math.atan2(ptC.y - ptB.y, ptC.x - ptB.x) - Math.atan2(ptA.y - ptB.y, ptA.x - ptB.x);
    let degrees = Math.abs((radians * 180) / Math.PI);
    degrees = (degrees + 360) % 360;
    if (degrees > 180) degrees = 360 - degrees;
    return degrees.toFixed(1);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(THEME_TOKENS.obsidian);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0.8, 3.8);

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // 4. Skeleton Node & Line Mesh Creation
    const skeletonGroup = new THREE.Group();
    scene.add(skeletonGroup);

    // Landmark Nodes (Spheres)
    const nodeMeshes: THREE.Mesh[] = [];
    const nodeGeo = new THREE.SphereGeometry(0.035, 12, 12);

    MEDIAPIPE_33_LANDMARKS.forEach((lm) => {
      const isSelected = lm.id === selectedLandmarkId;
      const isChainNode = [selectedChain.a, selectedChain.b, selectedChain.c].includes(lm.id);

      let colorHex = 0x52525b; // Default muted zinc
      if (isSelected) colorHex = 0x38bdf8; // Electric Cyan highlight
      else if (isChainNode) colorHex = 0x34d399; // Emerald green joint chain

      const mat = new THREE.MeshBasicMaterial({ color: colorHex });
      const mesh = new THREE.Mesh(nodeGeo, mat);
      mesh.position.set(lm.x, lm.y, lm.z);
      skeletonGroup.add(mesh);
      nodeMeshes.push(mesh);
    });

    // Skeletal Connection Lines
    const connectionLines: THREE.Line[] = [];
    MEDIAPIPE_35_CONNECTIONS.forEach(([startId, endId]) => {
      const p1 = MEDIAPIPE_33_LANDMARKS.find((l) => l.id === startId);
      const p2 = MEDIAPIPE_33_LANDMARKS.find((l) => l.id === endId);
      if (!p1 || !p2) return;

      const isChainLine =
        (startId === selectedChain.a && endId === selectedChain.b) ||
        (startId === selectedChain.b && endId === selectedChain.a) ||
        (startId === selectedChain.b && endId === selectedChain.c) ||
        (startId === selectedChain.c && endId === selectedChain.b);

      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(p1.x, p1.y, p1.z),
        new THREE.Vector3(p2.x, p2.y, p2.z),
      ]);

      const lineMat = new THREE.LineBasicMaterial({
        color: isChainLine ? 0x38bdf8 : 0x27272a,
        linewidth: isChainLine ? 3 : 1,
        transparent: true,
        opacity: isChainLine ? 0.9 : 0.4,
      });

      const line = new THREE.Line(geo, lineMat);
      skeletonGroup.add(line);
      connectionLines.push(line);
    });

    // Simple Orbit Pointer Interaction
    let isDragging = false;
    let previousMouseX = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      previousMouseX = e.clientX;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMouseX;
      skeletonGroup.rotation.y += deltaX * 0.008;
      previousMouseX = e.clientX;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('pointerdown', handlePointerDown);
    domElem.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Render Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!prefersReducedMotion && !isDragging) {
        skeletonGroup.rotation.y += 0.002; // Slow aesthetic rotation
      }
      renderer.render(scene, camera);
    };
    animate();

    // Clean WebGL Resource Disposal on Unmount
    return () => {
      domElem.removeEventListener('pointerdown', handlePointerDown);
      domElem.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      nodeGeo.dispose();
      nodeMeshes.forEach((m) => (m.material as THREE.Material).dispose());
      connectionLines.forEach((l) => {
        l.geometry.dispose();
        (l.material as THREE.Material).dispose();
      });
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [selectedLandmarkId, selectedChainId, selectedChain.a, selectedChain.b, selectedChain.c]);

  return (
    <div className="w-full rounded-2xl bg-[#09090b] border border-white/10 p-4 sm:p-6 space-y-4 font-mono text-xs select-none">
      {/* Explorer Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-sky-400" />
          <h3 className="text-sm font-bold text-white tracking-tight">
            3D VISUALIZATION OF 33-LANDMARK POSE TOPOLOGY
          </h3>
        </div>
        <span className="px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/30 text-[10px] text-sky-300 font-bold">
          33 KEYPOINTS • 35 BONES
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* 3D WebGL Canvas Container */}
        <div className="lg:col-span-7 relative aspect-square sm:aspect-[4/3] w-full rounded-xl bg-black/60 border border-white/10 overflow-hidden group">
          <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

          {/* Canvas Drag Overlay Indicator */}
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] text-zinc-400 flex items-center gap-1.5 pointer-events-none">
            <RotateCcw className="w-3 h-3 text-sky-400" />
            <span>DRAG TO ROTATE SKELETON</span>
          </div>
        </div>

        {/* DOM Telemetry & Controls Panel */}
        <div className="lg:col-span-5 space-y-4">
          {/* Keyboard-Accessible Landmark Selector */}
          <div className="space-y-1.5 p-3 rounded-xl bg-white/[0.02] border border-white/10">
            <label htmlFor="landmark-select" className="text-[11px] font-bold text-sky-400 block uppercase">
              SELECT LANDMARK (0–32):
            </label>
            <select
              id="landmark-select"
              value={selectedLandmarkId}
              onChange={(e) => setSelectedLandmarkId(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-white/10 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              {MEDIAPIPE_33_LANDMARKS.map((lm) => (
                <option key={lm.id} value={lm.id}>
                  [{lm.id < 10 ? `0${lm.id}` : lm.id}] {lm.name} ({lm.category.toUpperCase()})
                </option>
              ))}
            </select>
          </div>

          {/* Selected Landmark Telemetry Card */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400 font-bold">SELECTED LANDMARK:</span>
              <span className="text-sky-300 font-bold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/30">
                ID #{selectedLandmark.id}
              </span>
            </div>
            <p className="text-sm font-bold text-white">{selectedLandmark.name}</p>

            <div className="space-y-1 text-[11px]">
              <span className="text-zinc-500 block uppercase font-bold">REPRESENTATIVE COORDINATES (X, Y, Z):</span>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-1.5 rounded bg-black/40 border border-white/5 text-zinc-300">
                  X: {selectedLandmark.x.toFixed(2)}
                </div>
                <div className="p-1.5 rounded bg-black/40 border border-white/5 text-zinc-300">
                  Y: {selectedLandmark.y.toFixed(2)}
                </div>
                <div className="p-1.5 rounded bg-black/40 border border-white/5 text-zinc-300">
                  Z: {selectedLandmark.z.toFixed(2)}
                </div>
              </div>
            </div>

            <div className="space-y-1 text-[11px] pt-2 border-t border-white/5">
              <span className="text-zinc-500 block uppercase font-bold">CONNECTED JOINTS:</span>
              <div className="flex flex-wrap gap-1.5">
                {connectedJointNames.map((name) => (
                  <span key={name} className="px-2 py-0.5 rounded bg-white/5 text-zinc-300 text-[10px]">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Joint Chain Angle Analysis (utils.py atan2 math) */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="space-y-1.5">
              <label htmlFor="chain-select" className="text-[11px] font-bold text-sky-400 block uppercase flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-sky-400" />
                <span>JOINT ANGLE CHAIN SELECTOR:</span>
              </label>
              <select
                id="chain-select"
                value={selectedChainId}
                onChange={(e) => setSelectedChainId(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-white/10 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                {JOINT_CHAINS.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="p-3 rounded-lg bg-black/40 border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-zinc-400">2D VECTOR-DIRECTION CALCULATION:</span>
                <span className="text-emerald-400 font-bold font-mono text-xs">
                  {calculateAtan2Angle()}°
                </span>
              </div>

              <div className="p-2 rounded bg-sky-950/30 border border-sky-500/20 text-[10px] text-sky-300 font-mono space-y-1">
                <div className="font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-sky-400" />
                  <span>SOURCE LOGIC: utils.py → calculate_angle()</span>
                </div>
                <code className="block text-zinc-300 text-[9.5px]">
                  atan2(y3-y2, x3-x2) - atan2(y1-y2, x1-x2) → degrees
                </code>
              </div>

              <span className="text-[9.5px] text-zinc-500 block italic">
                ILLUSTRATIVE CALCULATION derived from representative pose coordinates.
              </span>
            </div>
          </div>

          {/* Mandatory Data Integrity Disclaimer */}
          <div className="p-3 rounded-xl bg-sky-500/5 border border-sky-500/20 text-[10px] text-zinc-400 flex items-start gap-2">
            <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <span>
              <strong className="text-sky-300 block font-bold uppercase">REPRESENTATIVE LANDMARK DATA</strong>
              3D topology visualization for educational & architecture demonstration. Coordinates are representative model keypoints, not patient measurements.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
