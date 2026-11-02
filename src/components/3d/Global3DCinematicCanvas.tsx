import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Pure deterministic pseudo-random generator to avoid purity lint warnings
function createPRNG(seed = 1337) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// 1. Undulating 3D Cyber Wave Mesh (Luminous Particle Sea)
function CyberWaveParticles({ 
  scrollOffset, 
  mousePos 
}: { 
  scrollOffset: React.MutableRefObject<number>;
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  
  // 50 x 32 grid = 1600 wave particles
  const cols = 50;
  const rows = 32;
  const count = cols * rows;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const emerald = new THREE.Color('#00ff88');
    const cyan = new THREE.Color('#06b6d4');
    const purple = new THREE.Color('#a855f7');
    const gold = new THREE.Color('#f59e0b');

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const index = i * rows + j;
        const x = (i - cols / 2) * 1.15;
        const z = (j - rows / 2) * 1.15 - 4;
        const y = -6.5;

        pos[index * 3] = x;
        pos[index * 3 + 1] = y;
        pos[index * 3 + 2] = z;

        const ratio = (i + j) / (cols + rows);
        const color = ratio < 0.35 
          ? emerald.clone().lerp(cyan, ratio / 0.35) 
          : ratio < 0.7 
            ? cyan.clone().lerp(purple, (ratio - 0.35) / 0.35) 
            : purple.clone().lerp(gold, (ratio - 0.7) / 0.3);

        col[index * 3] = color.r;
        col[index * 3 + 1] = color.g;
        col[index * 3 + 2] = color.b;
      }
    }

    return [pos, col];
  }, [count, cols, rows]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const array = posAttr.array as Float32Array;

    const mx = mousePos.current.x * 2.5;
    const my = mousePos.current.y * 2.5;
    const scrollFactor = scrollOffset.current * 0.003;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const index = i * rows + j;
        const x = (i - cols / 2) * 1.15;
        const z = (j - rows / 2) * 1.15 - 4;

        // Wave interference equation with interactive mouse ripple
        const distToMouse = Math.sqrt((x - mx) * (x - mx) + (z - my) * (z - my));
        const mouseRipple = Math.sin(distToMouse * 0.9 - time * 2.5) * 0.45;
        const baseWave = Math.sin(x * 0.35 + time * 1.3) * Math.cos(z * 0.3 + time * 1.0) * 1.5;

        array[index * 3 + 1] = -6.5 + baseWave + mouseRipple - (scrollFactor % 3);
      }
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.16}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// 2. 3D Neural Constellation Network (Dynamic Lines connecting moving nodes)
const CONSTELLATION_NODE_COUNT = 55;
const CONSTELLATION_MAX_DIST = 6.2;
const CONSTELLATION_MAX_LINES = (CONSTELLATION_NODE_COUNT * (CONSTELLATION_NODE_COUNT - 1)) / 2;
const STATIC_LINE_POSITIONS = new Float32Array(CONSTELLATION_MAX_LINES * 6);
const STATIC_LINE_COLORS = new Float32Array(CONSTELLATION_MAX_LINES * 6);

function initConstellationNodes() {
  const prng = createPRNG(101);
  const list = [];
  for (let i = 0; i < CONSTELLATION_NODE_COUNT; i++) {
    list.push({
      x: (prng() - 0.5) * 45,
      y: (prng() - 0.5) * 50,
      z: (prng() - 0.5) * 20 - 6,
      vx: (prng() - 0.5) * 0.04,
      vy: (prng() - 0.5) * 0.04,
      vz: (prng() - 0.5) * 0.03,
    });
  }
  return list;
}

const STATIC_CONSTELLATION_NODES = initConstellationNodes();

