import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.2}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const OrbitingRing = ({ radius, speed, color }: { radius: number; speed: number; color: string }) => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshStandardMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
};

const FloatingParticle = ({ position, delay }: { position: [number, number, number]; delay: number }) => {
  const particleRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (particleRef.current) {
      const time = state.clock.elapsedTime + delay;
      particleRef.current.position.y = position[1] + Math.sin(time) * 0.3;
      particleRef.current.position.x = position[0] + Math.cos(time * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={particleRef} position={position}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
    </mesh>
  );
};

export const Hero3DElement = () => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] pointer-events-none opacity-80">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
          
          <AnimatedSphere />
          
          <OrbitingRing radius={3} speed={0.3} color="#3b82f6" />
          <OrbitingRing radius={3.3} speed={-0.2} color="#8b5cf6" />
          
          <FloatingParticle position={[2, 1.5, 0]} delay={0} />
          <FloatingParticle position={[-2, -1, 1]} delay={1} />
          <FloatingParticle position={[1.5, -1.5, -1]} delay={2} />
          <FloatingParticle position={[-1.5, 1, 0.5]} delay={3} />
        </Suspense>
      </Canvas>
    </div>
  );
};
