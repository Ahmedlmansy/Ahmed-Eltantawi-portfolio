export function Lights() {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} />
      <directionalLight position={[-4, 2, -3]} intensity={0.4} color="#A9C1C7" />
    </>
  );
}