function NeuralConstellationNet() {
  const linesMeshRef = useRef<THREE.LineSegments>(null);

  useFrame(() => {
    if (!linesMeshRef.current) return;

    const nodes = STATIC_CONSTELLATION_NODES;
    const linePositions = STATIC_LINE_POSITIONS;
    const lineColors = STATIC_LINE_COLORS;

    // Update node positions with boundary bounce
    for (let i = 0; i < CONSTELLATION_NODE_COUNT; i++) {
      const n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      n.z += n.vz;

      if (n.x < -24 || n.x > 24) n.vx *= -1;
      if (n.y < -28 || n.y > 28) n.vy *= -1;
      if (n.z < -18 || n.z > 2) n.vz *= -1;
    }

    // Connect close nodes with glowing line segments
    let lineIndex = 0;
    for (let i = 0; i < CONSTELLATION_NODE_COUNT; i++) {
      for (let j = i + 1; j < CONSTELLATION_NODE_COUNT; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dz = nodes[i].z - nodes[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONSTELLATION_MAX_DIST) {
          const alpha = 1 - dist / CONSTELLATION_MAX_DIST;
          const posIdx = lineIndex * 6;

          linePositions[posIdx] = nodes[i].x;
          linePositions[posIdx + 1] = nodes[i].y;
          linePositions[posIdx + 2] = nodes[i].z;

          linePositions[posIdx + 3] = nodes[j].x;
          linePositions[posIdx + 4] = nodes[j].y;
          linePositions[posIdx + 5] = nodes[j].z;

          // Color: glowing cyan/emerald with proximity brightness
          const r = 0;
          const g = 0.95 * alpha;
          const b = 0.65 * alpha;

          lineColors[posIdx] = r;
          lineColors[posIdx + 1] = g;
          lineColors[posIdx + 2] = b;

          lineColors[posIdx + 3] = r;
          lineColors[posIdx + 4] = g;
          lineColors[posIdx + 5] = b;

          lineIndex++;
        }
      }
    }

    const geo = linesMeshRef.current.geometry;
    geo.attributes.position.needsUpdate = true;
    geo.attributes.color.needsUpdate = true;
    geo.setDrawRange(0, lineIndex * 2);
  });

  return (
    <lineSegments ref={linesMeshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[STATIC_LINE_POSITIONS, 3]} />
        <bufferAttribute attach="attributes-color" args={[STATIC_LINE_COLORS, 3]} />
      </bufferGeometry>
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        linewidth={1}
      />
    </lineSegments>
  );
}

