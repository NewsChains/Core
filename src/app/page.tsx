// // import Image from "next/image";
// import ThreeScene from "./three";

// // export default function Home() {
// //   return (
// //     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
// //       a
// //     </div>
// //   );
// // }

// const Home: React.FC = () => {
//   return (
//     <div>
//       <ThreeScene />
//   );
// };

// export default Home;
import ParticleScene from '@/components/ParticleScene';

const Home = () => {
  return (
    <div>
      <ParticleScene />
    </div>
  );
};

export default Home;