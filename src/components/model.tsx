import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Mesh, MeshStandardMaterial, TextureLoader } from "three";
import { Center } from "@react-three/drei";

interface SingleModelProps {
  model: string;
  color: string;
  metallic: string;
  roughness: string;
  transmittance: string;
  scale: number;
}

const SingleModel = ({
  model,
  color,
  metallic,
  roughness,
  transmittance,
  scale,
}: SingleModelProps) => {
  const obj = useLoader(OBJLoader, model);
  const colorMap = useLoader(TextureLoader, color);
  const metallicMap = useLoader(TextureLoader, metallic);
  const roughnessMap = useLoader(TextureLoader, roughness);
  const transmittanceMap = useLoader(TextureLoader, transmittance);

  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0012;
      meshRef.current.rotation.x -= 0.0008;
      meshRef.current.rotation.z += 0.0006;
    }
  });

  obj.traverse((child) => {
    if ((child as Mesh).isMesh) {
      (child as Mesh).material = new MeshStandardMaterial({
        map: colorMap,
        metalnessMap: metallicMap,
        roughnessMap: roughnessMap,
        alphaMap: transmittanceMap,
        transparent: false,
      });
    }
  });

  return (
    <Center>
      <primitive
        ref={meshRef}
        object={obj}
        scale={[0.005 * scale, 0.005 * scale, 0.005 * scale]}
      />
    </Center>
  );
};

const Model = ({
  model,
  color,
  metallic,
  roughness,
  transmittance,
  scale,
}: SingleModelProps) => {
  return (
    <Canvas className="h-full max-w-40">
      <ambientLight intensity={0.7} />
      <directionalLight position={[0, 2, 5]} />
      <SingleModel
        model={model}
        color={color}
        metallic={metallic}
        roughness={roughness}
        transmittance={transmittance}
        scale={scale}
      />
    </Canvas>
  );
};

export default Model;
