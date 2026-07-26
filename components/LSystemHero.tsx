"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import {
  BufferAttribute,
  BufferGeometry,
  Color,
  LineSegments as ThreeLineSegments,
} from "three";
import { defaultTreeConfig, generate, interpret } from "@/lib/lsystem";

function Tree() {
  const { geometry, totalVertices } = useMemo(() => {
    const sequence = generate(defaultTreeConfig);
    const segments = interpret(sequence, defaultTreeConfig);

    const positions = new Float32Array(segments.length * 6);
    const colors = new Float32Array(segments.length * 6);

    const trunkColor = new Color("#3a4a2e");
    const tipColor = new Color("#a9e070");
    const tmpColor = new Color();

    let maxDepth = 0;
    for (const seg of segments) {
      if (seg.depth > maxDepth) maxDepth = seg.depth;
    }
    const depthDivisor = Math.max(maxDepth, 1);

    segments.forEach((seg, i) => {
      const idx = i * 6;
      positions[idx + 0] = seg.start.x;
      positions[idx + 1] = seg.start.y;
      positions[idx + 2] = seg.start.z;
      positions[idx + 3] = seg.end.x;
      positions[idx + 4] = seg.end.y;
      positions[idx + 5] = seg.end.z;

      const t = seg.depth / depthDivisor;
      tmpColor.copy(trunkColor).lerp(tipColor, t);
      colors[idx + 0] = tmpColor.r;
      colors[idx + 1] = tmpColor.g;
      colors[idx + 2] = tmpColor.b;
      colors[idx + 3] = tmpColor.r;
      colors[idx + 4] = tmpColor.g;
      colors[idx + 5] = tmpColor.b;
    });

    const geom = new BufferGeometry();
    geom.setAttribute("position", new BufferAttribute(positions, 3));
    geom.setAttribute("color", new BufferAttribute(colors, 3));
    geom.setDrawRange(0, 0);

    return { geometry: geom, totalVertices: segments.length * 2 };
  }, []);

  const linesRef = useRef<ThreeLineSegments>(null);
  const startTimeRef = useRef<number | null>(null);
  const growDurationSeconds = 5.0;

  useFrame(({ clock }) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = clock.elapsedTime;
    }
    const elapsed = clock.elapsedTime - startTimeRef.current;
    const t = Math.min(elapsed / growDurationSeconds, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const visible = Math.floor(totalVertices * eased);
    geometry.setDrawRange(0, visible - (visible % 2));

    if (linesRef.current) {
      linesRef.current.rotation.y = clock.elapsedTime * 0.12;
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry} position={[0, -1.5, 0]}>
      <lineBasicMaterial vertexColors transparent opacity={0.9} />
    </lineSegments>
  );
}

export function LSystemHero() {
  return (
    <Canvas
      camera={{ position: [0, 0.8, 4], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
    >
      <color attach="background" args={["#0a0c0f"]} />
      <fog attach="fog" args={["#0a0c0f", 4, 10]} />
      <Tree />
    </Canvas>
  );
}
