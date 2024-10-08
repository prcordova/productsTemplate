import Image from "next/image";

export const Caroussel: React.FC = () => {
  return (
    <div className="relative w-full max-h-[400px] flex justify-center items-center">
      <Image
        src="https://via.placeholder.com/300"
        width={400}
        height={400}
        alt="Apresentação"
        className="max-h-[300px] w-full sm:w-[80%]"
      />
      {/* Ou, se preferir, incorpore um vídeo do YouTube */}
      {/* <iframe src="link-do-video" /> */}
    </div>
  );
};
