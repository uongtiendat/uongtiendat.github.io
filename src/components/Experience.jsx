import {
  CameraControls,
  Dodecahedron,
  Environment,
  Grid,
  MeshDistortMaterial,
  RenderTexture,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useAtom } from "jotai";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { slideAtom } from "./Overlay";
import { Scene } from "./Scene";

export const scenes = [
  {
    path: "models/dat-logo.glb",
    mainColor: "#f9c0ff",
    name: "About Me",
    description:
      "\nHi, i'm Dat, a Motion Graphic Designer and 3D Generalist from Ho Chi Minh, Vietnam.\nI have more than four years of experience creating digital arts \nthat included two years working in an Advertising Agency specified in producing Digital and Social Media creative campaigns.\nYou can find my art works in the next slide.",
    price: "",
    range: "",},
  {
    path: "models/computer2.glb",
    mainColor: "#c0ffe1",
    name: "Works & Portfolio",
    description: "",
    price: "Commercials",
    range: "Art Gallery",
  },
  {
    path: "models/card.glb",
    mainColor: "#ffdec0",
    name: "Contact",
    description: "Feel free to connect",
    price: "",
    range: "",
  },
];

const CameraHandler = ({ slideDistance }) => {
  const viewport = useThree((state) => state.viewport);
  const cameraControls = useRef();
  const [slide] = useAtom(slideAtom);
  const lastSlide = useRef(0);

  const { dollyDistance } = useControls({
    dollyDistance: {
      value: 10,
      min: 0,
      max: 50,
    },
  });

  const moveToSlide = async () => {
    await cameraControls.current.setLookAt(
      lastSlide.current * (viewport.width + slideDistance),
      3,
      dollyDistance,
      lastSlide.current * (viewport.width + slideDistance),
      0,
      0,
      true
    );
    await cameraControls.current.setLookAt(
      (slide + 1) * (viewport.width + slideDistance),
      1,
      dollyDistance,
      slide * (viewport.width + slideDistance),
      0,
      0,
      true
    );

    await cameraControls.current.setLookAt(
      slide * (viewport.width + slideDistance),
      0,
      5,
      slide * (viewport.width + slideDistance),
      0,
      0,
      true
    );
  };

  useEffect(() => {
    // Used to reset the camera position when the viewport changes
    const resetTimeout = setTimeout(() => {
      cameraControls.current.setLookAt(
        slide * (viewport.width + slideDistance),
        0,
        5,
        slide * (viewport.width + slideDistance),
        0,
        0
      );
    }, 200);
    return () => clearTimeout(resetTimeout);
  }, [viewport]);

  useEffect(() => {
    if (lastSlide.current === slide) {
      return;
    }
    moveToSlide();
    lastSlide.current = slide;
  }, [slide]);
  return (
    <CameraControls
      ref={cameraControls}
      touches={{
        one: 0,
        two: 0,
        three: 0,
      }}
      mouseButtons={{
        left: 0,
        middle: 0,
        right: 0,
      }}
    />
  );
};

export const Experience = () => {
  const viewport = useThree((state) => state.viewport);
  const { slideDistance } = useControls({
    slideDistance: {
      value: 1,
      min: 0,
      max: 10,
    },
  });
  return (
    <>
      <ambientLight intensity={0.2} />
      <Environment preset={"city"} />
      <CameraHandler slideDistance={slideDistance} />
      {/* MAIN WORLD */}
      {/*<group>
        <mesh position-y={viewport.height / 2 + 1.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial color={scenes[0].mainColor} speed={3} />
        </mesh>

        <mesh
          position-x={viewport.width + slideDistance}
          position-y={viewport.height / 2 + 1.5}
        >
          <boxGeometry />
          <MeshDistortMaterial color={scenes[1].mainColor} speed={3} />
        </mesh>

        <Dodecahedron
          position-x={2 * (viewport.width + slideDistance)}
          position-y={viewport.height / 2 + 1.5}
        >
          <MeshDistortMaterial color={scenes[2].mainColor} speed={3} />
        </Dodecahedron>
        </group>*/}

      <Grid
        position-y={-viewport.height / 2}
        sectionSize={1}
        sectionColor={"#2a2356"}
        sectionThickness={1}
        cellSize={0.5}
        cellColor={"#fe00fe"}
        cellThickness={0.6}
        infiniteGrid
        fadeDistance={50}
        fadeStrength={5}
      />
      {scenes.map((scene, index) => (
        <mesh
          key={index}
          position={[index * (viewport.width + slideDistance), 0, 0]}
        >
          <planeGeometry args={[viewport.width, viewport.height]} />
          <meshBasicMaterial toneMapped={false}>
            <RenderTexture attach="map">
              <Scene {...scene} />
            </RenderTexture>
          </meshBasicMaterial>
        </mesh>
      ))}
    </>
  );
};