// 3. Ascending 3D Quantum DNA Double Helix Spiral
function QuantumHelixVortex() {
  const pointsRef = useRef<THREE.Points>(null);
  const helixGroupRef = useRef<THREE.Group>(null);
  const count = 220;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const emerald = new THREE.Color('#00ff88');
    const purple = new THREE.Color('#a855f7');

    for (let i = 0; i < count; i++) {
      const strand = i % 2 === 0 ? 0 : Math.PI;
      const angle = (i * 0.18) + strand;
      const radius = 2.4;
      const y = (i * 0.28) - 28;

      pos[i * 3] = Math.cos(angle) * radius + 14; // Positioned on right margin
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(angle) * radius - 11;

      const chosenColor = strand === 0 ? emerald : purple;
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (helixGroupRef.current) {
      helixGroupRef.current.rotation.y += delta * 0.2;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group ref={helixGroupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.18}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

// 4. Warp Shooting Meteor Streaks
function ShootingMeteorStreaks() {
  const streakCount = 14;
  const linesRef = useRef<THREE.LineSegments>(null);

  const [positions, speeds] = useMemo(() => {
    const prng = createPRNG(202);
    const pos = new Float32Array(streakCount * 6);
    const spd = new Float32Array(streakCount);

    for (let i = 0; i < streakCount; i++) {
      const x = (prng() - 0.5) * 50;
      const y = prng() * 40 - 10;
      const z = (prng() - 0.5) * 20 - 8;
      const len = 3.5 + prng() * 3.0;

      pos[i * 6] = x;
      pos[i * 6 + 1] = y;
      pos[i * 6 + 2] = z;

      pos[i * 6 + 3] = x - len * 0.8;
      pos[i * 6 + 4] = y - len * 0.5;
      pos[i * 6 + 5] = z;

      spd[i] = 0.25 + prng() * 0.35;
    }

    return [pos, spd];
  }, [streakCount]);

  useFrame(() => {
    if (!linesRef.current) return;
    const posAttr = linesRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const array = posAttr.array as Float32Array;

    for (let i = 0; i < streakCount; i++) {
      const idx = i * 6;
      const s = speeds[i];

      array[idx] -= s * 1.2;
      array[idx + 1] -= s * 0.8;
      array[idx + 3] -= s * 1.2;
      array[idx + 4] -= s * 0.8;

      // Reset when exiting boundary
      if (array[idx] < -30 || array[idx + 1] < -35) {
        const newX = 25 + ((i * 7) % 10);
        const newY = 25 + ((i * 13) % 15);
        const len = 3.5 + ((i * 3) % 3);

        array[idx] = newX;
        array[idx + 1] = newY;
        array[idx + 3] = newX - len * 0.8;
        array[idx + 4] = newY - len * 0.5;
      }
    }
    posAttr.needsUpdate = true;
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial
        color="#00ff88"
        transparent
        opacity={0.45}
        blending={THREE.AdditiveBlending}
        linewidth={1}
      />
    </lineSegments>
  );
}

// 5. Sparkling Galaxy Starfield Background
function DeepSpaceStars() {
  const count = 850;
  const starsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const prng = createPRNG(303);
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#00ff88'),
      new THREE.Color('#06b6d4'),
      new THREE.Color('#a855f7'),
      new THREE.Color('#ffffff'),
      new THREE.Color('#f59e0b')
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (prng() - 0.5) * 65;
      pos[i * 3 + 1] = (prng() - 0.5) * 90;
      pos[i * 3 + 2] = (prng() - 0.5) * 45 - 9;

      const c = palette[Math.floor(prng() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.025;
      starsRef.current.rotation.x += delta * 0.012;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// 6. Floating 3D Geometric Crystal Totems (in background margins, never over content)
function FloatingBackgroundTotems({ scrollOffset }: { scrollOffset: React.MutableRefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const knotRef = useRef<THREE.Mesh>(null);
  const gyro1 = useRef<THREE.Mesh>(null);
  const gyro2 = useRef<THREE.Mesh>(null);
  const icoRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);
  const dodecaRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.position.y = -scrollOffset.current * 0.005;
    }
    if (knotRef.current) {
      knotRef.current.rotation.x += delta * 0.28;
      knotRef.current.rotation.y += delta * 0.38;
    }
    if (gyro1.current && gyro2.current) {
      gyro1.current.rotation.x += delta * 0.42;
      gyro1.current.rotation.y += delta * 0.32;
      gyro2.current.rotation.y -= delta * 0.55;
      gyro2.current.rotation.z += delta * 0.35;
    }
    if (icoRef.current) {
      icoRef.current.rotation.y += delta * 0.35;
      icoRef.current.rotation.z += delta * 0.25;
    }
    if (octaRef.current) {
      octaRef.current.rotation.x -= delta * 0.38;
      octaRef.current.rotation.y += delta * 0.42;
    }
    if (dodecaRef.current) {
      dodecaRef.current.rotation.y += delta * 0.3;
      dodecaRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Upper-Right: Glowing 3D Torus Knot */}
      <Float speed={2.0} rotationIntensity={1.2} floatIntensity={1.4} position={[11, 5, -8]}>
        <mesh ref={knotRef} scale={0.95}>
          <torusKnotGeometry args={[1.5, 0.24, 110, 16]} />
          <meshStandardMaterial
            color="#00ff88"
            emissive="#00ff88"
            emissiveIntensity={0.9}
            wireframe
            transparent
            opacity={0.5}
          />
        </mesh>
      </Float>

      {/* Mid-Left: Dual-Axis Gyroscope Rings */}
      <Float speed={2.4} rotationIntensity={1.6} floatIntensity={1.6} position={[-12, -5, -9]}>
        <group>
          <mesh ref={gyro1} scale={1.25}>
            <torusGeometry args={[2.0, 0.045, 16, 64]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#06b6d4"
              emissiveIntensity={0.95}
              wireframe
              transparent
              opacity={0.58}
            />
          </mesh>
          <mesh ref={gyro2} scale={1.05}>
            <torusGeometry args={[1.5, 0.045, 16, 64]} />
            <meshStandardMaterial
              color="#a855f7"
              emissive="#a855f7"
              emissiveIntensity={0.95}
              wireframe
              transparent
              opacity={0.58}
            />
          </mesh>
        </group>
      </Float>

      {/* Mid-Right: 3D Faceted Icosahedron Gem */}
      <Float speed={1.8} rotationIntensity={1.3} floatIntensity={1.5} position={[12, -17, -10]}>
        <mesh ref={icoRef} scale={1.35}>
          <icosahedronGeometry args={[1.8, 1]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#06b6d4"
            emissiveIntensity={0.8}
            wireframe
            transparent
            opacity={0.45}
          />
        </mesh>
      </Float>

      {/* Lower-Left: Stellar Octahedron Prism */}
      <Float speed={2.2} rotationIntensity={1.4} floatIntensity={1.8} position={[-11, -30, -9]}>
        <mesh ref={octaRef} scale={1.25}>
          <octahedronGeometry args={[1.7, 0]} />
          <meshStandardMaterial
            color="#f59e0b"
            emissive="#f59e0b"
            emissiveIntensity={0.85}
            wireframe
            transparent
            opacity={0.5}
          />
        </mesh>
      </Float>

      {/* Deep Space Dodecahedron */}
      <Float speed={1.7} rotationIntensity={1.1} floatIntensity={1.3} position={[10, -42, -10]}>
        <mesh ref={dodecaRef} scale={1.2}>
          <dodecahedronGeometry args={[1.6, 0]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#ec4899"
            emissiveIntensity={0.8}
            wireframe
            transparent
            opacity={0.45}
          />
        </mesh>
      </Float>
    </group>
  );
}

// 7. Dynamic Moving 3D Point Lights
function DynamicCinematicLights() {
  const light1 = useRef<THREE.PointLight>(null);
  const light2 = useRef<THREE.PointLight>(null);
  const light3 = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (light1.current) {
      light1.current.position.x = Math.sin(t * 0.75) * 14;
      light1.current.position.y = Math.cos(t * 0.55) * 11;
    }
    if (light2.current) {
      light2.current.position.x = Math.cos(t * 0.65) * -13;
      light2.current.position.y = Math.sin(t * 0.85) * -9;
    }
    if (light3.current) {
      light3.current.position.z = Math.sin(t * 0.5) * 5 + 8;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight ref={light1} position={[12, 8, 6]} intensity={2.5} color="#00ff88" distance={35} />
      <pointLight ref={light2} position={[-12, -7, 6]} intensity={2.0} color="#06b6d4" distance={35} />
      <pointLight ref={light3} position={[0, 4, 10]} intensity={1.5} color="#a855f7" distance={30} />
      <pointLight position={[5, -15, 8]} intensity={1.2} color="#f59e0b" distance={25} />
    </>
  );
}

// 8. Camera Parallax Controller (Damped tilt with mouse & scroll)
function CameraParallaxController({ 
  scrollOffset, 
  mousePos 
}: { 
  scrollOffset: React.MutableRefObject<number>;
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
}) {
  useFrame((state) => {
    const targetX = mousePos.current.x * 2.0;
    const targetY = -mousePos.current.y * 1.6 - (scrollOffset.current * 0.0007);

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.045);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.045);
    state.camera.lookAt(0, 0, -10);
  });

  return null;
}

export const Global3DCinematicCanvas: React.FC = () => {
  const scrollOffset = useRef<number>(0);
  const mousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      scrollOffset.current = window.scrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Atmospheric ambient color blooms */}
      <div className="absolute top-1/6 left-1/5 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/6 w-[750px] h-[750px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/6 left-1/4 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[170px] pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ 
          antialias: true, 
          alpha: true, 
          powerPreference: 'high-performance'
        }}
        dpr={[1, 1.5]}
        className="w-full h-full"
      >
        <DynamicCinematicLights />
        <DeepSpaceStars />
        <CyberWaveParticles scrollOffset={scrollOffset} mousePos={mousePos} />
        <NeuralConstellationNet />
        <QuantumHelixVortex />
        <ShootingMeteorStreaks />
        <FloatingBackgroundTotems scrollOffset={scrollOffset} />
        <CameraParallaxController scrollOffset={scrollOffset} mousePos={mousePos} />
      </Canvas>
    </div>
  );
};
